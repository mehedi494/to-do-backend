import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../ui/Home/Home";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      }
      
    ]
  }
])

export default router