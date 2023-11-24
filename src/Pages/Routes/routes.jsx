import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Errorpage from "../Errorpage/Errorpage";
import Rootpage from "../Root/Rootpage";


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
      ],
    }, 
  ]);

  export default router;
  