"use client";
import { useState } from "react";
import TopNav from "./Topnav";


const PurchaseCredit = () => {
  const [activeTab, setActiveTab] = useState("horizontal");

  return (
    <>
       <TopNav />
    <div className="p-6">
      <div className="mb-4 text-2xl font-bold">Purchase Credit</div>
      <p className="mb-4 text-slate-500 font-semibold">Find a package that works for you! </p>
      <div className=" mb-6 bg-gray-300 rounded-xl p-1 max-w-md">
        <button
          className={`py-1 px-4 rounded-xl hover:bg-white  ${
            activeTab === "horizontal" 
            ? "bg-white font-medium text-red-500"
            : "bg-gray-300 font-medium  text-slate-500"
          }`}
          onClick={() => setActiveTab("horizontal")}
          >
          Horizontal Video
        </button>
        <button
          className={`py-1 px-4 rounded-xl hover:bg-white ${
            activeTab === "vertical"
            ? "bg-white font-medium text-red-500"
            : "bg-gray-300 font-medium text-slate-500"
          }`}
          onClick={() => setActiveTab("vertical")}
          >
          Vertical Video
        </button>
        <button
          className={`py-1 px-4 rounded-xl hover:bg-white ${
            activeTab === "custom"
            ? "bg-white font-medium text-red-500"
            : "bg-gray-300 font-medium text-slate-500"
          }`}
          onClick={() => setActiveTab("custom")}
          >
          Custom Deposit
        </button>
      </div>

      {activeTab === "horizontal" ? (
        <div className="flex space-x-4 h-vh ">
          <div
            className="p-3 bg-red-500 rounded-lg shadow-lg w-1/4 relative bg-cover bg-center"
            style={{
              backgroundImage: `url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F875b965719b5fd8f939367e5d16fb3ae.cdn.bubble.io%2Ff1689939671265x557994390023313100%2F646c3b1edd8b0800f24355a2_63c96dc85664ab5dfb6ef394_Price%2520Png.webp?w=384&h=557&auto=compress&fit=crop&dpr=1.25')`,
            }}
            >
            <h3 className="text-lg mt-2 text-white font-semibold">Viral</h3>
            <span className="absolute top-2 right-2 bg-gray-300 bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
              Recommended
            </span>
            <p className=" text-sm text-white mt-8 mb-4">
              8 horizontal videos with a 20% discount. Includes up to 90 minutes
              and 20 GB of raw footage per video.
            </p>
            <div className="text-white mt-8 text-xs text-right">
              <strong className="text-xl">$190</strong> per horizontal video
            </div>
            <div className="flex items-center  justify-center bg-slate-100 gap-x-2 mt-10  rounded-2xl p-2 cursor-pointer transition-colors duration-200 hover:border-gray-600 mx-5 w-[calc(100%-40px)]">
              <div className="text-black text-xs">Choose package</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>

            <div className="flex flex-col gap-y-2 p-5">
              <div className="flex items-center gap-x-2 text-white text-xs">
                <button className="text-primary p-0 rounded">
                  <svg viewBox="0 -18 50 50" className="w-4 h-4">
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      className="text-3xl"
                      >
                      ✔️
                    </text>
                  </svg>
                </button>
                <div>4 horizontal videos</div>
              </div>
              <div className="flex items-center gap-x-2 text-white text-xs">
                <button className="text-primary p-0 rounded">
                  <svg viewBox="0 -18 50 50" className="w-4 h-4">
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      className="text-3xl"
                      >
                      ✔️
                    </text>
                  </svg>
                </button>
                <div>Save 10%</div>
              </div>
              <div className="flex items-center gap-x-2 text-white text-xs">
                <button className="text-primary p-0 rounded">
                  <svg viewBox="0 -18 50 50" className="w-4 h-4">
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      className="text-3xl"
                      >
                      ✔️
                    </text>
                  </svg>
                </button>
                <div>Gives $960 credits deposited</div>
              </div>
              <div className="flex items-center gap-x-2 text-white text-xs">
                <button className="text-primary p-0 rounded">
                  <svg viewBox="0 -18 50 50" className="w-4 h-4">
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      className="text-3xl"
                      >
                      {" "}
                      ✔️
                    </text>
                  </svg>
                </button>
                <div>$1520 total cost</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col min-h-[370px] box-border border-l-[10px] border-transparent ml-[-10px] justify-start">
            <div className="flex flex-col border border-gray-300 border-opacity-50 rounded-2xl shadow-lg min-w-0 min-h-0 h-max w-full mx-0 z-30">
              <div className="flex flex-col rounded-none max-w-xs mx-0 z-20">
                <div
                  className="bg-red-500 flex flex-col justify-between rounded-2xl min-h-[225px] h-[225px] flex-grow w-full mx-0 z-40 p-5 bg-cover"
                  style={{
                    backgroundImage:
                    "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F875b965719b5fd8f939367e5d16fb3ae.cdn.bubble.io%2Ff1689939671265x557994390023313100%2F646c3b1edd8b0800f24355a2_63c96dc85664ab5dfb6ef394_Price%2520Png.webp?w=384&h=293&auto=compress&fit=crop&dpr=1.25')",
                  }}
                  >
                  <div className="text-white text-lg font-semibold">
                    Trending
                  </div>
                  <div className="text-white text-sm max-h-[85px]">
                    4 horizontal videos with a 10% discount. Includes up to 90
                    minutes and 20 GB of raw footage per video
                  </div>
                  <div className="text-white text-xs text-right">
                    <strong className="text-xl">$215</strong> per horizontal
                    video
                  </div>
                </div>
                <div className="flex items-center justify-center gap-x-2 mt-6 border-2 border-black rounded-2xl p-2 cursor-pointer transition-colors duration-200 hover:border-gray-600 mx-5 mt-0 w-[calc(100%-40px)]">
                  <div className="text-black text-xs">Choose package</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>

                <div className="flex flex-col gap-y-2 p-5">
                  <div className="flex items-center gap-x-2 text-black text-xs">
                    <button className="text-primary p-0 rounded">
                      <svg viewBox="0 -18 50 50" className="w-4 h-4">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          className="text-3xl"
                          >
                          ✔️
                        </text>
                      </svg>
                    </button>
                    <div>4 horizontal videos</div>
                  </div>
                  <div className="flex items-center gap-x-2 text-black text-xs">
                    <button className="text-primary p-0 rounded">
                      <svg viewBox="0 -18 50 50" className="w-4 h-4">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          className="text-3xl"
                          >
                          ✔️
                        </text>
                      </svg>
                    </button>
                    <div>Save 10%</div>
                  </div>
                  <div className="flex items-center gap-x-2 text-black text-xs">
                    <button className="text-primary p-0 rounded">
                      <svg viewBox="0 -18 50 50" className="w-4 h-4">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          className="text-3xl"
                          >
                          ✔️
                        </text>
                      </svg>
                    </button>
                    <div>Gives $960 credits deposited</div>
                  </div>
                  <div className="flex items-center gap-x-2 text-black text-xs">
                    <button className="text-primary p-0 rounded">
                      <svg viewBox="0 -18 50 50" className="w-4 h-4">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          className="text-3xl"
                          >
                          {" "}
                          ✔️
                        </text>
                      </svg>
                    </button>
                    <div>$860 total cost</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col min-h-[370px] box-border border-l-[10px] border-transparent ml-[-10px] justify-start">
            <div className="flex flex-col border border-gray-300 border-opacity-50 rounded-2xl shadow-lg min-w-0 min-h-0 h-max w-full mx-0 z-30">
              <div className="flex flex-col rounded-none max-w-xs mx-0 z-20">
                <div
                  className="bg-red-500 flex flex-col justify-between rounded-2xl min-h-[225px] h-[225px] flex-grow w-full mx-0 z-40 p-5 bg-cover"
                  style={{
                    backgroundImage:
                    "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F875b965719b5fd8f939367e5d16fb3ae.cdn.bubble.io%2Ff1689939671265x557994390023313100%2F646c3b1edd8b0800f24355a2_63c96dc85664ab5dfb6ef394_Price%2520Png.webp?w=384&h=293&auto=compress&fit=crop&dpr=1.25')",
                  }}
                  >
                  <div className="text-white text-lg font-semibold">
                    Explore
                  </div>
                  <div className="text-white text-sm max-h-[85px]">
                    1 horizontal videos at full price. Includes up to 90 minutes
                    and 20 GB of raw footage per video
                  </div>
                  <div className="text-white text-xs text-right">
                    <strong className="text-xl">$240</strong> per horizontal
                    video
                  </div>
                </div>
                <div className="flex items-center justify-center mt-6 gap-x-2 border-2 border-black rounded-2xl p-2 cursor-pointer transition-colors duration-200 hover:border-gray-600 mx-5 mt-0 w-[calc(100%-40px)]">
                  <div className="text-black text-xs">Choose package</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
                <div className="flex flex-col gap-y-2 p-5">
                  <div className="flex items-center gap-x-2 text-black text-xs">
                    <button className="text-primary p-0 rounded">
                      <svg viewBox="0 -18 50 50" className="w-4 h-4">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          className="text-3xl"
                          >
                          ✔️
                        </text>
                      </svg>
                    </button>
                    <div>1 horizontal videos</div>
                  </div>
                  <div className="flex items-center gap-x-2 text-black text-xs">
                    <button className="text-primary p-0 rounded">
                      <svg viewBox="0 -18 50 50" className="w-4 h-4">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          className="text-3xl"
                          >
                          ✔️
                        </text>
                      </svg>
                    </button>
                    <div>Save 0%</div>
                  </div>
                  <div className="flex items-center gap-x-2 text-black text-xs">
                    <button className="text-primary p-0 rounded">
                      <svg viewBox="0 -18 50 50" className="w-4 h-4">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          className="text-3xl"
                          >
                          ✔️
                        </text>
                      </svg>
                    </button>
                    <div>Gives $240 credits deposited</div>
                  </div>
                  <div className="flex items-center gap-x-2 text-black text-xs">
                    <button className="text-primary p-0 rounded">
                      <svg viewBox="0 -18 50 50" className="w-4 h-4">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          className="text-3xl"
                          >✔️</text>
                      </svg>
                    </button>
                    <div>$240 total cost</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {activeTab == "vertical" ? (
        <div className="flex space-x-4 h-vh ">
          <div
            className="p-3 bg-red-500 rounded-lg shadow-lg w-1/4 relative bg-cover bg-center"
            style={{
              backgroundImage: `url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F875b965719b5fd8f939367e5d16fb3ae.cdn.bubble.io%2Ff1689939671265x557994390023313100%2F646c3b1edd8b0800f24355a2_63c96dc85664ab5dfb6ef394_Price%2520Png.webp?w=384&h=557&auto=compress&fit=crop&dpr=1.25')`,
            }}
            >
            <h3 className="text-lg mt-2 text-white font-semibold">Viral</h3>
            <span className="absolute top-2 right-2 bg-gray-300 bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
              Recommended
            </span>
            <p className=" text-sm text-white mt-8 mb-4">
              30 vertical videos with a 20% discount. Includes up to 3 minutes
              and 2 GB of raw footage per video.
            </p>
            <div className="text-white mt-8 text-xs text-right">
              <strong className="text-xl">$190</strong> per vertical video
            </div>
            <div className="flex items-center  justify-center bg-slate-100 gap-x-2 mt-10  rounded-2xl p-2 cursor-pointer transition-colors duration-200 hover:border-gray-600 mx-5 w-[calc(100%-40px)]">
              <div className="text-black text-xs">Choose package</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>

            <div className="flex flex-col gap-y-2 p-5">
              <div className="flex items-center gap-x-2 text-white text-xs">
                <button className="text-primary p-0 rounded">
                  <svg viewBox="0 -18 50 50" className="w-4 h-4">
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      className="text-3xl"
                      >
                      ✔️
                    </text>
                  </svg>
                </button>
                <div>30 vertical videos</div>
              </div>
              <div className="flex items-center gap-x-2 text-white text-xs">
                <button className="text-primary p-0 rounded">
                  <svg viewBox="0 -18 50 50" className="w-4 h-4">
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      className="text-3xl"
                      >
                      ✔️
                    </text>
                  </svg>
                </button>
                <div>Save 20%</div>
              </div>
              <div className="flex items-center gap-x-2 text-white text-xs">
                <button className="text-primary p-0 rounded">
                  <svg viewBox="0 -18 50 50" className="w-4 h-4">
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      className="text-3xl"
                      >
                      ✔️
                    </text>
                  </svg>
                </button>
                <div>Gives $1,500 credits deposited</div>
              </div>
              <div className="flex items-center gap-x-2 text-white text-xs">
                <button className="text-primary p-0 rounded">
                  <svg viewBox="0 -18 50 50" className="w-4 h-4">
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      className="text-3xl"
                      >
                      {" "}
                      ✔️
                    </text>
                  </svg>
                </button>
                <div>$1,200 total cost</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col min-h-[370px] box-border border-l-[10px] border-transparent ml-[-10px] justify-start">
            <div className="flex flex-col border border-gray-300 border-opacity-50 rounded-2xl shadow-lg min-w-0 min-h-0 h-max w-full mx-0 z-30">
              <div className="flex flex-col rounded-none max-w-xs mx-0 z-20">
                <div
                  className="bg-red-500 flex flex-col justify-between rounded-2xl min-h-[225px] h-[225px] flex-grow w-full mx-0 z-40 p-5 bg-cover"
                  style={{
                    backgroundImage:
                    "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F875b965719b5fd8f939367e5d16fb3ae.cdn.bubble.io%2Ff1689939671265x557994390023313100%2F646c3b1edd8b0800f24355a2_63c96dc85664ab5dfb6ef394_Price%2520Png.webp?w=384&h=293&auto=compress&fit=crop&dpr=1.25')",
                  }}
                  >
                  <div className="text-white text-lg font-semibold">
                    Trending
                  </div>
                  <div className="text-white text-sm max-h-[85px]">
                    15 vertical videos with a 10% discount. Includes up to 3
                    minutes and 2 GB of raw footage per video
                  </div>
                  <div className="text-white text-xs text-right">
                    <strong className="text-xl">$45</strong> per vertical video
                  </div>
                </div>
                <div className="flex items-center justify-center gap-x-2 mt-6 border-2 border-black rounded-2xl p-2 cursor-pointer transition-colors duration-200 hover:border-gray-600 mx-5 mt-0 w-[calc(100%-40px)]">
                  <div className="text-black text-xs">Choose package</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
                <div className="flex flex-col gap-y-2 p-5">
                  <div className="flex items-center gap-x-2 text-black text-xs">
                    <button className="text-primary p-0 rounded">
                      <svg viewBox="0 -18 50 50" className="w-4 h-4">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          className="text-3xl"
                        >
                          ✔️
                        </text>
                      </svg>
                    </button>
                    <div>15 vertical videos</div>
                  </div>
                  <div className="flex items-center gap-x-2 text-black text-xs">
                    <button className="text-primary p-0 rounded">
                      <svg viewBox="0 -18 50 50" className="w-4 h-4">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          className="text-3xl"
                          >
                          ✔️
                        </text>
                      </svg>
                    </button>
                    <div>Save 10%</div>
                  </div>
                  <div className="flex items-center gap-x-2 text-black text-xs">
                    <button className="text-primary p-0 rounded">
                      <svg viewBox="0 -18 50 50" className="w-4 h-4">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          className="text-3xl"
                          >
                          ✔️
                        </text>
                      </svg>
                    </button>
                    <div>Gives $750 credits deposited</div>
                  </div>
                  <div className="flex items-center gap-x-2 text-black text-xs">
                    <button className="text-primary p-0 rounded">
                      <svg viewBox="0 -18 50 50" className="w-4 h-4">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          className="text-3xl"
                          >
                          {" "}
                          ✔️
                        </text>
                      </svg>
                    </button>
                    <div>$675 total cost</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col min-h-[370px] box-border border-l-[10px] border-transparent ml-[-10px] justify-start">
            <div className="flex flex-col border border-gray-300 border-opacity-50 rounded-2xl shadow-lg min-w-0 min-h-0 h-max w-full mx-0 z-30">
              <div className="flex flex-col rounded-none max-w-xs mx-0 z-20">
                <div
                  className="bg-red-500 flex flex-col justify-between rounded-2xl min-h-[225px] h-[225px] flex-grow w-full mx-0 z-40 p-5 bg-cover"
                  style={{
                    backgroundImage:
                    "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F875b965719b5fd8f939367e5d16fb3ae.cdn.bubble.io%2Ff1689939671265x557994390023313100%2F646c3b1edd8b0800f24355a2_63c96dc85664ab5dfb6ef394_Price%2520Png.webp?w=384&h=293&auto=compress&fit=crop&dpr=1.25')",
                  }}
                  >
                  <div className="text-white text-lg font-semibold">
                    Explore
                  </div>
                  <div className="text-white text-sm max-h-[85px]">
                    1 vertical videos at full price. Includes up to 3 minutes
                    and 2 GB of raw footage per video
                  </div>
                  <div className="text-white text-xs text-right">
                    <strong className="text-xl">$50</strong> per vertical video
                  </div>
                </div>
                <div className="flex items-center justify-center mt-6 gap-x-2 border-2 border-black rounded-2xl p-2 cursor-pointer transition-colors duration-200 hover:border-gray-600 mx-5 mt-0 w-[calc(100%-40px)]">
                  <div className="text-black text-xs">Choose package</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
                <div className="flex flex-col gap-y-2 p-5">
                  <div className="flex items-center gap-x-2 text-black text-xs">
                    <button className="text-primary p-0 rounded">
                      <svg viewBox="0 -18 50 50" className="w-4 h-4">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          className="text-3xl"
                          >
                          ✔️
                        </text>
                      </svg>
                    </button>
                    <div>1 vertical videos</div>
                  </div>
                  <div className="flex items-center gap-x-2 text-black text-xs">
                    <button className="text-primary p-0 rounded">
                      <svg viewBox="0 -18 50 50" className="w-4 h-4">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          className="text-3xl"
                          >
                          ✔️
                        </text>
                      </svg>
                    </button>
                    <div>Save 0%</div>
                  </div>
                  <div className="flex items-center gap-x-2 text-black text-xs">
                    <button className="text-primary p-0 rounded">
                      <svg viewBox="0 -18 50 50" className="w-4 h-4">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          className="text-3xl"
                          >
                          ✔️
                        </text>
                      </svg>
                    </button>
                    <div>Gives $50 credits deposited</div>
                  </div>
                  <div className="flex items-center gap-x-2 text-black text-xs">
                    <button className="text-primary p-0 rounded">
                      <svg viewBox="0 -18 50 50" className="w-4 h-4">
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          className="text-3xl"
                          >
                          ✔️
                        </text>
                      </svg>
                    </button>
                    <div>$50 total cost</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {activeTab === "custom" ? (
        <div className="max-w-4xl  bg-white p-6 rounded-lg shadow-md ">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="depositAmount"
              >
              Deposit amount
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="depositAmount"
              type="text"
              placeholder="Type Amount"
              />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="creditsReceived"
              >
              Credits you will receive
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="creditsReceived"
              type="text"
              placeholder="Type Amount"
              />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              >
              Continue
            </button>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            Total cost does not    include 3% merchant fee <br />
            Credits expire 90 days after purchase
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
      </>
  );
};

export default PurchaseCredit;
