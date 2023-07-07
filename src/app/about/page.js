"use client";

import React from "react";

import disclaimersEng from "@/constants/disclaimerE";
import "./about.scss";
import Select from "react-select";

export default function About() {
    const [activeLang] = React.useState(disclaimersEng);
    const [activeEl, setActiveEl] = React.useState(activeLang[0]);
    const [selectedOption, setSelectedOption] = React.useState(0);
    const [isFade, setIsFade] = React.useState(false);
    const [isFadeButtons] = React.useState(false);
    const [, setIsTarget] = React.useState(0);

    const onChange = (selectedOption) => {
        if (selectedOption) {
            const selectedValue = selectedOption.value;
            setTimeout(() => setSelectedOption(selectedValue), 500);
            setIsFade(true);
            setTimeout(() => setIsFade(false), 500);
        }
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
        const target_ = e.currentTarget.dataset.id;
        setIsTarget(target_);
        setIsFade(true);
        setTimeout(() => setIsFade(false), 500);
        setTimeout(() => setActiveEl(activeLang[target_]), 500);
    };

    return (
        <section className="flex flex-col bg-towers">
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
                                    className={`hover:bg-[#E26E5D] active:bg-[#E26E5D] opacity-90 border-transparent py-2 cursor-pointer xl:w-[340px] ${
                                        activeEl === item ? "bg-[#E26E5D]" : ""
                                    }`}
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
                        <Select
                            options={activeLang.map((item) => ({
                                value: item.id,
                                label: `${item.id} ${item.disclaimer}`,
                            }))}
                            onChange={onChange}
                            className="custom-select bg-[#E26E5D]"
                            classNamePrefix="custom-select"
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    backgroundColor: "#E26E5D",
                                    fontWeight: "bold",
                                    borderRadius: "0.375rem",
                                    border: "3px solid white",
                                    color: "white",
                                    overflow: "hidden",
                                    whiteSpace: "nowrap", // Prevent text wrapping
                                    textOverflow: "ellipsis",
                                }),
                                option: (provided, state) => ({
                                    ...provided,

                                    border: "2px solid white",
                                    backgroundColor: state.isSelected ? "white" : "#E26E5D",
                                    color: state.isSelected ? "#E26E5D" : "white",
                                    width: "98.1%",
                                    padding: "5px",
                                    marginBottom: "5px",
                                    marginLeft: "2px",
                                    fontSize: "0.8rem",
                                    whiteSpace: "nowrap", // Prevent text wrapping
                                    overflow: "hidden", // Hide any overflowing text
                                    textOverflow: "ellipsis", // Show ellipsis (...) for truncated text
                                }),
                                menu: (provided) => ({
                                    ...provided,
                                    border: "1px solid white",
                                    padding: "3px",
                                    backgroundColor: "#E26E5D",
                                    color: "white",
                                    whiteSpace: "nowrap", // Prevent text wrapping
                                    overflow: "hidden", // Hide any overflowing text
                                    textOverflow: "ellipsis",
                                }),
                                singleValue: (provided) => ({
                                    ...provided,
                                    color: "white",
                                    whiteSpace: "nowrap", // Prevent text wrapping
                                    overflow: "hidden", // Hide any overflowing text
                                    textOverflow: "ellipsis",
                                }),
                                placeholder: (provided) => ({
                                    ...provided,
                                    color: "white",
                                    whiteSpace: "nowrap", // Prevent text wrapping
                                    overflow: "hidden", // Hide any overflowing text
                                    textOverflow: "ellipsis",
                                }),
                                menuList: (provided) => ({
                                    ...provided,
                                    whiteSpace: "nowrap", // Prevent text wrapping
                                    // Hide any overflowing text
                                    textOverflow: "ellipsis",
                                    "&::-webkit-scrollbar": {
                                        width: "5px",
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        backgroundColor: "white",
                                        borderRadius: "2px",
                                    },
                                    "&::-webkit-scrollbar-track": {
                                        backgroundColor: "#E26E5D",
                                        borderRadius: "2px",
                                    },
                                }),
                            }}
                        />
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
