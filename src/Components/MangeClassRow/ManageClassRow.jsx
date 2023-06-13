import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageClassRow = ({ i, item, refetch }) => {

    const { _id, class_image, class_name, ins_name, ins_email, available_seats, price, status } = item;

    // console.log(Array.isArray(item));

    const handleApprove = (item) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Approve!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://shutter-sense-server.vercel.app/manageclass/approve/${item._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                title: `${item.class_name} is now Approved`,
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

    const handleDeny = (item) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Deny!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://shutter-sense-server.vercel.app/manageclass/deny/${item._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                title: `${item.class_name} is Denied`,
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
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={class_image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{class_name}</td>
            <td>{ins_name}</td>
            <td>{ins_email}</td>
            <td>{available_seats}</td>
            <td>{price}</td>
            <td>{status}</td>
            {
                status === 'approved' &&
                <th>
                    <Link><button disabled className='btn btn-sm me-2 bg-green-400'>Approve</button></Link>
                    <Link><button disabled className='btn btn-sm me-2 bg-red-500'>Deny</button></Link>
                    <Link to={`/dashboard/feedback/${item._id}`}><button className='btn btn-sm bg-yellow-400'>Feedback</button></Link>
                </th>
            }
            {
                status === 'denied' &&
                <th>
                    <Link><button disabled className='btn btn-sm me-2 bg-green-400'>Approve</button></Link>
                    <Link><button disabled className='btn btn-sm me-2 bg-red-500'>Deny</button></Link>
                    <Link to={`/dashboard/feedback/${item._id}`}><button className='btn btn-sm bg-yellow-400'>Feedback</button></Link>
                </th>
            }
            {
                status === 'pending' &&
                <th>
                    <Link><button onClick={() => handleApprove(item)} className='btn btn-sm me-2 bg-green-400'>Approve</button></Link>
                    <Link><button onClick={() => handleDeny(item)} className='btn btn-sm me-2 bg-red-500'>Deny</button></Link>
                    <Link to={`/dashboard/feedback/${item._id}`}><button className='btn btn-sm bg-yellow-400'>Feedback</button></Link>
                </th>
            }

        </tr>
    );
};

export default ManageClassRow;