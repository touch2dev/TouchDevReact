'use client';
import React, {useState} from 'react';
import Window from '@/components/Window';
import Footer from '@/app/create/Footer';
import Link from 'next/link';

const Workspace = () => {
    const [isOptionsWindowOpen, setIsOptionsWindowOpen] = useState(false);

  return (
    <div className="flex flex-col items-center h-screen p-4">
      <header className="w-full flex justify-between items-center mb-4">
        <div className='flex gap-3 items-center'>
            <Link href="/" className='text-xl'>🏠</Link>
            <button className="text-2xl" onClick={()=>setIsOptionsWindowOpen(true)}>•••</button>
        </div>
        {isOptionsWindowOpen && (
            <Window
                show={isOptionsWindowOpen}
                onClose={setIsOptionsWindowOpen}
                title={"Options"}>
                <p>Options coming soon</p>
                </Window>)
            }
        <div className="text-lg">New File.json</div>
        <button className="text-l">▶️ Run</button>
      </header>
      <div className="flex-1 w-full flex justify-between mb-4 grid grid-cols-3 grid-rows-8 gap-0">
        <div className="flex-1 mx-2 border-2 border-black rounded-lg col-span-2 row-span-7 bg-yellow-100 p-2">
            <p>Code Area</p>
        </div>
        <div className="flex-1 mx-2 border-2 border-black rounded-lg col-start-3 row-span-7 bg-yellow-300 p-2">
            <p>Terminal Area</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Workspace;
