import React from "react";
import { Link } from "react-router-dom";
import DocsHeaderFooter from "../../../components/ui/DocsContents/DocsHeaderFooter";

export default function CelestiaDaIntregation() {
  const doubleCard = [
    {
      leftTitle: "First Runes Based Blockchain",
      operation: "Previous",
      path: "/docs/bitcoinnano-blockchain/polygon-cdk-implementation",
    },
    {
      rightTitle: "Valium Scaling Solution",
      operation: "Next",
      path: "/docs/bitcoinnano-blockchain/valium-scaling-solution",
    },
  ];

  const content = (
    <div className="p-8 text-gray-800">
      <p className=" py-2">
        To enhance Gelios blockchain performance,{" "}
        <Link
          to="Celestia’s modular Data Availability (DA) "
          className="text-blue-400">
          Celestia’s modular Data Availability (DA)
        </Link>{" "}
        is integrated and replaces the original DAC (Data Availability
        Committee). This transformative integration is meticulously designed to
        usher in a heightened, more efficient, and cost-effective experience for
        Gelios users.
      </p>

      <div className="py-4">
        <h1 className="font-semibold text-lg" id="scalability">
          SCALABILITY BOOST
        </h1>
        <p className="pt-4">
          By offloading data storage and retrieval to Celestia, Gelios
          blockchain can focus on transaction processing and smart contract
          execution without sacrificing speed or decentralization. This
          translates to faster block times, improved transaction throughput, and
          better overall scalability.
        </p>
      </div>
      <div className="py-4">
        <h1 className="font-semibold text-lg" id="scalability">
          REDUCED GAS FEE
        </h1>
        <p className="pt-4">
          Gelios minimizes unnecessary bandwidth usage and storage requirement,
          leading to less computational power required to process and validate
          blocks. This resource optimization then translates into a reduction in
          gas costs for users when interacting with dApps within the Gelios
          ecosystem.
        </p>
      </div>
    </div>
  );

  return (
    <DocsHeaderFooter
      icon={`♓`}
      title={`Celestia DA Integration`}
      content={content}
      doubleCard={doubleCard}></DocsHeaderFooter>
  );
}
