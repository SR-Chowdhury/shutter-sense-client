import React from 'react';
import ReactHelmet from '../../../../Components/ReactHelmet/ReactHelmet';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Hooks/useAuth';
import DashboardPageTtile from '../../../../Components/DashboardPageTitle/DashboardPageTtile';

const UpdateClass = () => {

    const { id } = useParams();
    const { user, loading } = useAuth();

    const { data } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const res = await fetch(`https://shutter-sense-server.vercel.app/classes/${id}`);
            return res.json();
        }
    });


    return (
        <div className='w-full px-10'>
            <ReactHelmet title={'Update Class'} />
            <DashboardPageTtile title={'Update Class'} />
            <div className='flex justify-between text-2xl font-semibold mb-3'>
                <h1>Comming Soon.........</h1>
            </div>
        </div>
    );
};

export default UpdateClass;