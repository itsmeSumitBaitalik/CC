import React from 'react';

const MeetTheTeam = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 relative">

      {/* Floating icons */}
      <div className="absolute top-10 left-4 bg-[#4CAF50] border-3 border-black p-2 shadow-retro -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style={{ "--rotation": "-8deg", animationDelay: "4.4s" }}>
        <span className="material-symbols-outlined text-white">person</span>
      </div>
      <div className="absolute top-10 right-4 bg-white border-3 border-black p-2 shadow-retro -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style={{ "--rotation": "10deg", animationDelay: "4.8s" }}>
        <span className="material-symbols-outlined">handshake</span>
      </div>
      <div className="absolute bottom-10 left-4 bg-[#E05C3A] border-3 border-black p-2 shadow-retro -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style={{ "--rotation": "12deg", animationDelay: "5.2s" }}>
        <span className="material-symbols-outlined text-white">code</span>
      </div>
      <div className="absolute bottom-10 right-4 bg-white border-3 border-black p-2 shadow-retro -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style={{ "--rotation": "-10deg", animationDelay: "5.6s" }}>
        <span className="material-symbols-outlined">brush</span>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-0 mb-4">
          <div className="w-8 h-8 bg-[#4CAF50] border-3 border-black shrink-0"></div>
          <h2 className="text-6xl font-black uppercase tracking-tighter bg-black text-white px-8 py-3 border-3 border-black shadow-retro">MEET THE TEAM</h2>
        </div>
        <p className="text-2xl font-bold uppercase mt-4 italic">The humans behind the screens.</p>
      </div>

      {/* Magazine-style layout: 1 big + 2 small */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Big featured card (left) */}
        <div className="bg-black text-white border-3 border-black p-10 shadow-retro-lg flex flex-col gap-6 relative">
          <div className="absolute -top-4 -right-4 bg-retro-yellow text-black px-4 py-1 font-bold text-sm border-3 border-black shadow-retro">
            ★ FOUNDER
          </div>
          <div className="w-28 h-28 rounded-full border-3 border-white bg-retro-yellow flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-black">person</span>
          </div>
          <div>
            <h3 className="text-4xl font-black uppercase text-white">Aryan Mehta</h3>
            <div className="bg-[#4CAF50] border-3 border-white px-4 py-1 w-fit mt-2 shadow-retro-white">
              <span className="text-white font-black uppercase text-sm">Product Lead</span>
            </div>
          </div>
          <p className="text-xl font-bold text-gray-300 italic border-l-4 border-retro-yellow pl-4">
            "I missed 3 hackathons in my first year because I had no idea they existed. CampusConnect is my way of making sure that never happens to another student."
          </p>
          <div className="flex gap-2 flex-wrap mt-2">
            <span className="border-2 border-white px-3 py-1 text-xs font-bold text-white">#HACKATHONS</span>
            <span className="border-2 border-white px-3 py-1 text-xs font-bold text-white">#PRODUCT</span>
            <span className="border-2 border-white px-3 py-1 text-xs font-bold text-white">#TECH</span>
          </div>
        </div>

        {/* Right column: 2 stacked */}
        <div className="flex flex-col gap-6">

          <div className="bg-white border-3 border-black p-8 shadow-retro flex gap-6 items-start relative group hover:-translate-y-1 transition-transform">
            <div className="absolute -top-4 -right-4 bg-[#E05C3A] text-white px-4 py-1 font-bold text-sm border-3 border-black shadow-retro">
              DESIGN HEAD
            </div>
            <div className="w-20 h-20 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-4xl">person</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-black uppercase">Priya Sharma</h3>
              <p className="font-medium italic text-gray-700">"Good design isn't decoration. It's how CampusConnect feels like home the moment you log in."</p>
              <div className="flex gap-2 flex-wrap">
                <span className="border-2 border-black px-3 py-1 text-xs font-bold">#UI/UX</span>
                <span className="border-2 border-black px-3 py-1 text-xs font-bold">#COMMUNITY</span>
              </div>
            </div>
          </div>

          <div className="bg-retro-yellow border-3 border-black p-8 shadow-retro flex gap-6 items-start relative group hover:-translate-y-1 transition-transform">
            <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-1 font-bold text-sm border-3 border-black shadow-retro">
              ENGINEERING
            </div>
            <div className="w-20 h-20 rounded-full border-3 border-black bg-white flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-4xl">person</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-black uppercase">Karan Patel</h3>
              <p className="font-medium italic text-gray-800">"Every line of code I write is for the student sitting in a hostel room, trying to find their place on campus."</p>
              <div className="flex gap-2 flex-wrap">
                <span className="border-2 border-black px-3 py-1 text-xs font-bold">#BACKEND</span>
                <span className="border-2 border-black px-3 py-1 text-xs font-bold">#DEVOPS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
