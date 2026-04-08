import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import { userProfile } from "../../api/allApis/user.api";
import Topbar from "../../components/Topbar";
import { SidebarContext } from "./SidebarContext";
import socket from "../../lib/socket";

export default function DashboardLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);  
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [currentUser, setCurrentUser] = useState(null);

  // Global topbar state — pages push their config here via useTopbar()
  const [topbar, setTopbar] = useState({ title: "", subtitle: "", extra: null });

  const fetchUser = async () => {
    try {
      const res = await userProfile();
      console.log("user data from dashboard layout", res);
      if (res.data?.user) {
        setCurrentUser(res.data.user);
      }
    } catch (err) {
      console.error("Failed to fetch dashboard profile name:", err);
    }
  };

  useEffect(() => {
    fetchUser();

    // Connect socket on mount
    socket.connect();
    socket.on("connect", () => console.log("🌐 Socket connected (Global)"));
    socket.on("connect_error", (err) => console.error("🌐 Socket error:", err.message));

    return () => {
      socket.disconnect();
      socket.off("connect");
      socket.off("connect_error");
    };
  }, []);

  const isChatPage = location.pathname === "/dashboard/chat";

  return (
    <SidebarContext.Provider value={{
      isSidebarOpen, setIsSidebarOpen,
      isSidebarCollapsed, setIsSidebarCollapsed,
      currentUser,
      activeNav, setActiveNav,
      topbar, setTopbar,
    }}>
      <div className="flex h-screen w-full overflow-hidden bg-retro-yellow font-display text-black selection:bg-black selection:text-white relative">
        {!isChatPage && <Sidebar />}
        <main className={`flex-1 ${isChatPage ? "overflow-hidden" : "overflow-y-auto"} bg-retro-yellow retro-scroll w-full relative flex flex-col`}>
          {!isChatPage && <Topbar subtitle={topbar.subtitle} title={topbar.title} extra={topbar.extra} />}
          <Outlet context={{ currentUser }} />
        </main>
      </div>
    </SidebarContext.Provider>
  );
}
