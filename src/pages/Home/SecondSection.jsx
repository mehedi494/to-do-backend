import mission from "../../assets/partners_logo/crop/Mission.png";
import vision from "../../assets/partners_logo/crop/Vision.png";
const SecondSection = () => {
  return (
    <div className="max-w-7xl mt-24 sm:mt-0 py-4 mx-auto ">
      {/* container  */}

      <div className="">
      <div className="flex gap-4   flex-col text sm:flex-row justify-center  items-center p-4 max-h-60 ">
        <div className=" border shadow-sm p-4 rounded-md flex flex-col items-center gap-x-4  ">
          <div className="flex justify-center flex-col items-center">
            <img className="w-20" src={vision} alt="" />
            <p className="text-[#3e3e3e]">Vision</p>
          </div>
          <h1 className="font-poppins font-normal text-center  text-[#ff9000] text-xl sm:text-2xl md:text-3xl lg:text-3xl  ">
            " To make your life changing financial freedom! "
          </h1>
        </div>

        <div className="border shadow-sm p-4 rounded-md flex flex-col gap-x-4 items-center justify-center ">
          <div className=" flex justify-center flex-col items-center">
            <img className="w-20" src={mission} alt="" />
            <p className="text-[#3e3e3e]">Mission</p>
          </div>

          <h1 className="font-poppins font-semibol   text-[#ff9000] text-xl sm:text-2xl md:text-3xl lg:text-3xl text-center  ">
           " To be the top 10 global digital payment! " 
          </h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SecondSection;
