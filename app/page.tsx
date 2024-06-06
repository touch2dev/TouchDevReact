'use client';
import { useState } from "react";
import Window from "@/components/Window";
import MainFooter from "@/components/MainFooter";
import useThemeStore from "@/lib/store/ThemeStore";
import Link from "next/link";

// Homepage
export default function Home() {
  const [theme] = useThemeStore((state:any) => [state.theme, state.changeTheme]);
  const [isSettingsWindowOpen, setIsSettingsWindowOpen] = useState(false);
  const [isProfileWindowOpen, setIsProfileWindowOpen] = useState(false);
  const [openFileWindow, setIsOpenFileWindow] = useState(false);

  return (
    <>
      <div className={`home-screen h-screen w-screen ${theme ? "bg-gray-800 text-white " : ""}`}>
        <header className="header">
          <button className="settings-icon" onClick={() => setIsSettingsWindowOpen(true)}>⚙️</button>
          {isSettingsWindowOpen && (<Window show={isSettingsWindowOpen} onClose={setIsSettingsWindowOpen} title={"Settings"}>
                <p>Settings coming soon</p>
              </Window>)}
          <button className="profile-icon" onClick={() => setIsProfileWindowOpen(true)}>👤</button>
          {isProfileWindowOpen && (<Window show={isProfileWindowOpen} onClose={setIsProfileWindowOpen} title={"Profile"}>
                <p>Profile info coming soon</p>
              </Window>)}
        </header>
        <div className="flex title rounded-lg bg-gray-500 px-5 mt-10 text-white justify-center align-middle items-center gap-2">
          <img src="https://lh3.googleusercontent.com/a/ACg8ocJ7AOyVZY17XDTdIS2R1ulbvtFn-rFHmTxEGE49oqc-WtTi1do=s720-c-no" alt="TouchDev" className="w-16 h-16 rounded-md" />
          <h1>TouchDev</h1>
         </div>
        <div className="get-started">
          <h2>Get Started</h2>
          <div className={`flex justify-between gap-4 icon text-white`}>
            <button className="btn">
              <div className="icon">➕</div>
              <Link href="/create">New File</Link>
            </button>
            <button className="btn" onClick={()=>setIsOpenFileWindow(true)}>
              <div className="icon">📂</div>
              <div>Open File</div>
            </button>
              {openFileWindow && (<Window show={openFileWindow} onClose={setIsOpenFileWindow} title={"Open File"}>
                <p>Open file functionality coming soon</p>
              </Window>)}
            <button className="btn" onClick={() => {window.location.href = 'https://docs.touchdev.app'}}>
              <div className="icon">❓</div>
              <div>Help / Info</div>
            </button>
          </div>
        </div>
        <div className="recent-files">
          <h2>Recent Files...</h2>
            <p className="text-gray-600">functionality coming 🔜</p>
            <br />
          <div className="file-icons">
            {/* <div className="file-icon">📄</div>
            <div className="file-icon">📄</div>
            <div className="file-icon">📄</div> */}
          </div>
          <MainFooter />
        </div>
      </div>
    </>
  );
}
