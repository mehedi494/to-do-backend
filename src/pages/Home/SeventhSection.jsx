import React from "react";
import exo_sys1 from "../../assets/What-Is-Staking-400x300.png";
import exo_sys2 from "../../assets/payment.png";
import exo_sys3 from "../../assets/RWA.png";

export default function SeventhSection() {
  const cardContent = [
    {
      img: exo_sys1,
      catagories: "Staking Program (20 Years) ",
      list: [
        "1. Stake BNB will get NAN0",
        "2. Stake BTC will get NAN0",
        "3. Stake NAN0 will get NAN0",
      ],
    },
    {
      img: exo_sys2,
      catagories: "Payment System",
      list: ["1. Mobile App", "2. P2P/Online", "3. In-store/Offline"],
    },
    {
      img: exo_sys3,
      catagories: "Real World Asset",
      list: ["1. Real Estate", "2. Vechicle", "3. Gold/NFT"],
    },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto  font-baiJamjuree">
        <div className="w-full sm:w-[90%] text-center mx-auto flex  justify-center flex-wrap gap-y-5 ">
          <h1 className="text-xl sm:text-5xl font-semibold text-[#333333]">
            Explore Bitcoinnano Ecosystem
          </h1>
        </div>
        {/* card */}
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2  gap-2 justify-items-center items-center">
          {/* maping on card */}
          {cardContent?.map((card, index) => (
            <div key={index} className="flex flex-col gap-y-2 max-w-[350px]  bg-white border shadow-md p-4 rounded-xl">
              <h1 className="text-center text-2xl font-semibold">
                {card?.catagories}
              </h1>
              <img className="rounded" src={card?.img} alt="rpgs" />
             <div className="flex flex-col gap-y-4 py-4">
             {
              card?.list.map((item,index)=>( <p className=" P-4 text-xl font-semibold text-[#feab2d]"> {item}</p>))
             }
             <button className="flex justify-between   bg-gradient-to-r from-[#fc690b] to-[#feab2d] hover:opacity-80 rounded text-white items-center  p-4 gap-x-4 transition-transform transform hover:scale-95">
                Learn more
              </button>
             </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
