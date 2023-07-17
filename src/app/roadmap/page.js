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
            tablet: 690,
            mobile: 620,
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

    useEffect(() => {
        // Update car position on window resize
        const handleResize = () => {
            setCurrentCarPosition(carPositions[`year${activeYear}`][getScreenSize()]);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [activeYear, carPositions]);

    const handleYearClick = (year) => {
        setIsCarMoving(false); // Stop car animation
        setCurrentCarPosition(carPositions[`year${year}`][getScreenSize()]); // Update car position
        setIsCarMoving(true); // Start car animation
        setActiveYear(year); // Set active year
    };

    const getScreenSize = () => {
        if (window.innerWidth <= 690) {
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
                            className="invisible "
                            src="/bg-images/road-year1.png"
                            alt=""
                        ></img>
                    </div>
                );
            case 2:
                return (
                    <div className="flex justify-center">
                        <img className="invisible" src="/bg-images/road-year2.png" alt=""></img>
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
                } ${activeYear === 3 ? "bg-road3" : ""} overflow-x-hidden min-[500px]:pb-0 pb-72`}
            >
                <div className="">
                    <div className="roadmap-title fmb text-5xl sm:text-7xl text-center text-shadow md:mt-16 mt-20 z-10">
                        ROADMAP
                    </div>
                    <div className="md:mt-[120px] mt-[130px]">
                        <div className="flex justify-center md:gap-6 gap-4 py-4 mx-10 ">
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
                    {activeYear === 1 && (
                        <>
                            <div
                                className="absolute inset-0 min-[680px]:top-[620px] top-[510px] flex items-start justify-center h-[200px]"
                                style={{
                                    transform: `translateY(${currentCarPosition}px)`,
                                    transition: isCarMoving ? "transform 5s" : "none",
                                }}
                            >
                                <div className="relative">
                                    <img src="/car.png" className="car mr-64" alt="Car" size={30} />
                                </div>
                            </div>
                            <div className="absolute inset-0 min-[680px]:top-[830px] top-[700px] h-[100px] md:mt-[870px] mt-[800px]  min-[680px]:mt-[900px] items-center justify-center flex gap-24 min-[680px]:gap-36 overflow-hidden z-10">
                                <img src="/traffic-barrier-1.png" alt="Traffic Barrier 1" />
                                <img src="/traffic-barrier-2.png" alt="Traffic Barrier 2" />
                            </div>
                        </>
                    )}
                    {renderContent()}
                </div>
            </div>
        </>
    );
}
