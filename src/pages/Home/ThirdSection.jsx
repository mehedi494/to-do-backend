import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import btcBridge from "../../assets/btc_bridge.png";

export default function ThirdSection() {
  return (
    <div className="max-w-7xl mx-auto font-baiJamjuree" >
      <div>
        <div className="flex flex-col gap-y-4">
          <div className="min-w-64 w-2/3 mx-auto">
            <img src={btcBridge} alt="" />
          </div>
          <div className="w-[80%] mx-auto">
            <h1 className="text-[#fd9623] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">BRIDGING BTC/ WBTC <span className="text-[#333333]">BETWEEN</span> GELIOS, BITCOIN <span className="text-[#333333]"> AND</span> EVMS</h1>
          </div>
          <div className="w-[90%]  md:w-[90%] lg:w-[45%] mx-auto">
            <p className="text-[#727272] text-center text-xs sm:text-md ">Bitcoin-nano is a dApp layer for Bitcoin, not only fostering
              inter-application communication but also enabling seamless
              cross-chain interaction. Users can effortlessly transfer BTC
              (Bitcoin network) and WBTC (EVM networks) to Bitcoin-nano and vice
              versa, unlocking vast DeFi opportunities.{" "}
            </p>
          </div>
          <div className="flex justify-center"><button className="bg-gradient-to-r from-[#fc690b] to-[#feab2d] hover:opacity-80  rounded-lg text-white  items-center flex p-2 gap-x-4 transition-transform transform hover:scale-95">
            Bridge <FaArrowRightLong />
          </button></div>
        </div>
      </div>
    </div>
  );
}
