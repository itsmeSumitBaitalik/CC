import { useState } from "react";
import Topbar from "../../../components/Topbar";
import SectionHeader from "../../../components/SectionHeader";
import StarRating from "./components/StarRating";
import MentorCard from "./components/MentorCard";
import OnlineCarousel from "./components/OnlineCarousel";
import MentorForm from "./components/MentorForm";

const allMentors = [
  { name: "Rahul Verma", dept: "4th Year • CS", skills: ["React", "Node.js", "DSA"], category: "tech", rating: 5.0, ratingCount: 24, bio: "Helping juniors crack their first internship through React, DSA and interview prep.", online: true, mine: true, color: "bg-retro-green", students: 18, sessions: 42, withYou: "3mo" },
  { name: "Ananya Singh", dept: "Alumni • UI/UX Design", skills: ["Figma", "UI/UX", "Branding", "Portfolio"], category: "design", rating: 4.0, ratingCount: 11, bio: "Ex-Flipkart designer helping students build portfolios that get them hired.", online: false, mine: true, color: "bg-retro-yellow", students: 9, sessions: 17, withYou: "1mo" },
  { name: "Vikram Shah", dept: "Faculty • ECE", skills: ["IoT", "Python", "Research"], category: "tech research", rating: 4.8, bio: "Faculty mentor guiding students in IoT and research papers.", online: true },
  { name: "Priya Nair", dept: "MBA • Alumni", skills: ["Finance", "Excel", "Investment"], category: "finance", rating: 4.3, bio: "MBA alumni helping students navigate finance and internships.", online: true },
  { name: "Arjun Das", dept: "3rd Year • CS", skills: ["ML", "PyTorch", "NLP"], category: "tech", rating: 4.5, bio: "ML researcher helping students break into AI/ML.", online: true },
  { name: "Sneha Reddy", dept: "Alumni • Design", skills: ["UI", "Motion", "Branding"], category: "design", rating: 4.9, bio: "Motion designer helping design students find their voice.", online: true },
  { name: "Dr. Meena Iyer", dept: "Faculty • Economics", skills: ["Research", "Economics", "Policy"], category: "research finance", rating: 4.6, bio: "Economics faculty guiding research and policy analysis.", online: false },
  { name: "Karan Mehta", dept: "4th Year • ECE", skills: ["VLSI", "MATLAB", "Embedded"], category: "tech", rating: 4.2, bio: "ECE senior helping juniors with VLSI and GATE prep.", online: true },
  { name: "Tanya Bose", dept: "Alumni • Product", skills: ["Product", "Strategy", "PM"], category: "design tech", rating: 4.7, bio: "Ex-Razorpay PM helping students break into PM careers.", online: false },
];

const onlineMentors = [
  { name: "Rahul Verma", dept: "CS • 4th Yr", skills: ["React", "DSA"] },
  { name: "Vikram Shah", dept: "ECE • Faculty", skills: ["IoT", "Python"] },
  { name: "Priya Nair", dept: "MBA • Alumni", skills: ["Finance", "Excel"] },
  { name: "Arjun Das", dept: "CS • 3rd Yr", skills: ["ML", "PyTorch"] },
  { name: "Sneha Reddy", dept: "Design • Alumni", skills: ["UI", "Motion"] },
  { name: "Karan Mehta", dept: "ECE • 4th Yr", skills: ["VLSI", "MATLAB"] },
];

const cardColors = ["bg-retro-green", "bg-retro-yellow", "bg-retro-red"];
const mentorPerks = [
  { icon: "badge", bg: "bg-retro-green", title: "Verified Badge", desc: "Get a mentor badge on your profile" },
  { icon: "trending_up", bg: "bg-retro-yellow", title: "Build Reputation", desc: "Ratings and reviews boost your campus presence" },
  { icon: "connect_without_contact", bg: "bg-retro-red", title: "Grow Your Network", desc: "Connect with students and faculty alike" },
];

