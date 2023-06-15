"use client";

import React from "react";

// import disclaimersArabic from "@/constants/disclaimerA";
import disclaimersEng from "@/constants/disclaimerE";
import "./about.scss";

export default function About() {
    const [activeLang] = React.useState(disclaimersEng);
    const [activeEl, setActiveEl] = React.useState(activeLang[0]);
    const [selectedOption, setSelectedOption] = React.useState(0);
    const [isFade, setIsFade] = React.useState(false);
    const [isFadeButtons] = React.useState(false);
    const [ setIsTarget] = React.useState(0);

    const onChange = (e) => {
        const selectedValue = e.target.value;
        setTimeout(() => setSelectedOption(selectedValue), 500);
        setIsFade(true);
        setTimeout(() => setIsFade(false), 500);
    };

    // const switchLang = () => {
    //     if (activeLang === disclaimersEng) {
    //         setIsFade(true);
    //         setTimeout(() => setIsFade(false), 500);
    //         setIsFadeButtons(true);
    //         setTimeout(() => setActiveLang(disclaimersArabic), 500);
    //         setTimeout(() => setIsFadeButtons(false), 500);
    //         setTimeout(() => setActiveEl(disclaimersArabic[activeTarget]), 500);
    //     } else if (activeLang === disclaimersArabic) {
    //         setIsFade(true);
    //         setTimeout(() => setIsFade(false), 500);
    //         setTimeout(() => setActiveLang(disclaimersEng), 500);
    //         setIsFadeButtons(true);
    //         setTimeout(() => setIsFadeButtons(false), 500);
    //         setTimeout(() => setActiveEl(disclaimersEng[activeTarget]), 500);
    //     }
    // };

    const onButtonClick = (e) => {
        const target = e.currentTarget.dataset.id;
        setIsTarget(target);
        setIsFade(true);
        setTimeout(() => setIsFade(false), 500);
        setTimeout(() => setActiveEl(activeLang[target]), 500);
    };

    return (
        <section className="flex flex-col">
            <div className="max-w-screen-xl lg:flex gap-12 lg:mx-auto p-4 mt-12">
                <div className="column-1 lg:block md:flex justify-between gap-6">
                    <div className="flex">
                        {/* <div className="bg-[#E26E5D] border-2 border-white text-center w-full xl:px-8 sm:px-14 py-2 bg-blur1">
                            <button
                                className={activeLang === disclaimersEng ? "" : "text"}
                                onClick={switchLang}
                            >
                                <span className="fmb">Eng</span>
                            </button>
                        </div> */}
                        {/* <div className="bg-[#E26E5D] border-2 border-white fmb text-center w-full sm:px-8 py-2">
                            <button
                                className={activeLang === disclaimersArabic ? "" : "text"}
                                onClick={switchLang}
                            >
                                <span className="fmb">Arabic</span>
                            </button>
                        </div> */}
                    </div>
                    <br></br>
                    <section className={`lg:block hidden ${isFadeButtons ? "fade" : "show"}`}>
                        <div className="font-semibold mt-1">
                            {activeLang.map((item) => (
                                <div
                                    onClick={onButtonClick}
                                    key={item.id}
                                    data-id={item.id}
                                    className="hover:bg-[#E26E5D] opacity-90 border-transparent py-2 cursor-pointer xl:w-[340px]"
                                >
                                    <div
                                        className={
                                            activeLang === disclaimersEng
                                                ? "flex gap-2"
                                                : "flex gap-2 justify-end"
                                        }
                                    >
                                        <span
                                            className={
                                                activeLang === disclaimersEng ? "" : "order-2"
                                            }
                                        >
                                            {item.id}
                                        </span>
                                        <span>{item.disclaimer}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="lg:hidden">
                        <select
                            onChange={onChange}
                            className="bg-[#E26E5D] font-semibold py-2.5 rounded border-2 border-white w-full"
                        >
                            {activeLang.map((item) => (
                                <option value={item.id} key={item.id}>
                                    <div>
                                        <span>{item.id} </span>
                                        <span className="translate">{item.disclaimer}</span>
                                    </div>
                                </option>
                            ))}
                        </select>
                    </section>
                </div>
                <div className="column-2 bg-opacity-80 relative bg-[#E26E5D] border-3 border-white mb-72 lg:block hidden xl:w-[900px] xl:min-h-[750px] w-full">
                    <section className={`p-16 bg-blur2 ${isFade ? "fade" : "show"}`}>
                        <p className="number fmb text-[24px]">{activeEl.id}</p>
                        <h1 className="title fmb text-[24px]">{activeEl.title}</h1>
                        {activeEl.content()}
                        <br></br>
                    </section>
                </div>
            </div>

            {/* Mobile version */}

            <div className="column-2 mx-4 bg-opacity-80 relative bg-[#E26E5D] border-3 border-white mb-56 lg:hidden mt-12">
                <section className={`md:p-16 pt-9 pl-4 ${isFade ? "fade" : "show"}`}>
                    <p className="number fmb text-[20px]">{activeLang[selectedOption].id}</p>
                    <h1 className="title fmb text-[20px]">{activeLang[selectedOption].title}</h1>
                    {activeLang[selectedOption].content()}
                    <br></br>
                </section>
            </div>
        </section>
    );
}
