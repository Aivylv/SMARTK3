import React, { useState } from 'react';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import bgImage from "../../assets/bg-login.png";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#1a1a1a]">
            <div 
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(8px)'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-[#1a1a1a] z-0"></div>

            <div className="relative z-10 w-full max-w-md p-8 m-4">
                <div className="kaca-card rounded-3xl p-8 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-gradient"></div>
                    
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold mb-2 text-white tracking-tight">
                            Selamat Datang
                        </h1>
                        <p className="text-gray-400 text-sm">
                            Silakan masuk untuk mengakses <span className="text-transparent bg-clip-text bg-brand-gradient font-bold">SMARTK3</span>
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-300 ml-1 uppercase tracking-wider">Email</label>
                            <input 
                                type="email" 
                                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition duration-300"
                                placeholder="nama@perusahaan.com"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-300 ml-1 uppercase tracking-wider">Password</label>
                            <div className="relative">
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition duration-300"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                                >
                                    {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-brand-gradient text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-[#00A651]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-8 relative overflow-hidden"
                        >
                            <span className="relative z-10">MASUK</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300"></div>
                        </button>
                    </form>
                </div>
                
                <p className="text-center text-gray-500 text-xs mt-8">
                    &copy; 2025 SmartK3 System. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;