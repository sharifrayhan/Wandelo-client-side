import { useState } from "react";
import useBookings from "../Tourist Content/Hook/useBookings";
import useCurrentUserInfo from "../../Users/Hook/useCurrentUserInfo";

const AssignedTours = () => {
  const { allBookings, updateBooking } = useBookings();
  const { userEmail } = useCurrentUserInfo();

  const [selectedStatuses, setSelectedStatuses] = useState({});

  const filteredBookings = allBookings?.filter(
    (booking) => booking?.tourGuide?.email === userEmail
  );

  const handleUpdateBooking = (tourId) => {
    const selectedStatus = selectedStatuses[tourId];

    if (selectedStatus) {
      updateBooking(tourId, selectedStatus);
    }
  };

  const handleStatusChange = (tourId, status) => {
    // Update the selected status in the state
    setSelectedStatuses((prevStatuses) => ({
      ...prevStatuses,
      [tourId]: status,
    }));
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
                  value={selectedStatuses[booking?._id] || ""}
                  onChange={(e) => handleStatusChange(booking?._id, e.target.value)}
                  className="p-2 rounded-md border-none focus:outline-none bg-[#0C4848] text-white"
                >
                  <option value="" disabled>
                    {booking?.status}
                  </option>
                  <option value="Accepted">Accept</option>
                  <option value="Rejected">Reject</option>
                  <option value="In Review">In Review</option>
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
