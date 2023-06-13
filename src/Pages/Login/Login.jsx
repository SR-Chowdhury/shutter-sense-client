import React, { useEffect, useState } from 'react';
import ReactHelmet from '../../Components/ReactHelmet/ReactHelmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import loginImg from '../../assets/gif/login.gif';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    const { singIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {

        const { email, password } = data;
        if (password.length < 6) {
            setError('Password length at least 6 characters');
        }

        singIn(email, password)
            .then(result => {
                Swal.fire({
                    title: 'Successfully Log in',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                setError('');
                navigate(from, { replace: true });
            })
            .catch(err => setError(err.message))
    }
    return (
        <div>
            <ReactHelmet title={'Login'} />
            <div className='pt-10'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex justify-between items-center gap-10">
                        <div className="w-1/2 card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                                <h1 className='text-3xl text-center font-bold'>Login Now!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='label-text-alt ms-1 mt-2 text-red-600'>Email field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true, minLength: 6 })} name='password' placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <span className='label-text-alt ms-1 mt-2 text-red-600'>Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className='label-text-alt ms-1 mt-2 text-red-600'>Password length must be more than six characters</span>}
                                </div>
                                {
                                    error && <span className='label-text-alt ms-1 mt-2 text-red-600'>{error}</span>
                                }
                                <div className="form-control mt-6">
                                    <button className="btn">Login</button>
                                </div>
                                <p className='text-center'>New Here? <Link to="/register" style={{ color: 'green' }}>Register Now</Link></p>
                            </form>
                            <SocialLogin/>
                        </div>
                        <div className="w-1/2 text-center lg:text-left">
                            <div>
                                <img src={loginImg} alt="Login Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;