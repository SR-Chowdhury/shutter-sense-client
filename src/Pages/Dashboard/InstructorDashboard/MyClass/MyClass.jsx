import React from 'react';
import ReactHelmet from '../../../../Components/ReactHelmet/ReactHelmet';
import ClassRow from '../../../../Components/ClassRow/ClassRow';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import DashboardPageTtile from '../../../../Components/DashboardPageTitle/DashboardPageTtile';
import { Fade, Slide } from "react-awesome-reveal";

const MyClass = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: myClasses = [], isLoading, refetch } = useQuery({

        queryKey: ['myclsses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/myclasses?email=${user?.email}`);
            return res.data;
        }

    });

    return (
        <div className='w-full px-10'>

            <ReactHelmet title={'My Class'} />
            <Fade>
                <DashboardPageTtile title={'My Classes'} />
            </Fade>
            <Slide>
                <div className='flex justify-between text-2xl font-semibold mb-3'>
                    <h1>Total Classes: {myClasses.length}</h1>
                </div>
                <div className='mt-6'>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Class Image</th>
                                    <th>Class Name</th>
                                    <th>T. Enrolled</th>
                                    <th>Status</th>
                                    <th>Feedback</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myClasses.map((item, index) => <ClassRow key={index} i={index} item={item} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default MyClass;