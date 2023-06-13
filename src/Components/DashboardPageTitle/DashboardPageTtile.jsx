import React from 'react';

const DashboardPageTtile = ({title}) => {
    return (
        <div className='my-5 border-l-4 border-l-[#f58025]'>
            <h1 className='text-4xl font-bold'> &nbsp;{title}</h1>
        </div>
    );
};

export default DashboardPageTtile;