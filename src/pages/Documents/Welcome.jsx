import React from "react";

import DocsHeaderFooter from "../../components/ui/DocsContents/DocsHeaderFooter";

export default function Welcome() {
  const singleCard = {
    title: "Foundation",
    operation: "Next",
    path: "/docs/foundation",
    position:"right"
  };
  const content = (
    <p className="p-8">
      Bitcoinnano is a groundbreaking blockchain project with a visionary
      mission to transform the utilization and management of Bitcoin and other
      cryptocurrencies through the implementation of the Runes protocol.
      Functioning as an application layer of Bitcoin, Bitcoinnano pioneers a
      fresh and avant-garde approach to blockchain technology, placing a strong
      emphasis on community governance, interoperability, and active developer
      engagement.
    </p>
  );
  return (
    <DocsHeaderFooter
      
      icon={`👐`}
      title={`Welcome!`}
      singleCard={singleCard}
      content={content}></DocsHeaderFooter>
  );
}
