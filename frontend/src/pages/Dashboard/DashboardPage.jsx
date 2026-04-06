import StatCard from "../../components/StatCard";
import SectionHeader from "../../components/SectionHeader";
import ProfileCard from "./components/ProfileCard";
import AnnouncementList from "./components/AnnouncementList";
import { sendFriendRequest } from "../../api/allApis/notification.api.js";
import { useCurrentUser, useTopbar } from "./SidebarContext";

const stats = [
  { icon: "event", count: "4", label: "Events Joined", bg: "bg-retro-green", iconColor: "text-white" },
  { icon: "people", count: "12", label: "Friends", bg: "bg-retro-red", iconColor: "text-white" },
  { icon: "groups", count: "3", label: "Communities", bg: "bg-retro-yellow", iconColor: "text-black" },
  { icon: "person_search", count: "2", label: "Mentors", bg: "bg-white", iconColor: "text-black" },
];

const upcomingEvents = [
  { day: "15", month: "MAR", color: "bg-retro-red", textColor: "text-white", badges: [{ text: "TODAY", bg: "bg-retro-red text-white" }, { text: "HACKATHON" }], title: "Tech Fest 2025", location: "Main Auditorium", time: "10:00 AM" },
  { day: "16", month: "MAR", color: "bg-retro-green", textColor: "text-white", badges: [{ text: "TOMORROW", bg: "bg-retro-green text-white" }, { text: "CULTURAL" }], title: "Open Mic Night", location: "Campus Cafe", time: "06:00 PM" },
  { day: "18", month: "MAR", color: "bg-retro-yellow", textColor: "text-black", badges: [{ text: "THIS WEEK", bg: "bg-retro-yellow text-black" }, { text: "WORKSHOP" }], title: "Placement Prep Workshop", location: "Room 204, Block C", time: "02:00 PM" },
  { day: "22", month: "MAR", color: "bg-white", textColor: "text-black", badges: [{ text: "UPCOMING" }, { text: "HACKATHON" }], title: "Inter-College Hackathon", location: "Innovation Hub", time: "09:00 AM" },
];

const communities = [
  { icon: "code", name: "Coding Club", members: "234 members", bg: "bg-retro-green" },
  { icon: "music_note", name: "Music Society", members: "189 members", bg: "bg-retro-red" },
  { icon: "science", name: "Science Club", members: "156 members", bg: "bg-retro-yellow" },
];

const topMentors = [
  { name: "Rahul Verma", dept: "Senior • CS", skills: ["React", "Node"] },
  { name: "Ananya Singh", dept: "Alumni • Design", skills: ["Figma", "UI/UX"] },
  { name: "Vikram Shah", dept: "Faculty • ECE", skills: ["IoT", "Python"] },
];

export default function DashboardPage() {
  const { currentUser } = useCurrentUser();
  // console.log("current user data",currentUser)
  const firstName = currentUser?.username || "";

  // Push topbar content to the shared layout topbar
  useTopbar({ subtitle: "Dashboard", title: `Good Morning, ${firstName} 👋` });

  return (
    <>

      <div className="p-5 flex flex-col gap-5">

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>

        {/* ── Events + Right Panel ── */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

          {/* Left column: Events + Communities */}
          <div className="xl:col-span-2 flex flex-col gap-5">

            <SectionHeader color="bg-retro-green" title="UPCOMING EVENTS" action="View All →" />

            <div className="events-scroll flex flex-col gap-3 overflow-y-auto pr-1" style={{ maxHeight: "340px" }}>
              {upcomingEvents.map((event, i) => (
                <div key={i} className="retro-card card-hover flex overflow-hidden flex-shrink-0">
                  <div className={`${event.color} w-2 flex-shrink-0`}></div>
                  <div className={`${event.color} flex flex-col items-center justify-center px-3 py-4 flex-shrink-0 border-r-3 border-black`}>
                    <span className={`${event.textColor} font-black text-2xl leading-none`}>{event.day}</span>
                    <span className={`${event.textColor} font-black text-xs uppercase`}>{event.month}</span>
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      {event.badges.map((badge, j) => (
                        <span key={j} className={`retro-badge ${badge.bg || ""}`}>{badge.text}</span>
                      ))}
                    </div>
                    <h3 className="retro-title text-lg">{event.title}</h3>
                    <div className="meta-row mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
                      <span className="meta-item"><span className="material-symbols-outlined text-sm">location_on</span>{event.location}</span>
                      <span className="meta-item"><span className="material-symbols-outlined text-sm">schedule</span>{event.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center px-4 flex-shrink-0">
                    <button className="retro-btn retro-btn-primary px-3 py-2">Register →</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Communities */}
            <div className="flex flex-col gap-3">
              <SectionHeader color="bg-retro-yellow" title="MY COMMUNITIES" action="Explore →" />
              <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3">
                {communities.map((club, i) => (
                  <div key={i} className="retro-card card-hover p-4 flex items-center gap-3">
                    <div className={`retro-icon-box ${club.bg}`}>
                      <span className={`material-symbols-outlined ${club.bg === "bg-retro-yellow" ? "text-black" : "text-white"} text-xl`}>{club.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="retro-title text-sm truncate">{club.name}</p>
                      <p className="retro-meta">{club.members}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="bg-retro-green border-2 border-black px-1.5 py-0.5 text-white font-black text-xs">●</span>
                      <button className="border-2 border-black px-2 py-0.5 font-black text-xs uppercase hover:bg-black hover:text-white transition-colors">View</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Profile + Mentors + Announcements */}
          <div className="flex flex-col gap-5">

            <ProfileCard currentUser={currentUser} />

            <div className="flex flex-col gap-3">
              <SectionHeader color="bg-retro-green" title="TOP MENTORS" size="sm" />
              <div className="retro-card divide-y-3 divide-black">
                {topMentors.map((mentor, i) => (
                  <div key={i} className="p-3 flex items-center gap-3 hover:bg-retro-yellow/40 transition-colors">
                    <div className="retro-avatar retro-avatar-sm bg-retro-yellow">
                      <span className="material-symbols-outlined text-xl">person</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="retro-title text-sm leading-none">{mentor.name}</p>
                      <p className="retro-meta mt-0.5">{mentor.dept}</p>
                      <div className="flex gap-1 mt-1">
                        {mentor.skills.map((s, j) => (
                          <span key={j} className="border border-black px-1.5 py-0.5 text-xs font-bold">{s}</span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={async () => {
                        try {
                          await sendFriendRequest(mentor.id || 'default_id');
                          alert(`Friend request sent to ${mentor.name}!`);
                        } catch (e) {
                          console.error(e);
                        }
                      }}
                      className="retro-btn-sm retro-btn-primary flex-shrink-0"
                    >
                      +Connect
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <SectionHeader color="bg-retro-red" title="ANNOUNCEMENTS" size="sm" />
              <AnnouncementList />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
