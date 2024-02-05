import React from "react";
import DocsHeaderFooter from "../../../components/ui/DocsContents/DocsHeaderFooter";

export default function BtcAsTheNativeToken() {
  const doubleCard = [
    {
      leftTitle: "Valium scaling solution",
      operation: "Previous",
      path: "/docs/bitcoinnano-blockchain/valium-scaling-solution",
    },
    {
      rightTitle: "Bitcoinnano Governance Token",
      operation: "Next",
      path: "/docs/bitcoinnano-governance-token",
    },
  ];

  const content = (
    <div className="p-8 text-gray-800">
      <p className=" py-2">
        <i>
          Bitcoinnano, as an application layer of Bitcoin, introduces innovative
          functionalities and applications while maintaining a symbiotic
          relationship with the robust Bitcoin network.{" "}
        </i>
      </p>
      <p>
        Bitcoinnano blockchain strategically employs Bitcoin, the digital gold,
        as the primary native token. Bitcoin's status as a store of value and a
        globally recognized cryptocurrency brings a layer of reliability and
        stability to Gelios. Users can benefit from the inherent trust
        associated with Bitcoin, creating a secure foundation for transactions
        and asset management:
      </p>
      <div className="py-4">
        <h1 className="font-semibold text-lg" id="scalability">
          LIQUIDITY ENHANCEMENT
        </h1>
        <p className="pt-4">
          BTC, being one of the most liquid and widely traded cryptocurrencies,
          ensures that users can seamlessly transact and engage with the Gelios
          Blockchain. This liquidity not only facilitates smooth operations but
          also attracts a broader user base, enhancing the overall vibrancy of
          the Gelios ecosystem.
        </p>
      </div>
      <div className="py-4">
        <h1 className="font-semibold text-lg" id="scalability">
          ACCESSIBILITY
        </h1>
        <p className="pt-4">
          By leveraging BTC as the main native token, Gelios significantly
          reduces friction in user adoption. Users who are already acquainted
          with Bitcoin find it more intuitive to transition to the Gelios
          ecosystem, eliminating the need for users to adapt to an entirely new
          token.
        </p>
      </div>
      <div className="py-4">
        <h1 className="font-semibold text-lg" id="scalability">
          STABILITY
        </h1>
        <p className="pt-4">
          Bitcoin, while subject to market volatility, is often considered a
          relatively stable cryptocurrency compared to others. This
          characteristic can be advantageous for Gelios, mitigating concerns
          related to extreme price fluctuations that might affect the
          functionality and user experience of the blockchain.
        </p>
      </div>
      <div className="py-4">
        <h1 className="font-semibold text-lg" id="scalability">
          INTEROPERABILITY
        </h1>
        <p className="pt-4">
          Choosing BTC aligns Gelios with the broader Bitcoin ecosystem. Gelios
          users can seamlessly interact with the wider Bitcoin network,
          promoting interoperability and creating a unified experience for
          cryptocurrency enthusiasts.
        </p>
      </div>
    </div>
  );

  return (
    <DocsHeaderFooter
      icon={`🗝️`}
      title={`BTC as the Native Token`}
      content={content}
      doubleCard={doubleCard}></DocsHeaderFooter>
  );
}
