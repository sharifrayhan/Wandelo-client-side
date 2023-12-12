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
import Guides from "../Guides/Guides";
import GuideDetails from "../Guides/GuideDetails";
import Dashboard from "../Dashboard/Dashboard";
import Beach from "../Home/Components/TourTypes/Beach";
import Hiking from "../Home/Components/TourTypes/Hiking";
import Nature from "../Home/Components/TourTypes/Nature";
import Wildlife from "../Home/Components/TourTypes/WildLife";
import PrivateRoute from "./PrivateRoute";
import Chatbox from "../Home/Components/Chatbox";



const router = createBrowserRouter([
    {
      path: "/",
      element:(
        <>
          <Rootpage></Rootpage>
          <Chatbox />
        </>
      ),
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
          element: <PrivateRoute><StoryDetails></StoryDetails></PrivateRoute> ,
        },
        {
          path: "/AllPackages",
          element: <AllPackages></AllPackages>
        },
        {
          path: "/PackageDetails/:_id",
          element: <PrivateRoute><PackageDetails></PackageDetails></PrivateRoute>
        },
        {
          path: "/Guides",
          element: <Guides></Guides>
        },
        {
          path: "/GuideDetails/:_id",
          element: <PrivateRoute><GuideDetails></GuideDetails></PrivateRoute>
        },
        {
          path: "/Dashboard",
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> 
        },
        {
          path: "/Beach-tours",
          element: <Beach></Beach>
        },
        {
          path: "/hiking-tours",
          element: <Hiking></Hiking>
        },
        {
          path: "/nature-tours",
          element: <Nature></Nature>
        },
        {
          path: "/wildlife-tours",
          element: <Wildlife></Wildlife>
        },
      ],
    }, 
  ]);

  export default router;
  