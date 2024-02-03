// import React, { useState } from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Accordion({ contents }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(contents);
  return (
    <div className="  mb-2">
      <div className="flex justify-between items-center cursor-pointer">
        <Link to={contents.path}>
          <li>{contents.title}</li>
        </Link>
        <span onClick={() => setIsOpen(!isOpen)} className="text-gray-500 ">
          {isOpen ? "▲" : "▼"}
        </span>
      </div>
      <div className="flex items-center justify-between  ">
        {isOpen && (
          <ul>
            {contents?.accordian.map((content, index) => {
              return (
                <div key={index}>
                  <Link to={content?.path}>
                    <li>{content.title}</li>
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
