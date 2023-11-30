import useBookings from "./Hook/useBookings";

const Bookings = () => {
  const { currentUserBookings, deleteBooking } = useBookings();
console.log( currentUserBookings?.length)

//   const handleUpdate = (bookingId, newStatus) => {
//     updateBooking(bookingId, newStatus);
//   };

  const handleDelete = (bookingId) => {
      deleteBooking(bookingId);
  };

  return (
    <div className="overflow-x-auto">
      {currentUserBookings?.length === 0 && <center><p className="text-[#f7f5f2]">Your have no bookings added.</p></center>}
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
          {currentUserBookings?.map((booking, index) => (
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
                  disabled={!booking?.status=="In Review"}
                >
                  <img className="h-9" src="https://i.ibb.co/86KFNHr/delete-2.png"/>
                </button>
                <button
                  className="mr-2"
                  disabled={!(booking?.status === "Accept" || booking?.status === "Accepted")}
                  // onClick={() => handleDelete(booking?._id)}
                >
                  <img className="h-9" src="https://i.ibb.co/Z18vpG6/pay.png" />
                </button>
                <button
                  className=""
                  disabled={!(currentUserBookings?.length >= 3)}
                  // onClick={() => handleDelete(booking?._id)}
                >
                  <img className="h-7" src="https://i.ibb.co/KWbdKjP/apply.png" />
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
