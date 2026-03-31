import { useState, useEffect, useMemo } from "react";
import Topbar from "../../../components/Topbar";
import SectionHeader from "../../../components/SectionHeader";
import Calendar from "./components/Calendar";
import EventCard from "./components/EventCard";
import EventModal from "./components/EventModal";
import QuickStats from "./components/QuickStats";
import OngoingEventsSection from "./components/OngoingEventsSection";
import CompletedEventsSection from "./components/CompletedEventsSection";
import { getEventStyle } from "./eventConfig";
import { getAllEvents, createEvent, updateEvent, deleteEvent } from "../../../api/allApis/event.api.js";
import { userProfile } from "../../../api/allApis/user.api.js";

// Helper functions moved out for useMemo
const getStatus = (dateStr) => {
  const eventDate = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);

  if (eventDate.getTime() === today.getTime()) return 'ongoing';
  if (eventDate.getTime() > today.getTime()) return 'upcoming';
  return 'completed';
};

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const mapEventCard = (ev) => {
  const d = new Date(ev.date);
  const type = ev.eventType?.toLowerCase() || 'other';
  return {
    ...ev,
    id: ev._id || ev.id,
    type,
    date: `${MONTH_NAMES[d.getMonth()]} ${d.getDate()}`,
    title: ev.title,
    desc: ev.description,
    loc: ev.location,
    time: ev.time || "TBA",
    seats: ev.totalSeats ? `0 / ${ev.totalSeats} seats` : "Free Entry",
    seatPct: ev.totalSeats ? "0%" : null,
    seatLabel: ev.totalSeats ? `0% seats filled` : null,
    registered: false,
    day: String(d.getDate()),
    month: MONTH_NAMES[d.getMonth()],
    detail: `${ev.location} • ${ev.time || 'TBA'}`,
    attended: false
  };
};

const mapOngoingCard = (ev) => {
  const type = ev.eventType?.toLowerCase() || 'other';
  return {
    ...ev,
    id: ev._id || ev.id,
    type,
    title: ev.title,
    desc: ev.description,
    loc: ev.location,
    time: ev.time || "TBA",
    progress: '0h / 1h', // Mocked progress
    percent: '0%',
    people: '0 participating',
    btnText: 'View Details →'
  };
};

// const QUICK_STATS_MOCK = [
//   { icon: 'upcoming', count: '0', label: 'Upcoming', bg: 'bg-retro-green text-white' },
//   { icon: 'play_circle', count: '0', label: 'Ongoing', bg: 'bg-retro-red text-white' },
//   { icon: 'check_circle', count: '0', label: 'Completed', bg: 'bg-white', textClass: 'text-black/40' },
//   { icon: 'bookmark', count: '0', label: 'Registered', bg: 'bg-retro-yellow', textClass: 'text-black/60' },
// ];

