import React from 'react';
import ReactHelmet from '../../../../Components/ReactHelmet/ReactHelmet';
import DashboardPageTtile from '../../../../Components/DashboardPageTitle/DashboardPageTtile';
import useAuth from '../../../../Hooks/useAuth';
import { Fade, Slide } from "react-awesome-reveal";

const AdminHome = () => {

    const { user } = useAuth();

    return (
        <div className='w-full px-10'>
            <ReactHelmet title={'Admin'} />
            <Fade>
                <DashboardPageTtile title={`ADMIN HOME`} />
            </Fade>
            <Slide>
                <h1 className='text-2xl font-bold'>Hi, {user?.displayName} <br /> Welcome Back!</h1>
            </Slide>
        </div>
    );
};

export default AdminHome;