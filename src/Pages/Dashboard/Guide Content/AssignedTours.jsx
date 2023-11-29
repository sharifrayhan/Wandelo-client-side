import { useState } from "react";
import useBookings from "../Tourist Content/Hook/useBookings";
import useCurrentUserInfo from "../../Users/Hook/useCurrentUserInfo";

const AssignedTours = () => {
  const { allBookings, updateBooking } = useBookings();
  const [selectedStatus, setSelectedStatus] = useState("");
  const { userEmail } = useCurrentUserInfo()

  const filteredBookings = allBookings?.filter(
    (booking) => booking?.tourGuide?.email === userEmail
  );

  const handleUpdateBooking = (tourId) => {
    if (selectedStatus) {
      updateBooking(tourId, selectedStatus);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs md:table-md lg:table-md text-[#f7f5f2]">
        <thead>
          <tr className="text-[#f7f5f2]">
            <th>Serial</th>
            <th>Tourist Name</th>
            <th>Package Name</th>
            <th>Tour Date</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings?.map((booking, index) => (
            <tr key={booking?._id}>
              <td>{index + 1}</td>
              <td>{booking?.name}</td>
              <td>{booking?.package?.tourTitle}</td>
              <td>{booking?.tourDate?.substring(0, 10)}</td>
              <td>{booking?.package?.price}</td>
              <td>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="p-2 rounded-md border-none focus:outline-none bg-[#0C4848] text-white"
                >
                  <option value="" disabled>
                    {booking?.status}
                  </option>
                  <option value="accept">Accept</option>
                  <option value="reject">Reject</option>
                  <option value="inReview">In Review</option>
                </select>
              </td>
              <td>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-green-600 mr-2"
                  onClick={() => handleUpdateBooking(booking?._id)}
                >
                  Update Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignedTours;
