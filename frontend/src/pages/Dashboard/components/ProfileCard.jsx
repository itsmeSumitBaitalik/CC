import { useState } from "react";

export default function ProfileCard({ currentUser }) {
  const [profile, setProfile] = useState(null);

  if (!currentUser) return null;
  const { username, role, department, bio,interest } = currentUser;
  // console.log("user data from profile card",username,email,role,department)

  return (
    <div className="retro-card overflow-hidden">
      <div className="bg-retro-yellow border-b-3 border-black px-5 pt-4 pb-8 relative">
        <div className="absolute top-3 right-3 float" style={{ "--r": "10deg", animationDelay: "0.4s" }}>
          <div className="retro-card p-1.5 shadow-retro-sm">
            <span className="material-symbols-outlined text-black text-base">star</span>
          </div>
        </div>
        <p className="retro-meta">Your Profile</p>
        <p className="retro-title text-sm">{username}</p>
      </div>
      <div className="px-5 pb-5 -mt-6">
        <div className="retro-avatar retro-avatar-md bg-white shadow-retro mb-3 relative">
          <span className="material-symbols-outlined text-3xl">person</span>
          <div className="retro-status-dot online pulse"></div>
        </div>
        <p className="retro-subtitle">{role} • {department}</p>
        <p className="text-sm font-medium mt-2 text-black/70 leading-snug">{bio}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {interest.map((interest) => (
            <span className="retro-badge bg-retro-yellow">{interest}</span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-0 mt-4 border-3 border-black">
          <div className="text-center py-3 border-r-3 border-black">
            <p className="text-xl font-black leading-none">4</p>
            <p className="retro-meta mt-0.5">Events</p>
          </div>
          <div className="text-center py-3 border-r-3 border-black">
            <p className="text-xl font-black leading-none">12</p>
            <p className="retro-meta mt-0.5">Friends</p>
          </div>
          <div className="text-center py-3">
            <p className="text-xl font-black leading-none">3</p>
            <p className="retro-meta mt-0.5">Clubs</p>
          </div>
        </div>
        <button className="retro-btn w-full mt-3 bg-retro-yellow py-2.5 text-sm">Edit Profile ✏️</button>
      </div>
    </div>
  );
}
