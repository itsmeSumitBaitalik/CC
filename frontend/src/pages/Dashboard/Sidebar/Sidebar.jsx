import { useState } from "react";
import { NavLink } from "react-router-dom";
import SettingsDialog from "../../Setting/components/SettingsDialog";
import { useSidebar } from "../SidebarContext";



export default function Sidebar() {
  const [showSettings, setShowSettings] = useState(false);
  const { isSidebarOpen, setIsSidebarOpen, isSidebarCollapsed, setIsSidebarCollapsed, currentUser} = useSidebar();
  const displayName = currentUser ? `${currentUser.username}` : "Loading...";
  const displaySub = currentUser ? `${currentUser.year || ''} ${currentUser.year ? '•' : ''} ${currentUser.department || currentUser.role || ''}`.trim() : "";

  const navItems = [
    { to: "/dashboard", icon: "grid_view", label: "Dashboard", iconBg: "bg-black", iconColor: "text-retro-yellow", subtitle: "Dashboard", title: `Good Morning, ${displayName}` },
    { to: "/dashboard/events", icon: "event", label: "Events", iconBg: "bg-retro-green border-3 border-black", iconColor: "text-white", badge: "4", badgeBg: "bg-retro-red", subtitle: "Campus Life", title: "Events 🎉" },
    { to: "/dashboard/chat", icon: "chat_bubble", label: "Chatting", iconBg: "bg-retro-red border-3 border-black", iconColor: "text-white", badge: "3", badgeBg: "bg-retro-red", subtitle: "Chatting", title: "Chatting 💬", target: "_blank" },
    { to: "/dashboard/mentors", icon: "person_search", label: "Mentors", iconBg: "bg-retro-yellow border-3 border-black", iconColor: "text-black", badge: "2", badgeBg: "bg-retro-green", subtitle: "Campus network", title: 'Mentors 🎓' },
    { to: "/dashboard/community", icon: "groups", label: "Community", iconBg: "bg-white border-3 border-black", iconColor: "text-black", subtitle: "Community" },
  ];
  // console.log("user data from sidebar", currentUser);
  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside className={`fixed md:relative z-50 flex-shrink-0 bg-white border-r-3 border-black flex flex-col h-full overflow-hidden stripe-bg transition-all duration-300 ease-in-out w-64 ${isSidebarCollapsed ? "md:w-20" : ""} ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>

        {/* Logo */}
        <div className={`border-b-3 border-black bg-retro-yellow flex items-center px-4 md:px-5 gap-3 flex-shrink-0 transition-all duration-300 justify-between ${isSidebarCollapsed ? "md:justify-center" : ""}`} style={{ minHeight: "73px" }}>

          <div className="w-10 h-10 bg-black border-3 border-black flex items-center justify-center flex-shrink-0 shadow-retro-sm">
            <span className="material-symbols-outlined text-retro-yellow text-2xl">hub</span>
          </div>

          <div className={`flex-1 overflow-hidden transition-all duration-300 ${isSidebarCollapsed ? "md:hidden" : ""}`}>
            <span className="font-black uppercase tracking-tighter text-lg leading-none block truncate">
              Campus<span className="text-white bg-black px-1">Connect</span>
            </span>
            <span className="text-xs font-black text-black/50 uppercase tracking-widest truncate block">Student Hub</span>
          </div>

        </div>

        {/* Ticker */}
        <div className="border-b-3 border-black overflow-hidden bg-retro-green py-1.5 flex-shrink-0 transition-all duration-300">
          <div className="ticker">
            <span className="text-white font-black uppercase text-xs mx-3">Events • Mentors • Chat • Community • Events • Mentors • Chat • Community • </span>
            <span className="text-white font-black uppercase text-xs mx-3">Events • Mentors • Chat • Community • Events • Mentors • Chat • Community • </span>
          </div>
        </div>

        {/* Nav label */}
        <div className={`px-4 pt-4 pb-2 flex-shrink-0 flex items-center justify-between ${isSidebarCollapsed ? "md:justify-center" : ""}`}>
          <span className={`retro-meta tracking-widest transition-all ${isSidebarCollapsed ? "md:hidden" : ""}`}>Main Menu</span>

          {/* Mobile Close Toggle */}
          <button
            className="flex w-7 h-7 bg-white border-2 border-black shadow-retro-sm items-center justify-center hover:bg-black hover:text-white transition-colors flex-shrink-0 cursor-pointer md:flex"
            onClick={() => {
              if (window.innerWidth < 768) {
                setIsSidebarOpen(false);
              } else {
                setIsSidebarCollapsed(prev => !prev);
              }
            }}
          >
            <span className="material-symbols-outlined text-sm font-black">
              {window.innerWidth < 768
                ? "keyboard_double_arrow_left"
                : isSidebarCollapsed
                  ? "keyboard_double_arrow_right"
                  : "keyboard_double_arrow_left"}
            </span>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col gap-1 px-3 flex-1 overflow-y-auto retro-scroll min-h-0">
          {navItems.map((item) => {
            const isExternal = item.target === "_blank";
            const commonProps = {
              key: item.to,
              title: isSidebarCollapsed ? item.label : undefined,
              className: ({ isActive }) =>
                `flex items-center gap-3 py-3 border-3 transition-all px-3 ${isSidebarCollapsed ? "md:justify-center md:px-0" : ""} ` +
                (isActive
                  ? "nav-active border-black shadow-retro-sm"
                  : "border-transparent hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm"),
              onClick: () => setIsSidebarOpen(false)
            };

            if (isExternal) {
              return (
                <a
                  key={item.to}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={isSidebarCollapsed ? item.label : undefined}
                  className={`flex items-center gap-3 py-3 border-3 transition-all px-3 ${isSidebarCollapsed ? "md:justify-center md:px-0" : ""} border-transparent hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <div className={`nav-icon relative w-9 h-9 flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
                    <span className={`material-symbols-outlined ${item.iconColor} text-xl`}>{item.icon}</span>
                    {item.badge && (
                      <div className={`hidden ${isSidebarCollapsed ? "md:flex" : ""} absolute -top-1.5 -right-1.5 w-5 h-5 items-center justify-center rounded-full text-[11px] font-black border-2 border-black ${item.badgeBg} text-white z-10`}>
                        {item.badge}
                      </div>
                    )}
                  </div>
                  <span className={`retro-label text-sm truncate ${isSidebarCollapsed ? "md:hidden" : ""}`}>{item.label}</span>
                  {item.badge && (
                    <div className={`ml-auto retro-badge ${item.badgeBg} text-white leading-none ${isSidebarCollapsed ? "md:!hidden" : ""}`}>
                      {item.badge}
                    </div>
                  )}
                </a>
              );
            }

            return (
              <NavLink
                {...commonProps}
                key={item.to}
                to={item.to}
                end={item.to === "/dashboard"}
              >
                <div className={`nav-icon relative w-9 h-9 flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
                  <span className={`material-symbols-outlined ${item.iconColor} text-xl`}>{item.icon}</span>
                  {item.badge && (
                    <div className={`hidden ${isSidebarCollapsed ? "md:flex" : ""} absolute -top-1.5 -right-1.5 w-5 h-5 items-center justify-center rounded-full text-[11px] font-black border-2 border-black ${item.badgeBg} text-white z-10`}>
                      {item.badge}
                    </div>
                  )}
                </div>
                <span className={`retro-label text-sm truncate ${isSidebarCollapsed ? "md:hidden" : ""}`}>{item.label}</span>
                {item.badge && (
                  <div className={`ml-auto retro-badge ${item.badgeBg} text-white leading-none ${isSidebarCollapsed ? "md:!hidden" : ""}`}>
                    {item.badge}
                  </div>
                )}
              </NavLink>
            );
          })}

        </nav>

        {/* Profile card */}
        <div className={`border-t-3 border-black p-3 bg-white flex-shrink-0 transition-all ${isSidebarCollapsed ? "flex md:justify-center" : ""}`}>
          {isSidebarCollapsed && (
            <div
              className="!hidden md:!flex retro-avatar retro-avatar-sm bg-white shadow-retro-sm border-2 border-black cursor-pointer hover:-translate-y-1 transition-transform items-center justify-center"
              style={{ width: "44px", height: "44px" }}
              onClick={() => setShowSettings(true)}
              title={displayName}
            >
              <span className="material-symbols-outlined text-2xl font-black">person</span>
            </div>
          )}

          {/* Full Profile Box */}
          <div className={`bg-retro-yellow border-3 border-black p-3 shadow-retro flex-1 ${isSidebarCollapsed ? "md:hidden" : ""}`}>
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <div className="retro-avatar retro-avatar-sm bg-white shadow-retro-sm" style={{ width: "44px", height: "44px" }}>
                  <span className="material-symbols-outlined text-2xl">person</span>
                </div>
                <div className="retro-status-dot online pulse"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="retro-title text-sm leading-none truncate">{displayName}</p>
                <p className="retro-subtitle mt-0.5 truncate">{displaySub}</p>
              </div>
              <button
                onClick={() => setShowSettings(true)}
                className="retro-icon-box-sm bg-white shadow-retro-sm hover:bg-black hover:text-white transition-colors flex-shrink-0 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">settings</span>
              </button>
            </div>
            {/* XP bar */}
            <div className="mt-3">
              <div className="flex justify-between mb-1">
                <span className="retro-label">Campus Rep</span>
                <span className="retro-label">72 XP</span>
              </div>
              <div className="retro-progress-track h-2.5">
                <div className="h-full bg-retro-green progress-bar" style={{ "--target-w": "72%", width: "72%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Settings Modal Dialog */}
      {showSettings && <SettingsDialog onClose={() => setShowSettings(false)} currentUser={currentUser} />}
    </>
  );
}
