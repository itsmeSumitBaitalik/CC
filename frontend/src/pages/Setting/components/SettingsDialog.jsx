import { useState } from "react";
import Toggle from "./Toggle";
import StrengthMeter from "./StrengthMeter";

const navItems = [
  { id: "profile", icon: "person", label: "Profile" },
  { id: "preferences", icon: "tune", label: "General" },
  { id: "privacy", icon: "lock", label: "Privacy" },
  { id: "security", icon: "shield", label: "Security" },
  { id: "notifications", icon: "notifications", label: "Notifications" },
];

const panelTitles = {
  profile: "Profile Settings",
  security: "Security & Password",
  notifications: "Notification Preferences",
  preferences: "App Preferences",
  privacy: "Privacy & Data",
};

export default function SettingsDialog({ onClose }) {
  const [activePanel, setActivePanel] = useState("profile");
  const [timeFormat, setTimeFormat] = useState("12h");
  const [show2FA, setShow2FA] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const strength = newPassword.length === 0 ? 0 : newPassword.length < 6 ? 1 : newPassword.length < 10 ? 2 : /[A-Z]/.test(newPassword) && /\d/.test(newPassword) ? 4 : 3;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose}></div>

      {/* Dialog */}
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none md:p-6">
        <div className="w-full h-full border-0 md:border-3 border-black md:retro-card md:w-[95vw] max-w-6xl md:h-[90vh] bg-retro-yellow md:bg-white flex flex-col overflow-hidden pointer-events-auto dialog-anim">

          {/* Top bar & Content Layout */}
          <div className="flex flex-col md:flex-row flex-1 min-h-0 bg-white">

            {/* Left nav */}
            <div className="w-full md:w-56 flex-shrink-0 flex flex-col border-b-3 md:border-b-0 md:border-r-3 border-black bg-white">  
              {/* Header — matching img1 reference */}
              <div className="retro-section-header justify-between flex-shrink-0 border-b-3 border-black md:border-b-0">
                <div className="flex items-center gap-3">
                  <div className="retro-icon-box-sm bg-black !border-black">
                    <span className="material-symbols-outlined text-retro-yellow text-base">settings</span>
                  </div>
                  <div>
                    <p className="retro-title text-sm text-white" style={{ color: "#fff" }}>Settings</p>
                    <p className="retro-subtitle" style={{ color: "rgba(0,0,0,0.5)" }}>Preferences</p>
                  </div>
                </div>
                <button onClick={onClose} className="retro-icon-box-sm bg-retro-red hover:bg-black transition-colors cursor-pointer flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-base">close</span>
                </button>
              </div>

              {/* Nav items */}
              <div className="flex-none md:flex-1 flex flex-col overflow-x-auto md:overflow-y-auto retro-scroll">
                <p className="retro-meta px-4 pt-4 mb-2 md:pt-3 md:pb-1 tracking-widest hidden md:block">Settings Menu</p>
                <nav className="flex flex-row md:flex-col gap-2 md:gap-0.5 px-4 md:px-2 pt-3 pb-3 md:pb-2">
                  {navItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => setActivePanel(item.id)}
                      className={`snav-item flex items-center justify-center md:justify-start gap-2.5 px-3 py-2.5 border-2 border-transparent text-left flex-shrink-0 whitespace-nowrap ${activePanel === item.id ? 'snav-active' : ''}`}
                    >
                      <div className={`retro-icon-box-sm ${activePanel === item.id ? 'bg-black !border-black' : 'bg-white'}`}>
                        <span className={`material-symbols-outlined ${activePanel === item.id ? 'text-retro-yellow' : 'text-black'} text-base`}>{item.icon}</span>
                      </div>
                      <span className="retro-label uppercase md:capitalize text-xs md:text-sm">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Version footer */}
              <div className="px-4 py-2 border-t-3 border-black hidden md:block">
                <p className="retro-meta text-[10px]">CampusConnect v2.1.0</p>
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 flex flex-col min-w-0 min-h-0">
              {/* Content header */}
              <div className="retro-section-header justify-between flex-shrink-0">
                <div>
                  <p className="retro-subtitle">Account</p>
                  <h2 className="retro-title text-lg tracking-tighter">{panelTitles[activePanel]}</h2>
                </div>
              </div>

              {/* Action Bar - Shared across all panels */}
              <div className="bg-white border-b-3 border-black px-6 py-3 flex items-center justify-end gap-3 flex-shrink-0">
                <button className="retro-btn-sm bg-white">Reset</button>
                <button className="retro-btn-sm retro-btn-dark">Save Changes</button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto retro-scroll">

                {/* Profile Panel */}
                {activePanel === "profile" && (
                  <div className="flex flex-col gap-5 p-6">
                    {/* Profile card */}
                    <div className="bg-retro-yellow border-3 border-black p-4 md:p-5">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left">
                        <div className="relative">
                          <div className="avatar-ring"><span className="material-symbols-outlined text-4xl">person</span></div>
                          <button className="absolute -bottom-1 -right-1 retro-icon-box-sm bg-white shadow-retro-sm">
                            <span className="material-symbols-outlined text-xs">edit</span>
                          </button>
                        </div>
                        <div className="flex-1 w-full">
                          <div className="flex flex-col md:flex-row items-center gap-2 mb-1 justify-center md:justify-start">
                            <h3 className="retro-title text-xl">Jackie Chen</h3>
                            <span className="retro-badge bg-retro-green text-white">Active Member</span>
                          </div>
                          <p className="retro-subtitle">2nd Year • Computer Science • VJTI Mumbai</p>
                          <div className="mt-4 md:mt-3 text-left">
                            <div className="flex justify-between mb-1">
                              <span className="retro-label">Campus XP</span>
                              <span className="retro-label">720 / 1000 XP</span>
                            </div>
                            <div className="retro-progress-track h-3 bg-white">
                              <div className="h-full bg-retro-green progress-bar" style={{ "--target-w": "72%", width: "72%" }}></div>
                            </div>
                            <p className="retro-meta mt-1">280 XP to next level • Gained from 4 events, 3 communities</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* XP Breakdown */}
                    <div className="bg-retro-yellow border-3 border-black">
                      <div className="bg-black px-4 py-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-retro-yellow text-sm">add_box</span>
                        <span className="retro-label text-white">Your Experience Points</span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 divide-black border-t-3 border-black">
                        {[
                          { val: "+180", label: "Events" },
                          { val: "+240", label: "Communities" },
                          { val: "+180", label: "Mentors" },
                          { val: "+120", label: "Chat" },
                        ].map((xp, i) => (
                          <div key={i} className="text-center py-4 border-b-3 md:border-b-0 border-r-3 border-black [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r-3 md:last:border-r-0">
                            <p className="text-2xl font-black text-black leading-none">{xp.val}</p>
                            <p className="retro-meta mt-1">{xp.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="bg-retro-yellow border-3 border-black">
                      <div className="bg-retro-yellow border-b-3 border-black px-4 py-2">
                        <span className="retro-title text-sm">Personal Information</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">
                        {[
                          { label: "Username", value: "jackie_chen" },
                          { label: "College ID", value: "CS2023087" },
                          { label: "Email Address", value: "jackie@campus.edu" },
                          { label: "Phone Number", value: "+91 98765 43210" },
                          { label: "Department", value: "Computer Science" },
                          { label: "Year of Study", value: "2nd Year" },
                        ].map((field, i) => (
                          <div key={i} className="flex flex-col gap-1">
                            <label className="retro-label">{field.label}</label>
                            <input className="retro-input" defaultValue={field.value} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Security Panel */}
                {activePanel === "security" && (
                  <div className="flex flex-col gap-5 p-6">
                    <div className="retro-card p-5">
                      <h3 className="retro-title text-base mb-4">Change Password</h3>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                          <label className="retro-label">Current Password</label>
                          <input type="password" className="retro-input" placeholder="Enter current password" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="retro-label">New Password</label>
                          <input type="password" className="retro-input" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="Enter new password" />
                          <StrengthMeter strength={strength} />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="retro-label">Confirm New Password</label>
                          <input type="password" className="retro-input" placeholder="Confirm new password" />
                        </div>
                        <button className="retro-btn retro-btn-dark w-fit mt-2">Update Password</button>
                      </div>
                    </div>
                    <div className="retro-card p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="retro-title text-base">Two-Factor Authentication</h3>
                          <p className="retro-subtitle mt-0.5">Add an extra layer of security</p>
                        </div>
                        <Toggle checked={show2FA} onChange={() => setShow2FA(!show2FA)} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Notifications Panel */}
                {activePanel === "notifications" && (
                  <div className="flex flex-col gap-5 p-6">
                    {[
                      { title: "Event Reminders", desc: "Get notified about upcoming events", default: true },
                      { title: "Mentor Messages", desc: "Notifications from your mentors", default: true },
                      { title: "Community Updates", desc: "Posts and updates from communities", default: false },
                      { title: "Email Notifications", desc: "Receive email for important updates", default: true },
                    ].map((n, i) => (
                      <div key={i} className="retro-card p-4 flex items-center justify-between">
                        <div>
                          <h3 className="retro-title text-sm">{n.title}</h3>
                          <p className="retro-subtitle mt-0.5">{n.desc}</p>
                        </div>
                        <Toggle checked={n.default} onChange={() => {}} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Preferences Panel */}
                {activePanel === "preferences" && (
                  <div className="flex flex-col gap-5 p-6">
                    <div className="retro-card p-5">
                      <h3 className="retro-title text-base mb-3">Time Format</h3>
                      <div className="flex gap-3">
                        {["12h", "24h"].map(f => (
                          <button key={f} onClick={() => setTimeFormat(f)} className={`retro-btn-sm ${timeFormat === f ? 'retro-btn-dark' : 'bg-white'}`}>{f === "12h" ? "12-Hour" : "24-Hour"}</button>
                        ))}
                      </div>
                    </div>
                    <div className="retro-card p-5">
                      <h3 className="retro-title text-base mb-3">Language</h3>
                      <select className="retro-select w-full max-w-xs"><option>English</option><option>Hindi</option></select>
                    </div>
                    <div className="retro-card p-5">
                      <h3 className="retro-title text-base mb-3">Notification Sound</h3>
                      <input type="range" className="w-full max-w-xs" min="0" max="100" defaultValue="70" />
                    </div>
                  </div>
                )}

                {/* Privacy Panel */}
                {activePanel === "privacy" && (
                  <div className="flex flex-col gap-5 p-6">
                    {[
                      { title: "Profile Visibility", desc: "Who can see your profile", default: true },
                      { title: "Online Status", desc: "Show when you're online", default: true },
                      { title: "Activity Sharing", desc: "Share your activity with friends", default: false },
                    ].map((p, i) => (
                      <div key={i} className="retro-card p-4 flex items-center justify-between">
                        <div>
                          <h3 className="retro-title text-sm">{p.title}</h3>
                          <p className="retro-subtitle mt-0.5">{p.desc}</p>
                        </div>
                        <Toggle checked={p.default} onChange={() => {}} />
                      </div>
                    ))}
                    <div className="retro-card p-5 border-retro-red" style={{ borderColor: "#E05C3A" }}>
                      <h3 className="retro-title text-base text-retro-red">Danger Zone</h3>
                      <p className="retro-subtitle mt-1 mb-3">Permanently delete your account and all data</p>
                      <button onClick={() => setShowDeleteDialog(true)} className="retro-btn retro-btn-danger">Delete Account</button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* Delete confirmation dialog */}
          {showDeleteDialog && (
            <>
              <div className="fixed inset-0 bg-black/60 z-[60]" onClick={() => setShowDeleteDialog(false)}></div>
              <div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none">
                <div className="retro-card p-6 max-w-sm pointer-events-auto dialog-anim text-center">
                  <div className="retro-icon-box mx-auto bg-retro-red mb-3">
                    <span className="material-symbols-outlined text-white text-2xl">warning</span>
                  </div>
                  <h3 className="retro-title text-lg mb-1">Delete Account?</h3>
                  <p className="retro-subtitle mb-4">This action cannot be undone. All your data will be permanently removed.</p>
                  <div className="flex gap-3 justify-center">
                    <button onClick={() => setShowDeleteDialog(false)} className="retro-btn">Cancel</button>
                    <button className="retro-btn retro-btn-danger">Delete Forever</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
