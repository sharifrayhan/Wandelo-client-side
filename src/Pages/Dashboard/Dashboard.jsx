import { useState } from "react";
import Navbar from "../Home/Components/Navbar";
import useCurrentUserInfo from "../Users/Hook/useCurrentUserInfo";
import AdminProfile from "./Admin Content/AdminProfile";
import AddPackage from "./Admin Content/AddPackage";
import ManageUsers from "./Admin Content/ManageUsers";
import TouristProfile from "./Tourist Content/TouristProfile";
import Bookings from "./Tourist Content/Bookings";
import Wishlist from "./Tourist Content/Wishlist";
import AssignedTours from "./Guide Content/AssignedTours";
import GuideProfile from "./Guide Content/GuideProfile";

const Dashboard = () => {
  const { userRole } = useCurrentUserInfo();
  const [selectedOption, setSelectedOption] = useState(null);

  const drawerOptions = {
    tourist: ["Tourist Profile", "My Bookings", "My Wishlist"],
    guide: ["Guide Profile", "My Assigned Tours"],
    admin: ["Admin Profile", "Add Packages", "Manage Users"],
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderSelection = () => {
    switch (selectedOption) {
      case "Admin Profile":
        return (
     
                <AdminProfile></AdminProfile>
        );
      case "Add Packages":
        return (
            <AddPackage></AddPackage>
        );

      case "Manage Users":
        return (
            <ManageUsers></ManageUsers>
        );

      case "Tourist Profile":
        return (
            <TouristProfile></TouristProfile>
        );

      case "My Bookings":
        return (
            <Bookings></Bookings>
        );

      case "My Wishlist":
        return (
            <Wishlist></Wishlist>
        );

      case "My Assigned Tours":
        return (
            <AssignedTours></AssignedTours>
        );

      case "Guide Profile":
        return (
            <GuideProfile></GuideProfile>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-1 min-h-screen bg-[#0C4848]">
      <Navbar />
      <div className="drawer z-0  mt-[7px] flex flex-col lg:flex-row gap-5 drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        


        <div className="drawer-side h-[150px] md:h-[150px] lg:h-screen ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full rounded-lg bg-[#37666B] text-base-content">
            {drawerOptions[userRole]?.map((option, index) => (
              <li
                key={index}
                className={`mb-2 text-white cursor-pointer ${
                  selectedOption === option ? "text-[#E1A66F]" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>

        <div className="drawer-content flex flex-col items-center ">
          {selectedOption && renderSelection()}
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
