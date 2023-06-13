import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {

    const { data: instructors = [], isLoading: loading } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('https://shutter-sense-server.vercel.app/instructors');
            return res.json();
        }
    });

    return [instructors];
};

export default useInstructor;