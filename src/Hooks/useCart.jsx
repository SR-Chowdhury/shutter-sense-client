import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {

    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data: carts = [], isLoading, refetch} = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`https://shutter-sense-server.vercel.app/carts?email=${user?.email}`);
            return res.data;
        }
    });

    return [carts, isLoading, refetch];
};

export default useCart;