import Header from "../header-layout";
import Footer from "../footer-layout";

// import row1 from "@/constants/row1";
// import row2 from "@/constants/row2";
// import row3 from "@/constants/row3";
// import row4 from "@/constants/row4";
// import row5 from "@/constants/row5";
// import row6 from "@/constants/row6";
// import row7 from "@/constants/row7";
// import row8 from "@/constants/row8";
// import row9 from "@/constants/row9";
// import row10 from "@/constants/row10";
// import row11 from "@/constants/row11";
// import row12 from "@/constants/row12";
// import row13 from "@/constants/row13";

import "./roadmap.scss";
export default function roadmap() {
    return (
        <>
            <div className="main">
                <div className="bg-texture">
                    <div className="bg-road">
                        <Header />
                        <div className="title fmb text-[80px] text-center mt-14">ROADMAP</div>
                        <div className="bg-blur mt-8">
                            <div className="flex justify-center gap-6 py-4">
                                <button className="bg-transparent hover:bg-[#E26E5D] border-3 border-white hover:border-[#E26E5D] fmb p-2">
                                    Year 1
                                </button>
                                <button className="bg-transparent hover:bg-[#E26E5D] border-3 border-white hover:border-[#E26E5D] fmb p-2">
                                    Year 2
                                </button>
                                <button className="bg-transparent hover:bg-[#E26E5D] border-3 border-white hover:border-[#E26E5D] fmb p-2">
                                    Year 3
                                </button>
                            </div>
                        </div>
                        <br />

                        <div className="container mx-auto w-full md:w-3/4 lg:w-1/2">
                            <div className="row">
                                <div className="boxes"></div>
                                <div className="boxes"></div>
                                <div className="boxes b"></div>
                                <div className="boxes"></div>
                                <div className="boxes"></div>
                                
                            </div>
                            <div className="row">
                                <div className="boxes"></div>
                                <div className="boxes"></div>
                                <div className="boxes"></div>
                                <div className="boxes b"></div>
                                <div className="boxes"></div>
                            </div>
                            <div className="row">
                                <div className="boxes"></div>
                                <div className="boxes"></div>
                                <div className="boxes b"></div>
                                <div className="boxes"></div>
                                <div className="boxes"></div>
                            </div>
                            <div className="row">
                                <div className="boxes"></div>
                                <div className="boxes"></div>
                                <div className="boxes"></div>
                                <div className="boxes b"></div>
                                <div className="boxes"></div>
                            </div>
                            <div className="row">
                                <div className="boxes"></div>
                                <div className="boxes"></div>
                                <div className="boxes"></div>
                                <div className="boxes b"></div>
                                <div className="boxes"></div>
                            </div>
                            <div className="row">
                                <div className="boxes"></div>
                                <div className="boxes"></div>
                                <div className="boxes b"></div>
                                <div className="boxes"></div>
                                <div className="boxes"></div>
                            </div>
                        </div>

                        {/* <div className="grid grid-cols-5 gap-10 mt-14">
                        {row1.map((item)=>{
                        return (
                            <div className="translate " key={item.id}>
                                {item.content()}
                            </div>
                        )}
                        )}
                        {row2.map((item)=>{
                        return (
                            <div className="translate-x-[-8rem]" key={item.id}>
                                {item.content()}
                            </div>
                        )}
                        )}
                        {row3.map((item)=>{
                        return (
                            <div className="translate-x-[3rem] " key={item.id}>
                                {item.content()}
                            </div>
                        )}
                        )}
                        {row4.map((item)=>{
                        return (
                            <div className="translate-x-[-10rem] " key={item.id}>
                                {item.content()}
                            </div>
                        )}
                        )}
                        {row5.map((item)=>{
                        return (
                            <div className="translate-x-[-1rem] " key={item.id}>
                                {item.content()}
                            </div>
                        )}
                        )}
                        {row6.map((item)=>{
                        return (
                            <div className="translate-x-[-10rem] " key={item.id}>
                                {item.content()}
                            </div>
                        )}
                        )}
                        {row7.map((item)=>{
                        return (
                            <div className="translate-x-[4rem] " key={item.id}>
                                {item.content()}
                            </div>
                        )}
                        )}
                        {row8.map((item)=>{
                        return (
                            <div className="translate-x-[-10rem] " key={item.id}>
                                {item.content()}
                            </div>
                        )}
                        )}
                        {row9.map((item)=>{
                        return (
                            <div className="translate-x-[-1rem] " key={item.id}>
                                {item.content()}
                            </div>
                        )}
                        )}
                        {row10.map((item)=>{
                        return (
                            <div className="translate-x-[-10rem]  " key={item.id}>
                                {item.content()}
                            </div>
                        )}
                        )}
                        {row11.map((item)=>{
                        return (
                            <div className="translate-x-[5rem] " key={item.id}>
                                {item.content()}
                            </div>
                        )}
                        )}
                        {row12.map((item)=>{
                        return (
                            <div className="translate-x-[-8rem] " key={item.id}>
                                {item.content()}
                            </div>
                        )}
                        )}
                        {row13.map((item)=>{
                        return (
                            <div className="translate " key={item.id}>
                                {item.content()}
                            </div>
                        )}
                        )}
                    </div> */}
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
