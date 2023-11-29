import { Link } from 'react-router-dom';
import usePackages from '../../../../Packages/Hook/usePackages';
import useCurrentUserInfo from '../../../Users/Hook/useCurrentUserInfo';
import useWishlist from '../../../Dashboard/Tourist Content/Hook/useWishlist';
import Navbar from '../Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wildlife= () => {
  const { allPackages } = usePackages();
  const { userRole } = useCurrentUserInfo()
  const { addToWishlist } = useWishlist();

  const beachPackages = allPackages.filter((p) =>
    p.tourType.toLowerCase().includes('wildlife')
  );

  const handleButtonClick = (id) => {
    try {
        addToWishlist(id);
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }}

  return (
    <div>
        <ToastContainer></ToastContainer>
        <Navbar></Navbar>
        <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Wildlife Tour Packages</h2>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-8">
        {beachPackages?.map((p) => (
          <div
            key={p?._id}
            className="relative bg-[#f7f5f2] w-[260px] h-[350px] p-4 rounded-md shadow-md transition-transform transform "
          >
            <div className="mb-4">
              <img src={p?.image} className="h-[160px] rounded-md" alt={p?.tourTitle} />
            </div>
            <h3 className="text-lg h-[60px] text-black font-semibold mb-2">{p?.tourTitle}</h3>
            <p className="text-gray-500 mb-2">{p?.tourType}</p>
            <p className="text-gray-700 mb-2">Price: {p?.price} TK</p>
            <Link to={`/PackageDetails/${p?._id}`}>
                <center>
                    <button className="bg-[#577a7d] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                    View Package
                    </button>
                </center>
            </Link>
            <button
              className="absolute hover:scale-150 top-2 right-2 bg-transparent border-none focus:outline-none"
              onClick={() => handleButtonClick(p?._id)}
              disabled={userRole !== 'tourist'}
            >
              <img className="h-5" src="https://i.ibb.co/n0Br4jS/heart-full.png" alt="heart" />
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Wildlife;
