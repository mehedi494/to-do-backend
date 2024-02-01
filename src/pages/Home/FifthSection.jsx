import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import bgPattern from "../../assets/bg_key_sales.png";
import keyImg from "../../assets/lock_and_key.png";

export default function FifthSection() {
  return (
    <div className="max-w-7xl mx-auto text-white font-baiJamjuree sm:mt-48">
      <div className="sm:hidden p-2   flex justify-center items-center">
      <img
          loading="lazy"
          className="flex  max-w-[250px]"
          src={keyImg}
          alt="key"
        />
      </div>
      <div
        className="  sm:relative bg-cover bg-center bg-no-repeat   pt-16 rounded-2xl w-full sm:max-w-[90%] sm:mx-auto"
        style={{ backgroundImage: `url(${bgPattern})` }}
      >
        <img 
          loading="lazy"
          className="hidden sm:flex  sm:absolute sm:right-[-80px] sm:top-[-150px] max-w-[450px]"
          src={keyImg}
          alt="key"
        />
        <div className="w-2/3 p-8   flex flex-col justify-center gap-y-4">
          <h1 className="text-5xl font-semibold text-white">Entry Key Mint</h1>
          <p className="">
            The Entry Key is an exclusive passport, offering early developers
            privileged access to innovative features and inherent benefits of
            Bitcoinnano. It also acts as tangible proof of eligibility for entities
            running Bitcoinnano’ Observer Nodes, validating contributions and
            unlocking associated rewards.
          </p>
          <button className="group w-60 bg-gradient-to-r from-[#fc690b] to-[#feab2d] hover:opacity-80 rounded-lg text-white items-center flex p-4 gap-x-4 transition-transform transform hover:scale-95">
            Mint Entry Key <FaArrowRightLong className="inline group-hover:transition-transform transform group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
