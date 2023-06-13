import React from 'react';
import useCheckUser from '../../Hooks/useCheckUser';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useCart from '../../Hooks/useCart';
import { Slide } from "react-awesome-reveal";

const Class = ({ item }) => {

    const { user } = useAuth();
    const [userRole] = useCheckUser();
    const { _id, class_image, class_name, ins_name, ins_email, available_seats, price, status } = item;
    const isButtonDisabled = available_seats === 0 || (userRole?.role === 'admin') || (userRole?.role === 'instructor');
    const cardClass = available_seats === 0 ? 'card w-96 bg-red-500 shadow-xl' : 'card w-96 bg-base-100 shadow-xl';
    const location = useLocation();
    const navigate = useNavigate();
    const [, , refetch] = useCart();

    const handleBook = (item) => {

        const selectedCourse = { classId: _id, class_image, class_name, available_seats, ins_name, ins_email, price, email: user?.email };

        // TODO : available seat should be decreased
        if (user && user.email) {
            fetch(`https://shutter-sense-server.vercel.app/carts`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedCourse)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Successfully Added to the cart',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                        refetch();
                    }
                })
                .catch(err => console.log(err.message))
        }
        else {
            Swal.fire({
                title: 'You need to Login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            })
        }
    }

    return (
        <Slide>
            <div className={cardClass}>
                <figure className="px-10 pt-10">
                    <img src={class_image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{class_name}</h2>
                    <h2 className="card-title">{ins_name}</h2>
                    <p>Available Seat: {available_seats}</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                        <button onClick={() => handleBook(item)} disabled={isButtonDisabled} className="btn btnPrimary">Book Course</button>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default Class;