"use client";
import useThemeStore from "@/lib/store/ThemeStore";
import { useEffect, useState } from "react";

const MainFooter = () => {
    const date = new Date();
    const { theme, changeTheme } = useThemeStore((state:any) => ({ theme: state.theme, changeTheme: state.changeTheme }));


    return (
        <footer className={`fixed bottom-0 left-0 w-full p-4 body-font ${theme ? "bg-black text-white " : "bg-gray-700 text-white"}`}>
            <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
                
                <p style={{ color: 'white' }} className="title-font font-medium text-xl inline-flex sm:ml-auto sm:mt-0 mt-4 mr-10 justify-center sm:justify-start">
                    Date: {date.toLocaleDateString()}, {date.toLocaleTimeString()}
                </p>


                <button onClick={() => changeTheme()} className="text-white p-0 m-0 absolute right-2 bottom-2 flex flex-col items-center gap-0 p-1 m-2 rounded-full border-2 bg-white overflow-hidden">
                    <p>{`${theme ? "☀️" : "🌑"}`}</p>
                    <small className="text-black">{`${theme ? "Light" : "Dark"}`}</small>
                </button>
            </div>

        </footer>
    )
}

export default MainFooter
