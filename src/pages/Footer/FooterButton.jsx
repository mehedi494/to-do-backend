import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterButton = () => {
  const datas = [
    {
      title: "telegram",
      icon: <FaTelegramPlane />,
      path: "https://t.me/bitcoinnanoworld",
    },
    {
      title: "twitter",
      icon: <BsTwitterX />,
      path: "https://twitter.com/Smallbitcoin",
    },
    /* { title: "discord", icon: <FaDiscord />, path: "/#" },

    { title: "youtube", icon: <FaYoutube />, path: "/#" }, */
    { title: "medium", icon: <FaMedium />, path: "/#" },
  ];
  return (
    <div className="group flex gap-x-3">
      {datas.map((data, index) => (
        <Link to={data?.path}>
          <button
            title={data?.title}
            key={index}
            className="text-white bg-gradient-to-t from-[#fc690b] to-[#feab2d] rounded-full p-3  transform hover:-translate-y-1 transition-transform duration-300">
            {data?.icon}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default FooterButton;
