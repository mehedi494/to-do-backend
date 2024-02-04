import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LeftNavigationButton({ operation, title, path }) {
  return (
    <div>
      <Link to={path}>
        <div className="   px-8 :translate-y-2 group-hover:duration-300 group-hover:transition-transform">
          <div className="flex flex-row-reverse justify-between items-center border rounded h-20 p-4 hover:-translate-y-1 group hover:shadow-sm  hover:duration-200 group:transition-transform">
            <div>
              <h2 className="text-xs text-gray-500">{operation}</h2>
              <h2 className="group-hover:text-blue-400  font-medium">{title}</h2>
            </div>
            <div className="group-hover:text-blue-400">
              <FaArrowLeft />
            </div>
          </div>
          {/* border */}
        </div>
      </Link>
      
    </div>
  );
}
