import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div className="min-h-screen w-full bg-[#1a1a1a] text-white relative overflow-x-hidden">
             {/* Background Mesh Gradient global */}
            <div className="fixed inset-0 bg-mesh-gradient opacity-30 pointer-events-none z-0"></div>
            
            {/* Area Konten Utama */}
            <div className="relative z-10">
                <Outlet /> 
            </div>
        </div>
    );
}