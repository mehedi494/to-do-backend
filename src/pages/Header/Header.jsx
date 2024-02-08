import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaDiscord, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { FaAngleDown, FaArrowRightLong, FaMedium } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

import { Link } from "react-router-dom";
import logo from "../../assets/logoBitcoinnano.png";
import HamBurger from "./HamBurgerMenu";
import NestedMenu from "./NestedMenu";
import SearchSmallDevice from "./SearchSmallDevice";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInputOpen, setInputOpen] = useState(false);

  const toggleSearch = () => {
    // console.log("sdfjlk");
    setInputOpen(!isInputOpen);
  };
  // console.log(isInputOpen);

  const smallDeviceMenu = [
    {
      menuText: "Home",
      path: "/#",
    },
    /* {
      menuText: "Explore",
      path: "/#",
      isAccordion: true,
      subMenu: [
        { subMenuText: "Bitcoinnano Explorer", path: "/#" },
        { subMenuText: "Bridge BTC/wBTC", path: "/#" },
        { subMenuText: "Run a node", path: "/#" },
        { subMenuText: "DAO Model", path: "/#" },
      ],
    }, */
    /* {
      menuText: "Docs",
      path: "/#",
    }, */

    {
      menuText: "Vision",
      path: "/#vision",
    },
    {
      menuText: "Tokenomic",
      path: "/#tokenomic",
    },
    {
      menuText: "Ecosystem",
      path: "/ecosystem",
    },
    {
      menuText: "Community",
      path: "/",
      isAccordion: true,
      subMenu: [
        {
          subMenuText: "Twitter",
          path: "https://twitter.com/BITCOINNAN0",
          preIcon: <BsTwitterX />,
        },
        {
          subMenuText: "Telegram",
          link: "https://t.me/bitcoinnanoworld",
          preIcon: <FaTelegramPlane />,
        },
       
        { subMenuText: "Medium", path: "/#", preIcon: <FaMedium /> },
      ],
    },

    /* {
      menuText: "Docs",
      path: "/",
    }, */
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#3e3e3e]  z-20 w-full top-0 right-0  fixed " >
      <header className="  shadow-md font-baiJamjuree">
        <div className="h-[100px]  flex justify-between   items-center max-w-7xl mx-auto px-2">
          <a href="/#home">
            <div className="w-[200px]  ">
              <img className=" " alt="logo" src={logo} />
            </div>
          </a>

          <div  className="hidden sm:hidden md:inline lg:inline">
            <form className="bg-[#4A4A4A] text-white text-lg  p-4 rounded-3xl flex items-center">
              <input
                className="bg-[#4A4A4A] font-poppins focus:outline-none max-w-64 "
                type="text"
                placeholder="Search  here..."
              />
              <CiSearch />
            </form>
          </div>
          <div className="">
            <ul className="flex  text-xl text-white    gap-x-4 items-center">
              <a  href="/#home">
                <li className="hidden md:hidden lg:hidden xl:inline sm:hidden hover:text-[#fc690b] transition duration-200">
                  Home
                </li>
              </a>
              <a href="/#vision">
                <li className="hidden md:hidden lg:hidden xl:inline sm:hidden hover:text-[#fc690b] transition duration-200">
                  Vision
                </li>
              </a>
              <a  href="/#tokenomic">
                <li className="hidden md:hidden lg:hidden xl:inline sm:hidden hover:text-[#fc690b] transition duration-200">
                  Tokenomic
                </li>
              </a>
              <a href="/#ecosystem">
                <li className="hidden md:hidden lg:hidden xl:inline  sm:hidden hover:text-[#fc690b] transition duration-200">
                  Ecosystem
                </li>
              </a>

              <NestedMenu
                menuText="Community"
                subMenu={[
                  
                  {
                    subMenuText: "Twitter",
                    path: "https://twitter.com/BITCOINNAN0",
                    preIcon: <BsTwitterX />,
                  },
                  {
                    subMenuText: "Telegram",
                    path: "https://t.me/bitcoinnanoworld",
                    preIcon: <FaTelegramPlane />,
                  },
                 
                  { subMenuText: "Medium", path: "/#", preIcon: <FaMedium /> },
                ]}
                icon={<FaAngleDown className="inline" />}
                link="/"></NestedMenu>
              
             
              <Link to="https://unisat.io/brc20/NAN0" className="">
                <button className="group hidden sm:hiiden md:inline sm:p-2 h-[60px] bg-gradient-to-r from-[#fc690b] to-[#feab2d]  rounded-xl w-[200px] font-bold transition-transform transform border border-[#3e3e3e]  hover:border hover:border-white group-hover:transition group-hover:duration-700 ">
                  Buy NANO
                  <FaArrowRightLong className="inline ml-2 group-hover:translate-x-1 group-hover:transition-transform transform " />
                </button>
              </Link>

              {/* ********** */}

              <button
                onClick={toggleSearch}
                className="text-[#feab2d] sm:inline md:hidden lg:hidden xl:hidden inline">
                <CiSearch />
              </button>
              {/* ******** */}
              <button
                onClick={toggleMenu}
                className="text-[#feab2d]  sm:inline md:inline lg:inline xl:hidden  ">
                {!isOpen ? <RxHamburgerMenu /> : <IoMdClose />}
              </button>
            </ul>
          </div>
        </div>
        <HamBurger isOpen={isOpen} menus={smallDeviceMenu}></HamBurger>
      </header>
      {isInputOpen && (
        <SearchSmallDevice
          isInputOpen={isInputOpen}
          setInputOpen={setInputOpen}></SearchSmallDevice>
      )}
    </div>
  );
}
