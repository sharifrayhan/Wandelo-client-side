import useCurrentUserInfo from "../../Users/Hook/useCurrentUserInfo";
import { useForm } from 'react-hook-form';


const TouristProfile = () => {
  const { userRole, userPhoto, userEmail, userName } = useCurrentUserInfo();
  const { register, handleSubmit } = useForm();


  const onSubmit = async (data) => {

  }

  return (
    <center className="flex flex-col items-center justify-center mt-8">
      <div className="bg-[#F7F5F2] w-[300px] p-8 rounded-lg shadow-md border border-gray-300">
        <div className="mb-6">
          <img
            src={userPhoto}
            className="w-20 h-20 rounded-full object-cover border-2 border-[#E1A66F]"
          />
        </div>
        <p className="text-gray-500">{userRole}</p>
        <h2 className="text-2xl font-bold mb-2">{userName}</h2>
        <p className="text-gray-600 mb-4">{userEmail}</p>
        
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <center className="text-xl text-[#f7f5f2] mb-2"><h1>Add a Story</h1></center>
        <input type="hidden" {...register('name')} value={userName} />
        {/* <input type="hidden" {...register('email')} value={userEmail} /> */}
        <input type="hidden" {...register('profile_image')} value={userPhoto} />
        <div className="flex gap-2 text-[#f7f5f2]">
          <label>Title</label>
          <input {...register('title')} className="w-[55%] bg-[#577a7d] border rounded p-2 mb-4" />
        </div>


        <div className="flex gap-2 text-[#f7f5f2] ">
            <label>Content</label>
            <textarea {...register('content')} className="w-full bg-[#577a7d] border rounded p-2 mb-4" />
        </div>

        <button type="submit" className="bg-[#e1a66f] hover:bg-slate-400 text-white px-4 py-2 rounded-md">
          Add Story
        </button>
      </form>

    </center>
  );
};

export default TouristProfile;