// import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import Topbar from "../../components/Topbar";
// // import SettingsNav from "./components/SettingsNav";
// import Toggle from "./components/Toggle";
// import StrengthMeter from "./components/StrengthMeter";

// const panelTitles = { profile: "Profile Settings", security: "Security & Password", notifications: "Notification Preferences", preferences: "App Preferences", privacy: "Privacy & Data" };

// export default function SettingPage() {
//   const [searchParams] = useSearchParams();
//   const tabFromUrl = searchParams.get("tab");
//   const [activePanel, setActivePanel] = useState(tabFromUrl && panelTitles[tabFromUrl] ? tabFromUrl : "profile");

//   useEffect(() => {
//     if (tabFromUrl && panelTitles[tabFromUrl]) setActivePanel(tabFromUrl);
//   }, [tabFromUrl]);
//   const [timeFormat, setTimeFormat] = useState("12h");
//   const [show2FA, setShow2FA] = useState(false);
//   const [newPassword, setNewPassword] = useState("");
//   const [showDeleteDialog, setShowDeleteDialog] = useState(false);

//   return (
//     <>
//       <Topbar subtitle="Account" title="Settings ⚙️" />
//       <div className="p-5">
//         <div className="flex gap-0 min-h-[700px]">

//           {/* <SettingsNav activePanel={activePanel} onPanelChange={setActivePanel} /> */}

//           {/* Right Content */}
//           <div className="flex-1 retro-card !border-l-0 flex flex-col overflow-hidden">
//             <div className="retro-section-header justify-between">
//               <div>
//                 <h2 className="retro-title text-lg tracking-tighter">{panelTitles[activePanel]}</h2>
//                 <p className="retro-subtitle mt-0.5">Manage your {activePanel} settings</p>
//               </div>
//               <div className="flex items-center gap-2">
//                 <button className="retro-btn-sm">Reset</button>
//                 <button className="retro-btn-sm retro-btn-dark">Save Changes</button>
//               </div>
//             </div>

//             <div className="flex-1 overflow-y-auto retro-scroll">

//               {/* Profile */}
//               {/* {activePanel === "profile" && (
//                 <div className="flex flex-col gap-5 p-6">
//                   <div className="flex items-center gap-6">
//                     <div className="avatar-ring"><span className="material-symbols-outlined text-4xl">person</span></div>
//                     <div>
//                       <p className="retro-title text-lg">Jackie Chen</p>
//                       <p className="retro-subtitle">2nd Year • Computer Science</p>
//                       <div className="flex gap-2 mt-2">
//                         <button className="retro-btn-sm bg-retro-yellow">Change Photo</button>
//                         <button className="retro-btn-sm">Remove</button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {[
//                       { label: "Full Name", value: "Jackie Chen" },
//                       { label: "ful ", value: "jackie_chen" },
//                       { label: "Email Address", value: "jackie@campus.edu" },
//                       { label: "Phone Number", value: "+91 98765 43210" },
//                       { label: "Department", value: "Computer Science" },
//                       { label: "Year of Study", value: "2nd Year", type: "select", options: ["1st Year", "2nd Year", "3rd Year", "4th Year", "Alumni"] },
//                     ].map((field, i) => (
//                       <div key={i} className="flex flex-col gap-1">
//                         <label className="retro-label">{field.label}</label>
//                         {field.type === "select" ? (
//                           <select className="retro-select" defaultValue={field.value}>{field.options.map(o => <option key={o}>{o}</option>)}</select>
//                         ) : (
//                           <input className="retro-input" defaultValue={field.value} />
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                   <div className="flex flex-col gap-1">
//                     <label className="retro-label">Bio</label>
//                     <textarea rows="3" className="retro-input resize-none" defaultValue="Hackathon enthusiast. Always looking for the next big opportunity."></textarea>
//                   </div>
//                   <div className="flex flex-col gap-1">
//                     <label className="retro-label">Skills & Interests</label>
//                     <div className="flex flex-wrap gap-2">
//                       {["JavaScript", "React", "Node.js", "Python", "UI/UX", "Gaming"].map(tag => (
//                       <button className="retro-badge border-3 bg-retro-yellow skill-tag py-1 px-3">{tag} ×</button>
//                       ))}
//                       <button className="border-3 border-black border-dashed px-3 py-1 font-black text-xs uppercase text-black/40 hover:bg-retro-yellow hover:border-solid transition-all">+ Add Skill</button>
//                     </div>
//                   </div>
//                 </div>
//               )} */}

