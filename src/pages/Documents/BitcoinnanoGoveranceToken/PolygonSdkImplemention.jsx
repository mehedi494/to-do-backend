import React from "react";
import { Link } from "react-router-dom";
import DocsHeaderFooter from "../../../components/ui/DocsContents/DocsHeaderFooter";

export default function PolygonSdkImplemention() {
  const doubleCard = [
    {
      leftTitle: "First Runes Based Blockchain",
      operation: "Previous",
      path: "/docs/bitcoinnano-blockchain/first-runes-based-blockchain",
    },
    {
      rightTitle: "Celestia DA Integration",
      operation: "Next",
      path: "/docs/bitcoinnano-blockchain/celestia-da-integration",
    },
  ];

  const content = (
    <div className="p-8 text-gray-800">
      <p className=" py-2">
        BITCOINNANO is meticulously crafted using the Polygon Crypto Development
        Kit (CDK), an open-source and modular codebase for launching new L2
        chains on Ethereum. By harnessing the power of Polygon CDK, Gelios
        establishes a dynamic and interoperable dApp layer, seamlessly
        integrated with Ethereum and Arbitrum networks.
      </p>

      <div className="py-4">
        <h1 className="font-bold text-xl" id="scalability">
          MODULARITY & CUSTOMIZATION
        </h1>
        <p className="pt-4">
          CDK empowers Gelios to dynamically tailor crucial parameters such as
          block time, fees, and security mechanisms. This ensures a customized
          and responsive environment that adapts to the evolving needs of users
          and developers.
        </p>
      </div>
      <div className="py-4 " id="interoperability">
        <h1 className="font-bold text-xl">SCALABILITY </h1>
        <p className="pt-4">
          Adoption of Polygon CDK significantly enhances Gelios' scalability by
          offloading transaction processing. This strategic move translates to
          faster confirmation times, optimizing the overall efficiency and user
          experience within the Gelios ecosystem.
        </p>
      </div>
      <div className="py-4 " id="interoperability">
        <h1 className="font-bold text-xl">DATA INTEGRITY & RESILIENCE </h1>
        <p className="pt-4">
          Bitcoinnano employs a dedicated Data Availability Committee (DAC) to
          ensure reliable access to off-chain data, fortifying Gelios against
          potential disruptions and bolstering the robustness of its data
          infrastructure.
        </p>
      </div>
      <div className="py-4 " id="interoperability">
        <h1 className="font-bold text-xl">INTEROPERABILITY </h1>
        <p className="pt-4">
          The integration of Polygon CDK magnifies Gelios' interoperability
          prowess, facilitating seamless asset and data transfers between the
          Gelios blockchain and Ethereum, Arbitrum, and other compatible
          networks. Gelios emerges as a bridge connecting diverse blockchain
          ecosystems, enhancing overall connectivity.
        </p>
      </div>
      <div className="py-4 " id="interoperability">
        <h1 className="font-bold text-xl">NEAR-INSTANT FINALITY </h1>
        <p className="pt-4">
          bitcoinnano relies on cryptographic security mechanisms for
          near-instant finality. This ensures transaction integrity without the
          need for full nodes, exemplifying Gelios' commitment to efficiency
          without compromising security.
        </p>
      </div>
      <div className="py-4 " id="interoperability">
        <h1 className="font-bold text-xl">INTENSIVE WEB3 SUPPORT </h1>
        <p className="pt-4">
          Gelios integrates seamlessly with the broader Web3 ecosystem,
          capitalizing on a comprehensive network of premium service providers.
          This integration provides Gelios users and developers with essential
          tools for application integration, development, and deployment.
        </p>
      </div>
    </div>
  );

  return (
    <DocsHeaderFooter
      icon={`🕎`}
      title={`Polygon CDK Implementation`}
      content={content}
      doubleCard={doubleCard}></DocsHeaderFooter>
  );
}
