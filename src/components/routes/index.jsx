import { createBrowserRouter } from "react-router-dom";
import CurrentChallenges from "../../pages/Documents/Foundation/CurrentChallenges";
import Foundation from "../../pages/Documents/Foundation/Foundation";
import WhatDoesBitcoinnanoSolve from "../../pages/Documents/Foundation/WhatDoesBitcoinnanoSolve";
import Welcome from "../../pages/Documents/Welcome";
import EntryMain from "../../pages/Entry/EntryMain";
import HomeMain from "../../pages/Home/HomeMain";
import DocumentsLayout from "../layout/DocumentsLayout";
import Main from "../layout/main";
import BitcoinnanoBlockChain from "../../pages/Documents/BitcoinnanoGoveranceToken/BitcoinnanoBlockChain";
import FirstRunesBaseBlockChain from "../../pages/Documents/BitcoinnanoGoveranceToken/FirstRunesBaseBlockChain";
import PolygonSdkImplemention from "../../pages/Documents/BitcoinnanoGoveranceToken/PolygonSdkImplemention";
import CelestiaDaIntregation from "../../pages/Documents/BitcoinnanoGoveranceToken/CelestiaDaIntregation";
import ValiumScalingSolution from "../../pages/Documents/BitcoinnanoGoveranceToken/ValiumScalingSolution";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomeMain />,
      },
      {
        path: "/entry",
        element: <EntryMain />,
      },
    ],
  },
  {
    path: "/docs",
    element: <DocumentsLayout />,
    children: [
      {
        path: "/docs",
        element: <Welcome />,
      },

      /* Foundatin and child route */
      {
        path: "/docs/foundation",
        element: <Foundation />,
      },
      {
        path: "/docs/foundation/current-challenges",
        element: <CurrentChallenges />,
      },
      {
        path: "/docs/foundation/whats-problem-does-bitcoinnano-solve",
        element: <WhatDoesBitcoinnanoSolve />,
      },

      /* ***** */

      /*Bitcoinnano Blockchain and child route */
      {
        path: "/docs/bitcoinnano-blockchain",
        element: <BitcoinnanoBlockChain />,
      },
      {
        path: "/docs/bitcoinnano-blockchain/first-Runes-based-blockchain",
        element: <FirstRunesBaseBlockChain />,
      },
      {
        path: "/docs/bitcoinnano-blockchain/polygon-cdk-implementation",
        element: <PolygonSdkImplemention />,
      },
      {
        path: "/docs/bitcoinnano-blockchain/celestia-da-integration",
        element: <CelestiaDaIntregation />,
      },
      {
        path: "/docs/bitcoinnano-blockchain/valium-scaling-solution",
        element: <ValiumScalingSolution />,
      },
    ],
  },
]);

export default router;
