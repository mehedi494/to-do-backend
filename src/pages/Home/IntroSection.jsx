import React from "react";
import introBg from "../../assets/intro_bg.png";
import introSVG from "../../assets/bitcoin-net.png";
import { FaArrowRightLong } from "react-icons/fa6";
import threDot from "../../assets/3dot.gif";
import intro_pattern from "../../assets/intro_pattern.png";

export default function IntroSection() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${introBg})` }}>
      <div className="flex justify-center  p-4 max-w-7xl mx-auto font-baiJamjuree ">
        <div className="w-1/2  flex flex-col gap-y-5 my-4">
          <h1 className="text-[#fd9623] text-5xl font-semibold">
            THE DAPP LAYER FOR BITCOIN ECOSYSTEM
          </h1>
          <p className="text-[#333333] text-lg  font-semibold leading-loose">
            Designed to enhance Bitcoin capabilities, GELIOS is your gateway to
            a seamlessly connected, decentralized tomorrow. The future of
            innovation starts here!
          </p>
          <div className="flex gap-x-8">
            <button className="bg-gradient-to-r from-[#fc690b] to-[#feab2d] hover:opacity-80 p-4 rounded-lg text-white flex items-center gap-x-4 transition-transform transform hover:scale-95">
              Run a Node <FaArrowRightLong />
            </button>
            <button className="border-1 bg-cyan-200 p-4  rounded-lg text-white border-gray-600 border ">
              Bridge to Gelios{" "}
            </button>
          </div>
        </div>

        <div className=" w-1/2">
          <div className="-t-10">
            <img
              className="w-full"
              src={introSVG}
              alt="into-img"
              title="bitcoin-lifecyle"
            />
          </div>
        </div>
      </div>

      {/* last section intro patter */}
      <div
        className="bg-cover h-auto bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${intro_pattern})` }}>
        {/*  */}
        <div className="flex font-baiJamjuree gap-x-8 mx-auto  max-w-7xl ">
          <div className="flex flex-col justify-center border-r mt-3 mb-3 pr-5 border-black">
            <h1 className="text-5xl text-[#3f3f3f]">40.3K</h1>
            <p className="text-lg font-semibold">Total Users</p>
          </div>
          <div className=" flex flex-col justify-center border-r mt-3 mb-3  pr-5 border-black">
            <img className="w-20" src={threDot} alt="" />
            <p className="text-lg font-semibold">Total Value Locked</p>
          </div>
          <div className="flex flex-col justify-center mt-3 mb-3  border-black">
            <h1 className="text-5xl text-[#3f3f3f]">3.95</h1>
            <p className="text-lg font-semibold">Total Gas Charged (gBTC)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
