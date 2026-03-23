import { useState } from "react";
import Topbar from "../../components/Topbar";
import SectionHeader from "../../components/SectionHeader";
import Calendar from "./components/Calendar";
import EventCard from "./components/EventCard";
import OngoingEventCard from "./components/OngoingEventCard";
import CompletedEventRow from "./components/CompletedEventRow";

/* ── Static event data ── */
const eventsData = {
  '2025-3-15': [
    { type:'hackathon', icon:'bolt', color:'#E05C3A', textColor:'white', label:'Tech Fest 2025', status:'ongoing' },
    { type:'cultural', icon:'music_note', color:'#4CAF50', textColor:'white', label:'Spring Fest Concert', status:'ongoing' },
  ],
  '2025-3-16': [{ type:'cultural', icon:'music_note', color:'#4CAF50', textColor:'white', label:'Open Mic Night', status:'upcoming' }],
  '2025-3-18': [{ type:'workshop', icon:'build', color:'#F5A623', textColor:'black', label:'Placement Prep', status:'upcoming' }],
  '2025-3-22': [{ type:'hackathon', icon:'bolt', color:'#E05C3A', textColor:'white', label:'Inter-College Hack', status:'upcoming' }],
  '2025-3-25': [{ type:'sports', icon:'sports_soccer', color:'#fff', textColor:'black', label:'Annual Sports Meet', status:'upcoming' }],
  '2025-4-1':  [{ type:'cultural', icon:'music_note', color:'#4CAF50', textColor:'white', label:'Open Mic Night', status:'upcoming' }],
  '2025-4-5':  [{ type:'workshop', icon:'build', color:'#F5A623', textColor:'black', label:'ML Bootcamp', status:'upcoming' }],
  '2025-4-12': [{ type:'hackathon', icon:'bolt', color:'#E05C3A', textColor:'white', label:'Smart India Hackathon', status:'upcoming' }],
  '2025-2-28': [{ type:'hackathon', icon:'bolt', color:'#E05C3A', textColor:'white', label:'Code Sprint 2025', status:'completed' }],
  '2025-2-20': [{ type:'cultural', icon:'music_note', color:'#4CAF50', textColor:'white', label:"Valentine's Day Fest", status:'completed' }],
  '2025-2-10': [{ type:'workshop', icon:'build', color:'#F5A623', textColor:'black', label:'Git & GitHub Bootcamp', status:'completed' }],
  '2025-2-2':  [{ type:'sports', icon:'sports_soccer', color:'#fff', textColor:'black', label:'Inter-Dept Football', status:'completed' }],
};

const joinedDays = new Set(['2025-3-15','2025-3-22','2025-2-28','2025-2-20']);
const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const ongoingEvents = [
  { type: 'Hackathon', icon: 'bolt', headerBg: 'bg-retro-red', barColor: 'bg-retro-red', title: 'Tech Fest 2025', desc: 'Build something amazing in 24 hours with teams of up to 4.', loc: 'Main Auditorium', time: '10:00 AM — 10:00 PM', progress: '6h / 24h', percent: '25%', people: '142 participants', btnText: 'Join Late →' },
  { type: 'Cultural', icon: 'music_note', headerBg: 'bg-retro-green', barColor: 'bg-retro-green', title: 'Spring Fest Concert', desc: 'Live performances from 12 campus bands across 2 stages.', loc: 'Open Air Stage', time: '4:00 PM — 9:00 PM', progress: '1h / 5h', percent: '20%', people: '320 attending', btnText: 'View →' },
];

