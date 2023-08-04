"use client";

import "./roadmap.scss";
import { useState } from "react";

export default function useRoadmap() {
    const [selectedYear, setSelectedYear] = useState(1);
    const [selectedSvg1, setSelectedSvg1] = useState(true);
    const [selectedSvg2, setSelectedSvg2] = useState(false);
    const [selectedSvg3, setSelectedSvg3] = useState(false);
    const handleYearClick = (year) => {
        setSelectedYear(year);
        if (year === 1) {
            setSelectedSvg1(true);
            setSelectedSvg2(false);
            setSelectedSvg3(false);
        }

        if (year === 2) {
            setSelectedSvg1(false);
            setSelectedSvg2(true);
            setSelectedSvg3(false);
        }

        if (year === 3) {
            setSelectedSvg1(false);
            setSelectedSvg2(false);
            setSelectedSvg3(true);
        }
    };
    return (
        <div className="overflow-hidden  bg-frame">
            <div className="max-w-screen-xl lg:flex gap-12 lg:mx-auto p-4 mt-12  flex justify-center items-center md:flex md:items-start md:justify-start">
                <h1 className="fmb text-white text-5xl font-normal">ROADMAP</h1>
            </div>
            <div className="hidden md:block">
                <div className=" flex flex-col gap-10 justify-center items-center mt-10 ">
                    <div className="flex justify-start items-center ">
                        <div className=" flex flex-row w-[80%]">
                            {/* SVG 1 */}
                            <div className="md:w-2/4 w-1/4">
                                <svg
                                    width="1040"
                                    height="70"
                                    viewBox="0 0 1040 70"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="z-30  relative -right-10"
                                >
                                    <path d="M0 0H997.151L1040 35L997.151 70H0V0Z" fill="#E16E56" />

                                    <text
                                        x="700"
                                        y="35"
                                        dominantBaseline="middle"
                                        textAnchor="end"
                                        fill="white"
                                        fontSize="24"
                                        fontWeight="bold"
                                        className="fmb text-white text-sm font-normal"
                                    >
                                        Year 1
                                    </text>
                                </svg>
                            </div>
                            <div className="">
                                {/* SVG 2 */}
                                <svg
                                    width="583"
                                    height="70"
                                    viewBox="0 0 583 70"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="z-20  relative right-[70px]"
                                >
                                    <path d="M0 0H542.708L583 35L542.708 70H0V0Z" fill="#F09A87" />

                                    <path d="M0 0H542.708L583 35L542.708 70H0V0Z" fill="#F09A87" />
                                    <text
                                        x="450"
                                        y="35"
                                        dominantBaseline="middle"
                                        textAnchor="end"
                                        fill="white"
                                        fontSize="24"
                                        fontWeight="bold"
                                        className="fmb text-white text-sm font-normal"
                                    >
                                        Year 2
                                    </text>
                                </svg>
                            </div>

                            {/* SVG 3 */}
                            <div className="">
                                <svg
                                    width="533"
                                    height="70"
                                    viewBox="0 0 533 70"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="z-10  relative right-[310px]"
                                >
                                    <path d="M0 0H496.164L533 35L496.164 70H0V0Z" fill="#FFCEC3" />

                                    <path d="M0 0H496.164L533 35L496.164 70H0V0Z" fill="#FFCEC3" />
                                    <text
                                        x="420"
                                        y="35"
                                        dominantBaseline="middle"
                                        textAnchor="end"
                                        fill="white"
                                        fontSize="24"
                                        fontWeight="bold"
                                        className="fmb text-white text-sm font-normal"
                                    >
                                        Year 3
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-xl lg:flex gap-2 lg:mx-auto p-4 mb-40 md:space-y-0 space-y-10">
                        <div className="flex flex-col w-2/4 md:w-[48%]">
                            {/* Rest of your code... */}
                            <div className="flex md:flex-row flex-col gap-2 justify-center items-start">
                                <div className="">
                                    <ul className=" space-y-7 text-[#F1775E] text-sm font-semibold">
                                        <li className=" py-3">Formation of UAE Legal Entity</li>
                                        <li className="pb-7">AI Integration</li>
                                        <li className="">
                                            Active Participant Formation, Vote, and Selection
                                        </li>
                                        <li className="">
                                            BrickLayer Tenant Acquisition Service
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-sm font-semibold">
                                    <ul className=" space-y-10 md:space-y-5 w-64 md:w-52  text-white text-sm font-semibold">
                                        <li className="px-4 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent ">
                                            Release 1st Partner Occupier
                                        </li>
                                        <li className="px-4 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                            $BRICKS Token Issuance
                                        </li>
                                        <li className="px-4 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                            Launch Introduction Program
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-sm font-semibold">
                                    <ul className=" space-y-10 md:space-y-5 w-52  text-white text-sm font-semibold">
                                        <li className="px-4 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                            Launch Staking Program
                                        </li>
                                        <li className="px-4 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                            Genesis acquisition complete
                                        </li>
                                        <li className="px-4 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                            Release 2nd Parnter Occupier
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/4 md:w-1/4 flex flex-col justify-start items-start">
                            {/* Rest of your code... */}
                            <ul className="ml-8  space-y-10 md:space-y-5 text-justify w-56 text-white text-sm font-semibold">
                                <li className="px-4 py-2 hover:bg-[#F09A87] hover:border hover:border-white border border-transparent ">
                                    Launch of Bricklayer Listing Portal
                                </li>
                                <li className="px-4 py-2 hover:bg-[#F09A87] hover:border hover:border-white border border-transparent ">
                                    Release 3rd Partner Occupier
                                </li>
                                <li className="px-4 py-2 hover:bg-[#F09A87] hover:border hover:border-white border border-transparent ">
                                    Launch the Brickworks Tapestry
                                </li>
                            </ul>
                        </div>
                        <div className="w-2/4 md:w-1/4 flex flex-col justify-start items-start text-justify">
                            {/* Rest of your code... */}
                            <ul className=" space-y-10 md:space-y-16 w-56 text-white text-sm font-semibold">
                                <li className="px-4 py-1 hover:bg-[#FFCEC3] hover:border hover:border-white border border-transparent">
                                    Bricklayer Listing Portal to offer Asset Sales and Escrow
                                    Platform
                                </li>
                                <li className="px-4 py-2 hover:bg-[#FFCEC3] hover:border hover:border-white border border-transparent">
                                    Release 4th and 5th Partner Occupiers
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile view */}

            <div className="md:hidden block ">
                <div className="flex flex-row my-10">
                    <svg
                        width="262"
                        height="63"
                        viewBox="0 0 262 63"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`z-30  relative transition-all duration-500 ${
                            selectedYear === 3 ? "-left-10" : selectedYear === 2 ? "-left-10" : ""
                        }`}
                        onClick={() => handleYearClick(1)}
                    >
                        <path d="M0 0H223.694L262 31.5L223.694 63H0V0Z" fill="#E16E56" />
                        {selectedSvg1 && (
                            <text
                                x="50%"
                                y="50%"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                fill="white"
                                fontSize="24"
                                fontWeight="bold"
                                className="fmb text-white text-sm font-normal"
                            >
                                Year 1
                            </text>
                        )}
                    </svg>

                    <svg
                        width="262"
                        height="63"
                        viewBox="0 0 262 63"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`z-20  relative transition-all duration-500 ${
                            selectedYear === 3
                                ? "-left-[105px]"
                                : selectedYear === 2
                                ? "-left-20"
                                : "-left-20"
                        }`}
                        onClick={() => handleYearClick(2)}
                    >
                        <path d="M0 0H223.694L262 31.5L223.694 63H0V0Z" fill="#F09A87" />
                        {selectedSvg2 && (
                            <text
                                x="60%"
                                y="50%"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                fill="white"
                                fontSize="24"
                                fontWeight="bold"
                                className="fmb text-white text-sm font-normal"
                            >
                                Year 2
                            </text>
                        )}
                    </svg>

                    <svg
                        width="262"
                        height="63"
                        viewBox="0 0 262 63"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`z-10  relative transition-all duration-500 -left-40 first-letter:${
                            selectedYear === 3 ? "-left-52" : ""
                        }`}
                        onClick={() => handleYearClick(3)}
                    >
                        <path d="M0 0H223.694L262 31.5L223.694 63H0V0Z" fill="#FFCEC3" />

                        {selectedSvg3 && (
                            <text
                                x="70%"
                                y="50%"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                fill="white"
                                fontSize="24"
                                fontWeight="bold"
                                className="fmb text-white text-sm font-normal ml-10"
                            >
                                Year 3
                            </text>
                        )}
                    </svg>
                </div>

                {/* Render the content based on the selected year */}
                {selectedYear === 1 && (
                    <div className="grid grid-cols-3 gap-5 justify-center items-start mb-44 p-5">
                        <div className="">
                            <ul className=" space-y-10 text-[#F1775E] text-sm font-semibold">
                                <li className="py-3">Formation of UAE Legal Entity</li>
                                <li className="py-3">AI Integration</li>
                                <li className=" py-3">
                                    Active Participant Formation, Vote, and Selection
                                </li>
                                <li className="py-2">BrickLayer Tenant Acquisition Service</li>
                            </ul>
                        </div>
                        <div className="text-sm font-semibold">
                            <ul className=" space-y-10 md:space-y-5 w-40  text-white text-sm font-semibold">
                                <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent ">
                                    Release 1st Partner Occupier
                                </li>
                                <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                    $BRICKS Token Issuance
                                </li>
                                <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                    Launch Introduction Program
                                </li>
                            </ul>
                        </div>
                        <div className="text-sm font-semibold">
                            <ul className=" space-y-10 md:space-y-5 w-40  text-white text-sm font-semibold">
                                <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                    Launch Staking Program
                                </li>
                                <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                    Genesis acquisition complete
                                </li>
                                <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                    Release 2nd Parnter Occupier
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
                {selectedYear === 2 && (
                    <div className="w-2/4 md:w-1/4 flex flex-col justify-start items-start mb-64 p-5">
                        {/* Rest of your code... */}
                        <ul className=" space-y-10 md:space-y-5 w-44 text-white text-sm font-semibold">
                            <li className="px-6 py-2 hover:bg-[#F09A87] hover:border hover:border-white border border-transparent ">
                                Launch of Bricklayer Listing Portal
                            </li>
                            <li className="px-6 py-2 hover:bg-[#F09A87] hover:border hover:border-white border border-transparent ">
                                Release 3rd Partner Occupier
                            </li>
                            <li className="px-6 py-2 hover:bg-[#F09A87] hover:border hover:border-white border border-transparent ">
                                Launch the Brickworks Tapestry
                            </li>
                        </ul>
                    </div>
                )}
                {selectedYear === 3 && (
                    <div className="w-2/4 md:w-1/4 flex flex-col justify-start items-start mb-72 p-5">
                        {/* Rest of your code... */}
                        <ul className=" space-y-10 md:space-y-5 w-56 text-white text-sm font-semibold">
                            <li className="px-6 py-2 hover:bg-[#FFCEC3] hover:border hover:border-white border border-transparent">
                                Bricklayer Listing Portal to offer Asset Sales and Escrow Platform
                            </li>
                            <li className="px-6 py-2 hover:bg-[#FFCEC3] hover:border hover:border-white border border-transparent">
                                Release 4th and 5th Partner Occupiers
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
