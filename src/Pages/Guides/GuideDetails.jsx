import { useParams } from "react-router-dom";
import useGuides from "./Hook/useGuides";
import { useState } from "react";

const GuideDetails = () => {
  const { _id } = useParams();
  const { allGuides } = useGuides();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const selectedGuide = allGuides.find((guide) => guide._id.toString() === _id);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const submitReview = () => {
    // Handle submitting the review (e.g., send it to the server)
    // Reset the state after submitting if needed
    setRating(0);
    setReview("");
  };

  return (
    <div className="container mx-auto mt-10">
      {selectedGuide ? (
        <div>
          <div className="flex flex-col  gap-8">
            <div className="md:w-1/2">
              <img
                src={selectedGuide.cover_image}
                alt={selectedGuide.name}
                className="mb-4 h-64 w-full object-cover rounded-md"
              />
            </div>
            <div className="md:w-1/2">
              <div className="text-center flex flex-col justify-center items-center mb-4">
                <img
                  src={selectedGuide.profile_image}
                  alt={selectedGuide.name}
                  className="mx-auto h-40 w-40 object-cover rounded-full border-4 border-white -mt-20"
                />
              </div>
              <h2 className="text-3xl font-semibold mb-2">{selectedGuide.name}</h2>
              <p className="text-gray-500 mb-2">Experience: {selectedGuide.experience}</p>
              <p className="text-gray-500 mb-2">Email: {selectedGuide.email}</p>
              <p className="text-gray-500 mb-2">Education: {selectedGuide.education}</p>
              <p className="text-gray-500 mb-2">Phone: {selectedGuide.phone}</p>
              <div className="flex gap-2 mb-4">
                {selectedGuide.skills &&
                  selectedGuide.skills.map((skill, index) => (
                    <span key={index} className="text-blue-500">
                      {skill}
                    </span>
                  ))}
              </div>
              <p className="text-gray-700">{/* Add other guide details here */}</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
            {/* Review Section */}
            <div className="mb-4">
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => handleRatingChange(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                Review
              </label>
              <textarea
                id="review"
                name="review"
                rows="4"
                value={review}
                onChange={handleReviewChange}
                className="mt-1 p-2 border rounded-md w-full"
              ></textarea>
            </div>
            <button
              onClick={submitReview}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit Review
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GuideDetails;
