import Navbar from "../Home/Components/Navbar";
import useRole from "../Users/Hook/useRole";

const Dashboard = () => {
  const { userRole } = useRole();
  const [selectedOption, setSelectedOption] = useState(null);

  const drawerOptions = {
    tourist: ["My Profile", "My Bookings", "My Wishlist"],
    guide: ["My Profile", "My Assigned Tours"],
    admin: ["My Profile", "Add Packages", "Manage Users"],
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderSelection = () => {
    switch (selectedOption) {
      case "My Profile":
        return (
<center>
<div>
            <h2 className="text-xl text-black">My Profile</h2>

            <p className="text-xl text-black">User Role: {userRole}</p>

          </div>
</center>
        );
      case "My Bookings":
        return (
          <div>
            <h2 className="text-xl text-black">My Bookings</h2>

            <p className="text-xl text-black">No bookings available</p>

          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-1">
      <Navbar />
      <div className="drawer mt-[50px] lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
 
        {selectedOption && renderSelection()}
  
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {drawerOptions[userRole]?.map((option, index) => (
              <li
                key={index}
                className={`mb-2 cursor-pointer ${
                  selectedOption === option ? "text-primary" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
