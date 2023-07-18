/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

import styles from "./footer.module.scss";

const { doll } = styles;

// add a new feature

export default function Footer() {
    return (
        <footer>
            <div className="footer relative ">
                <div className="absolute bottom-[100%] overflow-hidden  h-[150px] w-full">
                    <Image
                        className={`absolute bottom-0 translate-y-[5px] ${doll}`}
                        width={103}
                        height={162}
                        src="/footer/little-man.gif"
                        alt=""
                    ></Image>
                </div>

                <img
                    className="sm:block hidden bg-[#DCDCDC] "
                    style={{ width: "100%", height: "auto", maxHeight: "700px" }}
                    src="/footer/walld.png"
                    alt=""
                ></img>

                <Image
                    className="sm:hidden block bg-[#DCDCDC]"
                    width={768}
                    height={50}
                    src="/footer/wallm.png"
                    alt=""
                ></Image>
                <div className="socials absolute w-full  bottom-0 pb-2">
                    <div className="flex justify-between items-center">
                        <h1 className="font-medium text-[18] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[18px]">@2023 BrickLayer</h1>
                        <div
                            className="font-medium text[20px] flex gap-8 mr-6 2xl:mr-20"
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
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
