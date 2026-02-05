import React, { useState } from 'react';
import KartuKaca from '../../components/dashboard/KartuKaca';
import { 
  ArrowLeft, QrCode, MapPin, CalendarCheck, FileText, CheckCircle, 
  PencilSimple, Printer, CaretDown, WarningCircle, Drop, Thermometer,
  X, FloppyDisk
} from '@phosphor-icons/react';

const HalamanDetailInventory = ({ onBack }) => {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showExpiredModal, setShowExpiredModal] = useState(false);
  const [showInspectionModal, setShowInspectionModal] = useState(false);

  const [dataLokasi, setDataLokasi] = useState({
    lokasi: "Ruang IGD", gedung: "Gedung A", lantai: "Lantai 1", catatan: "IGD Trauma", koordinat: "-6.2088, 106.8456"
  });
  const [dataTanggal, setDataTanggal] = useState({
    produksi: "2023-01-15", expired: "2026-01-15", isiUlang: "2024-01-15", jadwal: "2025-01-15"
  });
  const [riwayatInspeksi, setRiwayatInspeksi] = useState([
    { id: 1, date: "2024-12-01", inspector: "Ahmad Fauzi", role: "Teknisi APAR", status: "Baik", statusColor: "green", checks: { tekanan: true, seal: true, selang: true, nozzle: true, tabung: true, headgrip: true, spindle: true, fisik: true, signage: true }, hydrostatic: "Valid", refill: "Tidak", note: "Semua komponen dalam kondisi baik.", image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=600&auto=format&fit=crop" },
    { id: 2, date: "2024-11-01", inspector: "Siti Nurhaliza", role: "Petugas K3RS", status: "Kurang", statusColor: "orange", checks: { tekanan: true, seal: false, selang: true, nozzle: true, tabung: true, headgrip: true, spindle: true, fisik: false, signage: true }, hydrostatic: "Valid", refill: "Ya", note: "Segel rusak dan kondisi fisik tabung penyok.", image: "https://images.unsplash.com/photo-1626264147514-6e6e232049b8?q=80&w=600&auto=format&fit=crop" }
  ]);

  const handleSaveLocation = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setDataLokasi({ lokasi: formData.get('lokasi'), gedung: formData.get('gedung'), lantai: formData.get('lantai'), catatan: formData.get('catatan'), koordinat: dataLokasi.koordinat });
    setShowLocationModal(false);
  };
  const handleSaveExpired = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setDataTanggal({ ...dataTanggal, expired: formData.get('expired') });
    setShowExpiredModal(false);
  };
  const handleSaveInspection = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newLog = { id: Date.now(), date: new Date().toISOString().split('T')[0], inspector: "Anda (Admin)", role: "Super Admin", status: "Baik", statusColor: "green", checks: { tekanan: true, seal: true, selang: true, nozzle: true, tabung: true, headgrip: true, spindle: true, fisik: true, signage: true }, hydrostatic: "Valid", refill: "Tidak", note: formData.get('note'), image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=600&auto=format&fit=crop" };
    setRiwayatInspeksi([newLog, ...riwayatInspeksi]);
    setShowInspectionModal(false);
  };

  return (
    <div className="flex flex-col h-full bg-transparent text-white overflow-hidden relative font-sans">
        
        {showLocationModal && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <KartuKaca className="w-full max-w-lg p-6 bg-[#1a1a1a]/90">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Edit Lokasi APAR</h3>
                <button onClick={() => setShowLocationModal(false)} className="p-2 hover:bg-white/10 rounded-full"><X size={20}/></button>
              </div>
              <form onSubmit={handleSaveLocation} className="space-y-4">
                <div><label className="block text-xs text-gray-400 mb-1">Nama Lokasi / Ruangan</label><input name="lokasi" defaultValue={dataLokasi.lokasi} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-[#00A651] outline-none" required /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-xs text-gray-400 mb-1">Gedung</label><input name="gedung" defaultValue={dataLokasi.gedung} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-[#00A651] outline-none" required /></div>
                  <div><label className="block text-xs text-gray-400 mb-1">Lantai</label><input name="lantai" defaultValue={dataLokasi.lantai} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-[#00A651] outline-none" required /></div>
                </div>
                <div><label className="block text-xs text-gray-400 mb-1">Catatan Tambahan</label><input name="catatan" defaultValue={dataLokasi.catatan} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-[#00A651] outline-none" /></div>
                <button type="submit" className="w-full py-3 mt-4 bg-[#00A651] hover:bg-[#008c44] rounded-xl font-bold flex items-center justify-center gap-2 transition"><FloppyDisk size={20} weight="fill" /> Simpan Perubahan</button>
              </form>
            </KartuKaca>
          </div>
        )}

        {showExpiredModal && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <KartuKaca className="w-full max-w-sm p-6 bg-[#1a1a1a]/90">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Update Expired</h3>
                <button onClick={() => setShowExpiredModal(false)} className="p-2 hover:bg-white/10 rounded-full"><X size={20}/></button>
              </div>
              <form onSubmit={handleSaveExpired} className="space-y-4">
                <div><label className="block text-xs text-gray-400 mb-1">Tanggal Kedaluwarsa Baru</label><input type="date" name="expired" defaultValue={dataTanggal.expired} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-[#00A651] outline-none text-white appearance-none" required /></div>
                <button type="submit" className="w-full py-3 mt-4 bg-[#00A651] hover:bg-[#008c44] rounded-xl font-bold flex items-center justify-center gap-2 transition"><FloppyDisk size={20} weight="fill" /> Simpan Tanggal</button>
              </form>
            </KartuKaca>
          </div>
        )}

        {showInspectionModal && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <KartuKaca className="w-full max-w-2xl p-6 bg-[#1a1a1a]/90 max-h-[90vh] overflow-y-auto custom-scrollbar">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Formulir Inspeksi APAR</h3>
                <button onClick={() => setShowInspectionModal(false)} className="p-2 hover:bg-white/10 rounded-full"><X size={20}/></button>
              </div>
              <form onSubmit={handleSaveInspection} className="space-y-6">
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm flex gap-3 items-center"><CheckCircle weight="fill" size={24} /> Pastikan Anda berada di depan unit APAR-001 saat mengisi form ini.</div>
                <div>
                  <h4 className="font-bold text-sm mb-3 text-gray-300">Checklist Komponen</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                     {['Tekanan (Pressure Gauge)', 'Safety Pin / Segel', 'Kondisi Selang', 'Nozzle / Corong', 'Tabung (Karat/Penyok)', 'Headgrip / Tuas', 'Kebersihan', 'Label / Signage'].map((item, idx) => (
                       <label key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10"><input type="checkbox" defaultChecked className="w-4 h-4 accent-[#00A651] rounded" /><span className="text-sm">{item}</span></label>
                     ))}
                  </div>
                </div>
                <div><label className="block text-xs text-gray-400 mb-1">Catatan Hasil Inspeksi</label><textarea name="note" rows="3" placeholder="Tuliskan catatan jika ada kerusakan atau temuan..." className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-[#00A651] outline-none" required></textarea></div>
                <div className="flex gap-3"><button type="button" onClick={() => setShowInspectionModal(false)} className="flex-1 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-semibold transition">Batal</button><button type="submit" className="flex-1 py-3 bg-[#00A651] hover:bg-[#008c44] rounded-xl font-bold transition shadow-lg shadow-[#00A651]/20">Simpan Hasil Inspeksi</button></div>
              </form>
            </KartuKaca>
          </div>
        )}

        <div className="relative z-10 p-6 pb-2 flex-shrink-0">
            <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-4 text-sm"><ArrowLeft weight="bold" /> Kembali ke Inventory</button>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div><h1 className="text-3xl font-bold drop-shadow-sm">APAR-001</h1><p className="text-gray-300 text-sm drop-shadow-sm">Detail lengkap informasi APAR</p></div>
                <div className="flex gap-3">
                    <button onClick={() => setShowLocationModal(true)} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm font-semibold flex items-center gap-2 shadow-sm"><PencilSimple /> Edit Lokasi</button>
                    <button onClick={() => setShowExpiredModal(true)} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm font-semibold flex items-center gap-2 shadow-sm"><CalendarCheck /> Edit Expired</button>
                    <button onClick={() => setShowInspectionModal(true)} className="px-4 py-2 rounded-xl bg-[#00A651] hover:bg-[#008c44] text-white text-sm font-semibold shadow-lg transition flex items-center gap-2"><Printer /> Cek APAR</button>
                </div>
            </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 pt-4 relative z-10 custom-scrollbar pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="space-y-6">
                    <KartuKaca className="p-6 flex flex-col items-center text-center shadow-lg">
                        <div className="p-4 bg-white rounded-2xl mb-4"><QrCode size={120} color="black" /></div>
                        <p className="text-xs font-mono text-gray-400 mb-4">QR-APAR-001</p>
                        <div className="w-full text-left space-y-4">
                            <div><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Status APAR</p><span className="px-3 py-1 rounded-full bg-[#00A651]/20 border border-[#00A651]/20 text-[#00A651] text-xs font-bold">Aman</span></div>
                            <div><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Merek</p><p className="font-semibold">Yamato</p></div>
                            <div><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Tipe APAR</p><p className="font-semibold">ABC Dry Chemical</p></div>
                            <div className="grid grid-cols-2 gap-4">
                                <div><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Kapasitas</p><p className="font-semibold">6 kg</p></div>
                                <div><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Nomor Seri</p><p className="font-semibold">YMT-2023-001</p></div>
                            </div>
                        </div>
                    </KartuKaca>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <KartuKaca className="p-6 shadow-lg">
                        <h3 className="font-bold mb-4">Informasi Tanggal</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <DateCard label="TANGGAL PRODUKSI" date={dataTanggal.produksi} color="blue" />
                            <DateCard label="TANGGAL KEDALUWARSA" date={dataTanggal.expired} color="red" />
                            <DateCard label="TERAKHIR ISI ULANG" date={dataTanggal.isiUlang} color="green" />
                            <DateCard label="JADWAL ISI ULANG" date={dataTanggal.jadwal} color="orange" />
                        </div>
                    </KartuKaca>

                    <KartuKaca className="p-6 shadow-lg">
                        <h3 className="font-bold mb-4">Informasi Lokasi</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Nama Lokasi</p><p className="font-semibold text-lg">{dataLokasi.lokasi}</p></div>
                            <div><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Gedung</p><p className="font-semibold">{dataLokasi.gedung}</p></div>
                            <div><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Lantai</p><p className="font-semibold">{dataLokasi.lantai}</p></div>
                            <div><p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Catatan</p><p className="font-semibold flex items-center gap-1"><MapPin weight="fill" className="text-[#EC008C]" /> {dataLokasi.catatan}</p></div>
                        </div>
                    </KartuKaca>
                </div>

                <div className="lg:col-span-3">
                    <h3 className="font-bold mb-4 text-lg">Riwayat Inspeksi & Perawatan</h3>
                    <div className="space-y-4">
                        {riwayatInspeksi.map((log, index) => (
                             <InspectionAccordion key={log.id} defaultOpen={index === 0} {...log} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

const InspectionAccordion = ({ defaultOpen, date, inspector, role, status, statusColor, checks, hydrostatic, refill, note, image }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const statusStyles = {
        green: { bg: "bg-[#00A651]/20", text: "text-[#00A651]", border: "border-[#00A651]/20", iconBg: "bg-[#00A651]" },
        orange: { bg: "bg-[#F7931D]/20", text: "text-[#F7931D]", border: "border-[#F7931D]/20", iconBg: "bg-[#F7931D]" }
    };
    const currentStyle = statusStyles[statusColor] || statusStyles.green;

    return (
        <div className={`rounded-2xl overflow-hidden bg-white/5 border ${isOpen ? 'border-white/20' : 'border-white/5'} transition-all duration-300 shadow-md`}>
            <div onClick={() => setIsOpen(!isOpen)} className="p-4 flex justify-between items-center cursor-pointer hover:bg-white/5 transition select-none">
                <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl text-white ${currentStyle.iconBg} shadow-lg`}><FileText weight="fill" size={24} /></div>
                    <div><p className="font-bold text-base">{date}</p><p className="text-xs text-gray-400">{inspector} - {role}</p></div>
                </div>
                <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${currentStyle.bg} ${currentStyle.text} ${currentStyle.border}`}>{status}</span>
                    <div className={`p-1 rounded-full bg-white/10 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}><CaretDown weight="bold" /></div>
                </div>
            </div>
            {isOpen && (
                <div className="p-6 border-t border-white/10 bg-black/10 animate-fade-in-down">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 mb-6">
                        <CheckItem label="Tekanan" isGood={checks.tekanan} />
                        <CheckItem label="Seal" isGood={checks.seal} />
                        <CheckItem label="Selang" isGood={checks.selang} />
                        <CheckItem label="Nozzle" isGood={checks.nozzle} />
                        <CheckItem label="Tabung" isGood={checks.tabung} />
                        <CheckItem label="Headgrip" isGood={checks.headgrip} />
                        <CheckItem label="Spindle Head" isGood={checks.spindle} />
                        <CheckItem label="Kondisi Fisik" isGood={checks.fisik} />
                        <CheckItem label="Signage" isGood={checks.signage} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
                            <div className="p-1.5 bg-blue-500/20 rounded-lg text-blue-400"><Thermometer weight="fill"/></div>
                            <div><p className="text-[10px] text-blue-400 uppercase font-bold mb-0.5">Hydrostatic Test</p><p className="font-semibold text-white">{hydrostatic}</p></div>
                        </div>
                        <div className="p-4 rounded-xl bg-[#EC008C]/10 border border-[#EC008C]/20 flex items-start gap-3">
                            <div className="p-1.5 bg-[#EC008C]/20 rounded-lg text-[#EC008C]"><Drop weight="fill"/></div>
                            <div><p className="text-[10px] text-[#EC008C] uppercase font-bold mb-0.5">Perlu Refill</p><p className="font-semibold text-white">{refill}</p></div>
                        </div>
                    </div>
                    <div className="mb-6"><p className="text-xs text-gray-400 mb-2 font-medium">Catatan Petugas</p><div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 leading-relaxed italic">"{note}"</div></div>
                    <div>
                        <p className="text-xs text-gray-400 mb-2 font-medium">Dokumentasi Foto</p>
                        <div className="w-full h-48 rounded-xl bg-white/10 overflow-hidden relative group border border-white/10">
                            <img src={image} alt="Foto Inspeksi" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <span className="absolute bottom-3 left-3 text-xs text-white font-medium bg-black/50 px-2 py-1 rounded backdrop-blur-sm">Bukti Fisik.jpg</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const DateCard = ({ label, date, color }) => {
    const colors = {
        blue: "bg-blue-500/10 border-blue-500/30 text-blue-400",
        red: "bg-red-500/10 border-red-500/30 text-red-400",
        green: "bg-[#00A651]/10 border-[#00A651]/30 text-[#00A651]",
        orange: "bg-[#F7931D]/10 border-[#F7931D]/30 text-[#F7931D]",
    };
    return (
        <div className={`p-4 rounded-xl border ${colors[color] || colors.blue}`}>
            <p className="text-[10px] uppercase font-bold mb-1 opacity-80">{label}</p>
            <p className="font-semibold text-white">{date}</p>
        </div>
    );
};

const CheckItem = ({ label, isGood }) => (
    <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
        <span className="text-sm text-gray-300">{label}</span>
        {isGood ? (
            <div className="flex items-center gap-1.5 text-[#00A651] text-xs font-bold bg-[#00A651]/10 px-2 py-0.5 rounded"><CheckCircle weight="fill" size={14} /> Baik</div>
        ) : (
            <div className="flex items-center gap-1.5 text-[#F7931D] text-xs font-bold bg-[#F7931D]/10 px-2 py-0.5 rounded"><WarningCircle weight="fill" size={14} /> Kurang</div>
        )}
    </div>
);

export default HalamanDetailInventory;