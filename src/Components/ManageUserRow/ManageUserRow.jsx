import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageUserRow = ({ i, item, refetch }) => {

    const { _id, name, email } = item;

    const handleInstructor = (item) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make Instructor!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://shutter-sense-server.vercel.app/manageusers/instructor/${item._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                title: `${item.name} is now Instructor`,
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                },
                                timer: 1500
                            })
                        }
                    })
                    .catch(err => console.log(err.message))
            }
        })
    }

    const handleAdmin = (item) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make Instructor!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://shutter-sense-server.vercel.app/manageusers/admin/${item._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                title: `${item.name} is now Admin`,
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                },
                                timer: 1500
                            })
                        }
                    })
                    .catch(err => console.log(err.message))
            }
        })
    }

    return (
        <tr>
            <td>{i + 1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{item?.role ? item?.role : 'student'}</td>
            {
                item?.role === 'instructor' &&
                <td>
                    <Link><button disabled className='btn btnPrimary me-2'>Make Instructor</button></Link>
                    <Link><button onClick={() => handleAdmin(item)} className='btn btnPrimary'>Make Admin</button></Link>
                </td>
            }
            {
                item?.role === 'admin' &&
                <td>
                    <Link><button onClick={() => handleInstructor(item)} className='btn btnPrimary me-2'>Make Instructor</button></Link>
                    <Link><button disabled className='btn btnPrimary'>Make Admin</button></Link>
                </td>
            }
            {
                item?.role === "student" &&
                <td>
                    <Link><button onClick={() => handleInstructor(item)} className='btn btnPrimary me-2'>Make Instructor</button></Link>
                    <Link><button onClick={() => handleAdmin(item)} className='btn btnPrimary'>Make Admin</button></Link>
                </td>
            }
        </tr>
    );
};

export default ManageUserRow;