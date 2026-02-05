import React, { useState } from 'react';
import KartuKaca from '../../components/dashboard/KartuKaca';
import Header from '../components/Header';
import { 
  Bell, CheckCircle, Warning, Info, WarningCircle, Check, ArrowLeft 
} from '@phosphor-icons/react';

const HalamanNotifikasi = ({ onBack, onNavigate }) => {
  const [filter, setFilter] = useState('Semua');

  const notifications = [
    { id: 1, type: 'danger', icon: <Warning weight="fill" size={24} />, title: 'APAR Kedaluwarsa', desc: 'APAR-003 telah melewati tanggal kedaluwarsa (10 Mar 2024)', date: '2024-12-10 08:00:00', priority: 'High', aparId: 'APAR-003', read: false },
    { id: 2, type: 'warning', icon: <WarningCircle weight="fill" size={24} />, title: 'Inspeksi Terlambat', desc: 'APAR-002 belum diinspeksi selama 2 bulan', date: '2024-12-10 08:00:00', priority: 'Medium', aparId: 'APAR-002', read: false },
    { id: 3, type: 'info', icon: <Info weight="fill" size={24} />, title: 'Maintenance Terjadwal', desc: 'WO-2024-001 dijadwalkan untuk 20 Des 2024', date: '2024-12-09 15:30:00', priority: 'Medium', aparId: 'APAR-003', read: false },
    { id: 4, type: 'warning', icon: <WarningCircle weight="fill" size={24} />, title: 'APAR Mendekati Kedaluwarsa', desc: 'APAR-007 akan kedaluwarsa dalam 9 bulan (18 Sep 2025)', date: '2024-12-09 08:00:00', priority: 'Low', aparId: 'APAR-007', read: true },
    { id: 5, type: 'success', icon: <CheckCircle weight="fill" size={24} />, title: 'Maintenance Selesai', desc: 'WO-2024-003 telah diselesaikan untuk APAR-005', date: '2024-12-08 16:45:00', priority: 'Low', aparId: 'APAR-005', read: true },
    { id: 6, type: 'warning', icon: <WarningCircle weight="fill" size={24} />, title: 'Perlu Verifikasi Supervisor', desc: 'WO-2024-002 menunggu persetujuan supervisor', date: '2024-12-08 14:20:00', priority: 'Medium', aparId: 'APAR-001', read: true }
  ];

  const filteredList = notifications.filter(item => {
    if (filter === 'Semua') return true;
    if (filter === 'Belum Dibaca') return !item.read;
    if (filter === 'Prioritas Tinggi') return item.priority === 'High';
    return true;
  });

  return (
    <div className="flex flex-col h-full bg-transparent text-white overflow-hidden relative font-sans">
        
        <Header onNavigate={onNavigate || (() => {})}>
            <button onClick={onBack} className="flex items-center gap-2 text-gray-300 hover:text-white transition text-sm font-bold">
                <ArrowLeft weight="bold" /> Kembali ke Dashboard
            </button>
        </Header>

        <div className="relative z-10 px-6 pb-2 flex-shrink-0">
            <div className="flex justify-between items-end">
                <div><h1 className="text-2xl font-bold mb-1 drop-shadow-md text-white">Notifikasi & Alert</h1><p className="text-gray-200 text-sm font-medium drop-shadow-sm">Pemberitahuan penting terkait kondisi APAR</p></div>
                <button className="text-xs font-bold text-[#00A651] hover:text-[#00c460] flex items-center gap-1 transition"><Check size={16} /> Tandai Semua Dibaca</button>
            </div>
        </div>

        <div className="relative z-10 px-6 pt-4 pb-2">
            <div className="flex gap-2">
                <FilterButton label="Semua" count={6} active={filter === 'Semua'} onClick={() => setFilter('Semua')} />
                <FilterButton label="Belum Dibaca" count={3} active={filter === 'Belum Dibaca'} onClick={() => setFilter('Belum Dibaca')} />
                <FilterButton label="Prioritas Tinggi" count={1} active={filter === 'Prioritas Tinggi'} onClick={() => setFilter('Prioritas Tinggi')} />
            </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 pt-2 relative z-10 custom-scrollbar pb-20">
            <div className="space-y-4">
                {filteredList.map((item) => (
                    <NotificationCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    </div>
  );
};

const FilterButton = ({ label, count, active, onClick }) => (
    <button onClick={onClick} className={`px-4 py-2 rounded-xl text-sm font-bold transition flex items-center gap-2 border ${active ? 'bg-[#00A651] border-[#00A651] text-white shadow-lg shadow-[#00A651]/20' : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'}`}>
        {label}
        <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${active ? 'bg-black/20 text-white' : 'bg-white/10 text-gray-400'}`}>{count}</span>
    </button>
);

const NotificationCard = ({ data }) => {
    const styles = {
        danger: { bg: 'bg-[#EC008C]/10', border: 'border-[#EC008C]/30', iconBg: 'bg-[#EC008C]', text: 'text-[#EC008C]' },
        warning: { bg: 'bg-[#F7931D]/10', border: 'border-[#F7931D]/30', iconBg: 'bg-[#F7931D]', text: 'text-[#F7931D]' },
        info: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', iconBg: 'bg-blue-500', text: 'text-blue-400' },
        success: { bg: 'bg-[#00A651]/10', border: 'border-[#00A651]/30', iconBg: 'bg-[#00A651]', text: 'text-[#00A651]' },
    };
    const style = styles[data.type];
    const prioStyles = { High: 'bg-[#EC008C]/20 text-[#EC008C]', Medium: 'bg-[#F7931D]/20 text-[#F7931D]', Low: 'bg-gray-500/20 text-gray-400' };

    return (
        <KartuKaca className={`p-5 flex gap-4 items-start relative group hover:bg-black/50 transition shadow-lg ${data.read ? 'opacity-80' : 'opacity-100'}`}>
            {!data.read && (<div className="absolute top-5 right-5 w-2.5 h-2.5 bg-[#00A651] rounded-full shadow-[0_0_10px_#00A651]"></div>)}
            <div className={`p-3 rounded-xl text-white shadow-lg ${style.iconBg} shrink-0`}>{data.icon}</div>
            <div className="flex-1">
                <h4 className={`font-bold mb-1 ${style.text}`}>{data.title}</h4>
                <p className="text-sm text-gray-200 mb-3 leading-relaxed font-medium">{data.desc}</p>
                <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs text-gray-400 flex items-center gap-1 font-semibold"><ClockIcon /> {data.date}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${prioStyles[data.priority]}`}>{data.priority}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1"><TagIcon /> {data.aparId}</span>
                </div>
            </div>
        </KartuKaca>
    );
};

const ClockIcon = () => <svg width="12" height="12" viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path></svg>;
const TagIcon = () => <svg width="12" height="12" viewBox="0 0 256 256" fill="currentColor"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200Zm-24-88a40,40,0,0,1-40,40,8,8,0,0,1,0-16,24,24,0,1,0-24-24,8,8,0,0,1-16,0,40,40,0,1,1,80,0Z"></path></svg>;

export default HalamanNotifikasi;