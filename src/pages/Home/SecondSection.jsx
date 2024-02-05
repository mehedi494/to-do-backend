import videImg from "../../assets/flow3.mp4";
const SecondSection = () => {
  return (
    <div>
      {/* container  */}
      <div className="flex  flex-col-reverse sm:flex-row items-center justify-center  mx-auto max-w-7xl ">
        {/* left side */}
        <div className="w-full sm:w-1/2 md:w-1/2  p-8 font-baiJamjuree">
        <div className=" flex flex-col gap-y-8">
          <h1 className="font-semibold text-[#fd9623] text-xl sm:text-2xl md:text-3xl lg:text-4xl" >Vision: To make your <i className="text-[#333333]">life changing</i> financial freedom!</h1>
          <h1 className="font-semibold text-[#333333] text-xl sm:text-2xl md:text-3xl lg:text-4xl" >Mission: To be the  <i className="text-[#fd9623]">top 10 </i> global <i className="text-[#fd9623]">digital payment!</i></h1>
          {/* <p className="text-[#727272]">With a vision to enrich the Bitcoin ecosystem, bitcoinnano utilizes BTC as its native token. This ensures immediate access for developers and users, guaranteeing security and stability, thereby enhancing overall functionality and user experience.</p> */}
        </div>
        </div>


        {/* right side */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
        <video width="640" height="360"  autoPlay
        loop
        muted>
        <source
          src={videImg}
          type="video/mp4"
        />
        </video>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;


