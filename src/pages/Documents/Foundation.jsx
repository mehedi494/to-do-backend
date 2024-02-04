import React from "react";

import DocsHeaderFooter from "../../components/ui/DocsContents/DocsHeaderFooter";

export default function Foundation() {
  const doubleCard = [
    {
      leftTitle: "Welcome",
      operation: "Previous",
      path: "/docs",
    },
    {
      rightTitle: "current challanges",
      operation: "Next",
      path: "/docs",
    },
  ];
  const content = (
    <div className="p-8">
      <p className=" ">
        The genesis of Gelios Blockchain emerged from a profound understanding
        of the growing need for the diversification of the Bitcoin network.{" "}
      </p>
      <div className="border-b   py-4"></div>
      <p className="pt-4">
      When compared to platforms like Ethereum with smart contracts, Bitcoin's scripting language is much simpler and offers limited functionality. Recognizing this, we envisioned and crafted Gelios Blockchain—a sophisticated application layer designed to enrich the applications and use cases available on the Bitcoin network. Our focus is not only on facilitating inter-application communication but also introducing a BTC cross-chain interaction that allows users to seamlessly transfer BTC (on Bitcoin network) and Wrapped Bitcoin (WBTC on Ethereum, Arbitrum) to GELIOS blockchain and vice versa. This strategic integration opens up a myriad of potential benefits for users, mainly by expanding access to DeFi and other applications on these popular blockchains.
      </p>
      <p className="pt-4">
      By leveraging the stability and security of the Bitcoin network, Gelios not only establishes a resilient groundwork for the creation of innovative applications but also champions a decentralized ecosystem that places a paramount focus on user rights and benefits. 
      </p>
    </div>
  );

  return (
    <DocsHeaderFooter
      icon={`🍒`}
      title={`Foundation`}
      content={content}
      doubleCard={doubleCard}></DocsHeaderFooter>
  );
}
