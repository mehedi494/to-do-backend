// import React, { useState } from 'react'

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Accordion({ contents }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(contents);
  return (
    <div className="  mb-2">
      {/* Accordion Title/headline here */}
      <Link to={contents.path}>
        <div
          className="flex justify-between items-center cursor-pointer
      hover:bg-gray-200  p-1 rounded pb-2 pl-2
      ">
          <div className="flex w-full items-center gap-x-4  ">
            <span className="text-lg">{contents.icon}</span>
            <li>{contents.title}</li>
          </div>

          <span onClick={() => setIsOpen(!isOpen)} className="text-gray-500 ">
            {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        </div>
      </Link>

      {/* Accordion Contents/sub accordion here */}
      <div className="flex items-center justify-between  ">
        {isOpen && (
          <ul>
            {contents?.accordian.map((content, index) => {
              return (
                <div key={index} className="border-l px-4">
                  <Link to={content?.path}>
                    <div className="flex items-center gap-x-2 hover:bg-gray-200  p-1 rounded pb-2 pl-2">
                      <span className="text-lg">{content?.icon}</span>
                      <li className="w-full hover:bg-gray-200  p-1 rounded pb-2 pl-2 ">
                        {content.title}
                      </li>
                    </div>
                  </Link>
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
