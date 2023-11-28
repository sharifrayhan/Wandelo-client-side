import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Axios/useAxiosSecure';
import Swal from 'sweetalert2';
import useCurrentUserInfo from '../../../Users/Hook/useCurrentUserInfo';


const useBookings = () => {
  const axiosSecure = useAxiosSecure()
  const {userEmail} = useCurrentUserInfo()
  const { data: allBookings, isLoading, error, refetch } = useQuery({
    queryFn: async () => {
      const response = await axiosSecure.get('/bookings');
      return response.data;
    },
    queryKey: ['bookings'],
  });

  const updateBooking = async (bookingId, newStatus) => {
    try {
        const id= bookingId
        const url =`/bookings/${id}?email=${userEmail}`
        const response = await axiosSecure.put(url, {status: newStatus});
        // const data = response.data;
        console.log(response)

        if (response.status == 200) {
            Swal.fire(
                'Updated!',
                'Booking status has been updated.',
                'success'
            );
                refetch()

        } else {
            Swal.fire('Failed to Update!');
        }
    } catch (error) {
        console.error('Error occurred during update:', error);
        Swal.fire('Failed to Update!', '', 'error');
    }
    console.log(`Update role for user ${bookingId} to ${newStatus}`);
    // setOpenDropdownId(null);
  };


  const deleteBooking = async (bookingId) => {
    const id = bookingId
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
            const url =`/bookings/${id}?email=${userEmail}`
            const response = await axiosSecure.delete(url, id);
            // const data = response.data;
            console.log(response)

            if (response.status == 200) {
                Swal.fire(
                    'Deleted!',
                    'Your booking has been deleted.',
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

  return { allBookings, isLoading, updateBooking, deleteBooking, error, refetch };
};

export default useBookings;