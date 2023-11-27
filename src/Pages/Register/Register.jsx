import { useForm } from 'react-hook-form';
import Navbar from '../Home/Components/Navbar';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../Context/AllContext';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const {handleRegister} = useContext(Context)

  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data);
    handleRegister(data, navigate)
  };

  return (
    <div className=" bg-[url(https://i.ibb.co/n8rm5BH/bg-2.jpg)] bg-cover">
      <Navbar></Navbar>
      <div className="flex items-center justify-center min-h-screen">
        <div className=" p-8 rounded shadow-md bg-white w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-6">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email:
              </label>
              <input
                type="text"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/i,
                    message: 'Please enter a valid email address',
                  },
                })}
                className={`form-input mt-1 p-2 w-full ${
                  errors?.email ? 'border-red-500' : ''
                }`}
              />
              {errors?.email && (
                <span className="text-red-500 text-xs">
                  {errors?.email.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Name:
              </label>
              <input
                type="text"
                {...register('name', {
                  required: 'Name is required',
                })}
                className={`form-input mt-1 p-2 w-full ${
                  errors?.name ? 'border-red-500' : ''
                }`}
              />
              {errors?.name && (
                <span className="text-red-500 text-xs">
                  {errors?.name.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Profile Photo:
              </label>
              <input
                type="file"
                {...register('photo', {
                  required: 'Profile photo is required',
                })}
                className={`form-input mt-1 p-2 w-full ${
                  errors?.photo ? 'border-red-500' : ''
                }`}
              />
              {errors?.photo && (
                <span className="text-red-500 text-xs">
                  {errors?.photo.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Desired Role:
              </label>
              <select
                {...register('desiredRole', {
                  required: 'Role is required',
                })}
                className={`form-select mt-1 p-2 w-full ${
                  errors?.role ? 'border-red-500' : ''
                }`}
              >
                <option value="">Select Role</option>
                <option value="tourist">Tourist</option>
                <option value="guide">Guide</option>
              </select>
              {errors?.role && (
                <span className="text-red-500 text-xs">
                  {errors?.role.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Password:
              </label>
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
                className={`form-input mt-1 p-2 w-full ${
                  errors?.password ? 'border-red-500' : ''
                }`}
              />
              {errors?.password && (
                <span className="text-red-500 text-xs">
                  {errors?.password.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Confirm Password:
              </label>
              <input
                type="password"
                {...register('confirmPassword', {
                  validate: (value) =>
                    value === watch('password') || 'Passwords do not match',
                })}
                className={`form-input mt-1 p-2 w-full ${
                  errors?.confirmPassword ? 'border-red-500' : ''
                }`}
              />
              {errors?.confirmPassword && (
                <span className="text-red-500 text-xs">
                  {errors?.confirmPassword.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <input
                type="checkbox"
                id="terms"
                {...register('terms', {
                  required: 'You have to accept our terms & conditions',
                })}
              />
              <label
                className="ml-2 text-sm text-gray-600"
                htmlFor="terms"
              >
                Accept Terms & Conditions
              </label>
              {errors?.terms && (
                <span className="text-red-500 text-xs">
                  {errors?.terms.message}
                </span>
              )}
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
