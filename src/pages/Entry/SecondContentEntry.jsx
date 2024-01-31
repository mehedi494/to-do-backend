
import { PiWarningCircleThin } from "react-icons/pi";
export default function SecondContentEntry() {
  return (
    <div >
      <div className="h-full   rounded-3xl bg-gray-100 p-4 text-dark2 shadow-md md:p-8">
        <div>
          <div className="flex justify-between  text-base font-normal">
            <div>Key Balance</div>
            <div className="text-orange-500">0 Entry Key</div>
          </div>
          <div className="py-1">
            <div>
              <div className="flex items-center justify-between  text-base font-normal">
                <div className="flex items-center gap-1">
                  <div className=" ">Estimated Gas Sharing</div>
                  <div>
                    <span className="z-9999 group relative max-w-60">
                      <div className="absolute bottom-[calc(100%+0.5rem)] right-[50%] hidden w-auto -translate-x-[-50%] group-hover:block">
                        <div className="bottom-full right-0 whitespace-nowrap rounded bg-black px-4 py-1 text-xs text-white ">
                          <div className="break-words  text-base font-normal">
                            - Key holders receive 60% of the Total Gas charged.
                          </div>
                          <div className="break-words">
                            - Current parameters are calculated based on Testnet
                            data
                            <br />
                            Updates will follow upon the transition to the
                            Mainnet.
                          </div>
                        </div>
                      </div>
                     {/*  <img
                        alt="warn"
                        loading="lazy"
                        width="16"
                        height="16"
                        decoding="async"
                        data-nimg="1"
                        src={ }
                        style={{ color: "transparent" }}
                      /> */}
                      <PiWarningCircleThin
                          className="rotate-180 font-semibold"
                          style={{ width: "24px", height: "24px" }}
                          
                        />
                    </span>
                  </div>
                </div>
                <div className="text-right font-normal text-gray80">
                  4.34 gBTC
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between py-1  text-base font-normal">
              <div className="text-grayThird">My Referral Code:</div>
            </div>
          </div>
          <hr className="my-4 h-px border-0 bg-gray-300 " />
          <div className="flex justify-between  text-base font-normal">
            <div>Key Incentive Rewards </div>
            <div className="text-right  text-base font-normal">N/A</div>
          </div>
          <hr className="my-4 h-px border-0 bg-gray-300 " />
          <div className="flex justify-between">
            <div className=" text-base font-normal">Key Farm Rewards</div>
            <div>
              <div className="  text-base font-normal">N/A</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
