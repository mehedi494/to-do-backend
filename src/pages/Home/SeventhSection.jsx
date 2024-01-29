import React from "react";
import exo_sys1 from "../../assets/ecosystem-1.png";
import exo_sys2 from "../../assets/ecosystem-2.png";
import exo_sys3 from "../../assets/ecosystem-3.png";

export default function SeventhSection() {
  const cardContent = [
    {
      img: exo_sys1,

      description:
        "Embark on epic narratives and dynamic adventures, where you can create, customize, and control unique characters.",
      catagories: "RPGs",
    },
    {
      img: exo_sys2,

      description:
        "Engage in thrilling battles where strategy and skill collide for intense one-on-one or team-based showdowns.",
      catagories: "Fighting",
    },
    {
      img: exo_sys3,

      description:
        "Designed to entertain and stimulate, these games offer a delightful blend of fun and cognitive engagement.",
      catagories: "Puzzle",
    },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto p-16 font-baiJamjuree">
        <div className="w-full sm:w-[90%] text-center mx-auto flex  justify-center flex-wrap gap-y-5 py-4">
          <h1 className="text-xl sm:text-5xl font-semibold text-[#333333]">
            Explore Bitcoinnano Ecosystem
          </h1>
          <p className="text-sm sm:text-md text-[#333333]">
            Bitcoinnano is leading the charge in constructing a versatile gaming
            ecosystem for the Bitcoin Blockchain, catering to each individual's
            unique preferences.
          </p>
        </div>
        {/* card */}
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4 justify-center items-center">
          {/* maping on card */}
          {cardContent.map((card, index) => (
            <div className="flex flex-col gap-y-2 max-w-[350px] max-h-[600px] bg-white border shadow-md p-4 rounded-xl">
              <h1 className="text-center text-2xl font-semibold">
                {card?.catagories}
              </h1>
              <img src={card?.img} alt="rpgs" />
              <p>{card?.description}</p>
              <button className="flex justify-between  my-2 bg-gradient-to-r from-[#fc690b] to-[#feab2d] hover:opacity-80 rounded-lg text-white items-center  p-2 gap-x-4 transition-transform transform hover:scale-95">
                Learn more
              </button>
            </div>
          ))}
        </div>
        {/* three dot  */}
        <div class="flex items-center justify-center gap-5 py-9">
          <div class="w-[18px] h-[18px] rounded-md bg-gray-400 rotate-45"></div>
          <div class="w-[22px] h-[22px] rounded-md bg-gray-600 rotate-45"></div>
          <div class="w-[18px] h-[18px] rounded-md bg-gray-400 rotate-45"></div>
        </div>
      </div>
    </div>
  );
}
