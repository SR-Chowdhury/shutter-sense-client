import React from 'react';
import ReactHelmet from '../../../../Components/ReactHelmet/ReactHelmet';
import useCart from '../../../../Hooks/useCart';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from '../../../../Components/CheckOutForm/CheckOutForm';
import DashboardPageTtile from '../../../../Components/DashboardPageTitle/DashboardPageTtile';
import { Fade, Slide } from "react-awesome-reveal";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key);

const Payment = () => {

    const [carts, isLoading, refetch] = useCart();
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(totalPrice.toFixed(2));



    return (
        <div className='w-full px-10'>
            <ReactHelmet title={'Payment'} />
            <Fade>
                <DashboardPageTtile title={'Payment Now'} />
            </Fade>
            <Slide>
                <div className='flex justify-between text-2xl font-semibold mb-24'>
                    <h1>Total Selected Classes: {carts.length}</h1>
                    <h1>Total Price: ${totalPrice}</h1>
                </div>
            </Slide>
            <div className='w-2/3 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm carts={carts} price={price} refetch={refetch} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;