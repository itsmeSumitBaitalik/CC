import { useState } from "react";
import { NavLink } from "react-router-dom";
import SettingsDialog from "../Setting/components/SettingsDialog";

const navItems = [
  { to: "/dashboard",         icon: "grid_view",     label: "Dashboard",  iconBg: "bg-black",         iconColor: "text-retro-yellow" },
  { to: "/dashboard/events",  icon: "event",         label: "Events",     iconBg: "bg-retro-green border-3 border-black", iconColor: "text-white", badge: "4", badgeBg: "bg-retro-red" },
  { to: "/dashboard/chat",    icon: "chat_bubble",   label: "Chatting",   iconBg: "bg-retro-red border-3 border-black",   iconColor: "text-white", badge: "3", badgeBg: "bg-retro-red" },
  { to: "/dashboard/mentors", icon: "person_search",  label: "Mentors",    iconBg: "bg-retro-yellow border-3 border-black", iconColor: "text-black", badge: "2", badgeBg: "bg-retro-green" },
  { to: "/dashboard/community", icon: "groups",      label: "Community",  iconBg: "bg-white border-3 border-black",       iconColor: "text-black" },
];

export default function Sidebar() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r-3 border-black flex flex-col h-full overflow-hidden stripe-bg relative">

      {/* Logo */}
      <div className="border-b-3 border-black bg-retro-yellow flex items-center justify-between px-5 gap-3 flex-shrink-0" style={{ minHeight: "73px" }}>
        <div className="w-10 h-10 bg-black border-3 border-black flex items-center justify-center flex-shrink-0 shadow-retro-sm">
          <span className="material-symbols-outlined text-retro-yellow text-2xl">hub</span>
        </div>
        <div className="flex-1">
          <span className="font-black uppercase tracking-tighter text-lg leading-none block">
            Campus<span className="text-white bg-black px-1">Connect</span>
          </span>
          <span className="text-xs font-black text-black/50 uppercase tracking-widest">Student Hub</span>
        </div>
        <div className="w-3 h-3 bg-black border-2 border-black rounded-full flex-shrink-0 pulse"></div>
      </div>

      {/* Ticker */}
      <div className="border-b-3 border-black overflow-hidden bg-retro-green py-1.5 flex-shrink-0">
        <div className="ticker">
          <span className="text-white font-black uppercase text-xs mx-3">Events • Mentors • Chat • Community • Events • Mentors • Chat • Community • </span>
          <span className="text-white font-black uppercase text-xs mx-3">Events • Mentors • Chat • Community • Events • Mentors • Chat • Community • </span>
        </div>
      </div>

      {/* Nav label */}
      <div className="px-4 pt-4 pb-1 flex-shrink-0">
        <span className="retro-meta tracking-widest">Main Menu</span>
      </div>

      {/* Nav items */}
      <nav className="flex flex-col gap-1 px-3 flex-1 overflow-y-auto retro-scroll min-h-0">
        {navItems.map((item) => {
          // Chat opens in a new tab — use a plain anchor instead of NavLink
          if (item.to === "/dashboard/chat") {
            return (
              <a
                key={item.to}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-3 border-3 border-transparent text-black hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm transition-all"
              >
                <div className={`nav-icon w-9 h-9 flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
                  <span className={`material-symbols-outlined ${item.iconColor} text-xl`}>{item.icon}</span>
                </div>
                <span className="retro-label text-sm">{item.label}</span>
                {item.badge && (
                  <div className={`ml-auto retro-badge ${item.badgeBg} text-white leading-none`}>
                    {item.badge}
                  </div>
                )}
              </a>
            );
          }

          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/dashboard"}
              className={({ isActive }) =>
                isActive
                  ? "nav-active flex items-center gap-3 px-3 py-3 border-3 border-black shadow-retro-sm"
                  : "flex items-center gap-3 px-3 py-3 border-3 border-transparent hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm transition-all"
              }
            >
              <div className={`nav-icon w-9 h-9 flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
                <span className={`material-symbols-outlined ${item.iconColor} text-xl`}>{item.icon}</span>
              </div>
              <span className="retro-label text-sm">{item.label}</span>
              {item.badge && (
                <div className={`ml-auto retro-badge ${item.badgeBg} text-white leading-none`}>
                  {item.badge}
                </div>
              )}
            </NavLink>
          );
        })}

      </nav>

      {/* Profile card */}
      <div className="border-t-3 border-black p-3 bg-white flex-shrink-0">
        <div className="bg-retro-yellow border-3 border-black p-3 shadow-retro">
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0">
              <div className="retro-avatar retro-avatar-sm bg-white shadow-retro-sm" style={{ width: "44px", height: "44px" }}>
                <span className="material-symbols-outlined text-2xl">person</span>
              </div>
              <div className="retro-status-dot online pulse"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="retro-title text-sm leading-none">Jackie Chen</p>
              <p className="retro-subtitle mt-0.5">2nd Year • CS</p>
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

      {/* Settings Modal Dialog */}
      {showSettings && <SettingsDialog onClose={() => setShowSettings(false)} />}

    </aside>
  );
}
