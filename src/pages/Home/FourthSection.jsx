import React from "react";
import avatar from "../../assets/avatar.svg";
import { FaArrowRightLong } from "react-icons/fa6";

export default function FourthSection() {
  return (
    <div>
      <div className=" max-w-7xl mx-auto font-baiJamjuree ">
        <div className=" w-full sm:w-1/2 mx-auto -mb-32">
          <img src={avatar} alt="" />
        </div>
        <div style={{ background: 'radial-gradient(circle at top, #febd37, #efefef,#efefef)'}} className="gap-4 flex flex-col sm:flex-row  justify-center w-[90%] mx-auto  pt-40">
          <div className=" mx-auto sm:w-[35%] flex flex-col  sm:items-end self-start gap-y-5">
            <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-[#333333] text-center">Community - Owned Chain</h1>
            <button className="bg-gradient-to-r from-[#fc690b] to-[#feab2d] hover:opacity-80 text-lg font-medium  rounded-lg text-white    p-4 px-16 gap-x-4 transition-transform transform hover:scale-95">
              Join with Us <FaArrowRightLong  className="inline"/>
            </button>
          </div>
          <div className="w-full  mx-auto sm:w-[35%]  ">
            <p className="text-[#333333]">No VC, no pre-sale – just YOU. gOS token is the governance token for Bitcoinnano blockchain, functioning within a DAO framework. Holders of the $gOS token exercise collective decision-making authority over all modifications and enhancements to the Bitcoinnano blockchain.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
