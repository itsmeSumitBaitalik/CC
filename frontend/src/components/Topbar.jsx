import { useSidebar } from "../pages/Dashboard/SidebarContext";
import { logout } from "../api/allApis/auth.api";
import NotificationDropdown from "../pages/Dashboard/Notifications/NotificationDropdown";

export default function Topbar({ subtitle, title, extra }) {
  const { setIsSidebarOpen } = useSidebar();

  const handleLogout = async () => {
    try {
      await logout(); // backend clears cookie
    } catch (e) {
      console.error("Logout failed:", e);
    } finally {
      window.location.href = "/login";
    }
  };

  return (
    <div className="sticky top-0 z-40 bg-white border-b-3 border-black px-4 lg:px-6 flex items-center justify-between" style={{ minHeight: "73px" }}>
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden w-10 h-10 bg-white border-3 border-black flex items-center justify-center shadow-retro-sm hover:bg-black hover:text-white transition-colors focus:outline-none"
        >
          <span className="material-symbols-outlined font-black">menu</span>
        </button>

        <div>
          <p className="text-xs font-black uppercase tracking-widest text-black/40">
            {subtitle}
          </p>
          <h1 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none">
            {title}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Page-specific extra content (e.g. Chat online count) */}
        {extra}

        {/* Notifications */}
        <NotificationDropdown/>

        {/* Logout */}
        <button 
          onClick={handleLogout}
          className="w-10 h-10 bg-white border-3 border-black flex items-center justify-center shadow-retro hover:bg-black hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer flex-shrink-0"
          title="Logout"
        >
          <span className="material-symbols-outlined text-xl">logout</span>
        </button>
      </div>
    </div>
  );
}