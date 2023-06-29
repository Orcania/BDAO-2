/* eslint-disable camelcase */
import { IBM_Plex_Mono, Press_Start_2P } from "next/font/google";

export const ibm = IBM_Plex_Mono({
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-ibm",
});

export const ps2p = Press_Start_2P({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-ps2p",
});
