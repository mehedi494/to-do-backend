const SecondSection = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      {/* container  */}

      <div className="flex gap-8 flex-col text sm:flex-row justify-center items-center p-4 h-60 ">
      <div className=" ">
        <h1 className="font-poppins font-normal border-l-4 border-[#fd9623] text-[#fd9623] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center ">
          Vision: To make your <i className="text-[#333333]">life changing</i>
          financial freedom!
        </h1>
      </div>

      <div className="   ">
        <h1 className="font-poppins font-normal   text-[#333333] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
          Mission: To be the <i className="text-[#fd9623]">top 10 </i> global{" "}
          <i className="text-[#fd9623]"> digital payment!</i>
        </h1>
      </div>
      </div>
    </div>
  );
};

export default SecondSection;
