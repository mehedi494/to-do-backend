import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import HomeMain from "../../pages/Home/HomeMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomeMain></HomeMain>,
      },
    ],
  },
]);

export default router;
