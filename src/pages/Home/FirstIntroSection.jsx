import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import threDot from "../../assets/3dot.gif";
import introCicle_1 from "../../assets/bitcoint-net.svg";
import introCicle_2 from "../../assets/bitcoint-net-middle.svg";
import shape from "../../assets/btc_bridge_rotate_shape .svg";
import introBg from "../../assets/intro_bg.png";
import intro_pattern from "../../assets/intro_pattern.png";

export default function FirstIntroSection() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${introBg})` }}>
      {/* first section */}
      <div className="flex flex-wrap flex-col-reverse md:flex-row lg:flex-row justify-center items-center p-4 max-w-7xl mx-auto font-baiJamjuree ">
        <div className="w-full  md:w-1/2 lg:w-1/2  flex flex-col gap-y-5 my-4">
          <h1 className="text-[#fd9623] text-2xl sm:text-3xl lg:text-4xl font-semibold">
            THE DAPP LAYER FOR BITCOIN ECOSYSTEM
          </h1>
          <p className="text-[#333333] text-sm sm:text-md lg:text-lg  font-semibold ">
            Designed to enhance Bitcoin capabilities, BITCOINNANO is your
            gateway to a seamlessly connected, decentralized tomorrow. The
            future of innovation starts here!
          </p>
          <div className="flex gap-x-8 h-12 sm:h-auto">
            <button className="bg-gradient-to-r from-[#fc690b] to-[#feab2d] hover:opacity-80  rounded-lg text-white  items-center flex p-2 gap-x-4 transition-transform transform hover:scale-95">
              Run a Node <FaArrowRightLong />
            </button>
            <button className="border-1 bg-cyan-200 p-4  rounded-lg text-white border-gray-600 border ">
              Bridge to Bitcoinnano
            </button>
          </div>
        </div>
        {/* Second sectin */}
        <div className="w-full  sm:w-1/2">
          <div className="mt-12 relative flex items-center justify-center overflow-hidden">
            <img
              className=" relative w-full h-full text-blue-500 animate-spin-right"
              src={introCicle_2}
              alt="into-img"
              title="bitcoin-lifecyle"
            />
            <img
              className="absolute top-0 right-0 w-full h-full text-blue-500 animate-spin-slow"
              src={introCicle_1}
              alt="into-img"
              title="bitcoin-lifecyle"
            />
            <img
              className="-z-10 w-64 absolute    h-full text-blue-500 animate-moveUp"
              src={shape}
              alt="into-img"
              title="bitcoin-lifecyle"
            />
          </div>
        </div>
      </div>

      {/* third section  */}
      <div className="relative w-full bg-cover h-auto bg-center bg-no-repeat">
        {/* Background for large devices */}
        <div
          className="hidden -z-10 lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${intro_pattern})` }}></div>

        <div className=" font-baiJamjuree text-sm   max-w-7xl py-8">
          <div className="flex justify-evenly gap-x-4">
            <div className="flex flex-col items-center justify-center  border-r mt-3 mb-3 pr-3  border-black">
              <h1 className="text-3xl sm:text-5xl text-[#3f3f3f]">40.3K</h1>
              <p className="text-sm sm:text-lg font-semibold">Total Users</p>
            </div>
            <div className=" flex flex-col justify-center items-center  border-r mt-3 mb-3 pr-3  border-black">
              <img className="w-20 " src={threDot} alt="" />
              <p className="text-sm sm:text-lg font-semibold">
                Total Value Locked
              </p>
            </div>
            <div className="flex flex-col justify-center mt-3 mb-3 border-black">
              <h1 className="text-3xl sm:text-5xl text-[#3f3f3f]">3.95</h1>
              <p className="text-sm sm:text-lg font-semibold">
                Total Gas Charged (gBTC)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
