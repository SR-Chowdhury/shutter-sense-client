import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useCheckUser from '../Hooks/useCheckUser';
import { FaCartArrowDown, FaChalkboardTeacher, FaFolderOpen, FaFolderPlus, FaGraduationCap, FaHome, FaHouseUser, FaLandmark, FaMoneyCheckAlt, FaSchool, FaUserCog } from "react-icons/fa";

const DashboardLayout = () => {

    const [userRole] = useCheckUser();
    const isGeneralUser = (userRole?.role === undefined) || (userRole?.role === 'student');

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btnPrimary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side text-white bg-[#f58025]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 uppercase">
                        {
                            userRole?.role === 'admin' &&
                            <>
                                <li><NavLink to="/dashboard/adminhome"><FaHouseUser className='text-3xl'/> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/manageclass"><FaSchool className='text-3xl'/> Manage Classes</NavLink></li>
                                <li><NavLink to="/dashboard/manageusers"><FaUserCog className='text-3xl'/> Manage Users</NavLink></li>
                            </>
                        }

                        {
                            userRole?.role === 'instructor' &&
                            <>
                                <li><NavLink to="/dashboard/instructorhome"><FaHouseUser className='text-3xl'/> Instructor Home</NavLink></li>
                                <li><NavLink to="/dashboard/addclass"><FaFolderPlus className='text-3xl'/> Add a Class</NavLink></li>
                                <li><NavLink to="/dashboard/instructor-class"><FaFolderOpen className='text-3xl'/> My Classes</NavLink></li>
                            </>
                        }

                        {
                            isGeneralUser &&
                            <>
                                <li><NavLink to="/dashboard/studenthome"><FaHouseUser className='text-3xl'/> Student Home</NavLink></li>
                                <li><NavLink to="/dashboard/selectedclass"><FaCartArrowDown className='text-3xl'/> My Selected Class</NavLink></li>
                                <li><NavLink to="/dashboard/myenrolledclass"><FaGraduationCap className='text-3xl'/> My enrolled class</NavLink></li>
                                <li><NavLink to="/dashboard/paymenthistory"><FaMoneyCheckAlt className='text-3xl'/> Payment History</NavLink></li>
                            </>
                        }

                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome className='text-3xl'/> Home</NavLink></li>
                        <li><NavLink to="/instructors"><FaChalkboardTeacher className='text-3xl'/> Instructors</NavLink></li>
                        <li><NavLink to="/classes"><FaLandmark className='text-3xl'/> Classes</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;