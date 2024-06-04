import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function App() {
    return (
        <div className="flex flex-row justify-center items-center">
            <div className="flex absolute top-5 left-5 items-center justify-center">
                <img
                    src="https://lh3.googleusercontent.com/a/ACg8ocJ7AOyVZY17XDTdIS2R1ulbvtFn-rFHmTxEGE49oqc-WtTi1do=s720-c-no"
                    alt="TouchDev Logo"
                    className="w-8 h-8"
                ></img>
                <p className="font-bold text-inherit mx-3">TouchDev</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-10 justify-center max-w-screen pb-10">
                <div>
                    <a href="#" aria-current="page">
                        Home
                    </a>
                </div>
                <div>
                    <a color="foreground" href="https://docs.touchdev.app">
                        Documentation
                    </a>
                </div>
            </div>
        </div>
    );
}
