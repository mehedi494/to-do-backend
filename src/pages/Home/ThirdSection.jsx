import React from "react";

import nanoBridge from "../../assets/nanoBridge.svg";
import DoughNutPieChart from "../../components/ui/PieChart.jsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table.js";

export default function ThirdSection() {
  const invoices = [
    {
      property: "Token name",
      value: "BitcoinNano",
    },
    {
      property: "Ticker",
      value: "NAN0",
    },
    {
      property: "Inscription ID",
      value: "3835fb2d3086d3e8c8a0e153ee7c61e619b592a504f86fe59c7240910760664di0",
    },
    {
      property: "PROTOCOL/Blockchian",
      value: "BRC20 (BITCOIN Blockchain)",
    },
    {
      property: "BRC20 (BITCOIN Blockchain) ",
      value: "21,000,000,000,000,000 (100%)",
    },
    {
      property: "Stake to Earn (Vesting 20years)",
      value: "12,600,000,000,000,000 (60%)",
      value_2: "bc1qdlq94wcg7v40ewxxdsj6v6p6ye5dhsvcva8wdf (Staking Wallet)",
    },
    {
      property: "Available for Trade",
      value: "4,200,000,000,000,000  (20%)",
      value_2: "bc1qs244vrcg9wxgj08jxwgujmye7m2hv8cryu3uv6 (Deployer Wallet)",
    },
    {
      property: "CEX Listing (Lock 3m)",
      value: "2,100,000,000,000,000  (10%)",
      value_2: "bc1qhmlh85k82qy793nwnq5v8ytj9esh6vxt9xynxy (CEX Listing Wallet)",
    },
    {
      property: "Marketing (Vesting 10m)",
      value: "2,100,000,000,000,000  (10%)",
      value_2: "bc1qs60dtamtp7fny37mzce5898yyajptdhyl9akwz (Marketing Wallet)",
    },
    {
      property: "MarketPlace",
      value: "Unisat, Binance Web3 Wallet, OKX Wallet……",
      
    },
  ];

  // const staking_1 = [
  //   {
  //     year: 2024,
  //     reward: "630000000000",
  //     afterYear: 2034,
  //     reward_2: "630000000000",
  //   },
  //   {
  //     year: 2025,
  //     reward: "630000000000",
  //     afterYear: 2035,
  //     reward_2: "630000000000",
  //   },
  //   {
  //     year: 2026,
  //     reward: "630000000000",
  //     afterYear: 2036,
  //     reward_2: "630000000000",
  //   },
  //   {
  //     year: 2027,
  //     reward: "630000000000",
  //     afterYear: 2037,
  //     reward_2: "630000000000",
  //   },
  //   {
  //     year: 2028,
  //     reward: "630000000000",
  //     afterYear: 2038,
  //     reward_2: "630000000000",
  //   },
  //   {
  //     year: 2029,
  //     reward: "630000000000",
  //     afterYear: 2039,
  //     reward_2: "630000000000",
  //   },
  //   {
  //     year: 2030,
  //     reward: "630000000000",
  //     afterYear: 2040,
  //     reward_2: "630000000000",
  //   },
  //   {
  //     year: 2031,
  //     reward: "630000000000",
  //     afterYear: 2041,
  //     reward_2: "630000000000",
  //   },
  //   {
  //     year: 2032,
  //     reward: "630000000000",
  //     afterYear: 2042,
  //     reward_2: "630000000000",
  //   },
  //   {
  //     year: 2033,
  //     reward: "630000000000",
  //     afterYear: 2043,
  //     reward_2: "630000000000",
  //   },
  // ];

  const tableData = {
    labels: [
      "BRC20 (BITCOIN Blockchain (100%)",
      "Stake to Earn (Vesting 20years)(60%)",
      "Available for Trade(20%)",
      "CEX Listing (Lock 3m)(10%)",
      "Marketing (Vesting 10m)(10%)",
    ],
    datasets: [
      {
        // label: '# of Votes',
        data: [
          21000000000000000, 12600000000000000, 4200000000000000 ,
          2100000000000000, 2100000000000000,
        ],
        backgroundColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
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
    <div className="max-w-7xl mt-10 sm:-mt-24 mx-auto font-baiJamjuree">
      <div>
        <div className="flex flex-col gap-y-4">
          <div className="flex  justify-center ">
            <img w-full src={nanoBridge} alt="" />
          </div>
          <div className="w-[80%] mx-auto">
            <h1 className="text-center font-semibold text-[#333333] text-lg sm:text-4xl md:text-5xl lg:text-6xl">
              BITCOINNANO TOKENOMIC
            </h1>
          </div>

          <div className="flex justify-center "></div>
        </div>
      </div>

      {/* Table data
       */}
      <div className="flex w-full  items-center justify-center sm:flex-row flex-col">
        <div className="w-full py-4 px-4 flex flex-col  sm:w-1/2  justify-center">
          <Table className=" border-2">
            <TableHeader>
              <TableRow className="bg-[#fea72b] hover:bg-[#fea72b]  text-white">
                <TableHead className="font-bold" >Properties</TableHead>
                <TableHead className="font-bold">Value</TableHead>
              
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow className=""key={invoice.property}>
                  <TableCell  className=" text-right font-medium w-[100px]">
                    {invoice.property}
                  </TableCell>
                  {
                    invoice.value_2?<TableCell  className="">{invoice.value} <br/> 
                    {invoice.value_2}</TableCell>:<TableCell  className="">{invoice.value}</TableCell>
                  }
                  {/* <TableCell className="w-[80px]">{invoice.value_2}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pie Chart */}
        <div className="w-full ">
          <div className="w-full mx-auto lg:w-2/3 justify-items-center items-center flex justify-center  ">
            <DoughNutPieChart data={tableData}></DoughNutPieChart>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

//  <div className="flex  items-center sm:flex-row flex-col py-8">
//         <div className="w-full flex flex-col items-center justify-end gap-y-5 self-center p-4 text-lg sm:text-2xl">
//           <p className=" font-semibold italic text-[#fea72b]">
//             Link Dapp to{" "}
//             <span className=" text-[#333333]">Staking program</span>
//           </p>
//           <p className=" font-semibold italic text-[#fea72b]">
//             <span className=" text-[#333333]">Stake BTC to</span> earn NanoCoin
//           </p>
//           <p className=" font-semibold italic text-[#fea72b]">
//             Stake sGol to <span className=" text-[#333333]">earn NanoCoin</span>
//           </p>
//           <p className=" font-semibold italic text-[#fea72b]">
//             <span className=" text-[#333333]">Stake BNB</span> to earn NanoCoin
//           </p>
//         </div>

//         {/* staking Program table */}
//         <div className="py-8 px-4 flex flex-col  w-full  justify-center">
//           <h1 className="font-bold text-center text-lg">
//             Staking to Earn 20 years program{" "}
//           </h1>

//           <Table className="border ">
//             <TableHeader>
//               <TableRow className="bg-[#fea72b] hover:bg-[#fea72b] text-white">
//                 <TableHead className="font-bold">Year</TableHead>
//                 <TableHead className="font-bold">Reward/Year</TableHead>
//                 <TableHead className="font-bold">Year</TableHead>
//                 <TableHead className="font-bold">Reward/Year</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {staking_1.map((invoice) => (
//                 <TableRow key={invoice.year}>
//                   <TableCell className="font-medium h-2 ">
//                     {invoice.year}
//                   </TableCell>
//                   <TableCell className="">{invoice.reward}</TableCell>
//                   <TableCell className="">{invoice.afterYear}</TableCell>
//                   <TableCell className="">{invoice.reward_2}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
