import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import ManageClassRow from '../../../../Components/MangeClassRow/ManageClassRow';
import ReactHelmet from '../../../../Components/ReactHelmet/ReactHelmet';
import DashboardPageTtile from '../../../../Components/DashboardPageTitle/DashboardPageTtile';
import { Fade, Slide } from "react-awesome-reveal";

const ManageClass = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: manageClasses = [], isLoading, refetch } = useQuery({
        queryKey: ['manageclasses'],
        queryFn: async () => {
            const res = await axiosSecure('/manageclasses');
            return res.data;
        }
    });

    return (
        <div className='w-full px-10'>
            <ReactHelmet title={'Manage Class'} />
            <Fade>
                <DashboardPageTtile title={'Manage Class'} />
            </Fade>
            <Slide>
                <div className='flex justify-between text-2xl font-semibold mb-3'>
                    <h1>Total Classes: {manageClasses.length}</h1>
                </div>
            </Slide>
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
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                manageClasses.map((item, index) => <ManageClassRow key={index} refetch={refetch} i={index} item={item} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClass;