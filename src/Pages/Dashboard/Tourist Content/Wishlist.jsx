import useWishlist from "./Hook/useWishlist";

const Wishlist = () => {
  const { allWishList, deleteWishlist, refetch } = useWishlist();

  const handleDelete = (id) =>{
    deleteWishlist(id)
    refetch()
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Your Wishlist</h1>
      {allWishList?.length === 0 && <p>Your wishlist is empty.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allWishList?.map((item) => (
          <div
            key={item?._id}
            className="bg-white shadow-lg rounded-md p-4 overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={item?.package.image}
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold mb-2">{item?.package?.tourTitle}</h2>
            <p className="text-gray-600 mb-4">{item?.package?.tourType}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">${item?.package?.price}</span>
              <button
                onClick={() => handleDelete(item?._id)}
                className="text-red-500 hover:text-red-700 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
