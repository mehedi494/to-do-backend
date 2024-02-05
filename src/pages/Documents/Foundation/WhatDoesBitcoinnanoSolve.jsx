import React from "react";

import DocsHeaderFooter from "../../../components/ui/DocsContents/DocsHeaderFooter";

export default function WhatDoesBitcoinnanoSolve() {
  const doubleCard = [
    {
      leftTitle: "Current challanges",
      operation: "Previous",
      path: "/docs/current-challenges",
    },
    {
      rightTitle: "current challanges",
      operation: "Next",
      path: "/docs/bitcoinnano-blockchain",
    },
  ];
  const content = (
    <div className="p-8 text-gray-800">
      <p className=" ">
        While Bitcoin itself does not offer the functionality needed for a
        complex ecosystem, building Gelios as an application layer on top of the
        Bitcoin network presents several potential benefits:
      </p>

      <div className="py-4">
        <h1 className="font-bold text-xl" id="security_transparency">
         1.
          <p className="indent-5 inline-block">SECURITY & TRANSPARENCY</p>
        </h1>
        <p className="pt-4 ">
        Bitcoinnano leverages Bitcoin's immutable blockchain for unparalleled security and transparency. In-app economies and digital assets become tamper-proof fortresses, fostering trust and preventing fraud.
        </p>
      </div>
      <div className="py-4 " id="scalability">
        <h1 className="font-bold text-xl">2. <p className="indent-5 inline-block">SCALABILITY</p></h1>
        <p className="pt-4">
        By utilizing the Runes protocol, which enables Bitcoin tokenization on an alternative network with faster transaction processing capabilities, Gelios allows for smoother and more seamless in-app transactions.
        </p>
      </div>
      <div className="py-4 " id="innovative_functionality">
        <h1 className="font-bold text-xl">2. <p className="indent-5 inline-block">INNOVATIVE FUNCTIONALITY</p></h1>
        <p className="pt-4">
        Bitcoinnano introduces novel functionalities and applications to the Bitcoin blockchain. While Bitcoin primarily serves as a store of value and a medium of exchange, Gelios can bring diverse and innovative use cases to the ecosystem.
        </p>
        <p className="pt-4">
        <span className="font-bold">- Interoperability:</span> Gelios facilitates direct bridging with Bitcoin, creating a seamless cross-chain interaction that allows users to move Bitcoin and Wrapped Bitcoin (WBTC) across different blockchains. This interoperability is essential in an increasingly interconnected cryptocurrency landscape, where assets need to move fluidly between various platforms to meet the evolving demands of users.
        </p>
        <p className="pt-4">
        <span className="font-bold"> - Community Governance:</span> The decentralized nature of Gelios, with its community-managed chain, is a paradigm shift. In contrast to traditional blockchain projects where initial tokens are allocated to developers, Gelios empowers its community to steer the direction of the project.
        </p>
      </div>
    </div>
  );

  return (
    <DocsHeaderFooter
      icon={`🔩`}
      title={`What problems does Gelios solve?`}
      content={content}
      doubleCard={doubleCard}></DocsHeaderFooter>
  );
}
