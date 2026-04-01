import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AlertsPage from "@/pages/alerts/AlertsPage";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import LinesPage from "@/pages/lines/LinesPage";
import SettingsPage from "@/pages/settings/SettingsPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/lines" element={<LinesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
