import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

export default function DashboardLayout() {
    return (
        <div className="layout-wrapper">
            <Header />
            <main className="p-6">
                <Outlet /> {/* Ini tempat Halaman berubah-ubah */}
            </main>
        </div>
    );
}