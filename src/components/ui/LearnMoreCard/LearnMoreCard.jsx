import React from "react";
import { Link } from "react-router-dom";

export default function LearnMoreCard({ heading, title, icon, path }) {
  return (
    <Link to={path}>
      <div>
        {heading && <p className="font-bold pb-4">{heading}</p>}
        <div className=" :translate-y-2 group-hover:duration-300 group-hover:transition-transform">
          <div className="flex gap-x-4  items-center border rounded h-16 p-4 hover:-translate-y-1 group hover:shadow-sm  hover:duration-200 group:transition-transform">
            <div className=" text-4xl">{icon}</div>
            <div>
              <h2 className="group-hover:text-blue-400 font-medium">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
