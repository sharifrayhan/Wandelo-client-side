import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../../Axios/useAxiosSecure';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStories = () => {
    const axiosSecure = useAxiosSecure()
  const { data: allStories, isLoading, error } = useQuery({
    queryFn: async () => {
      const response = await axiosSecure.get('/stories');
      return response.data;
    },
    queryKey: ['stories'],
  });


  const postStory = async (data) => {
    try {
      console.log(data);
      const response = await axiosSecure.post('/stories', data);
      console.log(response);
      if (response.status == 201) {
        toast.success("Story Posted");
      } else {
        toast.error("Error posting story");
      }
    } catch (error) {
      console.error("Error posting story", error.message);
      toast.error("Error posting story. Please try again.");
    }
  };

  return { allStories, postStory, isLoading, error };
};

export default useStories;
