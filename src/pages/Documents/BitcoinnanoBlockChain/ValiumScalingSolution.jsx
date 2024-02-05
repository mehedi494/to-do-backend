import React from "react";
import DocsHeaderFooter from "../../../components/ui/DocsContents/DocsHeaderFooter";

export default function ValiumScalingSolution() {
  const doubleCard = [
    {
      leftTitle: "Celestia DA Integration",
      operation: "Previous",
      path: "/docs/bitcoinnano-blockchain/celestia-da-integration",
    },
    {
      rightTitle: "BTC as the Native token ",
      operation: "Next",
      path: "/docs/bitcoinnano-blockchain/btc-as-the-native-token",
    },
  ];

  const content = (
    <div className="p-8 text-gray-800">
      <p className="text-gray-400 pb-10">
        Validium is a scaling solution that enforces integrity of transactions
        using validity proofs like ZK-rollups, but doesn’t store transaction
        data on the Ethereum Mainnet.
      </p>

      <div className="py-4">
        <h1 className="font-semibold text-2xl" id="scalability">
          WHAT IS VALIDIUM?
        </h1>
        <p className="pt-4">
          By offloading data storage and retrieval to Celestia, Gelios
          blockchain can focus on transaction processing and smart contract
          execution without sacrificing speed or decentralization. This
          translates to faster block times, improved transaction throughput, and
          better overall scalability.
        </p>
      </div>
      <p className="py-2">
        These "validity proofs" can come in the form of{" "}
        <b>
          ZK-SNARKs (Zero-Knowledge Succinct Non-Interactive Argument of
          Knowledge)
        </b>{" "}
        or{" "}
        <b>
          ZK-STARKs (Zero-Knowledge Scalable Transparent ARgument of Knowledge)
        </b>
        . More on zero-knowledge proofs(opens in a new tab).
      </p>
      <p className="py-2">
        Funds belonging to validium users are controlled by a smart contract on
        Ethereum. Validiums offer near-instant withdrawals, much like ZK-rollups
        do; once the validity proof for a withdrawal request has been verified
        on Mainnet, users can withdraw funds by providing Merkle proofs. The
        Merkle proof validates the inclusion of the user’s withdrawal
        transaction in a verified transaction batch, allowing the on-chain
        contract to process the withdrawal.
      </p>
      <p className="py-2">
        However, validium users can have their funds frozen and withdrawals
        restricted. This can happen if data availability managers on the
        validium chain withhold off-chain state data from users. Without access
        to transaction data, users cannot compute the Merkle proof required to
        prove ownership of funds and execute withdrawals.
      </p>
      <p className="py-2">
        This is the major difference between validiums and ZK-rollups—their
        positions on the data availability spectrum. Both solutions approach
        data storage differently, which has implications for security and
        trustlessness.
      </p>
      <div className="py-4">
        <h1 className="font-bold text-2xl pt-4 pb-8" id="scalability">
          HOW DO VALIDIUMS SCALE ETHEREUM?
        </h1>
        <h1 className="font-semibold text-lg" id="scalability">
          1. Off-Chain Data Storage in Layer 2 Scaling Solutions
        </h1>
        <p className="pt-4">
          Layer 2 scaling methods like optimistic rollups and ZK-rollups balance
          scalability with security. Unlike purely off-chain protocols such as
          Plasma, these rollups publish some transaction data on the Layer 1
          (L1) Ethereum network. This approach, however, limits their
          scalability due to Ethereum Mainnet's data bandwidth constraints. Data
          sharding is being explored to enhance Ethereum's data storage
          capabilities to address this issue.
        </p>
        <p className="pt-4">
          Validiums offer a different approach to scalability by keeping all
          transaction data off-chain. They only post state commitments and
          validity proofs to the main Ethereum chain when updating the state.
          This method gives validiums a higher security level compared to other
          off-chain solutions like Plasma and sidechains, due to the presence of
          validity proofs. By minimizing the data Ethereum processes for
          validating off-chain transactions, validiums significantly improve
          throughput on the Mainnet.
        </p>
      </div>
      <div className="py-4">
        <h1 className="font-semibold text-lg" id="scalability">
          2. Recursive Proofs in Blockchain
        </h1>
        <p className="pt-4">
          A recursive proof is a type of validity proof that verifies other
          proofs. These "proofs of proofs" are created by aggregating multiple
          proofs recursively until a final proof is formed that verifies all
          preceding proofs. Recursive proofs enhance blockchain processing
          speeds by enabling more transactions to be verified per proof.
        </p>
        <p className="pt-4">
          In typical scenarios, each validity proof submitted by a validium
          operator to Ethereum confirms the integrity of a single block.
          However, a single recursive proof can validate several validium blocks
          simultaneously. This is achievable because the proving circuit can
          aggregate multiple block proofs into one comprehensive proof. When the
          on-chain verifier contract approves the recursive proof, all
          underlying blocks are instantly finalized.
        </p>
      </div>
    </div>
  );

  return (
    <DocsHeaderFooter
      icon={`♋`}
      title={`Valium scaling solution`}
      content={content}
      doubleCard={doubleCard}></DocsHeaderFooter>
  );
}
