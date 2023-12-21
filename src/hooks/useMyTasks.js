import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useMyTasks = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    // get all article
    const { data: myAllTask = [], refetch, isLoading } = useQuery({
        queryKey: ['myAllTask'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/get-my-tasks/${user?.email}`)
            // console.log(res.data.result);
            return res.data.result;
        },
        retry: 5
    })

    return { myAllTask, refetch, isLoading };
};

export default useMyTasks;