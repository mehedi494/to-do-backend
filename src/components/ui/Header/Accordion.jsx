// src/components/Accordion.js
import React, { useState } from 'react';

const Accordion = ({ title, menus }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-md mb-2">
      <div
        className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <svg
          className={`h-6 w-6 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      {isOpen && (
        <div className="p-4 bg-white">
          <p>{title}</p>
          <>
          {menus?.map((item,index)=><p>{item?.title}</p>)}
          </>
        </div>
      )}
    </div>
  );
};

export default Accordion;