export default function EventsPage() {
  const [filter, setFilter] = useState("all");
  const [selectedDay, setSelectedDay] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user info and events on mount
  useEffect(() => {
    const init = async () => {
      setIsLoading(true);
      await Promise.all([fetchUserProfile(), fetchEvents()]);
      setIsLoading(false);
    };
    init();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const res = await userProfile();
      if (res.data) {

        // console.log("USER DATA : ",res)
        
        setCurrentUser({
          id: res.data.user._id || res.data.user.id,
          role: res.data.user.role || "user"
        });
      }
    } catch (err) {
      console.error("Failed to fetch user profile:", err);
      // If unauthorized, currentUser remains null
    }
  };

  const fetchEvents = async () => {
    try {
      const res = await getAllEvents();

      // console.log("API RESPONSE:", res.data); // 👈 add this once

      setEvents(res.data.events || []); // ✅ FIXED
    } catch (err) {
      console.error("Failed to fetch events:", err);
      setEvents([]); // safety
    }
  };

  // const canManage = (ev) => {
  //   console.log(")
  //   if (!currentUser) return false;
  //   if (currentUser.role === 'admin' || currentUser.role === 'Admin') return true;
  //   if (ev.createdBy && ev.createdBy === currentUser.id) return true;
  //   return false;
  // };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setIsModalOpen(true);
  };

  const eventsDataForCalendar = useMemo(() => {
    const data = {};
    events.forEach(ev => {
      const d = new Date(ev.date);
      const key = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
      if (!data[key]) data[key] = [];

      const style = getEventStyle(ev.eventType?.toLowerCase() || 'other');

      data[key].push({
        type: ev.eventType?.toLowerCase() || 'other',
        label: ev.title,
        status: getStatus(ev.date),
        color: style.color + '33', // faded background
        textColor: style.color,
        icon: style.icon
      });
    });
    return data;
  }, [events]);

  const ongoingEvents = useMemo(() => {
    return events.filter(ev => getStatus(ev.date) === 'ongoing').map(mapOngoingCard);
  }, [events]);

  const upcomingEvents = useMemo(() => {
    return events.filter(ev => getStatus(ev.date) === 'upcoming').map(mapEventCard);
  }, [events]);

  const completedEvents = useMemo(() => {
    return events.filter(ev => getStatus(ev.date) === 'completed').map(mapEventCard);
  }, [events]);

  const dynamicStats = useMemo(() => {
    return [
      { icon: 'upcoming', count: String(upcomingEvents.length), label: 'Upcoming', bg: 'bg-retro-green text-white' },
      { icon: 'play_circle', count: String(ongoingEvents.length), label: 'Ongoing', bg: 'bg-retro-red text-white' },
      { icon: 'check_circle', count: String(completedEvents.length), label: 'Completed', bg: 'bg-white', textClass: 'text-black/40' },
      { icon: 'bookmark', count: '0', label: 'Registered', bg: 'bg-retro-yellow', textClass: 'text-black/60' },
    ];
  }, [ongoingEvents, upcomingEvents, completedEvents]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await deleteEvent(id);
        alert("Event deleted successfully!");
        fetchEvents();
      } catch (err) {
        console.error(err);
        alert("Failed to delete event.");
      }
    }
  };

  const handleModalSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      if (editingEvent) {
        const id = editingEvent._id || editingEvent.id;
        await updateEvent(id, formData);
        alert("Event updated successfully!");
      } else {
        await createEvent(formData);
        alert("Event created successfully!");
      }
      setIsModalOpen(false);
      setEditingEvent(null);
      fetchEvents();
    } catch (err) {
      console.error(err);
      alert("Failed to save event.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Topbar subtitle="Campus Life" title="Events 🎉" />

      <div className="p-5 flex flex-col gap-5">

        {/* ── Calendar + Quick Stats ── */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          <div className="xl:col-span-2">
            <Calendar
              eventsData={eventsDataForCalendar}
              joinedDays={new Set()} // Will be populated when registration API is added
              onDayClick={setSelectedDay}
            />
          </div>

          <div className="flex flex-col gap-4">
            <QuickStats stats={dynamicStats} />

            {selectedDay && (
              <div className="bg-white border-3 border-black shadow-retro p-4 animate-in slide-in-from-right-2 duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-retro-yellow border-3 border-black shrink-0"></div>
                  <h3 className="font-black uppercase text-sm">
                    Events on {MONTH_NAMES[selectedDay.month - 1]} {selectedDay.day}
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  {selectedDay.events.map((ev, i) => {
                    const style = getEventStyle(ev.type);
                    return (
                      <div key={i} className="flex items-center gap-2 p-2 border-2 border-black" style={{ background: style.color + '33' }}>
                        <div className={`w-8 h-8 border-2 border-black flex items-center justify-center flex-shrink-0 ${style.iconBg}`}>
                          <span className="material-symbols-outlined" style={{ fontSize: '16px', color: style.color }}>{style.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-black uppercase text-xs leading-none">{ev.label}</p>
                          <p className="text-[10px] font-bold uppercase mt-1 opacity-50 tracking-wider font-black">{ev.status}</p>
                        </div>
                      </div>
                    );
                  })}
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
        <div className="flex items-center justify-between flex-wrap gap-3 mt-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-widest text-black/40">Filter by</span>
            <div className="w-4 h-[2px] bg-black/30"></div>
            {(currentUser?.role === "admin" || currentUser?.role === "Admin") && (
              <button
                onClick={() => { setEditingEvent(null); setIsModalOpen(true); }}
                className="px-3 py-1 bg-retro-red text-white border-2 border-black font-black uppercase text-[10px] tracking-wider ml-2 shadow-retro-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                + Create Event
              </button>
            )}
          </div>
          <div className="flex items-center border-3 border-black shadow-retro overflow-hidden bg-white">
            {['all', 'upcoming', 'ongoing', 'completed'].map(status => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-5 py-2 font-black uppercase text-xs border-r-3 border-black last:border-r-0 transition-all hover:bg-retro-yellow ${filter === status ? 'bg-black text-retro-yellow' : 'bg-white text-black'}`}
              >
                {status === 'upcoming' ? '↑ ' : status === 'ongoing' ? '● ' : status === 'completed' ? '✓ ' : ''}{status}
              </button>
            ))}
          </div>
        </div>

        {/* ── Sections ── */}
        <div className="flex flex-col gap-8 mt-2">
          {isLoading ? (
            <div className="flex items-center justify-center py-20 font-black uppercase opacity-40">Loading Events...</div>
          ) : (
            <>
              {(filter === 'all' || filter === 'ongoing') && (
                <OngoingEventsSection events={ongoingEvents} />
              )}

              {(filter === 'all' || filter === 'upcoming') && (
                <div>
                  <SectionHeader color="bg-retro-green" title="UPCOMING EVENTS" action="View All →" />
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-3">
                    {upcomingEvents.length > 0 ? (
                      upcomingEvents.map((ev, i) => (
                        <EventCard
                          key={i}
                          event={events}
                          onEdit={currentUser?.role === "admin" || currentUser?.role === "Admin" ? handleEdit : undefined}
                          onDelete={currentUser?.role === "admin" || currentUser?.role === "Admin" ? handleDelete : undefined}
                        />
                      ))
                    ) : (
                      <div className="col-span-full py-10 border-2 border-black border-dashed flex items-center justify-center font-black uppercase text-black/20">
                        No upcoming events
                      </div>
                    )}
                  </div>
                </div>
              )}

              {(filter === 'all' || filter === 'completed') && (
                <CompletedEventsSection events={completedEvents} />
              )}
            </>
          )}
        </div>

        <EventModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleModalSubmit}
          initialData={editingEvent}
          isLoading={isSubmitting}
        />

        <div className="h-8"></div>
      </div>
    </>
  );
}
