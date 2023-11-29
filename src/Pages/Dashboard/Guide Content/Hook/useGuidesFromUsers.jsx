// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../../../../Axios/useAxiosSecure';
import useUsers from '../../../Users/Hook/useUsers';

const useGuidesFromUsers = () => {
   const { allUsers } = useUsers()

   const filteredGuides = allUsers?.filter(
    (user) => user?.role === "guide"
  );

  console.log(filteredGuides)

    // const axiosSecure = useAxiosSecure()
//   const { data: allGuides, isLoading, error } = useQuery({
//     queryFn: async () => {
//       const response = await axiosSecure.get('/guides');
//       return response.data;
//     },
//     queryKey: ['guides'],
//   });


  return { filteredGuides};
};

export default useGuidesFromUsers;