import React from 'react';
import { Parallax } from 'react-parallax';
import img from '../../../assets/image/slider/slider8.jpg';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className='newsLetterSection'>
            <Parallax blur={2} bgImage={img} bgImageAlt="the cat" strength={200} className='h-[500px] flex justify-center items-center'>
                <div className='bg-[rgba(0,0,0,0.5)] newsLetterCaption z-10 px-32 py-24 text-center'>
                    <h1 className='text-4xl  text-white mb-3'>Join My Newsletter</h1>
                    <div>
                        <div className="form-control">
                            <label className="input-group">
                                <input type="text" placeholder="Enter Your Email" className="input input-bordered input-warning w-full max-w-xs" />
                                <span className='cursor-pointer'>SEND</span>
                            </label>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default NewsLetter;