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
            <th>Role</th>
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
              <td>
                <div className="relative inline-block text-left ml-2">
                  <button
                    type="button"
                    className="btn btn-ghost btn-xs"
                    onClick={() => toggleDropdown(user?._id)}
                    aria-haspopup="true"
                    aria-expanded={openDropdownId === user?._id}
                  >
                    {user.role}
                  </button>
                  {openDropdownId === user._id && (
                    <div
                      className="origin-top-right absolute right-0 -mt-[150px] w-40 rounded-md shadow-lg bg-[#577a7d] ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby={`userRoleDropdown${user?._id}`}
                    >
                        {user?._id !== currentUserId &&
                      <div className="py-1 z-50" role="menuitem" aria-disabled="true">
                        {user?.role === 'admin' &&  (
                          <button
                            className="text-gray-500 block px-4 py-2 text-sm cursor-not-allowed"
                            onClick={() => handleUpdateRole(user?._id, 'admin')}
                            disabled
                          >
                            Admin
                          </button>
                        )}
                        {user?.role !== 'admin' && (
                          <button
                            className="text-gray-700 block px-4 py-2 text-sm"
                            onClick={() => handleUpdateRole(user?._id, 'admin')}
                          >
                            Admin
                          </button>
                        )}
                        {user?.role === 'tourist' && (
                          <button
                            className="text-gray-500 block px-4 py-2 text-sm cursor-not-allowed"
                            disabled
                            onClick={() => handleUpdateRole(user?._id, 'tourist')}
                          >
                            Tourist
                          </button>
                        )}
                        {user?.role !== 'tourist' && (
                          <button
                            className="text-gray-700 block px-4 py-2 text-sm"
                            onClick={() => handleUpdateRole(user?._id, 'tourist')}
                          >
                            Tourist
                          </button>
                        )}
                        {user?.role === 'guide' && (
                          <button
                            className="text-gray-500 block px-4 py-2 text-sm cursor-not-allowed"
                            onClick={() => handleUpdateRole(user?._id, 'guide')}
                            disabled
                          >
                            Guide
                          </button>
                        )}
                        {user?.role !== 'guide' && (
                          <button
                            className="text-gray-700 block px-4 py-2 text-sm"
                            onClick={() => handleUpdateRole(user?._id, 'guide')}
                          >
                            Guide
                          </button>
                        )}
                      </div>
                      }
                    </div>
                  )}
                </div>
              </td>
              <td>
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
