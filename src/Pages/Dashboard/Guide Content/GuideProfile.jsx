import Swal from 'sweetalert2';
import useCurrentGuide from './Hook/useCurrentGuide';

const GuideProfile = () => {
  const { currentGuide, updateProfile } = useCurrentGuide();

  const onSubmit = async (data) => {
    await updateProfile(data);
    Swal.fire({
      icon: 'success',
      title: 'Profile Updated!',
    });
  };


  const openEditForm = () => {
    Swal.fire({
      title: 'Edit Profile',
      html: `
        <form id="editForm" onSubmit="return false;">
        <label>Profile Picture</label>
        <input
          id="profile_image"
          name="profile_image"
          value="${currentGuide?.profile_image}"
          class="w-full border rounded p-2 mb-4"
        />

        <label>Cover Picture</label>
        <input
          id="cover_image"
          name="cover_image"
          value="${currentGuide?.cover_image}"
          class="w-full border rounded p-2 mb-4"
        />
        
        <label>Education</label>
          <input
            id="education"
            name="education"
            value="${currentGuide?.education}"
            class="w-full border rounded p-2 mb-4"
          />

          <label>Phone</label>
          <input
            id="phone"
            name="phone"
            value="${currentGuide?.phone}"
            class="w-full border rounded p-2 mb-4"
          />

          <label>Skills</label>
          <input
            id="skills"
            name="skills"
            value="${currentGuide?.skills.join(', ')}"
            class="w-full border rounded p-2 mb-4"
          />

          <label>Experience</label>
          <input
            id="experience"
            name="experience"
            value="${currentGuide?.experience}"
            class="w-full border rounded p-2 mb-4"
          />
        </form>
      `,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Update',
      cancelButtonText: 'Cancel',
      focusConfirm: false,
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = {
          education: document.getElementById('education').value,
          phone: document.getElementById('phone').value,
          skills: document.getElementById('skills').value.split(',').map((skill) => skill.trim()),
          experience: document.getElementById('experience').value,
        };
        onSubmit(formData);
      }
    });
  };

  return (
    <div>
    <div className=" mx-auto mt-10">
        
      <div className="flex flex-col gap-8 items-center">

        <div className="">
          <img
            src={currentGuide?.cover_image}
            className="mb-4 h-64 w-full object-cover rounded-md"
          />
        </div>

        <div className="-mt-10 text-center">
          <img
            src={currentGuide?.profile_image}
            className="mx-auto h-40 w-40 object-cover rounded-full border-4 border-white -mt-20 mb-4"
          />
          <h2 className="text-3xl font-semibold mb-2 text-white">{currentGuide?.name}</h2>
          <p className="text-[#f7f5f2] mb-2">Experience: {currentGuide?.experience}</p>
          <p className="text-[#f7f5f2] mb-2">Email: {currentGuide?.email}</p>
          <p className="text-[#f7f5f2] mb-2">Education: {currentGuide?.education}</p>
          <p className="text-[#f7f5f2] mb-2">Phone: {currentGuide?.phone}</p>
            <center>
                <div className="flex gap-2 mb-2">
                    {currentGuide?.skills &&
                    currentGuide?.skills.map((skill, index) => (
                        <span key={index} className="text-blue-500">
                        {skill}
                        </span>
                    ))}
                </div>
            </center>
        </div>

      </div>
      </div>
        <center>
            <button
            type="button"
            onClick={openEditForm}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            >
            Edit Profile
            </button>
        </center>
    </div>
  );
};

export default GuideProfile;
