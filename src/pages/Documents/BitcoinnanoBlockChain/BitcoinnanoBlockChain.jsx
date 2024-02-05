import React from "react";
import DocsHeaderFooter from "../../../components/ui/DocsContents/DocsHeaderFooter";
import LearnMoreCard from "../../../components/ui/LearnMoreCard/LearnMoreCard";

export default function BitcoinnanoBlockChain() {
  const doubleCard = [
    {
      leftTitle: "What problems does Gelios solve?",
      operation: "Previous",
      path: "/docs/foundation/whats-problem-does-bitcoinnano-solve",
    },
    {
      rightTitle: "First Runes-based blockchain",
      operation: "Next",
      path: "/docs/bitcoinnano-blockchain/first-Runes-based-blockchain",
    },
  ];
  const content = (
    <div className="p-8 text-gray-800">
      <p className="border-b py-4 ">
        BITCOINNANO is the first community-owned dApp layer built on top of the
        Bitcoin network. Its seamless operation extends across three major
        blockchain networks—Arbitrum, Ethereum (ETH), and Bitcoin, positioning
        Gelios as a versatile "bridge" facilitating the smooth processing and
        transfer of information, data, and assets from the Bitcoin network to
        Ethereum and Arbitrum.
      </p>

      <div className="py-4 ">
        <p className="pt-4 ">
          At its core, Gelios serves as a catalyst for the development of a
          vibrant dApp ecosystem on the Bitcoin network. To optimal efficiency
          and cost-effectiveness in every blockchain interaction, Gelios
          orchestrates a harmonious integration of cutting-edge technologies.
          These include, but are not limited to, Runes protocol, Polygon Chain
          Development Kit (CDK), and Celestia Data Availability (DA).
        </p>
      </div>

      <div className="flex flex-col gap-y-8">
        <LearnMoreCard
          heading={`Learn more: `}
          icon="💎"
          title={`First Runes-based blockchain`}
          path={`/docs/bitcoinnano-blockchain/first-Runes-based-blockchain`}></LearnMoreCard>
        <LearnMoreCard
          icon="🕎"
          path={`/docs/bitcoinnano-blockchain/polygon-cdk-implementation`}
          title={`Polygon CDK Implementation`}></LearnMoreCard>
        <LearnMoreCard
          icon="♓"
          path={`/docs/bitcoinnano-blockchain/celestia-da-integration`}
          title={`Celestia DA Integration`}></LearnMoreCard>
      </div>
    </div>
  );

  return (
    <DocsHeaderFooter
      icon={`🎮`}
      title={`Bitcoinnano Blockchain?`}
      content={content}
      doubleCard={doubleCard}></DocsHeaderFooter>
  );
}
