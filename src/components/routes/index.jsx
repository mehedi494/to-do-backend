import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import HomeMain from "../../pages/Home/HomeMain";
import EntryMain from "../../pages/Entry/EntryMain";

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
  {
    path: "/entry",
    element: <EntryMain></EntryMain>,
    
  },
]);

export default router;
