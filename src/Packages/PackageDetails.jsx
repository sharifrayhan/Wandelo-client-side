import { useParams } from "react-router-dom";
import usePackages from "./Hook/usePackages";
import Navbar from "../Pages/Home/Components/Navbar";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PackageDetails = () => {
  const { _id } = useParams();
  const { allPackages } = usePackages();

  const selectedPackage = allPackages.find((s) => s._id.toString() === _id);

  const { place, image, tourTitle, price, details, tourPlan, spotImages } = selectedPackage;

  const { register, handleSubmit, setValue, watch } = useForm();
  const selectedTourDate = watch("tourDate");

  const handleInputChange = (name, value) => {
    setValue(name, value);
  };

  const onSubmit = (data) => {
    // Implement your booking submission logic here
    console.log("Booking submitted:", data);
  };

  const spotGallery = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {spotImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Spot ${index + 1}`}
          className="w-full h-[240px] object-cover rounded-md shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        />
      ))}
    </div>
  );

  const tourPlanDetails = () => (
    <div className="text-left mb-8">
      {Object.keys(tourPlan).map((day, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-2xl font-bold mb-2">{day}</h2>
          <p className="text-gray-700">{tourPlan[day].join(", ")}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-1 min-h-screen bg-[#0C4848]">
      <Navbar></Navbar>
      <div className="container mx-auto mt-[100px] bg-white p-8 rounded-md shadow-lg">
        <center>
          <h1 className="text-3xl font-bold mb-4">{tourTitle}</h1>
          <img
            src={image}
            alt={place}
            className="relative w-full h-[800px] rounded-md shadow-lg mb-4 overflow-hidden"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-8xl font-bold">{place}</h2>
          </div>
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
          <div className="mb-8 border border-3 border-red-500 max-w-[300px] p-4">
            <h2 className="text-2xl font-bold mb-4">Book Now</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 w-[230px]">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register("name", { required: true })}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4 w-[230px]">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4 ">
                <label htmlFor="tourDate" className="block text-sm font-semibold text-gray-700">
                  Tour Date:
                </label>
                <DatePicker
                  id="tourDate"
                  name="tourDate"
                  selected={selectedTourDate}
                  onChange={(date) => handleInputChange("tourDate", date)}
                  className="w-[230px] px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  dateFormat="MMMM d, yyyy"
                  required
                />
              </div>
              <div className="mb-4 w-[230px]">
                <label htmlFor="tourGuide" className="block text-sm font-semibold text-gray-700">
                  Tour Guide:
                </label>
                <select
                  id="tourGuide"
                  name="tourGuide"
                  {...register("tourGuide", { required: true })}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                >
                  {/* Guide Names */}
                  <option value="">Select Tour Guide</option>
                  <option value="guide1">Tour Guide 1</option>
                  <option value="guide2">Tour Guide 2</option>

                </select>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600"
                // disabled={!user || user.role !== "tourist"}
              >
                Book Now
              </button>
            </form>
          </div>


              </center>
    </div>
  );
};

export default PackageDetails;
