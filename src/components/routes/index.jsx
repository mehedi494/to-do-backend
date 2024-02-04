import { createBrowserRouter } from "react-router-dom";
import Foundation from "../../pages/Documents/Foundation";
import Welcome from "../../pages/Documents/Welcome";
import EntryMain from "../../pages/Entry/EntryMain";
import HomeMain from "../../pages/Home/HomeMain";
import DocumentsLayout from "../layout/DocumentsLayout";
import Main from "../layout/main";
import CurrentChallenges from "../../pages/Documents/CurrentChallenges";
import WhatDoesBitcoinnanoSolve from "../../pages/Documents/WhatDoesBitcoinnanoSolve";

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
      {
        path: "/docs/foundation",
        element: <Foundation></Foundation>,
      },
      {
        path: "/docs/current-challenges",
        element: <CurrentChallenges></CurrentChallenges>,
      },
      {
        path: "/docs/whats-problem-does-bitcoinnano-solve",
        element: <WhatDoesBitcoinnanoSolve></WhatDoesBitcoinnanoSolve>,
      },
    ],
  },
]);

export default router;
