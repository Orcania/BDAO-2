/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "../layout/footer-layout";
import "./roadmap.scss";
import React, { useEffect } from "react";

export default function useRoadmap() {
    const [activeYear, setActiveYear] = React.useState(null);


    useEffect(() => {
        setActiveYear(1);
    }, []);

    const handleYearClick = (year) => {
        setActiveYear(year);
    };

    const renderContent = () => {
        switch (activeYear) {
            case 1:
                return (
                    <div className="bg-small-towers2">
                        <div className="bg-road1 flex justify-center invisible">
                            <img
                            className=""
                            src="/bg-images/road-year1.png"
                            alt=""
                            ></img>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className='bg-road2 flex justify-center invisible'>
                       <img
                            className=""
                            src="/bg-images/road-year2.png"
                            alt=""
                            ></img>
                    </div>
                );
            case 3:
                return (
                    <div className="bg-road3 flex justify-center invisible">
                        <img
                            className=""
                            src="/bg-images/road-year3.png"
                            alt=""
                            ></img>
                    </div>
                );
            default:
                return null;
        }
    };
    return (
        <>
            <div className={`main ${activeYear === 1 ? "bg-road1" : ""} ${activeYear === 2 ? "bg-road2" : ""} ${activeYear === 3 ? "bg-road3" : ""} overflow-x-hidden`}>
                <div className="bg-small-towers">
                    <div className="title fmb text-4xl sm:text-7xl text-center mt-14">ROADMAP</div>
                    <div className="bg-blur mt-8">
                        <div className="flex justify-center gap-6 py-4">
                        <button
        className={`bg-transparent hover:bg-[#E26E5D] border-3 border-white hover:border-[#E26E5D] fmb p-2 w-32 text-sm sm:w-auto sm:text-base ${
          activeYear === 1 ? "active" : ""
        }`}
        style={{
          backgroundColor: activeYear === 1 ? "#E26E5D" : "transparent",
        }}
        onClick={() => handleYearClick(1)}
      >
        Year 1
      </button>
      <button
        className={`bg-transparent hover:bg-[#E26E5D] border-3 border-white hover:border-[#E26E5D] fmb p-2 w-32 text-sm sm:w-auto sm:text-base ${
          activeYear === 2 ? "active" : ""
        }`}
        style={{
          backgroundColor: activeYear === 2 ? "#E26E5D" : "transparent",
        }}
        onClick={() => handleYearClick(2)}
      >
        Year 2
      </button>
      <button
        className={`bg-transparent hover:bg-[#E26E5D] border-3 border-white hover:border-[#E26E5D] fmb p-2 w-32 text-sm sm:w-auto sm:text-base ${
          activeYear === 3 ? "active" : ""
        }`}
        style={{
          backgroundColor: activeYear === 3 ? "#E26E5D" : "transparent",
        }}
        onClick={() => handleYearClick(3)}
      >
        Year 3
      </button>
                        </div>
                    </div>
                    <br />
                    {renderContent()}
                </div>
                <Footer />
            </div>
        </>
    );
}
