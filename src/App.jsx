import React, { useState } from 'react';
import './styles/Global.css';
import './styles/EfekKaca.css';
import bgLogin from './assets/bg-login.png';
import bgDashboard from './assets/bg-dashboard.png';
import HalamanLogin from './pages/HalamanLogin';
import HalamanDashboard from './pages/HalamanDashboard';
import HalamanInventory from './pages/HalamanInventory';
import HalamanDetailInventory from './pages/HalamanDetailInventory';
import HalamanNotifikasi from './pages/HalamanNotifikasi';
import KartuKaca from './components/KartuKaca'; 
import { ArrowLeft, TrafficCone } from '@phosphor-icons/react'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (!isLoggedIn) return <HalamanLogin onLogin={handleLogin} />;

    switch (currentPage) {
      case 'dashboard': return <HalamanDashboard onNavigate={navigateTo} onLogout={handleLogout} />;
      case 'inventory': return <HalamanInventory onNavigate={navigateTo} onLogout={handleLogout} />;
      case 'detail': return <HalamanDetailInventory onBack={() => navigateTo('inventory')} />;
      case 'notifikasi': return <HalamanNotifikasi onBack={() => navigateTo('dashboard')} />;
      case 'jadwal':
      case 'maintenance':
      case 'laporan':
      case 'monitoring':
        return <HalamanPlaceholder title={currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} onBack={() => navigateTo('dashboard')} />;
      default: return <HalamanDashboard onNavigate={navigateTo} onLogout={handleLogout} />;
    }
  };

  const currentBackground = isLoggedIn ? bgDashboard : bgLogin;

  return (
    <div className="h-screen w-full relative overflow-hidden font-sans text-white transition-all duration-700 ease-in-out">
        <div className="absolute inset-0 z-0">
            <img 
                key={isLoggedIn ? 'dash' : 'login'} 
                src={currentBackground} 
                alt="Background" 
                className="w-full h-full object-cover animate-fade-in"
            />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#00A651]/80 via-[#1a1a1a]/70 to-[#662D91]/80 mix-blend-hard-light"></div>
        <div className="absolute inset-0 z-0 backdrop-blur-[4px] bg-black/30"></div>
        <div className="relative z-10 h-full w-full">
            {renderPage()}
        </div>
    </div>
  );
}

const HalamanPlaceholder = ({ title, onBack }) => (
  <div className="flex flex-col h-full bg-transparent overflow-hidden relative font-sans">
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
          <KartuKaca className="p-10 max-w-md flex flex-col items-center bg-white/10 backdrop-blur-xl">
              <div className="p-4 bg-white/10 rounded-full mb-6 text-[#F7931D]">
                  <TrafficCone size={48} weight="fill" /> 
              </div>
              <h1 className="text-2xl font-bold mb-2">Halaman {title}</h1>
              <p className="text-gray-300 mb-8">Fitur ini sedang dalam tahap pengembangan.</p>
              <button onClick={onBack} className="px-6 py-2.5 rounded-xl bg-[#00A651] hover:bg-[#008c44] text-white font-semibold flex items-center gap-2 transition shadow-lg">
                  <ArrowLeft weight="bold" /> Kembali ke Dashboard
              </button>
          </KartuKaca>
      </div>
  </div>
);

export default App;