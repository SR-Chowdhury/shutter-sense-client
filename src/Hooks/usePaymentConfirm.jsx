import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usePaymentConfirm = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: payments = [], isLoading, refetch } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/paymenthistory?email=${user?.email}`);
            return res.data;
        }
    });

    return [payments, isLoading, refetch];
};

export default usePaymentConfirm;