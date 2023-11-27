import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Axios/useAxiosSecure';

const useUsers = () => {
    const axiosSecure = useAxiosSecure()
  const { data: allUsers, isLoading, error } = useQuery({
    queryFn: async () => {
      const response = await axiosSecure.get('/users');
      return response.data;
    },
    queryKey: ['users'],
  });

  return { allUsers, isLoading, error };
};

export default useUsers;