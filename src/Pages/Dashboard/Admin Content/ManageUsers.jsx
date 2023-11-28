import useUsers from "../../Users/Hook/useUsers";
import Swal from 'sweetalert2';
import { useState } from 'react';
import useAxiosSecure from "../../../Axios/useAxiosSecure";
import useCurrentUserInfo from "../../Users/Hook/useCurrentUserInfo";

const ManageUsers = () => {
  const { allUsers, refetch } = useUsers();
  const { userEmail, currentUserId } = useCurrentUserInfo()
  const [openDropdownId, setOpenDropdownId] = useState(null);


  const axiosSecure = useAxiosSecure()

  const handleDeleteUser = async (userId) => {
    const id = userId
    const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
        try {
            const url =`/users/${id}?email=${userEmail}`
            const response = await axiosSecure.delete(url, id);
            // const data = response.data;
            console.log(response)

            if (response.status == 200) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
                    refetch()

            } else {
                Swal.fire('Failed to Delete!');
            }
        } catch (error) {
            console.error('Error occurred during deletion:', error);
            Swal.fire('Failed to Delete!', '', 'error');
        }
    }
};

  const handleUpdateRole = async (userId, newRole) => {
    try {
        const id= userId
        const url =`/users/${id}?email=${userEmail}`
        const response = await axiosSecure.put(url, {role: newRole});
        // const data = response.data;
        console.log(response)

        if (response.status == 200) {
            Swal.fire(
                'Updated!',
                'User role has been updated.',
                'success'
            );
                refetch()

        } else {
            Swal.fire('Failed to Update!');
        }
    } catch (error) {
        console.error('Error occurred during update:', error);
        Swal.fire('Failed to Update!', '', 'error');
    }
    console.log(`Update role for user ${userId} to ${newRole}`);
    setOpenDropdownId(null);
  };

  const toggleDropdown = (userId) => {
    setOpenDropdownId((prevId) => (prevId === userId ? null : userId));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs md:table-md lg:table-md text-[#f7f5f2]">
        <thead>
          <tr className="text-[#f7f5f2]">
            <th>Serial</th>
            <th>Name</th>
            <th>Email</th>
            <th>Current Role</th>
            <th>Make Admin</th>
            <th>Make Guide</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.map((user, index) => (
            <tr key={user?._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user?.photoURL} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user?.name}</div>
                    <div className="text-sm opacity-50">{user?.email}</div>
                  </div>
                </div>
              </td>
              <td>{user?.email}</td>
              <td>{user?.role}</td>
              <td                   title={
                    user?.role === 'admin' ? 'User is already an admin' :
                    user?.role === 'guide' ? 'User is already a guide' :
                    user?._id === currentUserId ? "You can't change your own role" :
                    ''
                  }>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleUpdateRole(user?._id, 'admin')}
                  disabled={user?.role === 'admin' || user?._id === currentUserId}

                >
                  Make Admin
                </button>
              </td>
              <td                 title={
                    user?.role === 'guide' ? 'User is already a guide' :
                    user?.role === 'admin' ? 'User is already an admin' :
                    user?._id === currentUserId ? "You can't change your own role" :
                    ''
                  }>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleUpdateRole(user?._id, 'guide')}
                  disabled={user?.role === 'guide' || user?.role === 'admin' || user?._id === currentUserId}
  
                  
                >
                  Make Guide
                </button>
              </td>
              <td  title={user?._id === currentUserId ? "You can't delete yourself" : ''}>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleDeleteUser(user?._id)}
                  disabled={user?._id === currentUserId}
                 
                >
                  <img className="h-5" src="https://i.ibb.co/BVL97Xn/delete-friend.png" alt="Delete" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;