'use client';
import React, {useState} from 'react';
import Footer from '@/app/create/Footer';
import Link from 'next/link';
import useThemeStore from '@/lib/store/themeStore';
import OptionsMenu from './OptionsMenu';
import UpwardMenu from './UpwardMenu';


const Workspace = () => {
    const { theme, changeTheme } = useThemeStore((state:any) => ({ theme: state.theme, changeTheme: state.changeTheme }));
    const [isUpMenuVisible, setIsUpMenuVisible] = useState(false);
    const [UpMenuContent, setUpMenuContent] = useState([]);

    const closeModal = () => {
        setIsUpMenuVisible(false);
    }

    const handleFooterButtonClick = (content: any) => {
      setUpMenuContent(content);
      setIsUpMenuVisible(true);
      if (isUpMenuVisible) {
        setIsUpMenuVisible(false);
      }
    };

  return (
    <div className={`flex flex-col items-center h-screen p-4 ${theme ? "bg-gray-600 text-white " : ""}`}>
      <header className="w-full flex justify-between items-center mb-4">
        <div className='flex gap-3 items-center'>
            <Link href="/" className={`text-xl ${theme?'':''} rounded-lg p-0.5`}>🏠</Link>
        </div>
        <div className="text-lg">New File.json</div>
        <div className='flex gap-3'>
          <div className={`${theme?'':'bg-gray-500'} rounded-md`}><OptionsMenu></OptionsMenu></div>
          <button onClick={()=>changeTheme(!theme)} className={`text-l ${theme?'bg-gray-700':'bg-gray-500'} rounded-lg p-0.5`}>
            {`${theme ? "🌞" : "🌚"}`}
          </button>
          <button className={`text-l ${theme?'bg-gray-700':'bg-gray-500'} rounded-lg p-1`}>▶️ Run</button>
          
        </div>
      </header>
      <div className="flex-1 w-full flex justify-between mb-4 lg:grid flex-col lg:grid-cols-3 lg:grid-rows-8 gap-2">
        <div className={`text-black flex-1 mx-1 border-2 ${theme ? "border-gray-900 bg-[#3b6c79]" : "border-black bg-green-100"} rounded-lg col-span-2 row-span-7  p-2`}>
            <p>Code Area</p>
        </div>
        <div className={`text-black flex-1 mx-1 border-2 ${theme ? "border-gray-900 bg-[#567d98]" : "border-black bg-[#aaaedc]"} rounded-lg col-start-3 row-span-7  p-2`}>
            <p>Terminal Area</p>
        </div>
      </div>
      <Footer onButtonClick={handleFooterButtonClick}/>
      <UpwardMenu isVisible={isUpMenuVisible} content={UpMenuContent} onClose={closeModal}/>
    </div>
  );
};

export default Workspace;
