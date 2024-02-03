import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavigationButton({ operation, title, path }) {
  return (
    <Link to={path}>
      <div className=" w-full   px-8 :translate-y-2 group-hover:duration-300 group-hover:transition-transform">
        <div className="flex justify-between items-center border rounded h-20 p-4 hover:-translate-y-1 group hover:shadow-sm  hover:duration-200 group:transition-transform">
          <div>
            <h2 className="">{operation}</h2>
            <h2 className="group-hover:text-blue-400">{title}</h2>
          </div>
          <div className="group-hover:text-blue-400">
            <FaArrowRight />
          </div>
        </div>
        {/* border */}
        <div className=" py-4 border-b"></div>
        <div className="py-4">Last modified 13d ago</div>
      </div>
    </Link>
  );
}
