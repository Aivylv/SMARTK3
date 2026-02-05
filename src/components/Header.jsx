import React from 'react';
import { Bell } from '@phosphor-icons/react';

const Header = ({ children, onNavigate }) => {
  return (
    <header className="flex justify-between items-center p-6 pb-2 w-full relative z-20 flex-shrink-0">
      <div className="flex items-center gap-4 flex-1">
        {children}
      </div>

      <div className="ml-auto pl-4">
        <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 shadow-lg hover:bg-black/60 transition duration-300">
            <div 
                onClick={() => onNavigate('notifikasi')}
                className="relative cursor-pointer hover:text-[#EC008C] transition group"
            >
                <Bell size={22} className="text-gray-200 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-brand-gradient rounded-full border-2 border-[#1a1a1a] animate-pulse"></span>
            </div>

            <div className="h-6 w-px bg-white/20"></div>

            <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-white leading-none mb-1">Ahmad Fauzi</p>
                    <p className="text-[10px] font-bold text-transparent bg-clip-text bg-brand-gradient tracking-wide">Teknisi APAR</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-brand-gradient flex items-center justify-center text-xs font-bold text-white shadow-md border border-white/20">
                    AF
                </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;