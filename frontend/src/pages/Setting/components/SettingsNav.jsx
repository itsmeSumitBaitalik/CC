export default function SettingsNav({ activePanel, onPanelChange }) {
  const navItems = [
    { id: "profile", icon: "person", label: "Profile", badge: null },
    { id: "security", icon: "shield", label: "Security", badge: null },
    { id: "notifications", icon: "notifications", label: "Notifications", badge: { text: "3", bg: "bg-retro-red" } },
    { id: "preferences", icon: "tune", label: "Preferences", badge: null },
    { id: "privacy", icon: "lock", label: "Privacy", badge: null },
  ];

  return (
    <div className="retro-card w-56 flex-shrink-0 flex flex-col overflow-hidden">
      <div className="retro-section-header">
        <div>
          <h2 className="retro-label tracking-tight text-sm">Settings</h2>
          <p className="retro-subtitle mt-0.5">Manage your account</p>
        </div>
      </div>
      <nav className="flex-1 flex flex-col gap-0.5 p-2 overflow-y-auto retro-scroll">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => onPanelChange(item.id)}
            className={`snav-item flex items-center gap-2.5 px-3 py-2.5 border-2 border-transparent text-left w-full ${activePanel === item.id ? 'snav-active' : ''}`}
          >
            <div className={`retro-icon-box-sm ${activePanel === item.id ? 'bg-black !border-black' : 'bg-white'}`}>
              <span className={`material-symbols-outlined ${activePanel === item.id ? 'text-retro-yellow' : 'text-black'} text-base`}>{item.icon}</span>
            </div>
            <span className="retro-label flex-1">{item.label}</span>
            {item.badge && (
              <div className={`retro-badge ${item.badge.bg} text-white leading-none`}>{item.badge.text}</div>
            )}
          </button>
        ))}
      </nav>
      <div className="p-3 border-t-3 border-black">
        <div className="bg-retro-yellow border-3 border-black p-3 shadow-retro-sm">
          <div className="flex items-center gap-2">
            <div className="retro-avatar retro-avatar-sm bg-white">
              <span className="material-symbols-outlined text-xl">person</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="retro-label leading-none truncate">Jackie Chen</p>
              <p className="retro-subtitle truncate">jackie@campus.edu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
