"use client";
import useThemeStore from "@/lib/store/ThemeStore";
import { Roboto_Condensed } from "next/font/google";
import { useEffect, useState } from "react";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

const Footer = () => {
    const date = new Date();
    const { theme, changeTheme } = useThemeStore((state:any) => ({ theme: state.theme, changeTheme: state.changeTheme }));


    return (
        <footer className={`fixed h-20 bottom-0 left-0 w-full p-4 body-font ${theme ? "bg-black text-white " : "bg-gray-500 text-white"}`}>
            <div className="container m-0 p-0 flex items-center sm:flex-row flex-col">


                <button className={`${roboto.className}text-white p-2 mb-10 flex flex-col items-center gap-0 p-1 m-2 rounded-sm border-2 bg-white overflow-hidden w-32`}>
                    <small className="text-black">{`${theme ? "Light" : "Dark"}`}</small>
                </button>
                <button className="text-white p-2 mb-10 flex flex-col items-center gap-0 p-1 m-2 rounded-sm border-2 bg-white overflow-hidden w-32">
                    <small className="text-black">{`${theme ? "Light" : "Dark"}`}</small>
                </button>
                <button className="text-white p-2 mb-10 flex flex-col items-center gap-0 p-1 m-2 rounded-sm border-2 bg-white overflow-hidden w-32">
                    <small className="text-black">{`${theme ? "Light" : "Dark"}`}</small>
                </button>

            </div>

        </footer>
    )
}

export default Footer
