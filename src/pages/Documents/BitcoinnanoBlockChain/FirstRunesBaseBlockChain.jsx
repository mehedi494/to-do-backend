import React from "react";
import { Link } from "react-router-dom";
import DocsHeaderFooter from "../../../components/ui/DocsContents/DocsHeaderFooter.jsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table.js";

export default function FirstRunesBaseBlockChain() {
  const doubleCard = [
    {
      leftTitle: "Bitcoinnano Blockchain",
      operation: "Previous",
      path: "/docs/bitcoinnano-blockchain",
    },
    {
      rightTitle: "Polygon CDK implementation",
      operation: "Next",
      path: "/docs/bitcoinnano-blockchain/polygon-cdk-implementation",
    },
  ];

  const invoices = [
    {
      components: "UTXO-based",
      runes: "✔",
      brc_20_tokens: "✘",
    },
    {
      components: "Ordinals Theory-based",
      runes: "✘",
      brc_20_tokens: "✔",
    },
    {
      components: "Token Type",
      runes: "Fungible",
      brc_20_tokens: "Fungible",
    },
    {
      components: "On-chain Footprint",
      runes: "Minimal",
      brc_20_tokens: "High",
    },
    {
      components: "Lightning-Compatible",
      runes: "✔",
      brc_20_tokens: "✘",
    },
  ];

  const content = (
    <div className="p-8 text-gray-800">
      <p className=" py-2">
        <Link
          className="text-blue-500 font-semibold"
          to={`https://rodarmor.com/blog/runes/`}>
          Runes{" "}
        </Link>
        is the latest fungible token protocol released in September 2023 to hit
        the Bitcoin ecosystem, with promises of simplicity and efficiency.
      </p>
      <p className=" py-2">
        Proposed by Casey Rodarmor (also creator of the Ordinals protocol),
        Runes is a proposed protocol for issuing fungible tokens directly on the
        Bitcoin blockchain. This means you could create and manage tokens that
        are interchangeable and divisible directly within the Bitcoin network,
        similar to how ERC-20 tokens work on Ethereum.
      </p>
      <p className=" py-2">
        Distinguishing itself from other fungible token protocols for Bitcoin,
        Runes sets itself apart by eliminating the need for off-chain data or a
        native token. Instead, Runes encodes token data directly into specific
        UTXOs (Unspent Transaction Outputs), uniquely marked as 'Rune-bearing.'
        Essential token details, including supply, issuer information, and
        metadata, are succinctly stored in compact ‘OP_RETURN’ outputs attached
        to the Rune-bearing UTXO. When a Rune-bearing UTXO is spent, both the
        Bitcoin value and the associated token are seamlessly transferred, with
        the recipient validating the token's legitimacy and updating their
        ledger accordingly.
      </p>

      <div className="py-4">
        <h1 className="font-bold text-xl" id="scalability">
          - SIMPLICITY
        </h1>
        <p className="pt-4">
          Runes leverages the existing Bitcoin infrastructure to uphold its core
          principles while minimizing complexity. In contrast to Ordinals, Runes
          addresses concerns about blockchain size and transaction fees by
          directly attaching token information to existing UTXOs, streamlining
          data bloat.
        </p>
      </div>
      <div className="py-4 " id="interoperability">
        <h1 className="font-bold text-xl">- EFFICENCY:</h1>
        <p className="pt-4">
          By cleverly utilizing UTXOs for token management, the Runes protocol
          optimizes transaction processing, presenting a potential improvement
          in scalability when compared to wrapping Bitcoin in tokens on other
          chains.
        </p>
      </div>
      <div className="py-4 " id="community_governance">
        <h1 className="font-bold text-xl">- INTEROPERABILITY: </h1>
        <p className="pt-4">
          Runes protocol seamlessly integrates with existing Bitcoin wallets and
          tools, embodying a commitment to user-friendly design. This
          integration not only minimizes user friction but also ensures that
          users can effortlessly incorporate Runes into their existing
          Bitcoin-related activities, fostering widespread adoption.
        </p>
      </div>
      {/* Table here goes  */}
      <div className="py-8">
        <h1 className="font-bold">Runes vs. BRC-20 Tokens</h1>
        <Table>
          <TableHeader>
            <TableRow className="">
              <TableHead className="font-bold">Components</TableHead>
              <TableHead className="font-bold">Runes</TableHead>
              <TableHead className="font-bold">BRC-20 Tokens</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium w-[200px]">
                  {invoice.components}
                </TableCell>
                <TableCell className="w-[200px]">{invoice.runes}</TableCell>
                <TableCell className="w-[200px]">
                  {invoice.brc_20_tokens}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p>
        Refer to:{" "}
        <Link className=" text-blue-400" to="https://rodarmor.com/blog/runes/">
          https://rodarmor.com/blog/runes/
        </Link>
      </p>
    </div>
  );

  return (
    <DocsHeaderFooter
      icon={`💎`}
      title={`First Runes-based blockchain`}
      content={content}
      doubleCard={doubleCard}></DocsHeaderFooter>
  );
}
