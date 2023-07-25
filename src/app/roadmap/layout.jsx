import Script from "next/script";

import Header from "../layout/header-layout";

import "../layout/header-layout/header.scss";
import "@/scss/globals.scss";
import "@/scss/button.scss";
import "./roadmap.scss";

export const metadata = {
    title: "BDAO",
    description: "Generated by create next app",
};

export default function RootLayoutt({ children , className }) {
    return (
        <>
            <Script
                src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"
                type="module"
            />
            <Header />

            <div className="main-bg">
                <div className="bg-frame">
                    <div>
                        {/* <section className="pt-[81px]"></section> */}
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
