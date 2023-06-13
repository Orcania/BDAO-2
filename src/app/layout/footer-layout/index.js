import Image from "next/image";

// import styles from "./footer.module.scss";

// const { doll } = styles;

export default function Footer() {
    return (
        <footer>
            <div className="footer relative ">
                <Image
                    className={`ml-32 absolute bottom-[100%] `}
                    width={103}
                    height={162}
                    src="/footer/little-man.png"
                    alt=""
                ></Image>
                <Image
                    className="sm:block hidden"
                    width={2000}
                    height={700}
                    src="/footer/walld.png"
                    alt=""
                ></Image>
                <Image
                    className="sm:hidden block"
                    width={768}
                    height={50}
                    src="/footer/wallm.jpg"
                    alt=""
                ></Image>
                <div className="socials bg-[#242424] py-4 flex justify-between">
                    <h1 className="font-medium text-[20px] ml-12">@2023 BrickLayer</h1>
                    <div className="font-medium text[20px] flex mr-12" style={{alignItems:"center"}}>
                    <a
                            href="https://t.me/+tU7KlgQHnSk3ZWNk"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <Image
                            className="mr-6"
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
                                className="mr-6"
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
        </footer>
    );
}