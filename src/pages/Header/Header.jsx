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
    {
      menuText: "Explore",
      path: "/#",
      isAccordion: true,
      subMenu: [
        { subMenuText: "Bitcoinnano Explorer", path: "/#" },
        { subMenuText: "Bridge BTC/wBTC", path: "/#" },
        { subMenuText: "Run a node", path: "/#" },
        { subMenuText: "DAO Model", path: "/#" },
      ],
    },
    {
      menuText: "Docs",
      path: "/#",
    },
    {
      menuText: "Community",
      path: "/",
      isAccordion: true,
      subMenu: [
        { subMenuText: "Discord", path: "/#", preIcon: <FaDiscord /> },
        {
          subMenuText: "Twitter",
          path: "https://twitter.com/Smallbitcoin",
          preIcon: <BsTwitterX />,
        },
        {
          subMenuText: "Telegram",
          link: "https://t.me/bitcoinnanoworld",
          preIcon: <FaTelegramPlane />,
        },
        { subMenuText: "Youtube", path: "/#", preIcon: <FaYoutube /> },
        { subMenuText: "Medium", path: "/#", preIcon: <FaMedium /> },
      ],
    },
    {
      menuText: "Ecosystem",
      path: "/",
    },
    {
      menuText: "Docs",
      path: "/",
    },
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 

  return (
    <div className="bg-[#3e3e3e]  z-20 w-full top-0 right-0  fixed ">
      <header className="  shadow-md font-baiJamjuree">
        <div className="h-[100px]  flex justify-between   items-center max-w-7xl mx-auto px-2">
          <Link to="/">
            <div className="w-[200px]  ">
              <img className=" " alt="logo" src={logo} />
            </div>
          </Link>

          <div className="hidden sm:hidden md:inline lg:inline">
            <form className="bg-[#4A4A4A] text-white text-lg  p-4 rounded-3xl flex items-center">
              <input
                className="bg-[#4A4A4A] font-poppins focus:outline-none max-w-64 "
                type="text"
                placeholder="Search  here..."
              />
              <CiSearch />
            </form>
          </div>
          <ul className="flex  text-xl text-white    gap-x-4 items-center">
            <Link to="/">
              <li className="hidden md:hidden lg:hidden xl:inline sm:hidden hover:text-[#fc690b] transition duration-200">
                Home
              </li>
            </Link>

            <NestedMenu
              menuText="Explore"
              subMenu={[
                { subMenuText: "Bitcoinnano Explorer", path: "/#" },
                { subMenuText: "Bridge BTC/wBTC", path: "/#" },
                { subMenuText: "Run a node", path: "/#" },
                { subMenuText: "DAO Model", path: "/#" },
              ]}
              icon={<FaAngleDown className="inline" />}
              link="/"></NestedMenu>

            <NestedMenu
              menuText="Community"
              subMenu={[
                { subMenuText: "Discord", path: "/#", preIcon: <FaDiscord /> },
                {
                  subMenuText: "Twitter",
                  path: "https://twitter.com/Smallbitcoin",
                  preIcon: <BsTwitterX />,
                },
                {
                  subMenuText: "Telegram",
                  path: "https://t.me/bitcoinnanoworld",
                  preIcon: <FaTelegramPlane />,
                },
                { subMenuText: "Youtube", path: "/#", preIcon: <FaYoutube /> },
                { subMenuText: "Medium", path: "/#", preIcon: <FaMedium /> },
              ]}
              icon={<FaAngleDown className="inline" />}
              link="/"></NestedMenu>
            <Link to="/#">
              <li className="hidden md:hidden lg:hidden xl:inline  sm:hidden hover:text-[#fc690b] transition duration-200">
                Ecosystem
              </li>
            </Link>
            <Link to="/#">
              <li className="hidden md:hidden lg:hidden xl:inline  sm:hidden hover:text-[#fc690b] transition duration-200">
                Docs
              </li>
            </Link>
            <Link to="/#" className="">
              <button className="group hidden sm:hiiden md:inline sm:p-2 p-2 bg-gradient-to-r from-[#fc690b] to-[#feab2d]  rounded-xl  transition-transform transform border border-[#3e3e3e]  hover:border hover:border-white group-hover:transition-transform ">
                Buy Entry Key{" "}
                <FaArrowRightLong className="inline group-hover:translate-x-1 group-hover:transition-transform transform " />
              </button>
            </Link>

            {/* ********** */}
            
            <button onClick={toggleSearch} className="text-[#feab2d] sm:inline md:hidden lg:hidden xl:hidden inline">
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
        <HamBurger isOpen={isOpen} menus={smallDeviceMenu}></HamBurger>
      </header>
      {isInputOpen&&
        <SearchSmallDevice isInputOpen={isInputOpen} setInputOpen={setInputOpen}></SearchSmallDevice>
      }
    </div>
  );
}
