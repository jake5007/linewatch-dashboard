import {
  LayoutDashboard,
  Factory,
  AlertTriangle,
  Settings,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "@/assets/logo.svg?react";

const navItems = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Production Lines", path: "/lines", icon: Factory },
  { label: "Alarm Center", path: "/alerts", icon: AlertTriangle },
  { label: "System Settings", path: "/settings", icon: Settings },
];

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <div className="drawer lg:drawer-open">
        <input id="main-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col">
          <header className="navbar border-b border-base-300 bg-base-100 px-4">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="main-drawer"
                className="btn btn-square btn-ghost"
                aria-label="Open sidebar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block h-5 w-5 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>

            <div className="flex-1 ml-3">
              <Logo className="h-6" />
            </div>

            <div className="flex items-center gap-2">
              <div className="badge badge-success badge-outline">
                System Normal
              </div>
              <div className="text-sm text-base-content/70">Plant 01</div>
            </div>
          </header>

          <main className="p-4 md:p-6">
            <Outlet />
          </main>
        </div>

        <div className="drawer-side z-20">
          <label htmlFor="main-drawer" className="drawer-overlay" />

          <aside className="flex min-h-full w-72 flex-col border-r border-base-300 bg-base-100">
            <div className="border-b border-base-300 px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-content font-bold">
                  LW
                </div>
                <div>
                  <p className="font-semibold">LineWatch</p>
                  <p className="text-sm text-base-content/60">
                    Industrial Monitoring
                  </p>
                </div>
              </div>
            </div>

            <nav className="flex-1 px-4 py-4">
              <ul className="menu gap-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      end={item.path === "/"}
                      className={({ isActive }) =>
                        `flex items-center gap-3 font-medium active:bg-transparent ${
                          isActive
                            ? "active text-primary"
                            : "text-base-content/70"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 opacity-80" />
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-base-300 p-4">
              <div className="rounded-2xl border border-base-300 bg-base-200 p-4">
                <p className="text-sm font-semibold">Shift Status</p>
                <p className="mt-1 text-sm text-base-content/70">
                  Day Shift · 08:00 - 20:00
                </p>
                <div className="mt-3 flex gap-2">
                  <div className="badge badge-success">Running</div>
                  <div className="badge badge-warning">2 Alerts</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
