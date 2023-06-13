import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ManageUserRow from '../../../../Components/ManageUserRow/ManageUserRow';
import DashboardPageTtile from '../../../../Components/DashboardPageTitle/DashboardPageTtile';
import ReactHelmet from '../../../../Components/ReactHelmet/ReactHelmet';
import { Fade, Slide } from "react-awesome-reveal";

const ManageUser = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: manageUsers = [], isLoading, refetch } = useQuery({
        queryKey: ['manageusers'],
        queryFn: async () => {
            const res = await axiosSecure('/manageusers');
            return res.data;
        }
    });


    return (
        <div className='w-full px-10'>
            <ReactHelmet title={'Manage User'} />
            <Fade>
                <DashboardPageTtile title={'Manage User'} />
            </Fade>
            <Slide>
                <div className='flex justify-between text-2xl font-semibold mb-3'>
                    <h1>Total User: {manageUsers.length}</h1>
                </div>
            </Slide>
            <div className='mt-6'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>User Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                manageUsers.map((item, index) => <ManageUserRow key={index} refetch={refetch} i={index} item={item} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;