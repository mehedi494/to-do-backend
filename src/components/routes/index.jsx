import { createBrowserRouter } from "react-router-dom";
import Welcome from "../../pages/Documents/Welcome";
import EntryMain from "../../pages/Entry/EntryMain";
import HomeMain from "../../pages/Home/HomeMain";
import DocumentsLayout from "../layout/DocumentsLayout";
import Main from "../layout/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomeMain></HomeMain>,
      },
      {
        path: "/entry",
        element: <EntryMain></EntryMain>,
      },
    ],
  },
  {
    path: "/docs",
    element: <DocumentsLayout></DocumentsLayout>,
    children: [
      {
        path: "/docs",
        element: <Welcome></Welcome>,
      },
    ],
  },
]);

export default router;
