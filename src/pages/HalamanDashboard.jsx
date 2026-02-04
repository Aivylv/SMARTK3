import React from 'react';
import KartuKaca from '../components/KartuKaca';
import { Archive, CheckCircle, WarningOctagon, Clock, ShieldCheck, Calendar, Wrench, Bell, List, SignOut } from '@phosphor-icons/react';

const HalamanDashboard = ({ onLogout }) => {
  return (
    <div className="flex h-screen bg-[#1a1a1a] text-white overflow-hidden relative font-sans">
      
      <div className="absolute inset-0 bg-mesh-gradient opacity-40 pointer-events-none"></div>
      
      <aside className="hidden md:flex flex-col w-64 m-4 p-6 kaca-panel rounded-3xl z-10">
        <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00A651] to-[#662D91] rounded-lg flex items-center justify-center">
                <ShieldCheck weight="fill" size={20} />
            </div>
            <div>
                <h2 className="font-bold text-lg">SMART K3</h2>
                <p className="text-[10px] text-gray-300">Sistem Manajemen APAR</p>
            </div>
        </div>
        <nav className="space-y-2">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#00A651]/30 border border-[#00A651]/50 text-white font-medium cursor-pointer">
                <Archive size={20} /> <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 cursor-pointer">
                <List size={20} /> <span>Inventory</span>
            </div>
        </nav>
        <button onClick={onLogout} className="mt-auto flex items-center gap-2 text-gray-400 hover:text-[#EC008C] transition text-sm pt-6 border-t border-white/10">
            <SignOut size={18} /> Keluar
        </button>
      </aside>

      <main className="flex-1 flex flex-col relative z-10 overflow-hidden">
        
        <header className="flex justify-between items-center p-6 pb-2">
            <button className="md:hidden text-2xl"><List /></button>
            <div className="ml-auto kaca-card rounded-full px-4 py-2 flex items-center gap-4">
                <div className="relative">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#EC008C] rounded-full"></span>
                </div>
                <div className="h-6 w-px bg-white/20"></div>
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-semibold">Ahmad Fauzi</p>
                    <p className="text-[10px] text-[#00A651]">Teknisi APAR</p>
                </div>
                <div className="w-9 h-9 bg-[#00A651] rounded-full flex items-center justify-center text-sm font-bold">AF</div>
            </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 pt-2">
            <h1 className="text-2xl font-bold mb-1">Dashboard SMART K3</h1>
            <p className="text-gray-300 text-sm mb-6">Sistem Manajemen Inventori, Inspeksi, dan Pemeliharaan APAR</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatItem icon={<Archive size={24}/>} angka="8" label="Total APAR" desc="Seluruh unit" warna="bg-[#00A651]" />
                <StatItem icon={<CheckCircle size={24}/>} angka="6" label="APAR Baik" desc="Kondisi optimal" warna="bg-blue-500" />
                <StatItem icon={<WarningOctagon size={24}/>} angka="1" label="APAR Rusak" desc="Perlu perbaikan" warna="bg-[#EC008C]" />
                <StatItem icon={<Clock size={24}/>} angka="1" label="APAR Expired" desc="Lewat masa berlaku" warna="bg-[#F7931D]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#00A651] to-emerald-900 border border-white/20 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <h3 className="font-medium">Tingkat Kepatuhan</h3>
                        <ShieldCheck size={32} className="opacity-80" />
                    </div>
                    <div className="text-5xl font-bold mb-2 relative z-10">87.5%</div>
                    <div className="w-full bg-black/20 rounded-full h-2 relative z-10 mt-4">
                        <div className="bg-white h-2 rounded-full" style={{ width: '87.5%' }}></div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                </div>

                <KartuKaca className="p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium text-gray-200">Inspeksi Mendatang</h3>
                        <div className="p-1.5 bg-[#F7931D]/20 text-[#F7931D] rounded-lg"><Calendar weight="fill" /></div>
                    </div>
                    <div>
                        <span className="text-4xl font-bold">3</span>
                        <span className="text-xs text-gray-400 block">Unit perlu inspeksi</span>
                    </div>
                </KartuKaca>

                <KartuKaca className="p-6 flex flex-col justify-between bg-[#662D91]/10 border-[#662D91]/30">
                    <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium text-gray-200">Maintenance Pending</h3>
                        <div className="p-1.5 bg-[#EC008C]/20 text-[#EC008C] rounded-lg"><Wrench weight="fill" /></div>
                    </div>
                    <div>
                        <span className="text-4xl font-bold">2</span>
                        <span className="text-xs text-gray-400 block">Work order aktif</span>
                    </div>
                </KartuKaca>
            </div>
        </div>
      </main>
    </div>
  );
};

const StatItem = ({ icon, angka, label, desc, warna }) => (
    <KartuKaca adaHover className="p-5 relative">
        <div className={`absolute -right-4 -top-4 w-20 h-20 ${warna} opacity-20 rounded-full blur-xl`}></div>
        <div className="flex justify-between items-start mb-4">
            <div className={`p-2 rounded-lg text-white ${warna}`}>{icon}</div>
            <span className="text-2xl font-bold">{angka}</span>
        </div>
        <h3 className="font-medium text-gray-200">{label}</h3>
        <p className="text-xs text-gray-400">{desc}</p>
    </KartuKaca>
);

export default HalamanDashboard;