import { useForm } from 'react-hook-form';
import Navbar from '../Home/Components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../Context/AllContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosSecure from '../../Axios/useAxiosSecure'
import SocialLogin from '../Social Login/SocialLogin';

const Register = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
    } = useForm();
  
    const axiosSecure = useAxiosSecure();

    // Toasts
    const notifyRoleApproval = () => toast('Your registration as a guide is pending admin approval.',);
    const notifyToLogin = () => toast('Please Login to Continue',);
    const notifyServerInput = () => toast('Your info is saved on server',);
  
    const { createUser, updateProfile, logOut } = useContext(Context);
  
    const navigate = useNavigate();
  
    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const url = data.photo;
        const desiredRole = data.desiredRole;
      
        createUser(email, password)
          .then((result) => {
            updateProfile(result.user, {
              displayName: name,
              photoURL: url,
            });
      
            const userData = {
              name: name,
              email: email,
              profile_image: url,
              desiredRole: desiredRole,
            };
      
            axiosSecure.post('/users', userData)
              .then(response => {
                console.log('Server response:', response);
                notifyServerInput();
                if (desiredRole === 'guide') {
                    notifyRoleApproval();
                  }
                  notifyToLogin(); 
              })
              .catch(error => {
                console.error('Error posting data to server:', error);
              });
              
              logOut() 
            navigate('/Login');
          })
          .catch((error) => {
            const notifyRegisterError = () => toast.error(error.message)
            notifyRegisterError()
            console.error(error);
          });
      };
      

  return (
    <div className="bg-[url(https://i.ibb.co/n8rm5BH/bg-2.jpg)] bg-cover">
        <ToastContainer/>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-8 rounded shadow-md bg-[#0A7443] w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
          <h2 className="text-2xl text-[#f7f5f2] font-semibold mb-6">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                <label className="block text-sm font-medium text-[#f7f5f2]">Email:</label>
                <input
                    type="text"
                    {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^\S+@\S+\.\S+$/i,
                        message: 'Please enter a valid email address',
                    },
                    })}
                    className={`form-input bg-[#f7f5f2] mt-1 p-2 w-full ${errors?.email ? 'border-red-500' : ''}`}
                />
                {errors?.email && (
                    <span className="text-red-500 text-xs">{errors?.email.message}</span>
                )}
                </div>

                <div className="mb-4">
                <label className="block text-sm font-medium text-[#f7f5f2]">Name:</label>
                <input
                    type="text"
                    {...register('name', {
                    required: 'Name is required',
                    })}
                    className={`form-input bg-[#f7f5f2] mt-1 p-2 w-full ${errors?.name ? 'border-red-500' : ''}`}
                />
                {errors?.name && (
                    <span className="text-red-500 text-xs">{errors?.name.message}</span>
                )}
                </div>

                <div className="mb-4">
                <label className="block text-sm font-medium text-[#f7f5f2]">Profile Photo (URL):</label>
                <input
                    type="text"
                    {...register('photo', {
                    required: 'Profile photo URL is required',
                    })}
                    className={`form-input bg-[#f7f5f2] mt-1 p-2 w-full ${errors?.photo ? 'border-red-500' : ''}`}
                />
                {errors?.photo && (
                    <span className="text-red-500 text-xs">{errors?.photo.message}</span>
                )}
                </div>

                <div className="mb-4">
                <label className="block text-sm font-medium text-[#f7f5f2]">Desired Role:</label>
                <select
                    {...register('desiredRole', {
                    required: 'Role is required',
                    })}
                    className={`form-select bg-[#f7f5f2] mt-1 p-2 w-full ${errors?.role ? 'border-red-500' : ''}`}
                >
                    <option value="">Select Role</option>
                    <option value="tourist">Tourist</option>
                    <option value="guide">Guide</option>
                </select>
                {errors?.role && (
                    <span className="text-red-500 text-xs">{errors?.role.message}</span>
                )}
                </div>

                <div className="mb-4">
                <label className="block text-sm font-medium text-[#f7f5f2]">Password:</label>
                <input
                    type="password"
                    {...register('password', {
                    required: 'Password is required',
                    minLength: {
                        value: 6,
                        message: 'Password should be at least 6 characters long',
                    },
                    pattern: {
                        value: /(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])/,
                        message:
                        'Password must contain an uppercase letter and a special character',
                    },
                    })}
                    className={`form-input bg-[#f7f5f2] mt-1 p-2 w-full ${errors?.password ? 'border-red-500' : ''}`}
                />
                {errors?.password && (
                    <span className="text-red-500 text-xs">{errors?.password.message}</span>
                )}
                </div>

                <div className="mb-4">
                <label className="block text-sm font-medium text-[#f7f5f2]">Confirm Password:</label>
                <input
                    type="password"
                    {...register('confirmPassword', {
                    validate: (value) =>
                        value === watch('password') || 'Passwords do not match',
                    })}
                    className={`form-input bg-[#f7f5f2] mt-1 p-2 w-full ${
                    errors?.confirmPassword ? 'border-red-500' : ''
                    }`}
                />
                {errors?.confirmPassword && (
                    <span className="text-red-500 text-xs">{errors?.confirmPassword.message}</span>
                )}
                </div>
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                {...register('terms', {
                  required: 'You have to accept our terms & conditions',
                })}
              />
              <label className="ml-2 text-sm text-[#f7f5f2]" htmlFor="terms">
                Accept Terms & Conditions
              </label>
              {errors?.terms && (
                <span className="text-red-500 text-xs">{errors?.terms.message}</span>
              )}
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="bg-blue-500 text-[#f7f5f2] py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Register
              </button>
            </div>
            <center className=' my-3'>
            <p className="text-black">
              Already have an account?{' '}
              <Link className="text-red-600" to="/Login">
                Login
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
