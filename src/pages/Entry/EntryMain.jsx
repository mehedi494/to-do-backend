import React from "react";


import introCicle_2 from "../../bitcoint-net-middle.svg";
import introCicle_1 from "../../assets/bitcoint-net.svg";
import shape from "../../assets/btc_bridge_rotate_shape .svg";
import FirstContentEntry from "./FirstContentEntry.jsx";
import SecondContentEntry from "./SecondContentEntry.jsx"
import ThirdContentEntry from  "./ThirdContentEntry.jsx"
import HeaderEntry from "./HeaderEntry.jsx"

export default function EntryMain() {
  return (
    <div className="max-w-7xl mx-auto font-baiJamjuree overflow-hidden p-4  ">
      <div className="min-h-screen ">
        <div className="relative w-full h-full">
          <div
            className="absolute inset-2  bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${shape})` }}>
            <div className=" opacity-40  relative flex items-center justify-center ">
              <img
                className=" relative w-full h-full  animate-spin-right "
                src={introCicle_2}
                alt="into-img"
                title="bitcoin-lifecyle"
              />
              <img
                className="absolute  w-full h-full animate-spin-slow"
                src={introCicle_1}
                alt="into-img"
                title="bitcoin-lifecyle"
              />
              {/* <img
            className="-z-10 absolute w-96 bottom-0     h-full animate-moveUp"
            src={shape}
            alt="into-img"
            title="bitcoin-lifecyle"
          /> */}
              <img
                className="-z-10 absolute w-96      h-full animate-spin-slow"
                src={shape}
                alt="into-img"
                title="bitcoin-lifecyle"
              />
            </div>
          </div>
          <div className="relative w-full  text-4xl font-bold">
            <HeaderEntry></HeaderEntry>

           <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 ">
          <div className="col-span-2"> <FirstContentEntry ></FirstContentEntry></div>
           <div className="grid grid-cols-1 gap-4">
           <SecondContentEntry></SecondContentEntry>
           <ThirdContentEntry ></ThirdContentEntry>
           </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
