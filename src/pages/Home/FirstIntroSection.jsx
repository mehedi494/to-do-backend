import React from "react";
import introCicle_1 from "../../assets/bitcoint-net-2.svg";
import introCicle_2 from "../../assets/bitcoint-net.svg";
import btcLogo from "../../assets/btc.png";
import introBg from "../../assets/intro_bg.png";
import boxImg from "../../assets/nanoBox.svg";
import nanoCoinLogo from "../../assets/nanoCoin.png";

import partnerLogo_2 from "../../assets/partners_logo/crop/GeniiData_crop-removebg-preview.png";
import partnerLogo_1 from "../../assets/partners_logo/crop/binanance_crop-removebg-preview.png";
import partnerLogo_3 from "../../assets/partners_logo/crop/bybit_crop-removebg-preview.png";
import partnerLogo_4 from "../../assets/partners_logo/crop/coingecko_crop-removebg-preview.png";
import partnerLogo_5 from "../../assets/partners_logo/crop/coinranking_crop-removebg-preview.png";
import partnerLogo_6 from "../../assets/partners_logo/crop/okx_crop-removebg-preview.png";
import partnerLogo_7 from "../../assets/partners_logo/crop/ordinals_crop-removebg-preview.png";
import partnerLogo_8 from "../../assets/partners_logo/crop/unisat.png";

export default function FirstIntroSection() {
  const partnerLogo = [
    partnerLogo_1,
    partnerLogo_2,
    partnerLogo_8,

    partnerLogo_6,
    partnerLogo_7,
    partnerLogo_5,
    partnerLogo_4,
    partnerLogo_3,
  ];
  return (
    <div
      className="bg-cover bg-center bg-no-repeat mt-16 "
      style={{ backgroundImage: `url(${introBg})` }}>
      {/* first  */}
      {/* className="flex flex-wrap flex-col-reverse md:flex-row lg:flex-row justify-center items-center p-4 max-w-7xl  font-baiJamjuree */}
      <div className="flex flex-wrap flex-col-reverse md:flex-row lg:flex-row min-h-[450px] items-center mx-auto  max-w-7xl  font-baiJamjuree relative   ">
        <div className="w-full  md:w-1/2 lg:w-1/2  flex flex-col-reverse gap-y-6 my-4  ">
          <div className="px-4 py-0  sm:py-8">
            <h1 className="text-[#fd9623] text-2xl sm:text-3xl lg:text-5xl  font-medium py-4">
              {/*       THE DAPP LAYER FOR BITCOIN ECOSYSTEM TO  */}THE MEME
              COIN WITH UTILITY FOR BITCOIN ECOSYSTEM
            </h1>
            <p className="text-[#333333] text-sm sm:text-md lg:text-lg  font-medium ">
              BitcoinNano (NAN0) is a unit of Bitcoin <img className="w-5 inline " src={btcLogo} alt="btc-logo" /> {""}, it's a biggest & first
              meme coin with utilities for Bitcoin Ecosystem <img className="w-5 inline " src={btcLogo} alt="btc-logo" /> {' '}. In the future,
              it will be used for the global payment system such as in-store,
              online & real world asset payment! 100% SAFU! OG Team! Strong
              Community! Don't miss your life changing opportunity....!
            </p>
            <p className="py-4 text-xl sm:text-2xl lg:text-4xl  font-medium text-[#fc7411]  italic">
              <i className=""> 1,000,000,000 Nano </i>
              <img
                className="w-[34px] inline"
                src={nanoCoinLogo}
                alt="bitcoinnano-logo"
              />{" "}
              = 1 BTC{" "}
              <img className="w-8 inline " src={btcLogo} alt="btc-logo" />
            </p>
          </div>
          {/*  <div
            className="h-[50px] sm:hidden  bg-center"
            style={{ backgroundImage: `url(${intro_pattern})` }}></div> */}
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
                className="-z-10  absolute    h-full text-blue-500 animate-moveUp rotate-180"
                src={boxImg}
                alt="into-img"
                title="bitcoin-lifecyle"
              />
            </div>
          </div>
        </div>
      </div>

      {/* third section  */}

      <div className="relative w-full bg-cover h-auto bg-center bg-no-repeat">
        {/* Background for large devices */}

        {/*  <div
          className="hidden -z-10  lg:block absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${intro_pattern})` }}></div> */}
        <div className="  max-w-7xl mx-auto  p-0 sm:pt-8">
          <div className="grid  grid-cols-2 gap-2 md:grid-cols-8 justify-items-center items-center  ">
            {partnerLogo.map((logo, index) => (
              <img key={index} className="w-[100px]   " src={logo} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
