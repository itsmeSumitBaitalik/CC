import React from 'react';

const AboutHero = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden stripe-bg">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT: Big text */}
        <div className="flex-1 relative">
          {/* Floating icons in hero */}
          <div className="hidden lg:block absolute -top-8 -left-12 floating-icon-box" style={{ "--rotation": "-12deg", animationDelay: "0s" }}>
            <div className="bg-retro-yellow border-3 border-white p-3 shadow-retro-white">
              <span className="material-symbols-outlined text-3xl text-black">school</span>
            </div>
          </div>
          <div className="hidden lg:block absolute top-20 -right-8 floating-icon-box" style={{ "--rotation": "10deg", animationDelay: "0.6s" }}>
            <div className="bg-[#4CAF50] border-3 border-white p-3 shadow-retro-white">
              <span className="material-symbols-outlined text-3xl text-white">campaign</span>
            </div>
          </div>

          <div className="inline-block bg-retro-yellow border-3 border-white px-4 py-1 mb-6 shadow-retro-white">
            <span className="text-black font-black uppercase text-sm tracking-widest">Our Story</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-none uppercase tracking-tighter mb-8 text-white">
            Built By <span className="bg-retro-yellow text-black px-4 border-3 border-white inline-block">Students</span> For Students
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-xl bg-white/10 border-3 border-white/30 p-4 text-white">
            We were frustrated. Lost. Disconnected. So we built the campus platform we always needed.
          </p>
        </div>

        {/* RIGHT: Big stat blocks */}
        <div className="flex-shrink-0 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full md:w-auto">
          <div className="bg-retro-yellow border-3 border-white p-6 shadow-retro-white text-center">
            <span className="text-5xl font-black text-black block">2023</span>
            <span className="text-xs font-black uppercase tracking-widest text-black mt-1 block">Founded</span>
          </div>
          <div className="bg-white border-3 border-white p-6 shadow-retro-yellow text-center">
            <span className="text-5xl font-black text-black block">3</span>
            <span className="text-xs font-black uppercase tracking-widest text-black mt-1 block">Founders</span>
          </div>
          <div className="bg-white border-3 border-white p-6 shadow-retro-yellow text-center">
            <span className="text-5xl font-black text-black block">10+</span>
            <span className="text-xs font-black uppercase tracking-widest text-black mt-1 block">Colleges</span>
          </div>
          <div className="bg-[#4CAF50] border-3 border-white p-6 shadow-retro-white text-center">
            <span className="text-5xl font-black text-white block">₹0</span>
            <span className="text-xs font-black uppercase tracking-widest text-white mt-1 block">Always Free</span>
          </div>
        </div>
      </div>

      {/* Bottom floating icon */}
      <div className="hidden lg:block absolute bottom-8 right-20 floating-icon-box" style={{ "--rotation": "-8deg", animationDelay: "1.2s" }}>
        <div className="bg-[#E05C3A] border-3 border-white p-3 shadow-retro-white">
          <span className="material-symbols-outlined text-3xl text-white">rocket_launch</span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
