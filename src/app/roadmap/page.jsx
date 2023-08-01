"use client";

import "./roadmap.scss";

export default function useRoadmap() {
    return (
        <div className="">
            <div className="max-w-screen-xl lg:flex gap-12 lg:mx-auto p-4 mt-12">
                <h1 className="fmb text-white text-5xl font-normal">ROADMAP</h1>
            </div>
            <div className="flex flex-col gap-10 justify-center items-center mt-10">
                <div className="flex justify-start items-center ">
                    <div className=" flex flex-row w-[80%]">
                        {/* SVG 1 */}
                        <div className="md:w-2/4 w-1/4">
                            <svg
                                width="990"
                                height="70"
                                viewBox="0 0 990 70"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="z-30 relative"
                            >
                                <path d="M0 0H947.151L990 35L947.151 70H0V0Z" fill="#E16E56" />

                                <text
                                    x="700"
                                    y="35"
                                    dominantBaseline="middle"
                                    textAnchor="end"
                                    fill="white"
                                    fontSize="24"
                                    fontWeight="bold"
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
                                className="z-20  relative right-32"
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
                                className="z-10  relative right-96"
                            >
                                <path d="M0 0H496.164L533 35L496.164 70H0V0Z" fill="#FFCEC3" />

                                <path d="M0 0H496.164L533 35L496.164 70H0V0Z" fill="#FFCEC3" />
                                <text
                                    x="450"
                                    y="35"
                                    dominantBaseline="middle"
                                    textAnchor="end"
                                    fill="white"
                                    fontSize="24"
                                    fontWeight="bold"
                                >
                                    Year 3
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="max-w-screen-xl lg:flex gap-5 lg:mx-auto p-4 mb-44">
                    <div className="flex flex-col w-[45%]">
                        {/* Rest of your code... */}
                        <div className="flex flex-row justify-center items-start gap-5">
                            <div className=" text-red-400 text-sm font-semibold">
                                <ul className="list-disc list-inside space-y-10 ">
                                    <li className=" py-2">Formation of UAE Legal Entity</li>
                                    <li className=" py-2">AI Integration</li>
                                    <li className=" py-2">
                                        Active Participant Formation, Vote, and Selection
                                    </li>
                                    <li
                                    // className={`px-6 py-2 ${
                                    //     isActive(0) ? "bg-[#E16E56] hover:border border-white" : ""
                                    // }`}
                                    >
                                        BrickLayer Tenant Acquisition Service
                                    </li>
                                </ul>
                            </div>
                            <div className="text-sm font-semibold">
                                <ul className="list-disc list-inside space-y-5 w-40">
                                    <li className="px-6 py-2 hover:bg-[#E16E56] hover:border border-white">
                                        Release 1st Partner Occupier
                                    </li>
                                    <li className="px-6 py-2 hover:bg-[#E16E56] hover:border border-white">
                                        $BRICKS Token Issuance
                                    </li>
                                    <li className="px-6 py-2 hover:bg-[#E16E56] hover:border border-white">
                                        Launch Introduction Program
                                    </li>
                                </ul>
                            </div>
                            <div className="text-sm font-semibold">
                                <ul className="list-disc list-inside space-y-5 w-40">
                                    <li className="px-6 py-2 hover:bg-[#E16E56] hover:border border-white">
                                        Launch Staking Program
                                    </li>
                                    <li className="px-6 py-2 hover:bg-[#E16E56] hover:border border-white">
                                        Genesis acquisition complete
                                    </li>
                                    <li className="px-6 py-2 hover:bg-[#E16E56] hover:border border-white">
                                        Release 2nd Parnter Occupier
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4">
                        {/* Rest of your code... */}
                        <ul className="list-disc list-inside space-y-10 w-[85%]">
                            <li className="px-6 py-2 hover:bg-[#F09A87] hover:border border-white ">
                                Launch of Bricklayer Listing Portal
                            </li>
                            <li className="px-6 py-2 hover:bg-[#F09A87] hover:border border-white ">
                                Release 3rd Partner Occupier
                            </li>
                            <li className="px-6 py-2 hover:bg-[#F09A87] hover:border border-white ">
                                Launch the Brickworks Tapestry
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/4 flex flex-col justify-start items-start">
                        {/* Rest of your code... */}
                        <ul className="list-disc list-inside space-y-10 w-[75%]">
                            <li className="px-6 py-2 hover:bg-[#FFCEC3] hover:border border-white ">
                                Bricklayer Listing Portal to offer Asset Sales and Escrow Platform
                            </li>
                            <li className="px-6 py-2 hover:bg-[#FFCEC3] hover:border border-white">
                                Release 4th and 5th Partner Occupiers
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
