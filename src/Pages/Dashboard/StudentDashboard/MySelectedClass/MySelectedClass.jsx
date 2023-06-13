import React, { useState } from 'react';
import useCart from '../../../../Hooks/useCart';
import ReactHelmet from '../../../../Components/ReactHelmet/ReactHelmet';
import CartRow from '../../../../Components/CartRow/CartRow';
import { Link } from 'react-router-dom';
import DashboardPageTtile from '../../../../Components/DashboardPageTitle/DashboardPageTtile';
import { Fade, Slide } from "react-awesome-reveal";

const MySelectedClass = () => {

    const [carts, isLoading, refetch] = useCart();
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
    const isDisabled = (totalPrice > 0) ? true : false;

    return (
        <div className='w-full px-10'>
            <ReactHelmet title={'My Class'} />
            <Fade>
                <DashboardPageTtile title={'My Slected Class'} />
            </Fade>
            <Slide>
                <div className='flex justify-between text-2xl font-semibold mb-3'>
                    <h1>Total Selected Classes: {carts.length}</h1>
                    <h1>Total Price: ${totalPrice}</h1>
                </div>
            </Slide>

            <Link to={'/dashboard/payment'}><button disabled={!isDisabled} className='btnPrimary btn text-end'>Pay Now</button></Link>


            <div className='mt-6'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map((item, index) => <CartRow key={index} refetch={refetch} i={index} item={item} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MySelectedClass;