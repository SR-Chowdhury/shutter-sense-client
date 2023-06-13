import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import ReactHelmet from '../ReactHelmet/ReactHelmet';
import DashboardPageTtile from '../DashboardPageTitle/DashboardPageTtile';

const Feedback = () => {

    const { loading } = useAuth();
    const { id } = useParams();
    const { data } = useQuery({
        queryKey: ['feedback', id],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://shutter-sense-server.vercel.app/feedback/${id}`);
            return res.json();
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        fetch(`https://shutter-sense-server.vercel.app/feedback/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ feedback })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    form.reset();
                    Swal.fire({
                        title: `Successfully Send Feedback`,
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
    return (
        <div className='w-full px-10'>
            <ReactHelmet title={'Feedback'} />
            <DashboardPageTtile title={'Send Feedback'} />
            <div className='flex justify-between text-2xl font-semibold mb-3'>
                <h1>Send Feedback To: {data?.ins_name}</h1>
            </div>
            <div className='mt-6'>
                <form onSubmit={handleSubmit}>
                    <textarea required name='feedback' className="textarea textarea-warning w-full textarea-lg" placeholder="Send Feedback"></textarea>
                    <button className='btn btnPrimary mt-3' type="submit">Send Feedback</button>
                </form>
            </div>
        </div>
    );
};

export default Feedback;