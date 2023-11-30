import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import useStories from "./Hook/useStories";


const AllStories = () => {

    const { allStories, isLoading, error } = useStories()

    return (
<div className="p-1 bg-[#0C4848] min-h-screen">
     <Navbar></Navbar>
      <center>
        <h1 className="text-2xl text-[#f7f5f2] my-3">Tour Stories</h1>
      </center>
      <div className=" items-center justify-center mt-10 flex flex-wrap gap-4">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {allStories &&
          allStories?.map((s) => (
            <div
              key={s?._id}
              className="bg-[#f7f5f2] h-[400px] w-[200px] flex flex-col justify-between text-center p-6 rounded-lg shadow-lg"
            >
              <img
                src={s?.profile_image}
                className="mb-4  rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{s?.name}</h3>
              <p className="text-gray-500 line-clamp-3 mb-4">
                Story : {s?.content}
              </p>
              <div className="flex justify-center items-center">
                <Link to={`/StoryDetails/${s?._id}`}>
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

export default AllStories;