import React from 'react';
import errorImage from '../../assets/404.gif';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import ReactHelmet from '../ReactHelmet/ReactHelmet';

const ErrorPage = () => {
    return (
        <div>
            <ReactHelmet title={'Error'}/>
            <div className="text-center mt-3 -mb-2">
                <Link to={'/'}><button className='btn text-orange-200'>Back To Ho<FaHome />e</button></Link>
            </div>
            <div className='flex items-center justify-center text-center' style={{ height: '100vh' }}>
                <div>
                    <img src={errorImage} className="w-full" alt="Error Image" />
                </div>
            </div>
        </div>

    );
};

export default ErrorPage;