import { createBrowserRouter } from "react-router-dom";
import BitcoinnanoBlockChain from "../../pages/Documents/BitcoinnanoBlockChain/BitcoinnanoBlockChain";
import CelestiaDaIntregation from "../../pages/Documents/BitcoinnanoBlockChain/CelestiaDaIntregation";
import FirstRunesBaseBlockChain from "../../pages/Documents/BitcoinnanoBlockChain/FirstRunesBaseBlockChain";
import PolygonSdkImplemention from "../../pages/Documents/BitcoinnanoBlockChain/PolygonSdkImplemention";
import ValiumScalingSolution from "../../pages/Documents/BitcoinnanoBlockChain/ValiumScalingSolution";
import BtcAsTheNativeToken from "../../pages/Documents/BitcoinnanoEconomy/BtcAsTheNativeToken";
import CurrentChallenges from "../../pages/Documents/Foundation/CurrentChallenges";
import Foundation from "../../pages/Documents/Foundation/Foundation";
import WhatDoesBitcoinnanoSolve from "../../pages/Documents/Foundation/WhatDoesBitcoinnanoSolve";
import Welcome from "../../pages/Documents/Welcome";
import EntryMain from "../../pages/Entry/EntryMain";
import HomeMain from "../../pages/Home/HomeMain";
import DocumentsLayout from "../layout/DocumentsLayout";
import Main from "../layout/main";

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


      /* BITCOIN NANO ECONOMY  */

      {
        path:"/docs/bitcoinnano-economy/btc-as-the-native-token",
        element:<BtcAsTheNativeToken />,
      }
    ],
  },
]);

export default router;
