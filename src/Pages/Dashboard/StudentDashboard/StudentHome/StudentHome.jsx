import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import ReactHelmet from '../../../../Components/ReactHelmet/ReactHelmet';
import DashboardPageTtile from '../../../../Components/DashboardPageTitle/DashboardPageTtile';
import { Fade, Slide } from "react-awesome-reveal";

const StudentHome = () => {

    const { user } = useAuth();

    return (
        <div className='w-full px-10'>
            <ReactHelmet title={'Student'} />
            <Fade>
                <DashboardPageTtile title={`STUDENT HOME`} />
            </Fade>
            <Slide>
                <h1 className='text-2xl font-bold'>Hi, {user?.displayName} <br /> Welcome Back!</h1>
            </Slide>
        </div>
    );
};

export default StudentHome;