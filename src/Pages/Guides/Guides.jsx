import { Link } from "react-router-dom";
import Navbar from "../Home/Components/Navbar";
import useGuides from "./Hook/useGuides";

const Guides = () => {
    const { allGuides, isLoading, error } = useGuides();

    return (
        <div className="p-1">
            <Navbar></Navbar>
            <div className=" items-center justify-center mt-10 flex flex-wrap gap-4">
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {allGuides &&
                    allGuides.map((guide) => (
                        <div key={guide._id} className="bg-white p-6 rounded-lg shadow-lg">
                            <img src={guide.profile_image} alt={guide.name} className="mb-4 h-32 w-full object-cover rounded-md" />
                            <h3 className="text-xl font-semibold mb-2">{guide.name}</h3>
                            <p className="text-gray-500 mb-4">Experience: {guide.experience}</p>
                            <div className="flex justify-between items-center">
                                <Link to={`/GuideDetails/${guide._id}`}><button className="bg-blue-500 text-white px-4 py-2 rounded-md">Details</button></Link>
                                <span className="text-gray-400">Joined: {guide.joinedDate}</span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Guides;