export default function MentorsPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [formOpen, setFormOpen] = useState(false);

  const filteredMentors = allMentors.filter(m => {
    const catMatch = activeFilter === "all" || m.category.includes(activeFilter);
    const searchMatch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.skills.some(s => s.toLowerCase().includes(search.toLowerCase()));
    return catMatch && searchMatch;
  });

  const myMentors = allMentors.filter(m => m.mine);

  return (
    <>
      <Topbar subtitle="Campus Network" title="Mentors 🎓" />
      <div className="p-5 flex flex-col gap-6">

        {/* Hero Stats */}
        <div className="bg-white border-3 border-black shadow-retro grid grid-cols-2 md:grid-cols-4 divide-x-3 divide-black">
          {[
            { icon: "groups", count: "48", label: "Total Mentors", bg: "bg-retro-green" },
            { icon: "wifi", count: "12", label: "Online Now", bg: "bg-retro-yellow" },
            { icon: "bookmark_added", count: "2", label: "Assigned to Me", bg: "bg-retro-red" },
            { icon: "star", count: "4.8", label: "Avg Rating", bg: "bg-white" },
          ].map((s, i) => (
            <div key={i} className="p-5 flex items-center gap-4">
              <div className={`w-12 h-12 ${s.bg} border-3 border-black flex items-center justify-center flex-shrink-0`}>
                <span className={`material-symbols-outlined ${s.bg === 'bg-white' || s.bg === 'bg-retro-yellow' ? 'text-black' : 'text-white'} text-2xl`}>{s.icon}</span>
              </div>
              <div>
                <p className="text-3xl font-black leading-none">{s.count}</p>
                <p className="text-xs font-black uppercase text-black/40 mt-1">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* My Mentors */}
        <div>
          <SectionHeader color="bg-retro-red" title="MY MENTORS" badge="2 Assigned" badgeBg="bg-retro-red" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {myMentors.map((mentor, i) => (
              <div key={i} className="bg-white border-3 border-black shadow-retro card-lift overflow-hidden">
                <div className={`${mentor.color} border-b-3 border-black px-6 pt-5 pb-10 relative`}>
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white border-2 border-black px-2 py-1">
                    {mentor.online ? <><div className="w-2 h-2 bg-retro-green rounded-full pulse"></div><span className="font-black text-xs uppercase text-retro-green">Online</span></> : <><div className="w-2 h-2 bg-black/20 rounded-full"></div><span className="font-black text-xs uppercase text-black/40">Offline</span></>}
                  </div>
                  <div className={`${mentor.color === 'bg-retro-green' ? 'bg-retro-green border-2 border-white/40' : 'bg-black border-2 border-black'} px-3 py-1 w-fit`}>
                    <span className={`${mentor.color === 'bg-retro-green' ? 'text-white' : 'text-retro-yellow'} font-black text-xs uppercase`}>⭐ My Mentor</span>
                  </div>
                </div>
                <div className="px-6 pb-6 -mt-8">
                  <div className="w-16 h-16 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center shadow-retro mb-3 relative">
                    <span className="material-symbols-outlined text-3xl">person</span>
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 ${mentor.color} border-2 border-black rounded-full flex items-center justify-center`}>
                      <span className="material-symbols-outlined text-black" style={{ fontSize: '11px' }}>check</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black uppercase leading-none">{mentor.name}</h3>
                  <p className="text-xs font-black text-black/40 uppercase mt-1">{mentor.dept}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <StarRating rating={mentor.rating} />
                    <span className="text-xs font-black ml-1">{mentor.rating.toFixed(1)} ({mentor.ratingCount} reviews)</span>
                  </div>
                  <p className="text-sm font-medium text-black/60 mt-2 mb-3">"{mentor.bio}"</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.skills.map((s, j) => <span key={j} className={`skill-tag border-2 border-black px-2 py-0.5 text-xs font-black ${j === 0 ? 'bg-retro-yellow' : ''}`}>{s}</span>)}
                  </div>
                  <div className="grid grid-cols-3 gap-0 border-3 border-black mb-4">
                    <div className="text-center py-2 border-r-3 border-black"><p className="text-lg font-black leading-none">{mentor.students}</p><p className="text-xs font-bold uppercase text-black/40">Students</p></div>
                    <div className="text-center py-2 border-r-3 border-black"><p className="text-lg font-black leading-none">{mentor.sessions}</p><p className="text-xs font-bold uppercase text-black/40">Sessions</p></div>
                    <div className="text-center py-2"><p className="text-lg font-black leading-none">{mentor.withYou}</p><p className="text-xs font-bold uppercase text-black/40">With You</p></div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-retro-green border-3 border-black py-2.5 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-white">Message</button>
                    <button className="flex-1 bg-white border-3 border-black py-2.5 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Schedule</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Now */}
        <div>
          <SectionHeader color="bg-retro-green" title="ONLINE NOW" badge="● 12 Live" badgeBg="bg-retro-green" />
          <div className="mt-4"><OnlineCarousel mentors={onlineMentors} /></div>
        </div>

        {/* All Mentors */}
        <div>
          <div className="bg-white border-3 border-black shadow-retro flex items-center gap-0 mb-4 overflow-hidden">
            <div className="bg-retro-yellow border-r-3 border-black px-5 py-4 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-black text-2xl">search</span>
            </div>
            <input value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 bg-transparent px-4 py-4 font-black uppercase text-base placeholder:text-black/30 outline-none tracking-wide" placeholder="Search by name, skill, department..." />
            <div className="border-l-3 border-black px-5 py-4 flex-shrink-0">
              <span className="text-xs font-black uppercase text-black/40">{filteredMentors.length} Mentors</span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <SectionHeader color="bg-retro-yellow" title="ALL MENTORS" />
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-black uppercase text-black/40 mr-1">Filter by</span>
              {["all", "tech", "design", "finance", "research"].map(cat => (
                <button key={cat} onClick={() => setActiveFilter(cat)} className={`border-3 border-black px-3 py-1 font-black uppercase text-xs bg-white hover:bg-retro-yellow transition-all ${activeFilter === cat ? 'filter-active' : ''}`}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredMentors.map((m, i) => <MentorCard key={i} mentor={m} colorClass={cardColors[i % 3]} />)}
          </div>
          {filteredMentors.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-white border-3 border-black flex items-center justify-center mx-auto mb-4 shadow-retro">
                <span className="material-symbols-outlined text-4xl">search_off</span>
              </div>
              <p className="font-black uppercase text-xl">No Mentors Found</p>
              <p className="text-sm font-bold text-black/50 mt-1">Try a different search or filter</p>
            </div>
          )}
        </div>

        {/* Become a Mentor */}
        <div className="bg-white border-3 border-black shadow-retro overflow-hidden">
          <button onClick={() => setFormOpen(!formOpen)} className="w-full flex items-center justify-between px-6 py-5 border-b-3 border-black bg-retro-yellow hover:bg-retro-yellow/80 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black border-3 border-black flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-retro-yellow text-2xl">school</span>
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-black uppercase tracking-tighter leading-none">Become a Mentor</h2>
                <p className="text-xs font-bold text-black/60 uppercase mt-1">Share your knowledge • Guide juniors • Build your profile</p>
              </div>
            </div>
            <div className="w-10 h-10 bg-black border-3 border-black flex items-center justify-center flex-shrink-0 shadow-retro-sm transition-transform" style={{ transform: formOpen ? 'rotate(180deg)' : '' }}>
              <span className="material-symbols-outlined text-retro-yellow text-xl">expand_more</span>
            </div>
          </button>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y-3 md:divide-y-0 md:divide-x-3 divide-black border-b-3 border-black">
            {mentorPerks.map((perk, i) => (
              <div key={i} className="p-5 flex items-center gap-3">
                <div className={`w-10 h-10 ${perk.bg} border-3 border-black flex items-center justify-center flex-shrink-0`}>
                  <span className={`material-symbols-outlined ${perk.bg === 'bg-retro-yellow' ? 'text-black' : 'text-white'} text-xl`}>{perk.icon}</span>
                </div>
                <div>
                  <p className="font-black uppercase text-sm">{perk.title}</p>
                  <p className="text-xs font-bold text-black/50">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <MentorForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
        </div>

        <div className="h-4"></div>
      </div>
    </>
  );
}
