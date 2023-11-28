import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Axios/useAxiosSecure';
import Swal from 'sweetalert2';
import useCurrentUserInfo from '../../../Users/Hook/useCurrentUserInfo';


const useWishlist = () => {
  const axiosSecure = useAxiosSecure()
  const {userEmail} = useCurrentUserInfo()
  const { data: allWishList, isLoading, error, refetch } = useQuery({
    queryFn: async () => {
      const response = await axiosSecure.get('/wishlist');
      return response.data;
    },
    queryKey: ['wishlist'],
  });

  const deleteWishlist = async (wishlistId) => {
    const id = wishlistId
    const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
        try {
            const url =`/wishlist/${id}?email=${userEmail}`
            const response = await axiosSecure.delete(url, id);
            // const data = response.data;
            console.log(response)

            if (response.status == 200) {
                Swal.fire(
                    'Deleted!',
                    'Your wishlist item has been deleted.',
                    'success'
                );
                    refetch()

            } else {
                Swal.fire('Failed to Delete!');
            }
        } catch (error) {
            console.error('Error occurred during deletion:', error);
            Swal.fire('Failed to Delete!', '', 'error');
        }
    }
};

  return { deleteWishlist, isLoading, allWishList, error, refetch };
};

export default useWishlist;