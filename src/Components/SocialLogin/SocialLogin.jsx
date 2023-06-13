import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, } from "react-icons/fa";
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const SocialLogin = () => {

    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, role: "student" }
                fetch('https://shutter-sense-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            title: 'Successfully Loge in',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                        navigate(from, { replace: true })
                    })
                    .catch(err => console.log(err.message))
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <div className="text-center pb-5">
                <Link><button onClick={handleGoogleSignIn} className='rounded-full border border-slate-900 p-3'><FaGoogle /> </button></Link>
            </div>
        </div>
    );
};

export default SocialLogin;