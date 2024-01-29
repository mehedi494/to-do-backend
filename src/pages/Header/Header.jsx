import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaDiscord, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { FaAngleDown, FaArrowRightLong, FaMedium } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

import { Link } from "react-router-dom";
import logo from "../../assets/logoBitcoinnano.png";
import NestedMenu from "./NestedMenu";
import HamBurger from "./HamBurgerMenu";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const smallDeviceMenu = [
    {
      menuText: "Home",
      path: "/",
    },
    {
      menuText: "Explore",
      path: "/",
      isAccordion: true,
      subMenu: [
        { subMenuText: "Bitcoinnano Explorer", path: "/#" },
        { subMenuText: "Bridge BTC/wBTC", path: "/#" },
        { subMenuText: "Run a node", path: "/#" },
        { subMenuText: "DAO Model", path: "/#" },
      ],
    },
    {
      menuText: "Community",
      path: "/",
      isAccordion: true,
      subMenu: [
        { subMenuText: "Discord", path: "/#", preIcon: <FaDiscord /> },
        { subMenuText: "Twitter", path: "/#", preIcon: <BsTwitterX /> },
        {
          subMenuText: "Telegram",
          link: "/#",
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
    console.log("object");
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#3e3e3e]  z-20 w-full top-0 right-0  fixed ">
      <header className="  shadow-md font-baiJamjuree">
        <div className=" max-h-[85px]  flex justify-between   items-center max-w-7xl m-auto p-4">
          <Link to="/">
            <div className="w-[200px]  ">
              
                <img  className=" " alt="logo" src={logo}/>
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
          <ul className="flex text-xl text-white font-notoSansKr   gap-6 items-center">
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
                { subMenuText: "Twitter", path: "/#", preIcon: <BsTwitterX /> },
                {
                  subMenuText: "Telegram",
                  link: "/#",
                  preIcon: <FaTelegramPlane />,
                },
                { subMenuText: "Youtube", path: "/#", preIcon: <FaYoutube /> },
                { subMenuText: "Medium", path: "/#", preIcon: <FaMedium /> },
              ]}
              icon={<FaAngleDown className="inline" />}
              link="/"></NestedMenu>
            <Link to="/sign-in">
              <li className="hidden md:hidden lg:hidden xl:inline  sm:hidden hover:text-[#fc690b] transition duration-200">
                Ecosystem
              </li>
            </Link>
            <Link to="/sign-in">
              <li className="hidden md:hidden sm:hidden hover:underline">
                Docs
              </li>
            </Link>
            <Link to="/sign-in" className="group">
              <button className="hidden sm:hiiden md:inline sm:p-2 p-3 bg-gradient-to-r from-[#fc690b] to-[#feab2d]  rounded-xl  transition-transform transform group-hover:translate-x-1">
                Buy Entry Key <FaArrowRightLong className="inline " />
              </button>
            </Link>
            <button className="text-[#feab2d] sm:inline md:hidden lg:hidden xl:hidden inline">
              <CiSearch />
            </button>
            <button
              onClick={toggleMenu}
              className="text-[#feab2d] sm:inline md:inline lg:inline xl:hidden  ">
              {!isOpen ? <RxHamburgerMenu /> : <IoMdClose />}
            </button>
          </ul>
        </div>
        <HamBurger isOpen={isOpen} menus={smallDeviceMenu}></HamBurger>
      </header>
    </div>
  );
}
