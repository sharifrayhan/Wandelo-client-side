import { Link, useParams } from "react-router-dom";
import usePackages from "./Hook/usePackages";
import Navbar from "../Pages/Home/Components/Navbar";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useGuides from "../Pages/Guides/Hook/useGuides";
import useAxiosSecure from "../Axios/useAxiosSecure";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from 'framer-motion';
import Confetti from "react-confetti";
import useCurrentUserInfo from "../Pages/Users/Hook/useCurrentUserInfo";
import useBookings from "../Pages/Dashboard/Tourist Content/Hook/useBookings";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/AllContext";
// import Guides from "../Pages/Guides/Guides";
import useUsers from "../Pages/Users/Hook/useUsers";
import useGuidesFromUsers from "../Pages/Dashboard/Guide Content/Hook/useGuidesFromUsers";


const PackageDetails = () => {
  const { _id } = useParams();
  const { allPackages } = usePackages();
  const { allGuides } = useGuides();
  const { userEmail, userName, userRole } = useCurrentUserInfo();
  const {currentUserBookings, refetch} = useBookings()
  const [confetti, setConfetti] = useState(false);
  // const modalShownRef = useRef(false);
  const [lengthCheck, setLengthCheck] = useState(false)
  const {user} = useContext(Context)
  const { isLoading, error } = useUsers();
  const { filteredGuides } = useGuidesFromUsers();

  useEffect(() => {
    if (lengthCheck) {
      setConfetti(true);
      Swal.fire({
        title: 'Congratulations!',
        text: 'You have earned a discount. Click the button to reveal the code.', 
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Apply'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(`Discount Code Revealed!', 'Your discount code is: ${userName}50%wandelo', 'You can apply this code when you pay`);
          setConfetti(false)
          setLengthCheck(false)
        }
        
      });

    }
  }, [lengthCheck, userName]);

  const selectedPackage = allPackages.find((s) => s._id.toString() === _id);
  const axiosSecure = useAxiosSecure();

  const { place, image, tourTitle, price, details, tourPlan, spotImages } =
    selectedPackage;

  const { register, handleSubmit, setValue, watch } = useForm();
  const selectedTourDate = watch("tourDate");

  const handleInputChange = (name, value) => {
    setValue(name, value);
  };

  const onSubmit = async (data) => {
    if(currentUserBookings?.length === 3){
      setLengthCheck(true)
    }
    console.log(data);
    try {
      await axiosSecure.post("/bookings", data);
      toast.success("Booking added");
      refetch()
    } catch (error) {
      console.error("Error booking package:", error.message);
      toast.error("Error booking package. Please try again.");
    }
  };

  const spotGallery = () => (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
      {spotImages.map((image, index) => (
        <motion.div
        key={index}
        whileHover={{ scale: 1.10 }}
        className=" border border-gray-300 rounded-md overflow-hidden"
      >
        <img
          key={index}
          src={image}
          className=" h-[100px]  rounded-md shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        />
      </motion.div>
      ))}
    </div>
  );

  const tourPlanDetails = () => (
    <div className="text-left mb-8">
      {tourPlan.map((day, index) => (
                   <motion.div
                   key={index}
                   whileHover={{ scale: 1.10 }}
                   className="p-4 border border-gray-300 rounded-md overflow-hidden"
                 >
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">{day.day}</h2>
          <p className="text-gray-700">{day.spots.join(", ")}</p>
        </div>
       </motion.div>
      ))}
    </div>
  );

  return (
    <div className="p-1  bg-[#0C4848]">
      <ToastContainer></ToastContainer>
      {confetti && <Confetti />}
      <Navbar></Navbar>
      <div className="flex p-3 flex-col md:flex-row items-center md:items-start lg:items-start justify-center lg:flex-row gap-4 ">
      <div className=" z-0 max-w-[600px]  bg-[#f7f5f2] p-8 rounded-md shadow-lg">
        <center>
          <img
            src={image}
            alt={place}
            className="relative max-h-[400px] rounded-md shadow-lg mb-4 overflow-hidden"
          />
                    <h1 className="text-3xl uppercase font-bold mb-4">{tourTitle}</h1>
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold">{place}</h2>
          </div> */}
          <p className="text-gray-600 mb-2">{place}</p>
          <p className="text-gray-700 mb-4">{details}</p>
          <p className="text-gray-700 text-2xl font-bold">Price: ${price}</p>
        </center>
        <hr className="my-8 border-b border-gray-300" />
        <center>
          
          <h2 className="text-2xl font-bold mb-4">Spot Images</h2>
          {spotGallery()}

          <h2 className="text-2xl font-bold mb-4">Tour Plans</h2>
          {tourPlanDetails()}
        </center>
      </div>
      <center className="mt-4">
        {/* Booking Form */}
        <div className="mb-8 bg-[#0C5654] rounded-md shadow-xl max-w-[300px] p-4">
          <h2 className="text-2xl text-[#f7f5f2] font-bold mb-4">Book Now</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 w-[230px]">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-[#f7f5f2]"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userName}
                {...register("name", { required: true })}
                className="w-full px-4 py-2 border bg-[#577a7d] text-[#f7f5f2]  rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4 w-[230px]">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#f7f5f2]"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userEmail}
                {...register("email", { required: true })}
                className="w-full px-4 bg-[#577a7d] text-[#f7f5f2]  py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4 hidden w-[230px]">
              <label
                htmlFor="package"
                className="block text-sm font-semibold text-[#f7f5f2]"
              >
                Selected Package:
              </label>
              <input
                type="package"
                id="package"
                name="package"
                {...register("package", { required: true })}
                placeholder={selectedPackage?.name}
                value={selectedPackage?._id}
                className="w-full px-4 py-2 bg-[#577a7d] text-[#f7f5f2]  border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4 hidden w-[230px]">
              <label
                htmlFor="status"
                className="block text-sm font-semibold text-[#f7f5f2]"
              >
                Status:
              </label>
              <input
                type="status"
                id="status"
                name="status"
                {...register("status", { required: true })}
                value={"In Review"}
                className="w-full px-4 bg-[#577a7d] text-[#f7f5f2]  py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4 ">
              <label
                htmlFor="tourDate"
                className="block text-sm font-semibold text-[#f7f5f2]"
              >
                Tour Date:
              </label>
              <DatePicker
                id="tourDate"
                name="tourDate"
                selected={selectedTourDate}
                onChange={(date) => handleInputChange("tourDate", date)}
                className="w-[230px] bg-[#577a7d] text-[#f7f5f2]  px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                dateFormat="MMMM d, yyyy"
                required
              />
            </div>
            <div className="mb-4 w-[230px]">
              <label
                htmlFor="tourGuide"
                className="block text-sm font-semibold text-[#f7f5f2]"
              >
                Tour Guide:
              </label>
              <select
                id="tourGuide"
                name="tourGuide"
                {...register("tourGuide", { required: true })}
                className="w-full bg-[#577a7d] text-[#f7f5f2]  px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              >
                {/* Guide Names */}
                <option value="">Select Tour Guide</option>
                {allGuides?.map((g) => (
                  <option key={g?._id} value={g?._id}>
                    {g?.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#e1a66f] text-white px-6 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600"
              disabled={!user || userRole !== "tourist"}
            >
              Book Now
            </button>
          </form>
        </div>
      </center>
      
      </div>
      {/* <Guides></Guides> */}
      <center><h1 className="text-white text-xl">Our Guides</h1></center>
      <div className=" items-center justify-center mt-10 flex flex-wrap gap-4">
        
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {filteredGuides &&
          filteredGuides?.map((guide) => (
            <div
              key={guide._id}
              className="bg-[#f7f5f2] text-center p-6 rounded-lg shadow-lg"
            >
              <img
                src={guide.profile_image}
                alt={guide.name}
                className="mb-4 h-32 w-full object-cover rounded-md"
              />
              <span className="text-gray-400">
                Joined: {guide?.createdAt?.substring(0, 10)}
              </span>
              <h3 className="text-xl font-semibold mb-2">{guide.name}</h3>
              <p className="text-gray-500 mb-4">
                Experience: {guide.experience}
              </p>
              <div className="flex justify-center items-center">
                <Link to={`/GuideDetails/${guide._id}`}>
                  <button className="bg-[#e1a66f] hover:bg-slate-400 text-white px-4 py-2 rounded-md">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PackageDetails;
