import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-retro-yellow font-display text-black selection:bg-black selection:text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-retro-yellow retro-scroll">
        <Outlet />
      </main>
    </div>
  );
}
