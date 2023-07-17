/* eslint-disable @next/next/no-img-element */
"use client";
import "./roadmap.scss";
import { useEffect, useState } from "react";

export default function useRoadmap() {
    const [activeYear, setActiveYear] = useState(null);
    const [currentCarPosition, setCurrentCarPosition] = useState();
    const [isCarMoving, setIsCarMoving] = useState(false);

    const carPositions = {
        year1: {
            desktop: 690,
            tablet: 590,
            mobile: 590,
        },
        year2: {
            desktop: 430,
            tablet: 430,
            mobile: 430,
        },
        year3: {
            desktop: 220,
            tablet: 220,
            mobile: 220,
        },
    };

    useEffect(() => {
        if (isCarMoving) {
            setCurrentCarPosition(carPositions[`year${activeYear}`][getScreenSize()]);
            const timeoutId = setTimeout(() => {
                setIsCarMoving(false);
            }, 7000);
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [isCarMoving, activeYear]);

    useEffect(() => {
        setCurrentCarPosition(70);
        setIsCarMoving(true);
    }, []);

    useEffect(() => {
        setActiveYear(1);
    }, []);

    const handleYearClick = (year) => {
        setActiveYear(year);
        const screenSize = getScreenSize();
        const newPosition = carPositions[`year${year}`][screenSize];
        setCurrentCarPosition(newPosition);
      };

    const getScreenSize = () => {
        if (window.innerWidth <= 699) {
          return "mobile";
        } else if (window.innerWidth <= 1024) {
          return "tablet";
        } else {
          return "desktop";
        }
      };
    
    const renderContent = () => {
        switch (activeYear) {
            case 1:
                return (
                    <div className="flex justify-center">
                        <img
                            className="invisible w-[596px]"
                            src="/bg-images/road-year1.png"
                            alt=""
                        ></img>
                    </div>
                );
            case 2:
                return (
                    <div className="flex justify-center">
                        <img
                            className="invisible w-[596px]"
                            src="/bg-images/road-year2.png"
                            alt=""
                        ></img>
                    </div>
                );
            case 3:
                return (
                    <div className="flex justify-center">
                        <img
                            className="invisible w-[596px]"
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
            <div
                className={`main ${activeYear === 1 ? "bg-road1" : ""} ${
                    activeYear === 2 ? "bg-road2" : ""
                } ${activeYear === 3 ? "bg-road3" : ""} overflow-x-hidden min-[500px]:pb-0 pb-72`}
            >
                <div className="">
                    <div className="roadmap-title fmb text-4xl sm:text-7xl text-center text-shadow mt-20 z-10">
                        ROADMAP
                    </div>
                    <div className="mt-[140px]">
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
                    <div
                        className="absolute inset-0 min-[680px]:top-[620px] top-[510px] flex items-start justify-center h-[200px]"
                        style={{
                            transform: `translateY(${currentCarPosition}px)`,
                            transition: isCarMoving ? "transform 5s" : "none",
                        }}
                    >
                        <div className="relative">
                            {/* Car */}
                            <img src="/car.png" className={`car mr-64 `} alt="Car" size={30} />
                        </div>
                    </div>
                    {/* Images */}
                    <div className="absolute inset-0 min-[680px]:top-[830px] top-[700px] h-[100px] md:mt-[870px] mt-[800px] items-center justify-center flex gap-24 min-[680px]:gap-36 overflow-hidden z-10">
                        <img src="/traffic-barrier-1.png" alt="Traffic Barrier 1" />
                        <img src="/traffic-barrier-2.png" alt="Traffic Barrier 2" />
                    </div>
                    {renderContent()}
                </div>
            </div>
        </>
    );
}