const upcomingEvents = [
  { type: 'Workshop', icon: 'build', headerBg: 'bg-retro-yellow', badgeColor: 'text-black', date: 'Mar 18', title: 'Placement Prep', desc: 'Resume tips, mock interviews, and DSA crash course.', loc: 'Room 204, Block C', time: '2:00 PM — 5:00 PM', seats: '48 / 60 seats', seatPct: '80%', seatLabel: '80% seats filled', registered: false },
  { type: 'Hackathon', icon: 'bolt', headerBg: 'bg-retro-red', badgeColor: 'text-white', date: 'Mar 22', title: 'Inter-College Hackathon', desc: '48-hour build challenge. ₹50,000 prize pool.', loc: 'Innovation Hub', time: '9:00 AM (48hrs)', seats: '210 registered', seatPct: null, seatLabel: null, registered: true },
  { type: 'Sports', icon: 'sports_soccer', headerBg: 'bg-white', badgeColor: 'text-black', date: 'Mar 25', title: 'Annual Sports Meet', desc: 'Football, cricket, basketball & athletics on one day.', loc: 'Sports Ground', time: '8:00 AM — 6:00 PM', seats: '124 / 200 spots', seatPct: '62%', seatLabel: '62% spots filled', registered: false },
  { type: 'Cultural', icon: 'music_note', headerBg: 'bg-retro-green', badgeColor: 'text-white', date: 'Apr 1', title: 'Open Mic Night', desc: 'Poetry, comedy, music — take the mic and own the stage.', loc: 'Campus Cafe', time: '6:00 PM — 9:00 PM', seats: 'Free Entry', seatPct: null, seatLabel: null, registered: false },
  { type: 'Workshop', icon: 'build', headerBg: 'bg-retro-yellow', badgeColor: 'text-black', date: 'Apr 5', title: 'ML Bootcamp', desc: 'Hands-on intro to machine learning with Python & scikit-learn.', loc: 'CS Lab 3', time: '10:00 AM — 4:00 PM', seats: '20 / 30 seats', seatPct: '67%', seatLabel: 'Only 10 seats left!', registered: false },
  { type: 'Hackathon', icon: 'bolt', headerBg: 'bg-retro-red', badgeColor: 'text-white', date: 'Apr 12', title: 'Smart India Hackathon', desc: 'National level. Solve real government problems. Win big.', loc: 'Online + Campus', time: '36 hrs', seats: 'Teams of 6', seatPct: null, seatLabel: null, registered: false },
];

const completedEvents = [
  { day: '28', month: 'Feb', type: 'Hackathon', icon: 'bolt', iconBg: 'bg-retro-red', title: 'Code Sprint 2025', detail: 'Main Auditorium • 12h', attended: true },
  { day: '20', month: 'Feb', type: 'Cultural', icon: 'music_note', iconBg: 'bg-retro-green', title: "Valentine's Day Fest", detail: 'Open Air Stage • 4h', attended: true },
  { day: '10', month: 'Feb', type: 'Workshop', icon: 'build', iconBg: 'bg-retro-yellow', title: 'Git & GitHub Bootcamp', detail: 'CS Lab 1 • 3h', attended: false },
  { day: '2', month: 'Feb', type: 'Sports', icon: 'sports_soccer', iconBg: 'bg-white', title: 'Inter-Dept Football', detail: 'Sports Ground • Full Day', attended: true },
];

const quickStats = [
  { icon: 'upcoming', count: '6', label: 'Upcoming', bg: 'bg-retro-green text-white' },
  { icon: 'play_circle', count: '2', label: 'Ongoing', bg: 'bg-retro-red text-white' },
  { icon: 'check_circle', count: '8', label: 'Completed', bg: 'bg-white', textClass: 'text-black/40' },
  { icon: 'bookmark', count: '4', label: 'Registered', bg: 'bg-retro-yellow', textClass: 'text-black/60' },
];

