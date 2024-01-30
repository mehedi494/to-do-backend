import React from "react";
import { Link } from "react-router-dom";

export default function Button({ buttonText, icon, path,className }) {
  return (
    <Link to={path}className="group">
      <button className={` ${className}`}>
        {icon} <span className=" text-lg">{buttonText}</span>
      </button>
    </Link>
  );
}
