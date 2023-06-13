import React from 'react';
import bannerImg from '../../assets/image/banner.png';

const Banner = ({banner_title}) => {

    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '300px'
    };

    return (
        <div className='bannerSection flex justify-center items-center' style={bannerStyle}>
            <div className='mt-7'>
                <h1 className='text-3xl text-white'><span className='font-bold'>Shutter Sense</span> <span className='text-[#f58025]'>/</span> {banner_title}</h1>
            </div>
        </div>
    );
};

export default Banner;