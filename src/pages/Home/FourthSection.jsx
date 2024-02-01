import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import avatar from "../../assets/avatar.svg";

export default function FourthSection() {
  return (
    <div>
      <div className=" max-w-7xl mx-auto font-baiJamjuree ">
        <div className=" w-full sm:w-1/2 mx-auto -mb-32">
          <img src={avatar} alt="" />
        </div>
        {/* flex flex-col sm:flex-row  justify-center */}
        <div style={{ background: 'radial-gradient(circle at top, #febd37, #efefef,#efefef)'}} className="gap-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 w-[85%] mx-auto  pt-40">
          <div className=" flex flex-col  sm:items-end  gap-y-5">
            <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-[#333333] text-center">Community - Owned Chain</h1>
            <button className="bg-gradient-to-r from-[#fc690b] to-[#feab2d] hover:opacity-80 text-lg font-medium  rounded-lg text-white    p-4 px-8 gap-x-4 transition-transform transform hover:scale-95">
              Join with Us <FaArrowRightLong  className="inline"/>
            </button>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#333333]">No VC, no pre-sale – just YOU. gOS token is the governance token for Bitcoinnano blockchain, functioning within a DAO framework. Holders of the $gOS token exercise collective decision-making authority over all modifications and enhancements to the Bitcoinnano blockchain.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
