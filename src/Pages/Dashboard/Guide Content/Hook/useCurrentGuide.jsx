// import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from "../../../../Axios/useAxiosSecure";
import useCurrentUserInfo from "../../../Users/Hook/useCurrentUserInfo";
import useUsers from "../../../Users/Hook/useUsers";
import useGuidesFromUsers from "./useGuidesFromUsers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useCurrentGuide = () => {
  const { filteredGuides } = useGuidesFromUsers();
  const { userEmail } = useCurrentUserInfo();
  const { refetch } = useUsers();

  const currentGuide = filteredGuides?.find(
    (user) => user?.email === userEmail
  );

  const axiosSecure = useAxiosSecure();
  const currentGuideId = currentGuide?._id;

  const updateProfile = async (data) => {
    const { profile_image, cover_image, education, phone, skills, experience } =
      data;
    try {
      console.log(data);
      const id = currentGuideId;
    //   const url = `/users/${id}?email=${userEmail}`;
      const url = `/users/${id}`;
      const response = await axiosSecure.put(url, {
        profile_image: profile_image,
        cover_image: cover_image,
        education: education,
        phone: phone,
        skills: skills,
        experience: experience,
      });
      console.log(response);
      if (response.status == 200) {
        refetch();
        toast.success("Updated Profile");
      } else {
        toast.error("Error updating profile");
      }
    } catch (error) {
      console.error("Error updating profile", error.message);
      toast.error("Error updating profile. Please try again.");
    }
  };

  return { currentGuide, updateProfile };
};

export default useCurrentGuide;
