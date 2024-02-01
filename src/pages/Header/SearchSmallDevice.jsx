import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

export default function SearchSmallDevice({ isInputOpen, setInputOpen }) {
  const [isInputClose, setInputClose] = useState(false);

  const toggleClose = () => {
    setInputClose(!isInputClose);
    setInputOpen(!isInputOpen);
  };

  return (
    <div className="">
      {isInputOpen && (
        <div
          className={`bg-[#3e3e3e] h-[100px] flex items-center justify-center z-40 w-full top-0 right-0  fixed p-4  ${
            isInputClose && "hidden"
          }`}>
          <CiSearch className="text-orange-500" />
          <input
            placeholder="search here ..."
            type="text"
            className={`text-[#feab2d] sm:inline md:hidden lg:hidden xl:hidden inline p-1 px-4 bg-[#3e3e3e] focus:outline-none border-b border-orange-500 w-full `}
          />

          <button
            onClick={toggleClose}
            className="text-[#feab2d] sm:inline md:hidden lg:hidden xl:hidden inline">
            <IoIosClose />
          </button>
        </div>
      )}
    </div>
  );
}
