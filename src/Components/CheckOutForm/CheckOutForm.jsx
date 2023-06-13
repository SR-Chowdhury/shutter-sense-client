import React, { useState, useEffect } from 'react';
import './CheckOutForm.css';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = ({ carts, refetch, price }) => {

    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();

    // CREATE INTENT FOR PAYMENT
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (card === null) return;

        // console.log(card);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setCardError(error.message);
        } else {
            // console.log('payment method', paymentMethod);
            setCardError('');
        }

        setProcessing(true);

        // CONFIRM CARD PAYMENT
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'unknown'
                },
            },
        })

        setProcessing(false);

        if (confirmError) {
            console.log(confirmError);
        }

        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id);
            // save payment order into server
            const payment = {
                date: new Date(),
                transactionId: paymentIntent.id,
                email: user?.email,
                price,
                quantity: carts.length,
                cartItems: carts.map(item => item._id),
                classItems: carts.map(item => item.classId),
                className: carts.map(item => item.class_name),
                availableSeats: carts.map(item => item.available_seats),
                status: 'service pending'
            };
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {

                        Swal.fire({
                            title: 'Payment Successfull',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                    }
                    navigate('/dashboard/myenrolledclass');
                })

        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btnPrimary w-1/3 mt-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay Now
                </button>
            </form>
            {
                cardError && <p className='text-red-800 mt-3'>{cardError}</p>
            }
            {
                transactionId && <p className='text-green-800 mt-3'>Transaction completed with Transaction ID: {transactionId}</p>
            }
        </>
    );
};

export default CheckOutForm;