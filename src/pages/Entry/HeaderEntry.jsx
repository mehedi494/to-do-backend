import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import uniSatIcon from "../../assets/button-icon/unisat.svg";
import wallateIcon from "../../assets/button-icon/wallet.svg";
import logo from "../../assets/logoBitcoinnano.png";
import Button from "../../components/ui/Button";

export default function HeaderEntry() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:p-4  ">
      <div className="p-1 sm:p-4 top-0 right-0 sticky flex items-center justify-between w-full lg:h-20  rounded-lg bg-[#333333] text-white  border-2">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row lg:items-center md:justify-between w-full gap-x-8">
          <Link to="/">
            <div className="w-[200px]  ">
              <img className=" " alt="logo" src={logo} />
            </div>
          </Link>
          {/* menu items  */}
          <div>
            <ul className="flex text-sm font-normal text-white font-semi   gap-6 items-center">
              <Link to="/">
                <li className="hidden group relative md:hidden lg:hidden xl:inline sm:hidden hover:text-[#fc690b]  transition duration-200">
                  Buy Key
                  <sup className=" group-hover:text-[#333] px-1 mx-1 text-sm  rounded  bg-[#fc690b]">
                    Hot
                  </sup>
                </li>
              </Link>
              <Link to="/#">
                <li className="hidden md:hidden lg:hidden xl:inline  sm:hidden hover:text-[#fc690b] transition duration-200">
                  Referral
                </li>
              </Link>
              <Link to="/#">
                <li className="hidden md:hidden lg:hidden xl:inline  sm:hidden hover:text-[#fc690b] transition duration-200">
                  Inventory
                </li>
              </Link>
              <Link to="/">
                <li className="hidden  md:hidden lg:hidden xl:inline sm:hidden text-[#868686]  transition duration-200">
                  Explorer
                  <sup className="  p-1 text-sm  rounded  ">Soon</sup>
                </li>
              </Link>
            </ul>
          </div>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-2 p-4 sm:p-0 ">
            <Button
              className={`items-center flex  gap-x-1  text-center mx-auto my-auto  sm:hidden md:inline sm:p-2 w-52  bg-gradient-to-r from-[#fc690b] to-[#feab2d] rounded-xl  transition-transform transform group-hover:translate-x-1  overflow-hidden px-1 sm:px-4 h-10  text-[10px] sm:text-sm`}
              path={``}
              buttonText={`Install UniSat`}
              icon={
                <img className="w-5 inline" src={uniSatIcon} alt="icon" />
              }></Button>
            <Button
              className={`items-center flex gap-x-1 text-center mx-auto my-auto  sm:hidden md:inline sm:p-2 w-52  bg-gradient-to-r from-[#fc690b] to-[#feab2d] rounded-xl  transition-transform transform group-hover:translate-x-1  overflow-hidden px-1 sm:px-4 h-10  text-[10px] sm:text-sm`}
              path={``}
              buttonText={`Connect EVM`}
              icon={
                <img className="w-5 inline" src={wallateIcon} alt="icon" />
              }></Button>
          </div>
        </div>
        <div className="flex  ">
          <button
            onClick={toggleMenu}
            className="text-[#feab2d] sm:inline md:inline lg:inline xl:hidden  ">
            {!isOpen ? <RxHamburgerMenu /> : <IoMdClose />}
          </button>
        </div>
      </div>

      {/*****  Sub menus  *****/}

      <nav
        className={`bg-[#333131] rounded-lg  -mt-2  lg:hidden ${
          isOpen ? "block" : "hidden"
        } `}>
        <ul className="flex flex-col text-sm font-normal text-white font-semi   gap-6   p-8">
          <Link to="/">
            <li className=" lg:hidden xl:inline  text-[#fc690b]  transition duration-200">
              Buy Key
              <sup className=" text-white px-1 mx-1  text-sm  rounded  bg-[#fc690b]">
                Hot
              </sup>
            </li>
          </Link>
          <Link to="/#">
            <li className=" lg:hidden xl:inline   hover:text-[#fc690b] transition duration-200">
              Referral
            </li>
          </Link>
          <Link to="/#">
            <li className=" xl:inline   hover:text-[#fc690b] transition duration-200">
              Inventory
            </li>
          </Link>
          <Link to="/">
            <li className="n xl:inline  text-[#868686]  transition duration-200">
              Explorer
              <sup className="  p-1 text-sm  rounded  ">Soon</sup>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
