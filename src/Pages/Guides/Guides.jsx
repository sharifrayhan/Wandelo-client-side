import { Link } from "react-router-dom";
import Navbar from "../Home/Components/Navbar";
import useGuidesFromUsers from "../Dashboard/Guide Content/Hook/useGuidesFromUsers";
import useUsers from "../Users/Hook/useUsers";

const Guides = () => {
  const { isLoading, error } = useUsers();
  const { filteredGuides } = useGuidesFromUsers();

  return (
    <div className="p-1 bg-[#0C4848] min-h-screen">
      <Navbar></Navbar>
      <center>
        <h1 className="text-2xl text-[#f7f5f2] my-3">Our Guides</h1>
      </center>
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

export default Guides;
