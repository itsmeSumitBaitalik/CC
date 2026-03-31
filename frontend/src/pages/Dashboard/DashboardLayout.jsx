import { useState, createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

export const SidebarContext = createContext();

export function useSidebar() {
  return useContext(SidebarContext);
}

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile state: hidden by default
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Desktop state: expanded by default

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, isSidebarCollapsed, setIsSidebarCollapsed }}>
      <div className="flex h-screen w-full overflow-hidden bg-retro-yellow font-display text-black selection:bg-black selection:text-white relative">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-retro-yellow retro-scroll w-full relative">
          <Outlet />
        </main>
      </div>
    </SidebarContext.Provider>
  );
}
