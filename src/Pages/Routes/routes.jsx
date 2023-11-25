import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Errorpage from "../Errorpage/Errorpage";
import Rootpage from "../Root/Rootpage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AllStories from "../Home/Components/Stories/AllStories";
import StoryDetails from "../Home/Components/Stories/StoryDetails";
import AllPackages from "../../Packages/AllPackages";
import PackageDetails from "../../Packages/PackageDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootpage></Rootpage>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/Login",
          element: <Login></Login>,
        },
        {
          path: "/Register",
          element: <Register></Register>,
        },
        {
          path: "/AllStories",
          element: <AllStories></AllStories>,
        },
        {
          path: "/StoryDetails/:id",
          element: <StoryDetails></StoryDetails>,
        },
        {
          path: "/AllPackages",
          element: <AllPackages></AllPackages>
        },
        {
          path: "/PackageDetails/:id",
          element: <PackageDetails></PackageDetails>
        },
      ],
    }, 
  ]);

  export default router;
  