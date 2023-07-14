/* eslint-disable @next/next/no-img-element */
"use client";
import "./roadmap.scss";
import React, { useEffect } from "react";

export default function useRoadmap() {
    const [activeYear, setActiveYear] = React.useState(null);
    const carPositions = [125, 75, 50]; // Positions for Year 1, Year 2, Year 3
    const [currentCarPosition, setCurrentCarPosition] = React.useState(50);
    const [isCarMoving, setIsCarMoving] = React.useState(false);

    useEffect(() => {
        if (isCarMoving) {
            const timeoutId = setTimeout(() => {
                setIsCarMoving(false);
            }, 10000);
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [isCarMoving]);

    useEffect(() => {
        setCurrentCarPosition(125);
        setIsCarMoving(true);
    }, []);

    useEffect(() => {
        setActiveYear(1);
    }, []);

    const handleYearClick = (year) => {
        setActiveYear(year);
        const newPosition = carPositions[year - 1]; // Get the position for the selected year
        setCurrentCarPosition(newPosition);
    };

    const renderContent = () => {
        switch (activeYear) {
            case 1:
                return (
                    <div className="flex justify-center">
                        <img className="invisible" src="/bg-images/road-year1.png" alt=""></img>
                    </div>
                );
            case 2:
                return (
                    <div className="flex justify-center">
                        <img className="invisible" src="/bg-images/road-year1.png" alt=""></img>
                    </div>
                );
            case 3:
                return (
                    <div className="flex justify-center">
                        <img className="invisible" src="/bg-images/road-year3.png" alt=""></img>
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
                } ${activeYear === 3 ? "bg-road3" : ""} overflow-x-hidden`}
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
                    {renderContent()}
                    <div
                        className="absolute inset-0 flex items-start justify-center h-full "
                        style={{
                            top: `${currentCarPosition}%`,
                            transition: isCarMoving ? "top 7s" : "none",
                        }}
                    >
                        <div className="relative">
                            {/* Car */}
                            <div></div>
                            <img src="/car.png" className={`car mr-64 `} alt="Car" size={30} />
                        </div>
                    </div>
                    {/* Images */}
                    <div className="absolute inset-0 items-center justify-center h-full flex flex-shrink gap-36 mt-[2000px]" >
                        <img src="/traffic-barrier-1.png" alt="Traffic Barrier 1" />
                        <img src="/traffic-barrier-2.png" alt="Traffic Barrier 2" />
                    </div>
                </div>
            </div>
        </>
    );
}
