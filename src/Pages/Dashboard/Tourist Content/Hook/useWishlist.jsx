import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Axios/useAxiosSecure';
import Swal from 'sweetalert2';
import useCurrentUserInfo from '../../../Users/Hook/useCurrentUserInfo';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



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
  const currentUserWishlist = allWishList?.filter((w) => w?.email === userEmail);

  const addToWishlist = async (id) => {
    console.log(id)
    try {
      const response = await axiosSecure.post('/wishlist', {package: id, email:userEmail });
      console.log(response)
      if (response.status == 201) {
        toast.success('Added to your wishlist',);
      }
      else {
        toast.error('Error adding to your wishlist',);
        }
      
    } catch (error) {
      console.error('Error adding to your wishlist:', error.message);
      toast.error('Error adding to your wishlist. Please try again.',);
    }
  };

  const deleteWishlist = async (wishlistId) => {
    const id = wishlistId
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
    
};

  return { deleteWishlist, isLoading, allWishList, error, refetch,currentUserWishlist, addToWishlist };
};

export default useWishlist;