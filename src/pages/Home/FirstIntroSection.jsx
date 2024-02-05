import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import threDot from "../../assets/3dot.gif";
import introCicle_1 from "../../assets/bitcoint-net-2.svg";
import introCicle_2 from "../../assets/bitcoint-net.svg";
import btcLogo from "../../assets/btc.png";
import boxImg from "../../assets/btc_bridge_rotate_shape .svg";
import introBg from "../../assets/intro_bg.png";
import intro_pattern from "../../assets/intro_pattern.png";
import bitcoinnanoLogo from "../../assets/logoBitcoinnano.png";

export default function FirstIntroSection() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat mt-16 "
      style={{ backgroundImage: `url(${introBg})` }}>
      {/* first  */}
      {/* className="flex flex-wrap flex-col-reverse md:flex-row lg:flex-row justify-center items-center p-4 max-w-7xl  font-baiJamjuree */}
      <div className="flex flex-wrap flex-col-reverse md:flex-row lg:flex-row min-h-[450px] items-center mx-auto  max-w-7xl  font-baiJamjuree relative   ">
        <div className="w-full  md:w-1/2 lg:w-1/2  flex flex-col-reverse gap-y-6 my-4  ">
          <div className="flex w-auto  gap-x-4  sm:h-auto px-4 ">
            <button className="group   bg-gradient-to-r from-[#fc690b] to-[#feab2d] hover:translate-x-1  rounded-lg text-white  sm:px-4  transition-transform transform py-4 px-8 ">
              Run a Node <FaArrowRightLong className="inline" />
            </button>
            <button className="border-1 px-4 bg-cyan-200   rounded-lg text-white border-gray-600 border ">
              Bridge to Bitcoinnano
            </button>
          </div>

          <div className="px-4">
            <h1 className="text-[#fd9623] text-2xl sm:text-3xl lg:text-6xl  font-medium">
              THE DAPP LAYER FOR BITCOIN ECOSYSTEM
            </h1>
            <p className="text-[#333333] text-sm sm:text-md lg:text-lg  font-medium ">
              BitcoinNano (NanoCoin) is a units of Bitcoin, it is a biggest
              memcoin on the Gelios Bitcoin Blockchain L2! 100% SAFU! 100% LP
              Burnt! 100% Community Owned! 0% Buy/Sell Tax & CA Renounce! Don’t
              miss yours life changing opportunity!
            </p>
            <p className="py-4 text-[#fc7411] font-semibold">
              1,000,000,000 NanoCoin <img className="w-[120px] inline" src={bitcoinnanoLogo} alt="bitcoinnano-logo"/> = 1 BTC <img className="w-6 inline" src={btcLogo} alt="btc-logo"/>
            </p>
          </div>
          <div
            className="h-[50px] sm:hidden  bg-center"
            style={{ backgroundImage: `url(${intro_pattern})` }}></div>
          {/* Second part */}
          <div className="w-full  sm:w-1/2 sm:absolute top-0 right-0">
            <div className="  relative flex items-center justify-center overflow-hidden">
              <img
                className="absolute top-0 right-0 w-full h-full text-blue-500 
              animate-spin-right"
                src={introCicle_2}
                alt="into-img"
                title="bitcoin-lifecyle"
              />
              <img
                className=" relative w-full h-full text-blue-500 animate-spin-slow"
                src={introCicle_1}
                alt="into-img"
                title="bitcoin-lifecyle"
              />
              <img
                className="-z-10 w-64 absolute    h-full text-blue-500 animate-moveUp"
                src={boxImg}
                alt="into-img"
                title="bitcoin-lifecyle"
              />
            </div>
          </div>
        </div>

        {/* <div className="w-full  sm:w-1/2 absolute top-0 right-0">
          <div className="mt-12  relative flex items-center justify-center overflow-hidden">
           

            <img
              className="absolute top-0 right-0 w-full h-full text-blue-500 
              animate-spin-right"
              src={introCicle_2}
              alt="into-img"
              title="bitcoin-lifecyle"
            />
             <img
              className=" relative w-full h-full text-blue-500 animate-spin-slow"
              src={introCicle_1}
              alt="into-img"
              title="bitcoin-lifecyle"
            />
            <img
              className="-z-10 w-64 absolute    h-full text-blue-500 animate-moveUp"
              src={boxImg}
              alt="into-img"
              title="bitcoin-lifecyle"
            />
          </div>
        </div> */}
      </div>

      {/* third section  */}
      <div className="relative w-full bg-cover h-auto bg-center bg-no-repeat">
        {/* Background for large devices */}
        <div
          className="hidden -z-10  lg:block absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${intro_pattern})` }}></div>

        <div className=" font-baiJamjuree text-sm p-4  max-w-7xl py-8">
          <div className="flex gap-x-4">
            <div className="flex flex-col items-center justify-center  border-r mt-3 mb-3 pr-3  border-black">
              <h1 className="text-lg sm:text-5xl text-[#3f3f3f]">40.3K</h1>
              <p className="text-sm sm:text-lg font-medium text-[#3f3f3f]">
                Total Users
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center  border-r mt-3 mb-3 pr-3  border-black">
              <img className="w-20 " src={threDot} alt="" />
              <p className="text-sm sm:text-lg font-medium text-[#3f3f3f]">
                Total Value Locked
              </p>
            </div>
            <div className="flex flex-col justify-center mt-3 mb-3 border-black">
              <h1 className="text-lg sm:text-5xl text-[#3f3f3f]">3.95</h1>
              <p className="text-sm sm:text-lg font-medium text-[#3f3f3f]">
                Total Gas Charged (gBTC)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
