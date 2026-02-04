import React from 'react';
import KartuKaca from '../components/KartuKaca';
import { EnvelopeSimple, LockKey, FireExtinguisher } from '@phosphor-icons/react';

const HalamanLogin = ({ onLogin }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center relative">
        <div className="absolute inset-0 bg-mesh-gradient opacity-50 z-0"></div>
        <div className="absolute inset-0 bg-black/20 z-0 backdrop-blur-[2px]"></div>

        <div className="z-10 w-full max-w-md px-4">
            <KartuKaca className="p-8 kaca-panel">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00A651] to-[#662D91] rounded-xl flex items-center justify-center mb-3 shadow-lg">
                       <FireExtinguisher size={32} weight="fill" color="white" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#00A651] to-[#662D91]">SMART K3RS</h1>
                    <p className="text-xs text-gray-300 uppercase tracking-widest mt-1">Sistem Manajemen K3RS</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-6">
                    <div>
                        <label className="block text-xs text-gray-300 mb-1 ml-1">Email</label>
                        <div className="kaca-card rounded-lg flex items-center px-4 py-3">
                            <EnvelopeSimple className="text-gray-400 text-lg" />
                            <input type="email" defaultValue="nama@gmail.com" className="bg-transparent border-none outline-none text-sm ml-3 w-full text-white placeholder-gray-500" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs text-gray-300 mb-1 ml-1">Password</label>
                        <div className="kaca-card rounded-lg flex items-center px-4 py-3">
                            <LockKey className="text-gray-400 text-lg" />
                            <input type="password" defaultValue="123456" className="bg-transparent border-none outline-none text-sm ml-3 w-full text-white placeholder-gray-500" />
                        </div>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00A651] to-[#662D91] text-white font-semibold shadow-lg hover:opacity-90 transition transform hover:scale-[1.02]"
                    >
                      Masuk
                    </button>
                </form>
            </KartuKaca>
        </div>
    </div>
  );
};

export default HalamanLogin;