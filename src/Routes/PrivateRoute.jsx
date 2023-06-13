import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children}) => {

    const location = useLocation();
    const { user, loading } = useAuth();

    if (loading) {
        return <div className='w-screen mx-auto h-[700px] text-center'>
            <progress className="progress w-56 mt-60"></progress>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" replace />
};

export default PrivateRoute;