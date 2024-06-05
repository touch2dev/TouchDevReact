'use client';
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import Terminal from "@/components/Terminal";
import Image from "next/image";
import { useState } from "react";
import Window from "@/components/Window";


export default function Home() {
  const [isSettingsWindowOpen, setIsSettingsWindowOpen] = useState(false);
  const [isProfileWindowOpen, setIsProfileWindowOpen] = useState(false);
  return (
    <>
      <div className="home-screen">
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
        <div className="title rounded-lg bg-gray-500 px-5 mt-10">
          <h1>TouchDev</h1>
        </div>
        <div className="get-started">
          <h2>Get Started</h2>
          <div className="flex justify-between gap-4">
            <button className="btn">
              <div className="icon">➕</div>
              <div>New File</div>
            </button>
            <button className="btn">
              <div className="icon">📂</div>
              <div>Open File</div>
            </button>
            <button className="btn" onClick={() => {window.location.href = 'https://docs.touchdev.app'}}>
              <div className="icon">❓</div>
              <div>Help / Info</div>
            </button>
          </div>
        </div>
        <div className="recent-files">
          <h2>Recent Files...</h2>
            <p className="text-gray-600">functionality coming soon...</p>
            <br />
          <div className="file-icons">
            {/* <div className="file-icon">📄</div>
            <div className="file-icon">📄</div>
            <div className="file-icon">📄</div> */}
          </div>
        </div>
      </div>
    </>
  );
}
