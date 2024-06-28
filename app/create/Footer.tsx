"use client";
import useThemeStore from "@/lib/store/themeStore";
import { Roboto_Condensed } from "next/font/google";
import { useEffect, useState } from "react";
import PrintIcon from "@mui/icons-material/Print";
import TitleIcon from "@mui/icons-material/Title";
import ClassIcon from "@mui/icons-material/Class";
import ThreePIcon from "@mui/icons-material/ThreeP";
import CalculateIcon from "@mui/icons-material/Calculate";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import QueueIcon from "@mui/icons-material/Queue";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

type FooterProps = {
  onButtonClick: (content: React.ReactNode) => void;
};

const Footer = ({onButtonClick}:FooterProps) => {
  const { theme, changeTheme } = useThemeStore((state: any) => ({
    theme: state.theme,
    changeTheme: state.changeTheme,
  }));

  const handleScroll = (event: any) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`fixed h-16 bottom-0 left-0 w-full p-4 body-font ${
        theme ? "bg-gray-900 text-white " : "bg-gray-500 text-white"
      }`}
    >
        <ScrollArea>
        <div
            className=" m-0 p-0 flex flex-nowrap items-center"
            // onWheel={() => handleScroll}
            >
            <FooterButton name="Print" iconurl={<PrintIcon />} onClick={() => onButtonClick(['Print option 1', 'Print option 2'])} />
            <FooterButton name="Variable" iconurl={<TitleIcon />} onClick={() => onButtonClick(['Variable option 1'])} />
            <FooterButton name="Classes" iconurl={<ClassIcon />} onClick={() => onButtonClick(['Classes option 1'])}/>
            <FooterButton name="User Input" iconurl={<ThreePIcon />} onClick={() => onButtonClick(['User Input option 1'])}/>
            <FooterButton name="Math" iconurl={<CalculateIcon />} onClick={() => onButtonClick(['Math option 1'])}/>
            <FooterButton name="Conditionals" iconurl={<AutoModeIcon />} onClick={() => onButtonClick(['Conditionals option 1'])}/>
            <FooterButton name="Generate" iconurl={<QueueIcon />} onClick={() => onButtonClick(['Generate option 1'])}/>
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    </footer>
  );
};

export default Footer;

const FooterButton = (props: any) => {
  return (
    <button onClick={props.onClick} className="w-full whitespace-nowrap text-white px-2 py-1 mx-2 mb-2 flex flex-nowrap flex-row items-center justify-center rounded-sm border-2 bg-white">
      <div className="text-[0.5rem] mr-2 text-black">{props.iconurl}</div>
      <small className="text-black flex flex-nowrap">{props.name}</small>
    </button>
  );
};
