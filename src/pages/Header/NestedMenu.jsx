// NestedMenu.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NestedMenu = ({ menuText, subMenu, icon }) => {
  
  

  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const handleHover = () => {
    setIsSubMenuVisible(true);
  };

  const handleLeave = () => {
    setIsSubMenuVisible(false);
  };
  return (
    <div
      className="relative group p-2 hidden md:hidden lg:hidden xl:inline  sm:hidden"
      onMouseEnter={handleHover}
       onMouseLeave={handleLeave}
    >
      <span className="cursor-pointer hover:text-[#fc690b] transition duration-200">
        {menuText}
        {icon}
      </span>
      {isSubMenuVisible && (
        <ul className=" absolute flex  mt-2 flex-col gap-3 p-3 transition hover:duration-500  rounded-xl border-gray-400    bg-[#4A4A4A]   border" style={{ width: 'max-content' }}>
          {/* Render your sub-menu options here */}
          {subMenu.map((item, index) => (
            <Link to={item?.path} target="_blank">
              <li 
                key={index}
                className="flex items-center hover:text-[#fc690b] transition duration-200 px-3 space-x-2">
             <span className="">{item.preIcon}</span> <span>{item?.subMenuText}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NestedMenu;
