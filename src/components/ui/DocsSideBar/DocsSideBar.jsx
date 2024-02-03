import React, { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "../Accordion";
import { menus } from "../utils/mebuBarList";

export default function DocsSideBar({ children }) {
  const menuItem = menus;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="bg-gray-800 h-screen w-64 text-white p-4">
        {/* Sidebar content goes here */}
        <ul>
          {menuItem.map((item, index) => {
            return item.path ? (
              item.title && item.path && !item.accordian ? (
                <Link to={item?.path}>
                  <li key={index}>{item.title}</li>
                </Link>
              ) : 
                
               
                 
                      <Accordion
                      key={index}
                      // title={accitem.title}
                      contents={item}
                      isOpen={isOpen}></Accordion>
                 
                 
             
             
            ) : (
              item.sectionTitle && <li key={index}>{item.sectionTitle}</li>
            );
          })}
        </ul>
      </div>

      {children}
    </div>
  );
}
