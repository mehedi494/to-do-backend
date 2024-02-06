import React from "react";

import nanoBridge from "../../assets/nanoBridge.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table.js";
import DoughNutPieChart from "../../components/ui/PieChart.jsx";

export default function ThirdSection() {
  const invoices = [
    {
      property: "Token name",
      value: "BitcoinNano",
    },
    {
      property: "Ticker",
      value: "NanoCoin",
    },
    {
      property: "Blockchian",
      value: "Bitcoin Layer 2 (Gelios Blockchain) ",
    },
    {
      property: "Total Supply",
      value: "21,000,000,000,000,000 (100%)",
    },
    {
      property: "Stake to Earn (Vesting 20years)",
      value: "12,600,000,000,000,000 (60%)",
    },
    {
      property: "Add Liquidity (Burnt)",
      value: "4,200,000,000,000,000  (20%)",
    },
    {
      property: "CEX Listing (Lock 3m)",
      value: "2,100,000,000,000,000  (10%)",
    },
    {
      property: "Marketing (Vesting 10m) ",
      value: "2,100,000,000,000,000  (10%)",
    },
  ];

  const staking_1 = [
    {
      year: 2024,
      reward: "630000000000",
      afterYear: 2034,
      reward_2: "630000000000",
    },
    {
      year: 2025,
      reward: "630000000000",
      afterYear: 2035,
      reward_2: "630000000000",
    },
    {
      year: 2026,
      reward: "630000000000",
      afterYear: 2036,
      reward_2: "630000000000",
    },
    {
      year: 2027,
      reward: "630000000000",
      afterYear: 2037,
      reward_2: "630000000000",
    },
    {
      year: 2028,
      reward: "630000000000",
      afterYear: 2038,
      reward_2: "630000000000",
    },
    {
      year: 2029,
      reward: "630000000000",
      afterYear: 2039,
      reward_2: "630000000000",
    },
    {
      year: 2030,
      reward: "630000000000",
      afterYear: 2040,
      reward_2: "630000000000",
    },
    {
      year: 2031,
      reward: "630000000000",
      afterYear: 2041,
      reward_2: "630000000000",
    },
    {
      year: 2032,
      reward: "630000000000",
      afterYear: 2042,
      reward_2: "630000000000",
    },
    {
      year: 2033,
      reward: "630000000000",
      afterYear: 2043,
      reward_2: "630000000000",
    },
  ];

  const data = {
    labels: [
      "Total Supply(100%)",
      "Stake to Earn(60%)",
      "Add Liquidity(20%)",
      "CEX Listing(10%)",
      "Marketing(10%)",
    ],
    datasets: [
      {
        // label: '# of Votes',
        data: [
          21000000000000000, 12600000000000000, 4200000000000000,
          2100000000000000, 2100000000000000,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto font-baiJamjuree">
      <div>
        <div className="flex flex-col gap-y-4">
          <div className="min-w-64 w-2/3 mx-auto">
            <img src={nanoBridge} alt="" />
          </div>
          <div className="w-[80%] mx-auto">
            <h1 className="text-center font-semibold text-[#fd9623] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              BRIDGING BTC/ WBTC <span className="text-[#333333]">BETWEEN</span>{" "}
              BITCOINNANO, BITCOIN <span className="text-[#333333]"> AND</span>{" "}
              EVMS
            </h1>
          </div>
          <div className="w-[90%]  md:w-[90%] lg:w-[45%] mx-auto">
            <p className="text-[#727272] text-center text-xs sm:text-md ">
              Bitcoin-nano is a dApp layer for Bitcoin, not only fostering
              inter-application communication but also enabling seamless
              cross-chain interaction. Users can effortlessly transfer BTC
              (Bitcoin network) and WBTC (EVM networks) to Bitcoin-nano and vice
              versa, unlocking vast DeFi opportunities.{" "}
            </p>
          </div>
          <div className="flex justify-center ">
          {/*   <button className="group bg-gradient-to-r from-[#fc690b] to-[#feab2d] hover:opacity-80  text-2xl rounded-lg text-white  items-center flex px-16 p-4 gap-x-4 transition-transform transform hover:scale-95 ">
              Bridge{" "}
              <FaArrowRightLong className="inline group-hover:translate-x-1 group-hover:transition-transform transform" />
            </button> */}
          </div>
        </div>
      </div>
      {/* Table data
       */}
      <div className="flex  items-center justify-center sm:flex-row flex-col">
        <div className="py-8 px-4 flex flex-col  w-full  justify-center">
          <h1 className="font-bold text-center text-lg">Tokenomic</h1>
          <Table className="border">
            <TableHeader>
              <TableRow className="bg-[#fea72b] hover:bg-[#fea72b]  text-white">
                <TableHead className="font-bold">Properties</TableHead>
                <TableHead className="font-bold">Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.property}>
                  <TableCell className="font-medium w-[200px]">
                    {invoice.property}
                  </TableCell>
                  <TableCell className="w-[200px]">{invoice.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className=" w-[50%] flex justify-center ">
          <DoughNutPieChart data={data}></DoughNutPieChart></div>
       
      </div>
      <div className="flex  items-center sm:flex-row flex-col py-8">
        <div className="w-full flex flex-col items-center justify-end gap-y-5">
          <p className="text-2xl font-semibold italic text-[#fea72b]">
            Link Dapp to{" "}
            <span className=" text-[#333333]">Staking program</span>
          </p>
          <p className="text-2xl font-semibold italic text-[#fea72b]">
            <span className=" text-[#333333]">Stake BTC to</span> earn NanoCoin
          </p>
          <p className="text-2xl font-semibold italic text-[#fea72b]">
            Stake sGol to <span className=" text-[#333333]">earn NanoCoin</span>
          </p>
          <p className="text-2xl font-semibold italic text-[#fea72b]">
            <span className=" text-[#333333]">Stake BNB</span> to earn NanoCoin
          </p>
        </div>

        {/* staking Program table */}
        <div className="py-8 px-4 flex flex-col  w-full  justify-center">
          <h1 className="font-bold text-center text-lg">
            Staking to Earn 20 years program{" "}
          </h1>

          <Table className="border ">
            <TableHeader>
              <TableRow className="bg-[#fea72b] hover:bg-[#fea72b] text-white">
                <TableHead className="font-bold">Year</TableHead>
                <TableHead className="font-bold">Reward/Year</TableHead>
                <TableHead className="font-bold">Year</TableHead>
                <TableHead className="font-bold">Reward/Year</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staking_1.map((invoice) => (
                <TableRow key={invoice.year}>
                  <TableCell className="font-medium h-2 ">
                    {invoice.year}
                  </TableCell>
                  <TableCell className="">{invoice.reward}</TableCell>
                  <TableCell className="">{invoice.afterYear}</TableCell>
                  <TableCell className="">{invoice.reward_2}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div></div>
    </div>
  );
}
