import { useContext } from "react";
import { Context } from "../../Context/AllContext";
import useUsers from "../Users/Hook/useUsers";
import useAxiosSecure from "../../Axios/useAxiosSecure";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn, logOut } = useContext(Context);
  const { allUsers } = useUsers();
  const axiosSecure = useAxiosSecure();

  const notifyToLogin = () => toast("Please Login to Continue");
  const notifyServerInput = () => toast("Your info is saved on the server");

  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const loggedUser = res.user;
        const userData = {
          name: loggedUser?.displayName,
          email: loggedUser?.email,
          profile_image: loggedUser?.photoURL,
          // desiredRole: "tourist",
        };
        const existingUser = allUsers?.find(
          (user) => user?.email === loggedUser?.email
        );
        if (!existingUser) {
          axiosSecure
            .post("/users", userData)
            .then((response) => {
              console.log("Server response:", response);
              notifyServerInput();
              notifyToLogin();
            })
            .catch((error) => {
              console.error("Error posting data to server:", error);
            });

          logOut();
          navigate("/Login");
        } else {
          // User already exists,
          navigate(location?.state ? location.state : "/");
          console.log("User with this email already exists");
        }
      })
      .catch((error) => {
        const notifyRegisterError = () => toast.error(error.message);
        notifyRegisterError();
        console.error(error);
      });
  };

  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
