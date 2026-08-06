import { HashRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import LoginPage from "./Pages/loginPage/Login";
import Dashboard from "./Pages/DashboardPage/Dashboard";
import POSPage from "./Pages/POSPage/POSPage";
import SalesPage from "./Pages/SalesPage/SalesPage";
import PurchasesPage from "./Pages/PurchasesPage/PurchasesPage";
import InventoryPage from "./Pages/InventoryPage/InventoryPage";
import CustomersPage from "./Pages/CustomersPage/CustomersPage";
import SuppliersPage from "./Pages/SuppliersPage/SuppliersPage";
import AccountingPage from "./Pages/AccountingPage/AccountingPage";
import ReportsPage from "./Pages/ReportsPage/ReportsPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import HRPage from "./Pages/HRPage/HRPage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import MorePage from "./Pages/MorePage/MorePage";
import { ROUTES } from "./utils/routes";

function AppRoutes() {
  const navigate = useNavigate();
  const handleLogout = () => navigate(ROUTES.LOGIN);

  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard onLogout={handleLogout} />} />
      <Route path={ROUTES.POS} element={<POSPage onLogout={handleLogout} />} />
      <Route path={ROUTES.SALES} element={<SalesPage onLogout={handleLogout} />} />
      <Route path={ROUTES.PURCHASES} element={<PurchasesPage onLogout={handleLogout} />} />
      <Route path={ROUTES.INVENTORY} element={<InventoryPage onLogout={handleLogout} />} />
      <Route path={ROUTES.CUSTOMERS} element={<CustomersPage onLogout={handleLogout} />} />
      <Route path={ROUTES.SUPPLIERS} element={<SuppliersPage onLogout={handleLogout} />} />
      <Route path={ROUTES.ACCOUNTING} element={<AccountingPage onLogout={handleLogout} />} />
      <Route path={ROUTES.REPORTS} element={<ReportsPage onLogout={handleLogout} />} />
      <Route path={ROUTES.PROJECTS} element={<ProjectsPage onLogout={handleLogout} />} />
      <Route path={ROUTES.HR} element={<HRPage onLogout={handleLogout} />} />
      <Route path={ROUTES.SETTINGS} element={<SettingsPage onLogout={handleLogout} />} />
      <Route path={ROUTES.MORE} element={<MorePage onLogout={handleLogout} />} />
      <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="nobo-root">
        <GlobalStyle />
        <AppRoutes />
      </div>
    </HashRouter>
  );
}
