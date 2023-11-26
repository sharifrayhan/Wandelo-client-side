import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Axios/useAxiosSecure';

const useGuides = () => {
    const axiosSecure = useAxiosSecure()
  const { data: allGuides, isLoading, error } = useQuery({
    queryFn: async () => {
      const response = await axiosSecure.get('/guides');
      return response.data;
    },
    queryKey: ['guides'],
  });

  return { allGuides, isLoading, error };
};

export default useGuides;
