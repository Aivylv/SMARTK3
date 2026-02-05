import React from 'react';
import KartuKaca from '../components/KartuKaca';
import { EnvelopeSimple, LockKey, FireExtinguisher } from '@phosphor-icons/react';
import bgImage from '../assets/bg-login.png';

const HalamanLogin = ({ onLogin }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden font-sans">
        
        <div className="absolute inset-0 z-0">
            <img 
                src={bgImage} 
                alt="Background SMART K3" 
                className="w-full h-full object-cover"
            />
        </div>

        {/* LAYER 2: OVERLAY GRADIENT (Hijau ke Ungu) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#00A651]/80 via-[#1a1a1a]/60 to-[#662D91]/80 mix-blend-hard-light"></div>
        
        {/* LAYER 3: BLUR TAMBAHAN (Agar teks lebih terbaca) */}
        <div className="absolute inset-0 z-0 backdrop-blur-[3px] bg-black/20"></div>

        {/* LAYER 4: CONTENT CARD */}
        <div className="z-10 w-full max-w-md px-4">
            <KartuKaca className="p-8 border border-white/20 shadow-2xl backdrop-blur-xl bg-white/10">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00A651] to-[#662D91] rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-[#00A651]/20">
                       <FireExtinguisher size={32} weight="fill" color="white" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#00A651] to-[#662D91] drop-shadow-sm">
                        SMART K3RS
                    </h1>
                    <p className="text-xs text-gray-200 uppercase tracking-[0.2em] mt-1 font-medium">
                        Sistem Manajemen K3RS
                    </p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-6">
                    <div>
                        <label className="block text-xs text-gray-200 mb-1.5 ml-1 font-medium">Email</label>
                        <div className="bg-white/10 border border-white/10 rounded-xl flex items-center px-4 py-3.5 focus-within:border-[#00A651] focus-within:bg-white/20 transition-all duration-300">
                            <EnvelopeSimple className="text-gray-300 text-lg" />
                            <input 
                                type="email" 
                                defaultValue="admin@smartk3.id" 
                                className="bg-transparent border-none outline-none text-sm ml-3 w-full text-white placeholder-gray-400 font-light" 
                                placeholder="Masukkan email anda"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs text-gray-200 mb-1.5 ml-1 font-medium">Password</label>
                        <div className="bg-white/10 border border-white/10 rounded-xl flex items-center px-4 py-3.5 focus-within:border-[#00A651] focus-within:bg-white/20 transition-all duration-300">
                            <LockKey className="text-gray-300 text-lg" />
                            <input 
                                type="password" 
                                defaultValue="123456" 
                                className="bg-transparent border-none outline-none text-sm ml-3 w-full text-white placeholder-gray-400 font-light" 
                                placeholder="Masukkan password"
                            />
                        </div>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00A651] to-[#662D91] text-white font-bold shadow-lg shadow-[#00A651]/30 hover:opacity-90 hover:scale-[1.02] transition-all duration-300 active:scale-95"
                    >
                      Masuk
                    </button>
                </form>
            </KartuKaca>
            
            <p className="text-center text-[10px] text-gray-400 mt-6">
                &copy; 2026 SMART K3 Hospital Systems
            </p>
        </div>
    </div>
  );
};

export default HalamanLogin;