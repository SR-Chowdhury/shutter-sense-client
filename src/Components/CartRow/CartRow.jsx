import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartRow = ({ i, item, refetch }) => {

    const { _id, class_image, class_name, ins_name, ins_email, available_seats, price, status } = item;

    const handleDeleteClass = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://shutter-sense-server.vercel.app/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
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
            <td>${price}</td>
            <th>
                <Link><button onClick={() => handleDeleteClass(_id)} className='btn btn-sm'>Delete Class</button></Link>
            </th>
        </tr>
    );
};

export default CartRow;