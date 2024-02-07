import mission from "../../assets/partners_logo/crop/Mission.png";
import vision from "../../assets/partners_logo/crop/Vision.png";
const SecondSection = () => {
  return (
    <div className="max-w-7xl py-4 mx-auto ">
      {/* container  */}

      <div className="">
      <div className="flex gap-4   flex-col text sm:flex-row justify-center  items-center p-4 h-60 ">
        <div className=" flex items-center gap-x-4 ">
          <div className="flex  justify-center flex-col items-center">
            <img className="w-24" src={vision} alt="" />
            <p className="italic">Vision</p>
          </div>
          <h1 className="font-poppins font-normal  text-[#333333] text-xl sm:text-2xl md:text-3xl lg:text-3xl  ">
            To make your life changing financial freedom!
          </h1>
        </div>

        <div className=" flex gap-x-4 items-center justify-center ">
          <div className=" flex justify-center flex-col items-center">
            <img className="w-24" src={mission} alt="" />
            <p className="">Mission</p>
          </div>

          <h1 className="font-poppins font-normal   text-[#333333] text-xl sm:text-2xl md:text-3xl lg:text-3xl ">
            To be the top 10 global digital payment!
          </h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SecondSection;
