import { useParams } from "react-router-dom";
import useGuidesFromUsers from "../Dashboard/Guide Content/Hook/useGuidesFromUsers";
import Navbar from "../../Pages/Home/Components/Navbar";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useAxiosSecure from "../../Axios/useAxiosSecure";
import useUsers from "../Users/Hook/useUsers";
import useCurrentUserInfo from "../Users/Hook/useCurrentUserInfo";

const GuideDetails = () => {
  const { _id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const {userName, userRole } = useCurrentUserInfo()
  console.log(userName)

  const { filteredGuides } = useGuidesFromUsers();
  const {refetch} = useUsers()
  const selectedGuide = filteredGuides?.find((guide) => guide._id.toString() === _id);
  const axiosSecure = useAxiosSecure()



  const onSubmit = async (data) => {
    console.log(data);
    try {
      const id= _id
      // const url =`/users/${id}?email=${userEmail}`
      const url =`/users/${id}`
      const response = await axiosSecure.put(url, {reviews: data});
      // const data = response.data;
      console.log(response)

      if (response.status == 200) {
          Swal.fire(
              'Reviewed!',
              'Thank you for putting a review.',
              'success'
          );
              refetch()

      } else {
          Swal.fire('Failed to Review!');
      }
  } catch (error) {
      console.error('Error occurred during Review:', error);
      Swal.fire('Failed to Review!', '', 'error');
  }
    reset();
  };

  return (
    <div className="bg-[#0C4848]">
      <Navbar />
      <div className="text-[#F7F5F2] mx-auto flex p-3 flex-col items-center justify-center mt-10">
        {selectedGuide ? (
          <div>
            <div className="flex flex-col gap-8">
              <div>
                <img
                  src={selectedGuide?.cover_image}
                  alt={selectedGuide?.name}
                  className="mb-4 h-64 w-full object-cover rounded-md"
                />
              </div>
              <div>
                <div className="text-center flex flex-col justify-center items-center mb-4">
                  <img
                    src={selectedGuide?.profile_image}
                    alt={selectedGuide?.name}
                    className="mx-auto h-40 w-40 object-cover rounded-full border-4 border-white -mt-20"
                  />
                </div>
                <center>
                  <h2 className="text-3xl font-semibold mb-2">{selectedGuide?.name}</h2>
                  <p className="text-[#F7F5F2] mb-2">Experience: {selectedGuide?.experience}</p>
                  <p className="text-[#F7F5F2] mb-2">Email: {selectedGuide?.email}</p>
                  <p className="text-[#F7F5F2] mb-2">Education: {selectedGuide?.education}</p>
                  <p className="text-[#F7F5F2] mb-2">Phone: {selectedGuide?.phone}</p>
                  <p className="text-[#F7F5F2] mb-2">{selectedGuide?.skills.join(", ")}</p>
                </center>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Put a Review</h3>
              {/* Review Section */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label htmlFor="rating" className="block text-sm font-medium text-[#F7F5F2]">
                    Rating
                  </label>
                  <input
                    type="number"
                    id="rating"
                    name="rating"
                    min="1"
                    max="5"
                    {...register("rating")}
                    className="mt-1 bg-[#577a7d] text-[#f7f5f2]  p-2 border rounded-md w-full"
                  />
                </div>

                <div className="mb-4 hidden">
                  <label htmlFor="name" className="block text-sm font-medium text-[#F7F5F2]">
                    Name
                  </label>
                  <input
                    type="string"
                    id="rating"
                    value={userName}
                    hidden
                    {...register("name")}
                    className="mt-1 bg-[#577a7d] text-[#f7f5f2]  p-2 border rounded-md w-full"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-[#F7F5F2]">
                    Review
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    {...register("message")}
                    className="mt-1 p-2 border bg-[#577a7d] text-[#f7f5f2]  rounded-md w-full"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={!userRole=="tourist"}
                  className="bg-[#e1a66f] hover:bg-slate-400 text-white px-4 py-2 rounded-md"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default GuideDetails;
