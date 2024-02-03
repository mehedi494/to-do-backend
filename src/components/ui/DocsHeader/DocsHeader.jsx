import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import docsIcon from "../../../assets/favicon.png";

export default function DocsHeader() {
  return (
    <div className=" bg-white border-b ">
      <div className=" max-w-screen-xl flex justify-between items-center mx-auto min-h-[80px]  px-2">
        {/* left side  */}
        <div className="flex  items-center gap-x-2 w-80 text-gray-700">
          <div className=" inline px-2  sm:hidden">
            <TfiMenu />
          </div>
          <div className="">
            <img className="w-10 " src={docsIcon} alt="logo" />
          </div>
          <div>
            <h1 className="font-semibold">Bitcoinnano Blockchain Documents</h1>
          </div>
        </div>

        {/* right side */}
        <div className="flex items-center text-gray-700">
          <div className="hidden sm:inline w-52     ">
            <div className="flex justify-between items-center bg-[#ebeced] px-2 py-2  rounded-xl cursor-pointer">
              <div className="flex items-center justify-between gap-x-2 ">
                <IoSearch />
                <span>Search</span>
              </div>
              <div className="flex items-center justify-between gap-x-2 ">
                <IoIosArrowUp className=" bg-white w-5 h-5" />
                <small className="bg-white w-5 h-5 text-center">K</small>
              </div>
            </div>
            {/* Serach icon for small device */}
          </div>

          <span className=" inline sm:hidden">
            <IoSearch />
          </span>
        </div>
      </div>
    </div>
  );
}
