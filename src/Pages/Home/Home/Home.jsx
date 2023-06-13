import React, { useState } from 'react';
import ReactHelmet from '../../../Components/ReactHelmet/ReactHelmet';
import Slider from '../../../Components/Slider/Slider';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import NewsLetter from '../NewsLetter/NewsLetter';
import SliderForSmallScreen from '../../../Components/SliderForSmallScreen/SliderForSmallScreen';
import { FaMoon, FaSun } from "react-icons/fa";
import './Home.css';

const Home = () => {

    const [isNight, setNight] = useState(false);
    const handleClick = () => setNight(!isNight);

    return (
        <div className={`relative ${isNight ? 'nightMode' : ''}`}>
            <ReactHelmet title={'Home'} />
            <Slider />
            <SliderForSmallScreen />
            <PopularClass />
            <PopularInstructor />
            <NewsLetter />
            <div className='fixed top-1/2'>
                <button onClick={handleClick} className='text-3xl bg-[rgba(0,0,0,0.5)] border-0 rounded-full p-5 text-white'>
                    {isNight ? <FaSun/> : <FaMoon />}
                </button>
            </div>
        </div>
    );
};

export default Home;