import React from 'react';
import ReactHelmet from '../../../../Components/ReactHelmet/ReactHelmet';
import PaymentHistoryTable from '../../../../Components/PaymentHistoryTable/PaymentHistoryTable';
import usePaymentConfirm from '../../../../Hooks/usePaymentConfirm';
import DashboardPageTtile from '../../../../Components/DashboardPageTitle/DashboardPageTtile';
import { Fade, Slide } from "react-awesome-reveal";


const PaymentHistory = () => {

    const [payments] = usePaymentConfirm();

    return (
        <div className='w-full px-10'>
            <ReactHelmet title={'Payment History'} />
            <Fade>
                <DashboardPageTtile title={'My Payment History'} />
            </Fade>
            <Slide>
                <div className='flex justify-between text-2xl font-semibold mb-3'>
                    <h1>Total Payment: {payments.length}</h1>
                </div>
            </Slide>
            <div className='mt-6'>
                <div className="overflow-x-auto">
                    {payments.length > 0 ? <PaymentHistoryTable payments={payments} /> : <p>No data available.</p>}
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;