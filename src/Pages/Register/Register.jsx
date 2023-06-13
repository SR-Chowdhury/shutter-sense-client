import React, { useState } from 'react';
import ReactHelmet from '../../Components/ReactHelmet/ReactHelmet';
import regiImg from '../../assets/gif/register.gif';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Register = () => {

    const [error, setError] = useState();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, logOut } = useAuth();
    const navigate = useNavigate();


    const onSubmit = data => {
        if (data.password !== data.confirm_password) {
            setError('Password Did not match!');
        } else {
            setError('');
        }
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, role: "student" }
                        fetch('https://shutter-sense-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.insertedId) {
                                    Swal.fire({
                                        title: 'Successfully User Created!',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    })
                                    setError('');
                                    reset();
                                    logOut()
                                        .then(() => navigate('/login'))
                                }
                            })
                            .catch(err => console.log(err.message))
                    })
                    .catch(err => console.log(err.message))
            })
            .catch(err => setError(err.message))
    }

    return (
        <div>
            <ReactHelmet title={'Register'} />
            <div className='pt-24'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex justify-between items-center">
                        <div className="w-1/2 text-center lg:text-left">
                            <div>
                                <img src={regiImg} alt="Register Image" />
                            </div>
                        </div>
                        <div className="w-1/2 card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                                <h1 className='text-3xl text-center font-bold'>Register Now!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className='label-text-alt ms-1 mt-2 text-red-600'>Name field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photo", { required: true })} name="photo" placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photo && <span className='label-text-alt ms-1 mt-2 text-red-600'>Photo URL is required</span>}
                                </div>
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
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} name='password' placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <span className='label-text-alt ms-1 mt-2 text-red-600'>Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className='label-text-alt ms-1 mt-2 text-red-600'>Password length must be more than six characters</span>}
                                    {errors.password?.type === 'maxLength' && <span className='label-text-alt ms-1 mt-2 text-red-600'>Password length can not be more than twenty characters</span>}
                                    {errors.password?.type === 'pattern' && <span className='label-text-alt ms-1 mt-2 text-red-600'>Password must have one uppercase one lowercase one number an one special chracter</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confrim Password</span>
                                    </label>
                                    <input type="password" {...register("confirm_password", { required: true })} name='confirm_password' placeholder="********" className="input input-bordered" />
                                    {errors.confirm_password && <span className='label-text-alt ms-1 mt-2 text-red-600'>Confirm Password field is required</span>}
                                    {
                                        error && <span className='label-text-alt ms-1 mt-2 text-red-600'>{error}</span>
                                    }
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn">Register</button>
                                </div>
                                <p className='text-center'>Already Have an Account? <Link to="/login" style={{ color: 'green' }}>Login</Link></p>
                            </form>
                            <SocialLogin/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;