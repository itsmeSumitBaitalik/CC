import React from 'react';

const OurStory = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 relative">

      {/* Floating icons */}
      <div className="absolute top-10 right-4 bg-white border-3 border-black p-2 shadow-retro -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style={{ "--rotation": "12deg", animationDelay: "1.6s" }}>
        <span className="material-symbols-outlined">favorite</span>
      </div>
      <div className="absolute bottom-10 right-4 bg-[#E05C3A] border-3 border-black p-2 shadow-retro -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style={{ "--rotation": "-8deg", animationDelay: "2.0s" }}>
        <span className="material-symbols-outlined text-white">history_edu</span>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-0 mb-4">
          <div className="w-8 h-8 bg-[#4CAF50] border-3 border-black shrink-0"></div>
          <h2 className="text-6xl font-black uppercase tracking-tighter bg-black text-white px-8 py-3 border-3 border-black shadow-retro">OUR STORY</h2>
        </div>
        <p className="text-2xl font-bold uppercase mt-4 italic">The journey from a dorm room to your campus screen.</p>
      </div>

      {/* Timeline */}
      <div className="timeline-line flex flex-col gap-0 pl-16 md:pl-0">
        
        {/* Timeline item 1 */}
        <div className="flex flex-col md:flex-row gap-8 mb-12 relative">
          <div className="flex-shrink-0 w-12 h-12 bg-black text-white border-3 border-black flex items-center justify-center font-black text-sm z-10 shadow-retro absolute left-0 md:relative md:left-auto top-0">
            <span>2023</span>
          </div>
          <div className="bg-white border-3 border-black p-8 shadow-retro flex-1 flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-[#E05C3A] w-14 h-14 border-3 border-black flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-white text-3xl">bolt</span>
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase mb-2">The Spark</h3>
              <p className="font-medium">Three CS students at VJTI Mumbai missed their college's biggest hackathon because nobody told them about it. That weekend, the idea for CampusConnect was born over terrible hostel coffee.</p>
            </div>
          </div>
        </div>

        {/* Timeline item 2 */}
        <div className="flex flex-col md:flex-row gap-8 mb-12 relative">
          <div className="flex-shrink-0 w-12 h-12 bg-[#4CAF50] text-black border-3 border-black flex items-center justify-center font-black text-sm z-10 shadow-retro absolute left-0 md:relative md:left-auto top-0">
            <span>2024</span>
          </div>
          <div className="bg-white border-3 border-black p-8 shadow-retro flex-1 flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-[#4CAF50] w-14 h-14 border-3 border-black flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-white text-3xl">build</span>
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase mb-2">Building In Public</h3>
              <p className="font-medium">First version launched. Anonymous chat went viral within a week. 200 students signed up from 3 colleges. Mentors started joining on their own. We knew we were onto something.</p>
            </div>
          </div>
        </div>

        {/* Timeline item 3 */}
        <div className="flex flex-col md:flex-row gap-8 relative">
          <div className="flex-shrink-0 w-12 h-12 bg-retro-yellow border-3 border-black flex items-center justify-center font-black text-sm z-10 shadow-retro absolute left-0 md:relative md:left-auto top-0">
            <span>NOW</span>
          </div>
          <div className="bg-black text-white border-3 border-black p-8 shadow-retro flex-1 flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-retro-yellow w-14 h-14 border-3 border-black flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-black text-3xl">rocket_launch</span>
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase mb-2 text-white">Growing Fast</h3>
              <p className="font-medium text-gray-300">500+ students. 10+ partner colleges. Events, communities, mentors — all live. And we're just getting started. Every day a new student finds their campus tribe through CampusConnect.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
