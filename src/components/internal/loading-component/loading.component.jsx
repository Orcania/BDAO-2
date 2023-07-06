"use client";

import { useEffect, useState } from "react";

export default function LoadingComponent() {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // const handleRouteChangeComplete = (e) => {
        //     // Page has finished loading all its sources
        //     console.log(e);
        //     setIsLoading(false);
        // };

        // window.addEventListener("load", handleRouteChangeComplete);

        // const hasComponentBeenDisplayed = localStorage.getItem("hasComponentBeenDisplayed");
        // if (hasComponentBeenDisplayed) {
        //     setIsLoading(false);
        // } else {
        //     localStorage.setItem("hasComponentBeenDisplayed", "true");
        // }

        // if document.readyState is 'complete', all assets are already loaded
        if (document.readyState === "complete") {
            setLoading(false);
        } else {
            // otherwise, we need to wait for the window to load
            window.onload = function () {
                setLoading(false);
            };
        }

        return () => {
            window.onload = () => {};
        };
    }, []);

    // deactivate scroll
    useEffect(() => {
        document.documentElement.style.overflow = isLoading ? "hidden" : "auto";
        document.body.style.overflow = isLoading ? "hidden" : "auto";

        // Cleanup function to restore scroll when the component unmounts
        return () => {
            document.documentElement.style.overflow = "auto";
            document.body.style.overflow = "auto";
        };
    }, [isLoading]);

    if (isLoading) {
        return (
            <div className="fixed h-screen w-screen top-0 left-0 main-bg z-40">
                <div className="h-full w-full flex flex-col justify-center items-center">
                    <model-viewer
                        src="/media/models/B-logo.glb"
                        loading="eager"
                        auto-rotate
                        camera-controls
                        rotation-per-second="30deg"
                        touch-action="pan-y"
                        disable-zoom
                        exposure="0.6"
                        style={{
                            width: "75px",
                        }}
                    ></model-viewer>
                    <h1 className="fmb text-lg font-bold">Loading...</h1>
                </div>
            </div>
        );
    }

    return null;
}
