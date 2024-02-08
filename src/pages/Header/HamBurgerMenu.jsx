// HamBurger.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const HamBurger = ({ isOpen, menus }) => {
  const [isAccordionOpen, setAccodionIsOpen] = useState(false);

  const toggleAccordion = () => {
    setAccodionIsOpen(!isAccordionOpen);
  };

  return (
    <nav className={`bg-[#333131] lg:hidden ${isOpen ? "block" : "hidden"} `}>
      <ul className="p-4 font-poppins flex flex-col gap-4 justify-start  ">
        {menus?.map((menuItem, index) =>
          menuItem.isAccordion ? (
            <div className={`rounded-md ${isAccordionOpen?"bg-[#333131]":""} `}>
              <div onClick={toggleAccordion}
                className={`flex items-center justify-between px-2 bg-[#3e3e3e]  cursor-pointer`}
                >
                  <Link
              key={index}
              to="/"
              className="block lg:inline-block text-white hover:text-[#fc690b] mr-4">
              {menuItem.menuText}
            </Link>
                
                <svg
                  className={`h-6 text-white w-6 ${isAccordionOpen ? "transform rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {isAccordionOpen && (
                <div className="p-4 border-gray-50  flex flex-col gap-3  bg-[#333131]">
                  {menuItem.subMenu.map((item, index) => (
                    <Link to={item?.path}>
                    <li className="text-white hover:text-[#fc690b]" key={index}>{item?.subMenuText}</li></Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={index}
              to="/"
              className="px-2 block lg:inline-block text-white hover:text-[#fc690b] mr-4">
              {menuItem.menuText}
            </Link>
          )
        )}

        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default HamBurger;
