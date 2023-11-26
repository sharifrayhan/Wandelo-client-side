import { Link } from "react-router-dom";

const PackageCard = ({ singlePackage }) => {
    const { _id,place, image, tourTitle, details, price } = singlePackage;

    return (
        <div className="relative bg-gray-800 text-white rounded-lg h-[300px] overflow-hidden shadow-lg mx-auto w-64 sm:w-96">
            <img src={image} alt={place} className="w-full h-[300px] object-fit  " />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                    <h2 className="text-xl font-semibold mb-2">{tourTitle}</h2>
                    <p className="text-gray-300 mb-4">{place}</p>
                    <p className="text-gray-300 text-sm">{details}</p>
                    <p className="text-gray-300 text-sm">Price: ${price}</p>
                <Link to={`/PackageDetails/${_id}`}>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Details
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;


