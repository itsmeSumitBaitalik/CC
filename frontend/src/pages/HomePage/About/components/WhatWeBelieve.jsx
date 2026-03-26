import React from 'react';

const WhatWeBelieve = () => {
  return (
    <section className="bg-black py-16 relative overflow-hidden">

      {/* Floating icons on black bg */}
      <div className="absolute top-10 left-8 bg-retro-yellow border-3 border-white p-2 shadow-retro-white w-12 h-12 flex items-center justify-center floating-icon-box" style={{ "--rotation": "8deg", animationDelay: "2.8s" }}>
        <span className="material-symbols-outlined text-black">star</span>
      </div>
      <div className="absolute top-10 right-8 bg-white border-3 border-white p-2 shadow-retro-white w-12 h-12 flex items-center justify-center floating-icon-box" style={{ "--rotation": "-12deg", animationDelay: "3.2s" }}>
        <span className="material-symbols-outlined">flag</span>
      </div>
      <div className="absolute bottom-10 left-8 bg-[#4CAF50] border-3 border-white p-2 shadow-retro-white w-12 h-12 flex items-center justify-center floating-icon-box" style={{ "--rotation": "-8deg", animationDelay: "3.6s" }}>
        <span className="material-symbols-outlined text-white">volunteer_activism</span>
      </div>
      <div className="absolute bottom-10 right-8 bg-[#E05C3A] border-3 border-white p-2 shadow-retro-white w-12 h-12 flex items-center justify-center floating-icon-box" style={{ "--rotation": "10deg", animationDelay: "4.0s" }}>
        <span className="material-symbols-outlined text-white">diversity_3</span>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label — inverted on black bg */}
        <div className="mb-12">
          <div className="flex items-center gap-0 mb-4">
            <div className="w-8 h-8 bg-retro-yellow border-3 border-white shrink-0"></div>
            <h2 className="text-6xl font-black uppercase tracking-tighter bg-retro-yellow text-black px-8 py-3 border-3 border-white shadow-retro-white">
              WHAT WE BELIEVE
            </h2>
          </div>
          <p className="text-2xl font-bold uppercase mt-4 italic text-white">The core principles that drive every feature we build.</p>
        </div>

        {/* Alternating wide cards */}
        <div className="flex flex-col gap-6">

          {/* Row 1: Left heavy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-retro-yellow border-3 border-white p-8 shadow-retro-white flex gap-6 items-start group hover:-translate-y-1 transition-transform">
              <div className="bg-black w-16 h-16 border-3 border-black flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white text-3xl">shield</span>
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase mb-3 text-black">Student First, Always</h3>
                <p className="font-medium text-black">Every single decision — from which features to build to how we store data — starts with one question: is this good for the student? Not the advertiser. Not the investor. The student.</p>
              </div>
            </div>
            <div className="bg-white border-3 border-white p-8 shadow-retro-white flex flex-col gap-4 group hover:-translate-y-1 transition-transform">
              <div className="bg-[#E05C3A] w-16 h-16 border-3 border-black flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">lock_open</span>
              </div>
              <h3 className="text-2xl font-black uppercase text-black">Open & Free</h3>
              <p className="font-medium text-black">No paywalls. No premium tiers. Core features stay free forever.</p>
            </div>
          </div>

          {/* Row 2: Right heavy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#4CAF50] border-3 border-white p-8 shadow-retro-white flex flex-col gap-4 group hover:-translate-y-1 transition-transform">
              <div className="bg-white w-16 h-16 border-3 border-black flex items-center justify-center">
                <span className="material-symbols-outlined text-black text-3xl">lock</span>
              </div>
              <h3 className="text-2xl font-black uppercase text-white">Privacy Is Power</h3>
              <p className="font-medium text-white">Your data stays yours. Anonymous when you want. Real when you're ready.</p>
            </div>
            <div className="md:col-span-2 bg-white border-3 border-white p-8 shadow-retro-white flex gap-6 items-start group hover:-translate-y-1 transition-transform">
              <div className="bg-black w-16 h-16 border-3 border-black flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white text-3xl">groups</span>
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase mb-3 text-black">Radical Inclusion</h3>
                <p className="font-medium text-black">CampusConnect is built for every kind of student. The introvert who chats anonymously. The extrovert who leads clubs. The fresher who doesn't know anyone yet. All are welcome here.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeBelieve;
