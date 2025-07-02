import React from 'react';
import { ChevronRight, MoreHorizontal, Search } from 'lucide-react';

import Sidebar from '../assets/sidebar.svg';
import Notification from '../assets/notification.svg';

const Header = () => {
  const name = 'John Doe';
  const email = 'john.doe';

  const truncateEmail = (email) => {
    return email.length > 7 ? email.slice(0, 8) + '...' : email;
  };

  return (
    <header className="flex items-center justify-between px-4 bg-white border-b border-gray-200 h-[56px]">
      <div className="flex items-center space-x-3">
        <button onClick={() => console.log('Menu clicked')} className="p-1 rounded">
          <img src={Sidebar} alt="Sidebar" className="w-[16px] h-[16px]" />
        </button>

        <div className="flex items-center text-[14px] text-[#AFAFAF]">
          <span className="cursor-pointer">Workspace</span>
          <ChevronRight size={16} className="mx-1 text-[#AFAFAF]" />
          <span className="cursor-pointer">Folder 2</span>
          <ChevronRight size={16} className="mx-1 text-[#AFAFAF]" />
          <span className="text-[#121212] font-medium">Spreadsheet 3</span>
          <MoreHorizontal size={16} className="ml-2 text-[#AFAFAF]" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search within sheet"
            className="h-[40px] w-[165px] text-sm pl-7 pr-2 bg-[#F6F6F6] rounded-md outline-none placeholder:text-center placeholder:text-[#757575]"
            style={{ border: 'none' }}
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        <div className="relative w-6 h-6">
          <img src={Notification} alt="Notification" className="w-[17.96px] h-[19.51px]" />
          <span className="absolute -top-1.5 -right-1.5 bg-green-700 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-semibold leading-none">
            2
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <img
            src="https://avatars.githubusercontent.com/u/175672643?v=4"
            alt="Profile"
            className="w-[28px] h-[28px] rounded-full object-cover"
          />
          <div className="leading-tight hidden sm:block">
            <div className="text-[12px] font-medium text-gray-900">{name}</div>
            <div className="text-[10px] text-gray-500 truncate w-32">{truncateEmail(email)}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
