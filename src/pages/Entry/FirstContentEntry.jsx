import React from "react";
import { Link } from "react-router-dom";
import bg_sentry from "../../assets/bg-sentry.svg";

export default function FirstContentEntry({className}) {
  return (
    <div className={className}>
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

        <div className="rounded-bl-3xl rounded-br-3xl bg-gray-100 p-4 text-dark2 md:p-8">
         
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="w-2/3">
              <div className="flex items-center gap-2 pb-2">
                <div>
                  <img
                    alt="sentry key"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    src="/assets/images/logo/sentry-key.svg"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="text-xl font-medium">Gelios Entry Key</div>
                <div>
                  <div>
                    <span className="group relative">
                      <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] hidden w-auto -translate-x-[50%] group-hover:block">
                        <div className="bottom-full right-0 whitespace-nowrap rounded bg-black px-4 py-1 text-xs text-white">
                          Gelios Keys are required for users to access the Node
                          Station.
                        </div>
                      </div>
                      <img
                        alt="warn"
                        loading="lazy"
                        width="16"
                        height="16"
                        decoding="async"
                        data-nimg="1"
                        src="/assets/images/icons/warning.svg"
                        style={{ color: "transparent" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="break-words text-base font-normal text-grayThird">
                The Key to asserting your eligibility for network challenges and
                incentives.
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 pb-2">
                <div className="text-xl font-medium">Quantity</div>
                <div>
                  <span className="z-9999 group relative">
                    <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] hidden w-auto -translate-x-[50%] group-hover:block">
                      <div className="bottom-full right-0  whitespace-nowrap rounded bg-black px-4 py-1 text-xs text-white">
                        <div className="max-w-5 break-words">
                          1. Ensure to submit the transaction within 1 minute;
                          after this time, your order will not be approved.
                        </div>
                        <div className="break-words">
                          2. Buying in bulk may result in acquiring Keys across
                          various tiers at varying prices.{" "}
                        </div>
                        <div className="break-words">
                          3. Transactions using Bitcoin &amp; Ethereum network
                          may experience slower confirmation times compared to
                          Arbitrum network.
                        </div>
                        <div className="break-words">
                          4. If sold-out, unconfirmed transactions will be
                          refunded to the user's purchasing wallet.
                        </div>{" "}
                      </div>
                    </div>
                    <img
                      alt="warn"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      src="/assets/images/icons/warning.svg"
                      style={{ color: "transparent" }}
                    />
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <div className="relative flex max-w-[8rem] items-center">
                    <button
                      type="button"
                      className="0 h-11  rounded-s-lg bg-primary p-3 text-white  focus:outline-none focus:ring-0 ">
                      <svg
                        className="h-3 w-3 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"></path>
                      </svg>
                    </button>
                    <input
                      name="amount"
                      type="number"
                      min="1"
                      max="100"
                      id="amount"
                      className="block h-11 w-full border-2 border-x-0 border-primary text-center font-semibold text-dark2 hover:outline-none focus:border-primary  focus:outline-none focus:ring-0"
                    />
                    <button
                      type="button"
                      className="h-11 rounded-r-lg bg-primary p-3 text-white  focus:outline-none focus:ring-0 focus:ring-gray-100">
                      <svg
                        className="h-3 w-3 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />
          <div>
            <div className="pt-1">
              <div>
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">1 x Gelios Entry Key</p>
                    <p className="flex items-center gap-1 text-gray80">
                      <div>0.00551</div>BTC per key
                    </p>
                  </div>
                  <div>
                    <div className="relative ">
                      <div className="relative   text-sm">
                        <button
                          className=" full-w min-w-[130px] rounded-lg  bg-white p-2 outline-none drop-shadow-none"
                          type="button">
                          <div className="flex items-center  gap-2">
                            <div>
                              <img
                                alt="token"
                                loading="lazy"
                                width="20"
                                height="20"
                                decoding="async"
                                data-nimg="1"
                                src="/assets/images/tokens/btc.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                            <div className="font-semibold ">Bitcoin</div>
                            <svg
                              className="ms-3 h-2.5 w-2.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6">
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 4 4 4-4"></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex min-w-[140px] items-center justify-between gap-1">
                    <p>Pay:</p>
                    <div className="flex items-center gap-1">
                      <div>
                        <p className="font-semibold">0.00551 </p>
                      </div>
                      <p className="font-semibold"> BTC</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />
              <div className="my-4">
                <div className="pb-2">
                  <label
                    for="output"
                    className="flex items-center gap-1 capitalize">
                    Recipient Address
                    <div>
                      <span className="group relative z-50 ">
                        <div className="absolute bottom-[calc(100%+0.5rem)] left-[100%] z-50 hidden w-auto  group-hover:block">
                          <div className="bottom-full right-0 whitespace-nowrap rounded bg-black px-4 py-2 text-xs text-white">
                            <div className="py-2">
                              - Ensure to enter your own address to retain key
                              ownership rights.
                            </div>
                            <div>
                              - Recommendation: Link your EVM Wallet and use the
                              corresponding EVM address as the Recipient Address
                              for a seamless experience.
                            </div>
                          </div>
                        </div>
                        <img
                          alt="warn"
                          loading="lazy"
                          width="16"
                          height="16"
                          decoding="async"
                          data-nimg="1"
                          src="/assets/images/icons/warning.svg"
                          style={{ color: "transparent" }}
                        />
                      </span>
                    </div>
                  </label>
                </div>
                <div className="relative">
                  <input
                    name="output"
                    type="text"
                    id="output"
                    className="block h-[44px] w-full rounded-xl border-none bg-gray-200   placeholder:text-gray80 focus:border-none focus:outline-none focus:ring-0"
                    placeholder="Gelios Recipient Address"
                  />
                </div>
              </div>
              <hr className="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />
              <div className="pb-2">
                <label for="refCode" className="capitalize">
                  Referrer's Code
                </label>
              </div>
              <div className="relative">
                <input
                  name="refCode"
                  placeholder=""
                  type="text"
                  id="refCode"
                  className="block h-[44px] w-full rounded-xl border-none bg-gray-200   placeholder:text-gray80 focus:border-none focus:outline-none focus:ring-0"
                />
              </div>
              <hr className="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />
              <div className="my-2 flex items-center">
                <input
                  id="check_agree"
                  type="checkbox"
                  name="agree"
                  className="h-4 w-4 rounded border-primary  bg-transparent  text-primary  focus:bg-gelios focus:text-primary  focus:ring-0"
                />
                <label
                  for="check_agree"
                  className="ms-2 text-sm font-medium text-gray80">
                  <div>
                    I agree with the
                    <Link
                      target="_blank"
                      to="https://docs.gelios.io/gelios-keys-and-nodes/node-station/entry-node-agreement">
                      <span className="text-primary"> Entry Key Agreement</span>
                    </Link>{" "}
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center">
              <button
                type="button"
                className="min-w-[222px] rounded-lg px-5 py-2   focus:outline-none  btn-linear text-white">
                <Link
                  target="_blank"
                  to="https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo">
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center justify-center gap-2">
                      <img
                        alt="token"
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        src="/assets/images/icons/unisat.svg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <p className="text-lg font-bold"> Install UniSat</p>
                  </div>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
