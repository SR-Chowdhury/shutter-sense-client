import React from 'react';
import ReactHelmet from '../../../../Components/ReactHelmet/ReactHelmet';
import usePaymentConfirm from '../../../../Hooks/usePaymentConfirm';
import ClassCard from '../../../../Components/ClassCard/ClassCard';
import DashboardPageTtile from '../../../../Components/DashboardPageTitle/DashboardPageTtile';
import { Fade, Slide } from "react-awesome-reveal";

const MyEnrolledClass = () => {

    const [payments] = usePaymentConfirm();

    return (
        <div className='w-full px-10'>
            <ReactHelmet title={'My Enrolled Class'} />
            <Fade>
                <DashboardPageTtile title={'My Enrolled Class'} />
            </Fade>
            <Slide>
                <div className='flex justify-between text-2xl font-semibold mb-3'>
                    {/* <h1>Total Enrolled Classes: {payments.length}</h1> */}
                </div>
                <div className='grid grid-cols-4 gap-5 w-full mt-6'>
                    {payments.length > 0 ? <ClassCard payments={payments} /> : <p>Nothing Added Yet!</p>}
                </div>
            </Slide>
        </div>
    );
};

export default MyEnrolledClass;