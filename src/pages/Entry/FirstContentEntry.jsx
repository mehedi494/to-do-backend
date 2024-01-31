import React from "react";
import bg_sentry from "../../assets/bg-sentry.svg";
import WarningMsg from "../../components/ui/WarningMsg";

export default function FirstContentEntry() {
  return (
    <div className="  ">
      {/* Heading */}
      <div
        className="w-full h-20 flex justify-center items-center bg-cover bg-center bg-no-repeat text-white text-3xl  font-normal rounded-t-3xl"
        style={{ backgroundImage: `url(${bg_sentry})` }}>
        <h1>Your purchase is ready</h1>
      </div>
      <div className="bg-white">
       

        {/* progressBar */}

        <div className="relative pt-10 px-4">
          <div className="pb-4">
            <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="relative ">
                <div className=" relative w-full rounded-full  bg-gray-600">
                  <div className="p-1.5 font-normal "></div>
                  <div
                    className="absolute top-[-200%] z-50 rounded-md bg-gray-300 px-1.5 text-xs text-dark2 font-normal "
                    style={{ left: "1%" }}>
                    Tier 1
                  </div>
                  <div
                    className="absolute left-0 top-0 z-30 rounded-full bg-[#FD9623] p-1.5 text-center text-xs font-medium leading-none text-dark2 "
                    style={{ width: "52%" }}></div>
                  <div className="absolute right-0 top-[-200%] z-50 rounded-md bg-gray-300 px-1.5 text-xs text-dark2 font-normal">
                    Tier 2
                  </div>
                  <div
                    className="absolute left-0 top-0 z-20 rounded-full bg-gray-800 p-1.5 text-center text-xs font-medium leading-none text-dark2"
                    style={{ width: "54%" }}></div>
                </div>
              </div>
            </div>
            <div className="my-1 text-center text-sm  text-grayThird font-normal">
              617 / 1198 GEK (52%)
            </div>
          </div>
        </div>

        {/* Gelio entry key */}
        <WarningMsg title={`some thing is title is showing after the world`}></WarningMsg>
      </div>
    </div>
  );
}
