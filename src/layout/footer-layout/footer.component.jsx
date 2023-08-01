"use client";
"use client";

/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./footer.module.scss";

const { doll } = styles;
const { car } = styles;

// add a new feature

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer>
            <div className="footer relative ">
                <div className="absolute bottom-[100%] overflow-hidden  h-[150px] w-full">
                    <Image
                        className={`absolute -bottom-2
                        translate-y-[5px] ${pathname === "/roadmap" ? car : doll}`}
                        width={pathname === "/roadmap" ? 206 : 103}
                        height={pathname === "/roadmap" ? 324 : 162}
                        src={pathname === "/roadmap" ? "/footer/car.png" : "/footer/little-man.gif"}
                        alt=""
                    ></Image>
                </div>

                {/* Desktop Image */}
                <img
                    className="hidden xl:block 2xl:block lg:block md:hidden sm:hidden bg-[#DCDCDC]"
                    style={{ width: "100%", height: "auto", maxHeight: "700px" }}
                    src="/footer/desktop-wall.png"
                    alt=""
                />

                {/* Tablet Image */}
                <img
                    className="hidden md:block sm:block xl:hidden 2xl:hidden lg:hidden bg-[#DCDCDC]"
                    style={{ width: "100%", height: "auto", maxHeight: "700px" }}
                    src="/footer/tablet-wall.png"
                    alt=""
                />

                {/* Mobile Image */}
                <img
                    className="block sm:hidden md:hidden bg-[#DCDCDC]"
                    style={{ width: "100%", height: "auto", maxHeight: "700px" }}
                    src="/footer/mobile-wall.png"
                    alt=""
                />

                <div className="socials absolute w-full  bottom-0 pb-5 sm:pb-1 lg:pb-2">
                    <div className="flex justify-center items-center sm:justify-end md:justify-end ">
                        {/* <h1 className="font-medium text-[18] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[18px]">@2023 BrickLayer</h1> */}
                        <div
                            className="font-medium text[18px] md:text-[10px] sm:text-[10px] flex gap-4 mr-5 2xl:mr-20 "
                            style={{ alignItems: "center" }}
                        >
                            <a
                                href="https://t.me/+tU7KlgQHnSk3ZWNk"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className=""
                                    width={20}
                                    height={20}
                                    alt=""
                                    src="/footer/share.svg"
                                ></Image>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/bricklayerdao/about/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className=""
                                    width={20}
                                    height={20}
                                    alt=""
                                    src="/footer/linkedin.svg"
                                ></Image>
                            </a>
                            <a
                                href="https://twitter.com/BricklayerDao "
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className=""
                                    width={20}
                                    height={20}
                                    alt=""
                                    src="/footer/twitter.svg"
                                ></Image>
                            </a>
                            <a
                                href="https://t.me/+tU7KlgQHnSk3ZWNk"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className=""
                                    width={20}
                                    height={20}
                                    alt=""
                                    src="/footer/M.svg"
                                ></Image>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