export default function EventsPage() {
  const [filter, setFilter] = useState("all");
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <>
      <Topbar subtitle="Campus Life" title="Events 🎉" />

      <div className="p-5 flex flex-col gap-5">

        {/* ── Calendar + Quick Stats ── */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          <div className="xl:col-span-2">
            <Calendar eventsData={eventsData} joinedDays={joinedDays} onDayClick={setSelectedDay} />
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              {quickStats.map((s, i) => (
                <div key={i} className={`${s.bg} border-3 border-black p-4 shadow-retro card-lift`}>
                  <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                  <p className="text-3xl font-black mt-1 leading-none">{s.count}</p>
                  <p className={`text-xs font-black uppercase mt-1 ${s.textClass || 'text-white/70'}`}>{s.label}</p>
                </div>
              ))}
            </div>

            {selectedDay && (
              <div className="bg-white border-3 border-black shadow-retro p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-retro-yellow border-3 border-black shrink-0"></div>
                  <h3 className="font-black uppercase text-sm">Events on {monthNames[selectedDay.month - 1]} {selectedDay.day}</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {selectedDay.events.map((ev, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 border-2 border-black" style={{ background: ev.color + '33' }}>
                      <div className="w-6 h-6 border-2 border-black flex items-center justify-center flex-shrink-0" style={{ background: ev.color }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '12px', color: ev.textColor }}>{ev.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-black uppercase text-xs leading-none">{ev.label}</p>
                        <p className="text-xs font-bold uppercase mt-0.5 opacity-50">{ev.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-retro-yellow border-3 border-black shadow-retro p-4 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white border-3 border-black rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-black rounded-full opacity-5"></div>
              <div className="float" style={{ "--r": "-8deg", display: "inline-block", marginBottom: "8px" }}>
                <div className="bg-white border-3 border-black p-2 shadow-retro-sm w-10 h-10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">rocket_launch</span>
                </div>
              </div>
              <p className="font-black uppercase text-base leading-tight">Don't miss <span className="bg-black text-white px-1">Tech Fest</span> today!</p>
              <p className="text-xs font-bold text-black/60 mt-1 uppercase">Registration closes in 2h 14m</p>
              <button className="mt-3 w-full bg-black text-retro-yellow border-3 border-black py-2 font-black uppercase text-xs shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Register Now →</button>
            </div>
          </div>
        </div>

        {/* ── Filter Row ── */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-widest text-black/40">Filter by</span>
            <div className="w-4 h-[2px] bg-black/30"></div>
          </div>
          <div className="flex items-center border-3 border-black shadow-retro overflow-hidden">
            {['all','upcoming','ongoing','completed'].map(status => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-5 py-2 font-black uppercase text-xs border-r-3 border-black last:border-r-0 transition-all hover:bg-retro-yellow ${filter === status ? 'bg-black text-retro-yellow' : 'bg-white text-black'}`}
              >
                {status === 'upcoming' ? '↑ ' : status === 'ongoing' ? '● ' : status === 'completed' ? '✓ ' : ''}{status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* ── Ongoing Events ── */}
        {(filter === 'all' || filter === 'ongoing') && (
          <div>
            <SectionHeader color="bg-retro-red" title="ONGOING EVENTS" badge="● LIVE NOW" badgeBg="bg-retro-red" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              {ongoingEvents.map((ev, i) => (
                <OngoingEventCard key={i} event={ev} />
              ))}
            </div>
          </div>
        )}

        {/* ── Upcoming Events ── */}
        {(filter === 'all' || filter === 'upcoming') && (
          <div>
            <SectionHeader color="bg-retro-green" title="UPCOMING EVENTS" action="View All →" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-3">
              {upcomingEvents.map((ev, i) => (
                <EventCard key={i} event={ev} />
              ))}
            </div>
          </div>
        )}

        {/* ── Completed Events ── */}
        {(filter === 'all' || filter === 'completed') && (
          <div>
            <SectionHeader color="bg-white" title="COMPLETED EVENTS" />
            <div className="flex flex-col gap-3 mt-3">
              {completedEvents.map((ev, i) => (
                <CompletedEventRow key={i} event={ev} />
              ))}
            </div>
          </div>
        )}

        <div className="h-4"></div>
      </div>
    </>
  );
}
