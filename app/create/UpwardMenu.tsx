import React from 'react';
import useThemeStore from '@/lib/store/themeStore';

type UpwardMenuProps = {
    isVisible: boolean;
    content: Array<any>;
    onClose: () => void;
  };

const UpwardMenu = ({isVisible, content, onClose}:UpwardMenuProps) => {
    if (!isVisible) return null;
    const { theme } = useThemeStore((state:any) => ({ theme: state.theme }));
    
  return (
    <div className={`w-full fixed bottom-16 left-1/2 transform -translate-x-1/2 ${theme ? 'bg-[#494949]':'bg-[#A3A3A3]'} shadow-lg p-4 rounded-lg z-50`}>
      <div className="flex justify-end">
        <button onClick={onClose} className="text-gray-600 bg-white rounded-xl p-[0.5] px-1">✖</button>
      </div>
      <div>
        {content.map((item:any, index:any) => (
            <div key={index} className="flex justify-between items-center p-2 border-b border-gray-400">
                <div>{item}</div>
                <button className="bg-[#3b6c79] text-white rounded-lg p-1">Select</button>
            </div>
            ))
        }
      
      </div>
    </div>
  );
}

  export default UpwardMenu;

    //   <Menu as="div" className="relative inline-block text-left">
    //       <div>
    //         <MenuButton className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
    //           Options
    //           <ChevronDownIcon
    //             className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
    //             aria-hidden="true"
    //           />
    //         </MenuButton>
    //       </div>
    //       <Transition
    //         as={Fragment}
    //         enter="transition ease-out duration-100"
    //         enterFrom="transform opacity-0 scale-95"
    //         enterTo="transform opacity-100 scale-100"
    //         leave="transition ease-in duration-75"
    //         leaveFrom="transform opacity-100 scale-100"
    //         leaveTo="transform opacity-0 scale-95"
    //       >
    //         <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
    //           <div className="px-1 py-1 ">
    //             <MenuItem>
    //                 <button className={`${'bg-violet-500 text-white'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
    //                   Button 1
    //                 </button>
    //             </MenuItem>
    //             <MenuItem>
    //                 <button className={`${'bg-violet-500 text-white'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
    //                   Button 2
    //                 </button>
    //             </MenuItem>
    //             <MenuItem>
    //                 <button className={`${'bg-violet-500 text-white'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
    //                   Button 3
    //                 </button>
    //             </MenuItem>
    //           </div>
    //         </MenuItems>
    //       </Transition>
    //     </Menu>
