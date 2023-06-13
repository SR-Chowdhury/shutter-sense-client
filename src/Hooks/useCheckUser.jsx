import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useCheckUser = () => {

    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: userRole = [], isLoading, refetch } = useQuery({

        queryKey: ['checkuser', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/checkuser?email=${user?.email}`);
            return res.data;
        }

    });

    return [userRole, isLoading, refetch];
};

export default useCheckUser;