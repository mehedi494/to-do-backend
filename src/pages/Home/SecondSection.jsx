import videImg from "../../assets/flow3.mp4";
const SecondSection = () => {
  return (
    <div>
      {/* container  */}
      <div className="flex flex-wrap items-center justify-center  mx-auto max-w-7xl ">
        {/* left side */}
        <div className="w-full sm:w-1/2 md:w-1/2  p-8 font-baiJamjuree">
        <div className=" flex flex-col gap-y-8">
          <h1 className="text-[#fd9623] text-2xl sm:text-3xl md:text-4xl lg:text-6xl" >BTC <span className="text-[#333333]">as</span> Native Token</h1>
          <p className="text-[#727272]">With a vision to enrich the Bitcoin ecosystem, Gelios utilizes BTC as its native token. This ensures immediate access for developers and users, guaranteeing security and stability, thereby enhancing overall functionality and user experience.</p>
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

// import intro_pattern from './your-intro-pattern-image.jpg'; // Update with the correct path

// const YourComponent = () => {
//   return (
//     <div className="relative w-full bg-cover h-auto bg-center bg-no-repeat">
//       {/* Background for large devices */}
//       <div className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${intro_pattern})` }}></div>

//       {/* Content container */}
//       <div className="flex font-baiJamjuree gap-x-8 mx-auto max-w-7xl py-8">
//         {/* Individual content items */}
//         <div className="flex flex-col justify-center border-r mt-3 mb-3 pr-5 border-black">
//           <h1 className="text-5xl text-[#3f3f3f]">40.3K</h1>
//           <p className="text-lg font-semibold">Total Users</p>
//         </div>
//         <div className="flex flex-col justify-center border-r mt-3 mb-3 pr-5 border-black">
//           <img className="w-20" src={threDot} alt="" />
//           <p className="text-lg font-semibold">Total Value Locked</p>
//         </div>
//         <div className="flex flex-col justify-center mt-3 mb-3 border-black">
//           <h1 className="text-5xl text-[#3f3f3f]">3.95</h1>
//           <p className="text-lg font-semibold">Total Gas Charged (gBTC)</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YourComponent;
