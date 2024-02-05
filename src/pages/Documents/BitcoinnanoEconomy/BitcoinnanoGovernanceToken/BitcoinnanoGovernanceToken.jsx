import React from "react";
import DocsHeaderFooter from "../../../../components/ui/DocsContents/DocsHeaderFooter";
import { Link } from "react-router-dom";

export default function BitcoinnanoGovernanceToken() {
  const doubleCard = [
    {
      leftTitle: "BTC as the Native Token",
      operation: "Previous",
      path: "/docs/bitcoinnano-economy/btc-as-the-native-token",
    },
    {
      rightTitle: "Decentralized Decision Making",
      operation: "Next",
      path: "/docs/bitcoinnano-economy/decentralized-decision-making",
    },
  ];

  const content = (
    <div className="p-8 text-gray-800">
      <p className=" py-2">
        gOS token is the governance token for Gelios blockchain. It is operated
        under a DAO (Decentralized Autonomous Organization) model, representing
        a significant departure from conventional governance structures. In this
        innovative approach, $gOS token holders wield the power to collectively
        decide on all changes and updates to the Gelios blockchain.
      </p>
      <div className="py-4 border-b "></div>
      <div className="py-4">
        <p className="pt-4">
          At the forefront of innovation, Gelios blockchain proudly pioneers a
          decentralized autonomous platform on the Bitcoin network, emphasizing
          a community-centric approach. Unlike conventional token issuance
          methods that often fall prey to token concentration in the hands of
          crypto giants, Gelios sets a new standard for decentralization with a
          radical commitment to fairness. No exceptions, no reserved portions
          for dev – just a shared journey towards a decentralized future. Gelios
          ensures that every gOS token is distributed through impartial airdrop
          activities, establishing a level playing field for all participants.
        </p>
        <p className="pt-4">
          In this spirit, 62.7% of gOS tokens are allocated for Key Holders,
          offering exclusive benefits and responsibilities to those actively
          engaged in the Gelios ecosystem. The remaining 37.3% is dedicated to
          the broader community, ensuring that the governance landscape is a
          true reflection of the collective will of Gelios enthusiasts. Refer to{" "}
          <Link className="text-blue-400" to="/bitcoinnano-blockchain/first-runes-based-blockchain">
            gOS Allocation
          </Link>{" "}
          for detailed metrics.
        </p>
      </div>

      <div className="py-4 border-l-4 pl-8  px-4">
        <h1 className="font-semibold text-lg italic text-gray-500" id="scalability">
        TL;NR 
        </h1>
        <ul className=" list-disc text-gray-500">
          <li><i>No VC, no pre-sale, no pre-mining, no dev-reserved</i></li>
          <li><i>100% gOS tokens are airdropped to the community after Mainnet.</i></li>
          <li><i>Every collected Gas Fee related to gOS tokens will be refunded back to the community.</i></li>
        </ul>
      </div>
     
    </div>
  );

  return (
    <DocsHeaderFooter
      icon={`🏪`}
      title={`Bitcoinnano Governance Token`}
      content={content}
      doubleCard={doubleCard}></DocsHeaderFooter>
  );
}
