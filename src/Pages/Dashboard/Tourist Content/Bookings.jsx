import useBookings from "./Hook/useBookings";

const Bookings = () => {
  const { allBookings, deleteBooking } = useBookings();


//   const handleUpdate = (bookingId, newStatus) => {
//     updateBooking(bookingId, newStatus);
//   };

  const handleDelete = (bookingId) => {
      deleteBooking(bookingId);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs md:table-md lg:table-md text-[#f7f5f2]">
        <thead>
          <tr className='text-[#f7f5f2]'>
            <th>Serial</th>
            {/* <th>Name</th>
            <th>Email</th> */}
            <th>Tour Date</th>
            <th>Package Name</th>
            <th>Guide Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allBookings?.map((booking, index) => (
            <tr key={booking?._id}>
              <td>{index + 1}</td>
              {/* <td>{booking?.name}</td>
              <td>{booking?.email}</td> */}
              <td>{booking?.tourDate.substring(0, 10)}</td>
              {/* Add more columns for package name, guide name, price, status */}
              <td>{booking?.package?.tourTitle}</td>
              <td>{booking?.tourGuide?.name}</td>
              <td>{booking?.package?.price}</td>
              <td>{booking?.status}</td>
              <td>
                {/* Add your action buttons here */}
                {/* <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-green-600 mr-2"
                  onClick={() => handleUpdate(booking?._id, newStatus)}
                >
                  Update
                </button> */}
                <button
                  className=""
                  onClick={() => handleDelete(booking?._id)}
                >
                  <img className="h-9" src="https://i.ibb.co/86KFNHr/delete-2.png" alt="Delete" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
