import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Slider.css';
import img1 from '../../assets/image/slider/slider1.jpg'; 
import img2 from '../../assets/image/slider/slider9.jpg'; 
import img3 from '../../assets/image/slider/slider3.jpg'; 
import img4 from '../../assets/image/slider/slider4.jpg'; 
import img5 from '../../assets/image/slider/slider5.jpg'; 
import img6 from '../../assets/image/slider/slider6.jpg'; 

const Slider = () => {
    return (
        <div className='sliderSecion'>
            <Carousel>
                {/* TODO : Image size need to compress */}
                <div>
                    <img src={img1} />
                    <div className='shutter_slider_caption absolute top-1/3 left-0 p-10 z-10 bg-[rgba(0,0,0,0.5)] w-2/4 text-center'>
                        <h1 className='text-6xl font-extrabold text-white'>Shutter Sense</h1>
                        <h2 className='text-2xl mt-3 font-bold text-white'>Unlocking the Art of Photography</h2>
                    </div>
                </div>
                <div>
                    <img src={img2} />
                    <div className='shutter_slider_caption shutter_slider_caption_rtl absolute top-1/3 right-0 p-10 z-10 w-2/4 bg-[rgba(0,0,0,0.5)] text-center'>
                        <h1 className='text-6xl font-extrabold text-white'>Shutter Sense</h1>
                        <h2 className='text-2xl mt-3 font-bold text-white'>Unlocking the Art of Photography</h2>
                    </div>
                </div>
                <div>
                    <img src={img3} />
                    <div className='shutter_slider_caption absolute top-1/3 left-0 p-10 z-10 w-2/4 bg-[rgba(0,0,0,0.5)] text-center'>
                        <h1 className='text-6xl font-extrabold text-white'>Shutter Sense</h1>
                        <h2 className='text-2xl mt-3 font-bold text-white'>Unlocking the Art of Photography</h2>
                    </div>
                </div>
                <div>
                    <img src={img4} />
                    <div className='shutter_slider_caption absolute top-1/3 left-0 p-10 z-10 w-2/4 bg-[rgba(0,0,0,0.5)] text-center'>
                        <h1 className='text-6xl font-extrabold text-white'>Shutter Sense</h1>
                        <h2 className='text-2xl mt-3 font-bold text-white'>Unlocking the Art of Photography</h2>
                    </div>
                </div>
                <div>
                    <img src={img5} />
                    <div className='shutter_slider_caption absolute top-1/3 left-0 p-10 z-10 w-2/4 bg-[rgba(0,0,0,0.5)] text-center'>
                        <h1 className='text-6xl font-extrabold text-white'>Shutter Sense</h1>
                        <h2 className='text-2xl mt-3 font-bold text-white'>Unlocking the Art of Photography</h2>
                    </div>
                </div>
                <div>
                    <img src={img6} />
                    <div className='shutter_slider_caption absolute top-1/3 right-0 p-10 z-10 w-2/4 bg-[rgba(0,0,0,0.5)] text-center'>
                        <h1 className='text-6xl font-extrabold text-white'>Shutter Sense</h1>
                        <h2 className='text-2xl mt-3 font-bold text-white'>Unlocking the Art of Photography</h2>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;