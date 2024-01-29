import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import technology from "../../assets/technology.png";

export default function SixthSection() {
  return (
    <div className="max-w-7xl mx-auto font-baiJamjuree">
      <div className="w-[80%]  py-16 items-center  mx-auto flex flex-col sm:flex-row gap-4">
        <div className="w-1/2 flex items-center justify-center ">
          <img className="min-w-72" src={technology} alt="" />
        </div>
        <div className="flex justify-center  w-1/2 ">
          <div className=" flex flex-col items-end justify-center gap-y-5">
            <h1 className="text-[#333333] text-3xl font-semibold sm:text-4xl md:text-5xl">
              TECHNOLOGY
            </h1>
            <p className=" text-[#333333] text-right text-sm sm:text-md">
              Gelios' mission is to form a multi-application ecosystem across
              Bitcoin and EVM networks, guided by a community-centric approach.
              Striving for optimal efficiency and cost-effectiveness, Gelios
              leads the way in integrating cutting-edge technological
              innovations, including but not limited to Runes protocol, Polygon
              CDK, and Celestia DA.
            </p>
            <button className="flex justify-between w-60 bg-gradient-to-r from-[#fc690b] to-[#feab2d] hover:opacity-80 rounded-lg text-white items-center  p-4 gap-x-4 transition-transform transform hover:scale-95">
              Read more <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
