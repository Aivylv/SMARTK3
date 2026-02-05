import React from 'react';
import KartuKaca from '../components/KartuKaca';
import { 
  Archive, CheckCircle, WarningOctagon, Clock, ShieldCheck, 
  Calendar, Wrench, Bell, List, SignOut, Fire, Warning, CaretRight, ArrowSquareOut
} from '@phosphor-icons/react';

const HalamanDashboard = ({ onNavigate, onLogout }) => {
  return (
    <div className="flex h-full bg-transparent text-white overflow-hidden relative font-sans">
      
      <aside className="hidden md:flex flex-col w-64 m-4 p-6 kaca-panel rounded-3xl z-10 flex-shrink-0 shadow-xl">
        <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00A651] to-[#662D91] rounded-lg flex items-center justify-center shadow-lg">
                <ShieldCheck weight="fill" size={20} />
            </div>
            <div>
                <h2 className="font-bold text-lg leading-none">SMART K3</h2>
                <p className="text-[10px] text-gray-300 mt-1">Sistem Manajemen APAR</p>
            </div>
        </div>
        
        <nav className="space-y-2 flex-1">
            <NavItem onClick={() => onNavigate('dashboard')} icon={<Archive size={20} />} label="Dashboard" active />
            <NavItem onClick={() => onNavigate('inventory')} icon={<List size={20} />} label="Inventory" />
            <NavItem onClick={() => onNavigate('jadwal')} icon={<Calendar size={20} />} label="Jadwal" />
            <NavItem onClick={() => onNavigate('maintenance')} icon={<Wrench size={20} />} label="Maintenance" />
            <NavItem onClick={() => onNavigate('laporan')} icon={<ArrowSquareOut size={20} />} label="Laporan" />
        </nav>

        <button onClick={onLogout} className="mt-auto flex items-center gap-2 text-gray-400 hover:text-[#EC008C] transition text-sm pt-6 border-t border-white/10">
            <SignOut size={18} /> Keluar
        </button>
      </aside>

      <main className="flex-1 flex flex-col relative z-10 overflow-hidden">
        
        <header className="flex justify-between items-center p-6 pb-2">
            <button className="md:hidden text-2xl"><List /></button>
            <div className="ml-auto kaca-card rounded-full px-4 py-2 flex items-center gap-4 border border-white/10 shadow-md">
                <div onClick={() => onNavigate('notifikasi')} className="relative cursor-pointer hover:text-[#EC008C] transition">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#EC008C] rounded-full animate-pulse"></span>
                </div>
                <div className="h-6 w-px bg-white/20"></div>
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-semibold">Ahmad Fauzi</p>
                    <p className="text-[10px] text-[#00A651]">Teknisi APAR</p>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-[#00A651] to-[#008c44] rounded-full flex items-center justify-center text-sm font-bold shadow-inner">AF</div>
            </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 pt-2 space-y-6 pb-20 custom-scrollbar">
            
            <div>
                <h1 className="text-2xl font-bold mb-1 drop-shadow-sm">Dashboard SMART K3</h1>
                <p className="text-gray-300 text-sm drop-shadow-sm">Sistem Manajemen Inventori, Inspeksi, dan Pemeliharaan APAR</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatItem onClick={() => onNavigate('inventory')} icon={<Archive size={24}/>} angka="8" label="Total APAR" desc="Seluruh unit terdaftar" warna="bg-[#00A651]" />
                <StatItem onClick={() => onNavigate('inventory')} icon={<CheckCircle size={24}/>} angka="6" label="APAR Baik" desc="Kondisi optimal" warna="bg-blue-500" />
                <StatItem onClick={() => onNavigate('maintenance')} icon={<WarningOctagon size={24}/>} angka="1" label="APAR Rusak" desc="Perlu perbaikan" warna="bg-[#EC008C]" />
                <StatItem onClick={() => onNavigate('jadwal')} icon={<Clock size={24}/>} angka="1" label="APAR Expired" desc="Melewati masa berlaku" warna="bg-[#F7931D]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#00A651] to-emerald-900 border border-white/20 relative overflow-hidden shadow-xl group hover:scale-[1.01] transition duration-300">
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <h3 className="font-medium">Tingkat Kepatuhan</h3>
                        <ShieldCheck size={32} className="opacity-80" />
                    </div>
                    <div className="text-5xl font-bold mb-2 relative z-10">87.5%</div>
                    <p className="text-xs opacity-70 mb-4 relative z-10">Compliance Rate</p>
                    <div className="w-full bg-black/20 rounded-full h-2 relative z-10">
                        <div className="bg-white h-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ width: '87.5%' }}></div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition duration-500"></div>
                </div>

                <KartuKaca adaHover className="p-6 flex flex-col justify-between shadow-lg">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm font-medium text-gray-200">Inspeksi Mendatang</h3>
                        <div className="p-2 bg-[#F7931D]/20 text-[#F7931D] rounded-lg"><Calendar weight="fill" size={20} /></div>
                    </div>
                    <div>
                        <span className="text-4xl font-bold">3</span>
                        <span className="text-xs text-gray-400 block mt-1">Unit perlu inspeksi</span>
                    </div>
                    <div onClick={() => onNavigate('jadwal')} className="text-xs mt-4 text-[#F7931D] flex items-center gap-1 hover:underline cursor-pointer">
                        Lihat Jadwal <CaretRight weight="bold" />
                    </div>
                </KartuKaca>

                <KartuKaca adaHover className="p-6 flex flex-col justify-between bg-[#EC008C]/5 border-[#EC008C]/30 shadow-lg">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm font-medium text-gray-200">Maintenance Pending</h3>
                        <div className="p-2 bg-[#EC008C]/20 text-[#EC008C] rounded-lg"><Wrench weight="fill" size={20} /></div>
                    </div>
                    <div>
                        <span className="text-4xl font-bold">2</span>
                        <span className="text-xs text-gray-400 block mt-1">Work order aktif</span>
                    </div>
                    <div onClick={() => onNavigate('maintenance')} className="text-xs mt-4 text-[#EC008C] flex items-center gap-1 hover:underline cursor-pointer">
                        Kelola Maintenance <CaretRight weight="bold" />
                    </div>
                </KartuKaca>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <KartuKaca className="p-6 flex flex-col shadow-lg">
                    <SectionHeader title="Notifikasi Prioritas Tinggi" onNavigate={() => onNavigate('notifikasi')} />
                    <div className="flex-1 bg-[#EC008C]/10 border border-[#EC008C]/40 rounded-2xl p-5 flex gap-4 items-start relative overflow-hidden group hover:bg-[#EC008C]/15 transition">
                        <div className="p-3 bg-[#EC008C] rounded-xl text-white shadow-lg shadow-[#EC008C]/30 shrink-0">
                            <Warning weight="fill" size={24} />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-[#EC008C] mb-1">APAR Kedaluwarsa</h4>
                            <p className="text-sm text-gray-300 mb-3">APAR-003 telah melewati tanggal kedaluwarsa (10 Mar 2024)</p>
                            <div className="flex items-center gap-3 text-xs text-gray-400">
                                <span>2024-12-10 08:00:00</span>
                                <span className="bg-[#EC008C] text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-wider">HIGH</span>
                            </div>
                        </div>
                    </div>
                </KartuKaca>

                <KartuKaca className="p-6 shadow-lg">
                    <SectionHeader title="Jadwal Inspeksi Terdekat" onNavigate={() => onNavigate('jadwal')} />
                    <div className="space-y-3">
                        <JadwalItem id="APAR-002" lokasi="Ruang Server - Gedung B" tipe="CO2" />
                        <JadwalItem id="APAR-006" lokasi="Laboratorium - Gedung B" tipe="Powder" />
                    </div>
                </KartuKaca>
            </div>

            <KartuKaca className="p-6 shadow-lg">
                <SectionHeader title="Work Order Terbaru" onNavigate={() => onNavigate('maintenance')} />
                <div className="-mx-6 -mb-6 mt-4 overflow-x-auto rounded-b-2xl">
                    <table className="w-full text-left text-sm text-gray-300">
                        <thead className="bg-black/20 text-xs uppercase text-gray-400 font-semibold tracking-wider backdrop-blur-md">
                            <tr>
                                <th className="px-6 py-4 first:pl-8">Work Order</th>
                                <th className="px-6 py-4">APAR ID</th>
                                <th className="px-6 py-4">Jenis</th>
                                <th className="px-6 py-4">Jadwal</th>
                                <th className="px-6 py-4">Teknisi</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right last:pr-8">Prioritas</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 bg-white/5">
                            <TableRow wo="WO-2024-001" apar="APAR-003" jenis="Penggantian Tabung" jadwal="2024-12-20" teknisi="Dewi Lestari" status="Open" statusColor="text-gray-400 bg-gray-500/10 border-gray-500/20" prio="High" prioColor="text-[#EC008C] bg-[#EC008C]/10"/>
                            <TableRow wo="WO-2024-002" apar="APAR-001" jenis="Penggantian Selang" jadwal="2024-12-15" teknisi="Ahmad Fauzi" status="In Progress" statusColor="text-blue-400 bg-blue-500/10 border-blue-500/20" prio="Medium" prioColor="text-[#F7931D] bg-[#F7931D]/10"/>
                            <TableRow wo="WO-2024-003" apar="APAR-005" jenis="Isi Ulang" jadwal="2025-01-10" teknisi="Budi Santoso" status="Done" statusColor="text-[#00A651] bg-[#00A651]/10 border-[#00A651]/20" prio="Low" prioColor="text-gray-400 bg-gray-500/10"/>
                        </tbody>
                    </table>
                </div>
            </KartuKaca>

        </div>
      </main>
    </div>
  );
};

const SectionHeader = ({ title, onNavigate }) => (
    <div className="flex justify-between items-center mb-6 px-1">
        <h3 className="font-bold text-lg tracking-tight drop-shadow-sm">{title}</h3>
        <div onClick={onNavigate} className="text-xs font-medium text-[#00A651] hover:text-[#00c460] transition flex items-center gap-1 group cursor-pointer">
            Lihat Semua <ArrowSquareOut weight="bold" className="group-hover:translate-x-0.5 transition-transform"/>
        </div>
    </div>
);

const NavItem = ({ icon, label, active, onClick }) => (
    <div onClick={onClick} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium cursor-pointer transition ${active ? 'bg-[#00A651]/30 border border-[#00A651]/50 text-white shadow-md' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`}>
        {icon} <span>{label}</span>
    </div>
);

const StatItem = ({ icon, angka, label, desc, warna, onClick }) => (
    <KartuKaca adaHover className="p-5 relative border-t-2 border-t-white/10 overflow-hidden cursor-pointer shadow-lg" onClick={onClick}>
        <div className={`absolute -right-6 -top-6 w-24 h-24 ${warna} opacity-15 rounded-full blur-2xl group-hover:opacity-25 transition`}></div>
        <div className="flex justify-between items-start mb-4 relative z-10">
            <div className={`p-2.5 rounded-xl text-white shadow-lg ${warna}`}>{icon}</div>
            <span className="text-3xl font-bold tracking-tight drop-shadow-sm">{angka}</span>
        </div>
        <div className="relative z-10">
            <h3 className="font-medium text-gray-100 drop-shadow-sm">{label}</h3>
            <p className="text-[11px] text-gray-400 mt-0.5">{desc}</p>
        </div>
    </KartuKaca>
);

const JadwalItem = ({ id, lokasi, tipe }) => (
    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-white/10 transition group relative overflow-hidden">
        <div className="absolute left-0 inset-y-0 w-1 bg-[#F7931D]"></div>
        <div className="p-3 bg-[#F7931D]/20 text-[#F7931D] rounded-xl shrink-0 shadow-sm">
            <Fire weight="fill" size={20} />
        </div>
        <div className="flex-1 min-w-0 ml-1">
            <div className="flex justify-between mb-1">
                <h4 className="font-bold truncate drop-shadow-sm">{id}</h4>
                <span className="text-[10px] bg-[#F7931D]/20 text-[#F7931D] px-2 py-0.5 rounded border border-[#F7931D]/30 font-medium">Perlu Inspeksi</span>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-400">
                <p className="truncate pr-2">{lokasi}</p>
                <span className="text-gray-500 font-medium bg-black/20 px-1.5 rounded">{tipe}</span>
            </div>
        </div>
        <CaretRight className="text-gray-500 group-hover:text-white transition" />
    </div>
);

const TableRow = ({ wo, apar, jenis, jadwal, teknisi, status, statusColor, prio, prioColor }) => (
    <tr className="hover:bg-white/10 transition duration-150 group">
        <td className="px-6 py-4 font-medium text-white first:pl-8">{wo}</td>
        <td className="px-6 py-4 text-gray-300 group-hover:text-white">{apar}</td>
        <td className="px-6 py-4">{jenis}</td>
        <td className="px-6 py-4 tabular-nums text-gray-400">{jadwal}</td>
        <td className="px-6 py-4">{teknisi}</td>
        <td className="px-6 py-4">
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold border tracking-wide ${statusColor}`}>{status}</span>
        </td>
        <td className="px-6 py-4 text-right last:pr-8">
            <span className={`px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide ${prioColor}`}>{prio}</span>
        </td>
    </tr>
);


export default HalamanDashboard;