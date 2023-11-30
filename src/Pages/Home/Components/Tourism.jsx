import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { motion } from 'framer-motion';
import "react-tabs/style/react-tabs.css";
// import useGuides from "../../Guides/Hook/useGuides";
import usePackages from "../../../Packages/Hook/usePackages";
// import { useState } from "react";
import useWishlist from "../../Dashboard/Tourist Content/Hook/useWishlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCurrentUserInfo from "../../Users/Hook/useCurrentUserInfo";
import v1 from "../../../assets/videos/1 v.mp4"
import v2 from "../../../assets/videos/2.mp4"
import v3 from "../../../assets/videos/3.mp4"
import v4 from "../../../assets/videos/4.mp4"
import vm from "../../../assets/videos/middle.mp4"


const guidesData = [
   {
    _id: "656634fa1136f8ec80c0667a",
    name: "Nevaan Ahmed",
    profile_image: "https://i.ibb.co/5nV25Bf/Nevaan-Ahmed.png",
    experience: "5 years"
    },

    {
    _id: "656634fa1136f8ec80c0667b",
    name: "Preyota Jannam",
    profile_image: "https://i.ibb.co/kgd3kHv/Preyota-Jannam.png",
     experience: "5 years"
    },

    {
    _id: "656634fa1136f8ec80c0667c",
    name: "Umong-Jai",
    profile_image: "https://i.ibb.co/zr0wwMd/Umong-Jai.png",
    experience: "5 years"
    }
];

const Tourism = () => {
  // const { allGuides } = useGuides();
  const { allPackages } = usePackages();
  const { addToWishlist } = useWishlist();
  const { userRole } = useCurrentUserInfo()

  const overviewContent = (
<div className="mx-auto  mb-5">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <div className="flex items-center justify-center gap-2">
        <div className="flex gap-2  flex-col">
          <motion.video autoPlay loop muted src={v1} className="rounded-md w-[350px] shadow-md" />
          <motion.video autoPlay loop muted src={v2} className="rounded-md w-[350px] shadow-md" />
        </div>
        <motion.video autoPlay loop muted src={vm} className="rounded-md w-[228px] shadow-md" />
        <div className="flex gap-2 flex-col">
          <motion.video autoPlay loop muted src={v3} className="rounded-md w-[350px] shadow-md" />
          <motion.video autoPlay loop muted src={v4} className="rounded-md  w-[350px] shadow-md" />
        </div>
      </div>
    </div>
  );

  const handleButtonClick = (id) => {
    try {
        addToWishlist(id);
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }}

    const packagesContent = (
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Packages</h2>
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-8">
          {allPackages?.slice(0, 3).map((p) => (
            <div
              key={p?._id}
              className="relative bg-[#f7f5f2] w-[260px] h-[350px] p-4 rounded-md shadow-md transition-transform transform "
            >
              <div className=" mb-4">
                <img
                  src={p?.image}
                  className="h-[160px] rounded-md"
                />
              </div>
              <h3 className="text-lg h-[60px] text-black font-semibold mb-2">{p?.tourTitle}</h3>
              <p className="text-gray-500 mb-2">{p?.tourType}</p>
              <p className="text-gray-700 mb-2">Price: {p?.price} TK</p>
              <Link to={`/PackageDetails/${p?._id}`}>
                <button className="bg-[#577a7d] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                  View Package
                </button>
              </Link>
              <button
                className="absolute hover:scale-150 top-2 right-2 bg-transparent border-none focus:outline-none"
                onClick={() => handleButtonClick(p?._id)}
                disabled={!userRole=="tourist"}
              >
                <img
                  className="h-5"
                  src="https://i.ibb.co/n0Br4jS/heart-full.png"
                />
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-9">
          <Link to="/AllPackages">
            <button className="bg-[#e1a66f] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#d18d5a] transition duration-300">
              View All Packages
            </button>
          </Link>
        </div>
      </div>
    );

  const tourGuidesContent = (
    <center>
      <div>
        <h2>Meet Our Tour Guides</h2>
        <div>
          <div className="flex items-center justify-center flex-wrap gap-4">
            {guidesData?.slice(0, 3).map((g) => (
              <div key={g?._id} className=" p-4 rounded-md shadow-md">
                <img
                  src={g?.profile_image}
                  alt="Tour Guide 1"
                  className="mb-2 h-[200px] rounded-full"
                />
                <h3 className="text-lg text-[#f7f5f2] font-semibold">{g?.name}</h3>
                <p className="text-gray-300 mb-2">
                  Experience: {g?.experience}
                </p>
                <Link to={`/GuideDetails/${g?._id}`}>
                  <button className="bg-[#577a7d] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                    Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
          <center className="mt-3">
            <Link to="/Guides">
              <button className="bg-[#e1a66f] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#d18d5a] transition duration-300">
                All Guides
              </button>
            </Link>
          </center>
        </div>
      </div>
    </center>
  );

  return (
    <center className="mb-3 text-[#F7F5F2]  p-4 rounded-b-[80px] bg-[#0C4848]">
      <ToastContainer></ToastContainer>
      <div>
        <h1 className="text-4xl  font-bold mb-6">Tourism and Travel Guides</h1>
        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Our Packages</Tab>
            <Tab>Our Tour Guides</Tab>
          </TabList>

          <TabPanel>{overviewContent}</TabPanel>
          <TabPanel>{packagesContent}</TabPanel>
          <TabPanel>{tourGuidesContent}</TabPanel>
        </Tabs>
      </div>
    </center>
  );
};

export default Tourism;
