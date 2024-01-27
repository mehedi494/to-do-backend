import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown, FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import { Link } from "react-router-dom";
import img from "../../../assets/logo.webp";
import NestedMenu from "./NestedMenu";

export default function Header() {
  return (
    <div>
      <header className="bg-[#3e3e3e]   shadow-md">
        <div className="bg-[#3e3e3e] min-h-22  flex justify-between   items-center max-w-8xl m-auto p-4">
          <Link to="/">
            <div className="inline ">
              <img className="w-32 " alt="logo" src={img} />
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
                { subMenuText: "Gelios Explorer", link: "/#" },
                { subMenuText: "Bridge BTC/wBTC", link: "/#" },
                { subMenuText: "Run a node", link: "/#" },
                { subMenuText: "DAO Model", link: "/#" },
              ]}
              icon={<FaAngleDown className="inline" />}
              link="/"></NestedMenu>

            <NestedMenu
              menuText="Community"
              subMenu={[
                { subMenuText: "Discord", link: "/#", preIcon: <FaDiscord /> },
                { subMenuText: "Twitter", link: "/#", preIcon: <BsTwitterX /> },
                {
                  subMenuText: "Telegram",
                  link: "/#",
                  preIcon: <FaTelegramPlane />,
                },
                { subMenuText: "Youtube", link: "/#", preIcon: <FaYoutube /> },
                { subMenuText: "Medium", link: "/#", preIcon: <FaMedium /> },
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
              <button className="hidden sm:hiiden md:inline sm:p-2 p-3 bg-gradient-to-r from-[#fc690b] to-[#feab2d] bg-cyan-200 rounded-xl  transition-transform transform group-hover:translate-x-1">
                Buy Entry Key <FaArrowRightLong className="inline " />
              </button>
            </Link>
            <button className="text-[#feab2d] sm:inline md:hidden lg:hidden xl:hidden inline">
              <CiSearch />
            </button>
            <button className="text-[#feab2d] sm:inline md:inline lg:inline xl:hidden inline">
              <RxHamburgerMenu />
            </button>
          </ul>
        </div>
      </header>
    </div>
  );
}
