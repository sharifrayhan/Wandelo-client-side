import { Link } from "react-router-dom";
import useWishlist from "./Hook/useWishlist";

const Wishlist = () => {
  const { currentUserWishlist, deleteWishlist, refetch } = useWishlist();

  const handleDelete = (id) => {
    deleteWishlist(id);
    refetch();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto text-[#f7f5f2]">
        <table className="table">
          <thead>
            <tr className="text-[#f7f5f2]">
              <th>Serial No.</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {currentUserWishlist?.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>{item?.package?.tourTitle}</td>
                <td>{item?.package?.price}</td>
                {/* <td>${item?.package?.price}</td> */}
                <td>
                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="text-red-500 hover:text-red-700 transition duration-300"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/PackageDetails/${item?.package?._id}`}><button className="btn btn-ghost btn-xs">View Details</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
