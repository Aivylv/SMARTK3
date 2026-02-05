import React, { useState } from 'react';
import KartuKaca from '../../components/dashboard/KartuKaca';
import { 
  MagnifyingGlass, Funnel, ArrowClockwise, Fire, Eye, ShieldCheck, SignOut, Archive, List, Calendar, Wrench, Bell
} from '@phosphor-icons/react';

const HalamanInventory = ({ onNavigate, onLogout }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('Semua Status');
  const [filterType, setFilterType] = useState('Semua Tipe');

  const filteredData = inventoryData.filter((item) => {
    const matchSearch = 
        item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ruang.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.merek.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = filterStatus === 'Semua Status' || item.status === filterStatus;
    const matchType = filterType === 'Semua Tipe' || item.tipe.includes(filterType);
    return matchSearch && matchStatus && matchType;
  });

  const handleReset = () => {
    setSearchTerm('');
    setFilterStatus('Semua Status');
    setFilterType('Semua Tipe');
  };

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
            <NavItem onClick={() => onNavigate('dashboard')} icon={<Archive size={20} />} label="Dashboard" />
            <NavItem onClick={() => onNavigate('inventory')} icon={<List size={20} />} label="Inventory" active />
            <NavItem icon={<Calendar size={20} />} label="Jadwal" />
            <NavItem icon={<Wrench size={20} />} label="Maintenance" />
        </nav>
        <button onClick={onLogout} className="mt-auto flex items-center gap-2 text-gray-400 hover:text-[#EC008C] transition text-sm pt-6 border-t border-white/10">
            <SignOut size={18} /> Keluar
        </button>
      </aside>

      <main className="flex-1 flex flex-col relative z-10 overflow-hidden">
        <header className="flex justify-between items-center p-6 pb-2">
            <h1 className="text-2xl font-bold drop-shadow-sm">Inventory APAR</h1>
            <div className="ml-auto kaca-card rounded-full px-4 py-2 flex items-center gap-4 border border-white/10 shadow-md">
                <div className="relative"><Bell size={20} /><span className="absolute -top-1 -right-1 w-2 h-2 bg-[#EC008C] rounded-full"></span></div>
                <div className="text-right hidden sm:block"><p className="text-sm font-semibold">Ahmad Fauzi</p><p className="text-[10px] text-[#00A651]">Teknisi APAR</p></div>
                <div className="w-9 h-9 bg-[#00A651] rounded-full flex items-center justify-center text-sm font-bold">AF</div>
            </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 pt-2 space-y-6 pb-20 custom-scrollbar">
            <p className="text-gray-300 text-sm mb-4 drop-shadow-sm">Kelola dan pantau seluruh data APAR di rumah sakit</p>

            <KartuKaca className="p-5 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-4 items-end">
                    <div className="flex-1 w-full space-y-1">
                        <label className="text-xs text-gray-400 ml-1">Pencarian</label>
                        <div className="relative">
                            <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input 
                                type="text" 
                                placeholder="Cari ID APAR, lokasi, atau merek..." 
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-[#00A651] transition text-white placeholder-gray-500"
                                value={searchTerm} 
                                onChange={(e) => setSearchTerm(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-48 space-y-1">
                        <label className="text-xs text-gray-400 ml-1">Status</label>
                        <div className="relative">
                            <select 
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm focus:outline-none appearance-none cursor-pointer text-white"
                                value={filterStatus} 
                                onChange={(e) => setFilterStatus(e.target.value)} 
                            >
                                <option className="bg-[#1a1a1a]" value="Semua Status">Semua Status</option>
                                <option className="bg-[#1a1a1a]" value="Aman">Aman</option>
                                <option className="bg-[#1a1a1a]" value="Perlu Inspeksi">Perlu Inspeksi</option>
                                <option className="bg-[#1a1a1a]" value="Tidak Expired">Tidak Expired</option>
                            </select>
                            <Funnel className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>

                    <div className="w-full lg:w-48 space-y-1">
                        <label className="text-xs text-gray-400 ml-1">Tipe APAR</label>
                        <div className="relative">
                            <select 
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm focus:outline-none appearance-none cursor-pointer text-white"
                                value={filterType} 
                                onChange={(e) => setFilterType(e.target.value)} 
                            >
                                <option className="bg-[#1a1a1a]" value="Semua Tipe">Semua Tipe</option>
                                <option className="bg-[#1a1a1a]" value="Dry Chemical">Powder (Dry Chemical)</option>
                                <option className="bg-[#1a1a1a]" value="CO2">CO2</option>
                                <option className="bg-[#1a1a1a]" value="Foam">Foam</option>
                            </select>
                            <Funnel className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>

                    <button onClick={handleReset} className="px-4 py-2.5 text-gray-400 hover:text-white text-sm flex items-center gap-2 transition hover:bg-white/5 rounded-xl border border-transparent hover:border-white/10">
                        <ArrowClockwise /> Reset
                    </button>
                </div>
            </KartuKaca>

            <KartuKaca className="p-0 overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-300">
                        <thead className="bg-black/20 text-xs uppercase text-gray-400 font-semibold tracking-wider backdrop-blur-md">
                            <tr>
                                <th className="px-6 py-4">ID APAR</th>
                                <th className="px-6 py-4">Merek</th>
                                <th className="px-6 py-4">Tipe</th>
                                <th className="px-6 py-4">Kapasitas</th>
                                <th className="px-6 py-4">Lokasi</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Expired</th>
                                <th className="px-6 py-4 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 bg-white/5">
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <tr key={index} className="hover:bg-white/10 transition duration-150 group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-[#00A651]/20 text-[#00A651] rounded-lg">
                                                    <Fire weight="fill" />
                                                </div>
                                                <span className="font-medium text-white">{item.id}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">{item.merek}</td>
                                        <td className="px-6 py-4">{item.tipe}</td>
                                        <td className="px-6 py-4">{item.kapasitas}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="text-white font-medium">{item.ruang}</span>
                                                <span className="text-xs text-gray-500">{item.gedung}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4"><StatusBadge status={item.status} /></td>
                                        <td className="px-6 py-4 tabular-nums">{item.expired}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button onClick={() => onNavigate('detail')} className="px-3 py-1.5 rounded-lg bg-[#00A651] hover:bg-[#008c44] text-white text-xs font-semibold shadow-lg shadow-[#00A651]/20 transition flex items-center gap-1 ml-auto">
                                                <Eye weight="bold" /> Detail
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr><td colSpan="8" className="text-center py-8 text-gray-500">Data tidak ditemukan sesuai filter.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 border-t border-white/10 text-xs text-gray-500 text-center">Menampilkan {filteredData.length} dari {inventoryData.length} APAR</div>
            </KartuKaca>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active, onClick }) => (
    <div onClick={onClick} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium cursor-pointer transition ${active ? 'bg-[#00A651]/30 border border-[#00A651]/50 text-white shadow-md' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`}>
        {icon} <span>{label}</span>
    </div>
);

const StatusBadge = ({ status }) => {
    let styles = "bg-gray-500/20 text-gray-400";
    if (status === "Aman") styles = "bg-[#00A651]/20 text-[#00A651] border border-[#00A651]/20";
    if (status === "Perlu Inspeksi") styles = "bg-[#F7931D]/20 text-[#F7931D] border border-[#F7931D]/20";
    if (status === "Tidak Expired") styles = "bg-[#EC008C]/20 text-[#EC008C] border border-[#EC008C]/20";
    return <span className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-wide ${styles}`}>{status}</span>;
};

const inventoryData = [
    { id: "APAR-001", merek: "Yamato", tipe: "ABC Dry Chemical", kapasitas: "6 kg", ruang: "Ruang IGD", gedung: "Gedung A - Lantai 1", status: "Aman", expired: "2026-01-15" },
    { id: "APAR-002", merek: "Servvo", tipe: "CO2", kapasitas: "9 kg", ruang: "Ruang Server", gedung: "Gedung B - Lantai 3", status: "Perlu Inspeksi", expired: "2027-06-20" },
    { id: "APAR-003", merek: "Protect", tipe: "Foam", kapasitas: "9 kg", ruang: "Ruang Operasi", gedung: "Gedung A - Lantai 2", status: "Tidak Expired", expired: "2024-03-10" },
    { id: "APAR-004", merek: "Yamato", tipe: "ABC Dry Chemical", kapasitas: "3 kg", ruang: "Koridor Utama", gedung: "Gedung C - Lantai 1", status: "Aman", expired: "2026-08-05" },
    { id: "APAR-005", merek: "Servvo", tipe: "ABC Dry Chemical", kapasitas: "12 kg", ruang: "Parkir Basement", gedung: "Gedung A - Basement", status: "Aman", expired: "2025-11-15" },
    { id: "APAR-006", merek: "Protect", tipe: "CO2", kapasitas: "6 kg", ruang: "Laboratorium", gedung: "Gedung B - Lantai 2", status: "Perlu Inspeksi", expired: "2028-04-22" },
    { id: "APAR-007", merek: "Yamato", tipe: "Foam", kapasitas: "6 kg", ruang: "Dapur Rumah Sakit", gedung: "Gedung C - Lantai 1", status: "Aman", expired: "2025-09-18" },
    { id: "APAR-008", merek: "Servvo", tipe: "ABC Dry Chemical", kapasitas: "9 kg", ruang: "Ruang Rawat Inap", gedung: "Gedung A - Lantai 3", status: "Aman", expired: "2026-10-12" },
];

export default HalamanInventory;