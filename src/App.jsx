import React, { useState } from 'react';

import './styles/Global.css';
import './styles/EfekKaca.css';

import HalamanLogin from './pages/HalamanLogin';
import HalamanDashboard from './pages/HalamanDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <HalamanDashboard onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <HalamanLogin onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default App;