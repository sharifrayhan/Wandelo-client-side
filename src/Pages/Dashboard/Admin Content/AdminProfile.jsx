import useCurrentUserInfo from "../../Users/Hook/useCurrentUserInfo";

const AdminProfile = () => {
  const { userRole, userPhoto, userEmail, userName } = useCurrentUserInfo();

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
    </center>
  );
};

export default AdminProfile;

