import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Inventory from "../pages/dashboard/Inventory";

export default function AppRoutes() {
    return (
        <Routes>
            {/* Public Route */}
            <Route path="/login" element={<Login />} />

            {/* Protected/Dashboard Route */}
            <Route path="/" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="inventory" element={<Inventory />} />
            </Route>
        </Routes>
    );
}