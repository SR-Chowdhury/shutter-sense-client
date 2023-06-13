import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import useAuth from '../../../Hooks/useAuth';
import userImg from '../../../assets/user.png';
import './Navbar.css';
import Swal from 'sweetalert2';
import useCheckUser from '../../../Hooks/useCheckUser';
import useCart from '../../../Hooks/useCart';

const Navbar = () => {

    // const isAdmin = true;
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const [userRole] = useCheckUser();
    const [carts] = useCart(); 

    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? 'white' : '',
            fontWeight: isActive ? 'bold' : 'normal',
            backgroundColor: isActive ? '#f58025' : ''
        };
    }

    const cartClass = userRole?.role === 'admin' || userRole?.role === 'instructor' ? 'hidden' : 'indicator me-5';

    const navOptions = <>
        <li><NavLink to="/" style={navLinkStyles}>Home</NavLink></li>
        <li><NavLink to="/instructors" style={navLinkStyles}>Instructors</NavLink></li>
        <li><NavLink to="/classes" style={navLinkStyles}>Classes</NavLink></li>
        { userRole?.role === 'admin' && <li><NavLink to="/dashboard/adminhome" style={navLinkStyles}>Dashboard</NavLink></li> }
        { userRole?.role === 'instructor' && <li><NavLink to="/dashboard/instructorhome" style={navLinkStyles}>Dashboard</NavLink></li> }
        { userRole?.role === 'student' && <li><NavLink to="/dashboard/studenthome" style={navLinkStyles}>Dashboard</NavLink></li> }
    </>

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Logout',
                    showConfirmButton: false,
                    timer: 500
                })
                navigate('/');
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div className='navSection fixed z-10 w-full text-white bg-[rgba(0,0,0,0.5)]'>
            <div className="navbar screenSize ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu headerNav menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Shutter Sense</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="dropdown dropdown-end">
                        <div className={cartClass}>
                            <Link to={'/dashboard/selectedclass'}>
                                <FaCartPlus className="h-5 w-5" /><span className="badge badge-sm indicator-item">{carts?.length || 0}</span>
                            </Link>
                        </div>
                        <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user?.photoURL ?
                                        <img src={user?.photoURL} /> :
                                        <img src={userImg} />
                                }
                            </div>
                        </label>
                        <ul tabIndex={1} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    {
                                        user && <span className='font-bold'>{user?.displayName}</span>
                                    }
                                </a>
                            </li>
                            {
                                user ?
                                    <>
                                        <li><Link onClick={handleLogout}>Logout</Link></li>
                                    </>
                                    :
                                    <>
                                        <li><Link to={'/login'}>Login</Link></li>
                                        <li><Link to={'/register'}>Register</Link></li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;