//               {/* Security */}
//               {activePanel === "security" && (
//                 <div className="flex flex-col gap-5 p-6">
//                   <div className="border-3 border-black p-5">
//                     <h3 className="font-black uppercase text-base mb-4">Change Password</h3>
//                     <div className="flex flex-col gap-3 max-w-md">
//                       <div className="flex flex-col gap-1"><label className="text-xs font-black uppercase">Current Password</label><input type="password" className="retro-input" placeholder="••••••••" /></div>
//                       <div className="flex flex-col gap-1">
//                         <label className="text-xs font-black uppercase">New Password</label>
//                         <input type="password" className="retro-input" placeholder="Enter new password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
//                         <StrengthMeter value={newPassword} />
//                       </div>
//                       <div className="flex flex-col gap-1"><label className="text-xs font-black uppercase">Confirm New Password</label><input type="password" className="retro-input" placeholder="Re-enter new password" /></div>
//                       <button className="bg-black text-retro-yellow border-3 border-black px-6 py-2.5 font-black uppercase text-xs shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all w-fit mt-2">Update Password</button>
//                     </div>
//                   </div>
//                   <div className="border-3 border-black p-5">
//                     <div className="flex items-center justify-between mb-4">
//                       <div><h3 className="font-black uppercase text-base">Two-Factor Authentication</h3><p className="text-xs font-bold text-black/50 uppercase mt-0.5">Add extra layer of security</p></div>
//                       <Toggle defaultOn={false} onChange={(on) => setShow2FA(on)} />
//                     </div>
//                     {show2FA && (
//                       <div className="flex flex-col gap-3 slide-in">
//                         {[{ icon: "smartphone", label: "Authenticator App", desc: "Google Authenticator or Authy", recommended: true }, { icon: "sms", label: "SMS Verification", desc: "Receive codes via text", recommended: false }, { icon: "mail", label: "Email Verification", desc: "Receive codes via email", recommended: false }].map((m, i) => (
//                           <div key={i} className="flex items-center gap-3 border-3 border-black p-3 hover:bg-retro-yellow/30 transition-colors cursor-pointer">
//                             <div className="w-10 h-10 bg-retro-yellow border-3 border-black flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-black text-xl">{m.icon}</span></div>
//                             <div className="flex-1">
//                               <div className="flex items-center gap-2"><p className="font-black uppercase text-sm">{m.label}</p>{m.recommended && <span className="bg-retro-green border-2 border-black px-1.5 py-0.5 text-white font-black text-xs">REC</span>}</div>
//                               <p className="text-xs font-bold text-black/50">{m.desc}</p>
//                             </div>
//                             <button className="border-3 border-black px-3 py-1.5 font-black uppercase text-xs hover:bg-black hover:text-white transition-colors">Setup</button>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                   <div className="border-3 border-black p-5">
//                     <h3 className="font-black uppercase text-base mb-3">Active Sessions</h3>
//                     <div className="flex flex-col gap-2">
//                       {[{ device: "Chrome • Windows", loc: "Mumbai, India", badge: "Current", badgeBg: "bg-retro-green text-white" }, { device: "Safari • iPhone", loc: "Mumbai, India", badge: "2h ago", badgeBg: "bg-retro-yellow" }].map((s, i) => (
//                         <div key={i} className="flex items-center gap-3 border-3 border-black p-3">
//                           <div className="w-10 h-10 bg-white border-3 border-black flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-xl">devices</span></div>
//                           <div className="flex-1"><p className="font-black uppercase text-sm">{s.device}</p><p className="text-xs font-bold text-black/50">{s.loc}</p></div>
//                           <span className={`${s.badgeBg} border-2 border-black px-2 py-0.5 font-black text-xs`}>{s.badge}</span>
//                           {!s.badge.includes("Current") && <button className="border-3 border-black px-3 py-1.5 font-black uppercase text-xs hover:bg-retro-red hover:text-white transition-colors">Revoke</button>}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Notifications */}
//               {activePanel === "notifications" && (
//                 <div className="flex flex-col gap-5 p-6">
//                   {[
//                     { title: "Event Notifications", items: [{ label: "New Event Posted", desc: "When a new event is published on campus", on: true }, { label: "Event Reminders", desc: "Reminders before registered events start", on: true }, { label: "Event Updates", desc: "Changes to events you've registered for", on: false }] },
//                     { title: "Social Notifications", items: [{ label: "New Messages", desc: "When someone sends you a direct message", on: true }, { label: "Mentor Updates", desc: "When your mentor posts or goes online", on: true }, { label: "Community Activity", desc: "Posts and updates from your communities", on: false }] },
//                     { title: "System Notifications", items: [{ label: "Security Alerts", desc: "Login from new device or location", on: true }, { label: "Newsletter", desc: "Weekly campus digest and updates", on: false }] },
//                   ].map((group, i) => (
//                     <div key={i} className="border-3 border-black p-5">
//                       <h3 className="font-black uppercase text-base mb-4">{group.title}</h3>
//                       <div className="flex flex-col gap-4">
//                         {group.items.map((item, j) => (
//                           <div key={j} className="flex items-center justify-between">
//                             <div><p className="font-black uppercase text-sm">{item.label}</p><p className="text-xs font-bold text-black/50">{item.desc}</p></div>
//                             <Toggle defaultOn={item.on} />
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Preferences */}
//               {activePanel === "preferences" && (
//                 <div className="flex flex-col gap-5 p-6">
//                   <div className="border-3 border-black p-5">
//                     <h3 className="font-black uppercase text-base mb-4">Display</h3>
//                     <div className="flex flex-col gap-4">
//                       <div className="flex items-center justify-between"><div><p className="font-black uppercase text-sm">Dark Mode</p><p className="text-xs font-bold text-black/50">Switch to dark theme</p></div><Toggle /></div>
//                       <div className="flex items-center justify-between"><div><p className="font-black uppercase text-sm">Compact View</p><p className="text-xs font-bold text-black/50">Reduce spacing</p></div><Toggle /></div>
//                       <div className="flex items-center justify-between"><div><p className="font-black uppercase text-sm">Animations</p><p className="text-xs font-bold text-black/50">Enable UI animations</p></div><Toggle defaultOn /></div>
//                     </div>
//                   </div>
//                   <div className="border-3 border-black p-5">
//                     <h3 className="font-black uppercase text-base mb-4">Time & Language</h3>
//                     <div className="flex flex-col gap-4">
//                       <div className="flex items-center justify-between"><div><p className="font-black uppercase text-sm">Language</p><p className="text-xs font-bold text-black/50">Display language</p></div><select className="retro-select" style={{ width: 'auto' }}><option>English</option><option>Hindi</option></select></div>
//                       <div className="flex items-center justify-between">
//                         <div><p className="font-black uppercase text-sm">Time Format</p><p className="text-xs font-bold text-black/50">How you see time</p></div>
//                         <div className="flex border-3 border-black overflow-hidden">
//                           <button onClick={() => setTimeFormat("12h")} className={`px-4 py-1.5 font-black text-xs uppercase border-r-3 border-black ${timeFormat === '12h' ? 'bg-black text-retro-yellow' : 'bg-white hover:bg-retro-yellow transition-colors'}`}>12H</button>
//                           <button onClick={() => setTimeFormat("24h")} className={`px-4 py-1.5 font-black text-xs uppercase ${timeFormat === '24h' ? 'bg-black text-retro-yellow' : 'bg-white hover:bg-retro-yellow transition-colors'}`}>24H</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="border-3 border-black p-5">
//                     <h3 className="font-black uppercase text-base mb-4">Accessibility</h3>
//                     <div className="flex flex-col gap-4">
//                       <div className="flex items-center justify-between"><div><p className="font-black uppercase text-sm">Font Size</p><p className="text-xs font-bold text-black/50">Adjust text size</p></div><input type="range" min="12" max="20" defaultValue="14" className="w-32" /></div>
//                       <div className="flex items-center justify-between"><div><p className="font-black uppercase text-sm">High Contrast</p><p className="text-xs font-bold text-black/50">Better readability</p></div><Toggle /></div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Privacy */}
//               {activePanel === "privacy" && (
//                 <div className="flex flex-col gap-5 p-6">
//                   <div className="border-3 border-black p-5">
//                     <h3 className="font-black uppercase text-base mb-4">Profile Visibility</h3>
//                     <div className="flex flex-col gap-4">
//                       <div className="flex items-center justify-between"><div><p className="font-black uppercase text-sm">Public Profile</p><p className="text-xs font-bold text-black/50">Others can see your profile</p></div><Toggle defaultOn /></div>
//                       <div className="flex items-center justify-between"><div><p className="font-black uppercase text-sm">Show Online Status</p><p className="text-xs font-bold text-black/50">Show when you're active</p></div><Toggle defaultOn /></div>
//                       <div className="flex items-center justify-between"><div><p className="font-black uppercase text-sm">Show Activity</p><p className="text-xs font-bold text-black/50">Display your event history</p></div><Toggle /></div>
//                     </div>
//                   </div>
//                   <div className="border-3 border-black p-5">
//                     <h3 className="font-black uppercase text-base mb-4">Data Management</h3>
//                     <div className="flex flex-col gap-3">
//                       <button className="bg-retro-yellow border-3 border-black px-5 py-3 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all w-fit flex items-center gap-2"><span className="material-symbols-outlined text-lg">download</span>Download My Data</button>
//                       <button onClick={() => setShowDeleteDialog(true)} className="bg-retro-red border-3 border-black px-5 py-3 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all w-fit flex items-center gap-2 text-white"><span className="material-symbols-outlined text-lg">delete_forever</span>Delete Account</button>
//                     </div>
//                   </div>
//                   {showDeleteDialog && (
//                     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//                       <div className="bg-white border-3 border-black shadow-retro-lg p-6 max-w-sm w-full mx-4 dialog-anim">
//                         <div className="flex items-center gap-3 mb-4">
//                           <div className="w-12 h-12 bg-retro-red border-3 border-black flex items-center justify-center"><span className="material-symbols-outlined text-white text-2xl">warning</span></div>
//                           <h3 className="font-black uppercase text-lg leading-tight">Delete Account?</h3>
//                         </div>
//                         <p className="font-bold text-sm text-black/60 mb-4">This action is <strong>permanent</strong>. All your data will be erased.</p>
//                         <div className="flex flex-col gap-1 mb-4"><label className="text-xs font-black uppercase">Type "DELETE" to confirm</label><input className="retro-input" placeholder='Type "DELETE"' /></div>
//                         <div className="flex gap-3">
//                           <button className="flex-1 bg-retro-red text-white border-3 border-black py-2.5 font-black uppercase text-xs shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Delete Forever</button>
//                           <button onClick={() => setShowDeleteDialog(false)} className="flex-1 bg-white border-3 border-black py-2.5 font-black uppercase text-xs shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Cancel</button>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
