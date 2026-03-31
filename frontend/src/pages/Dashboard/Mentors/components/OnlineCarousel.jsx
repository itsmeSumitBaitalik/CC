import { useRef } from "react";

export default function OnlineCarousel({ mentors }) {
  const carouselRef = useRef(null);
  const scroll = (dir) => carouselRef.current?.scrollBy({ left: dir * 220, behavior: 'smooth' });

  return (
    <div className="relative flex items-center gap-3">
      <button onClick={() => scroll(-1)} className="retro-btn flex-shrink-0 w-10 h-10 !p-0 z-10">
        <span className="material-symbols-outlined text-xl">chevron_left</span>
      </button>
      <div ref={carouselRef} className="flex gap-4 overflow-x-auto flex-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {mentors.map((m, i) => (
          <div key={i} className="retro-card flex-shrink-0 w-44 card-lift p-4 flex flex-col items-center text-center gap-2">
            <div className="relative">
              <div className="retro-avatar retro-avatar-md bg-retro-yellow">
                <span className="material-symbols-outlined text-3xl">person</span>
              </div>
              <div className="retro-status-dot online pulse"></div>
            </div>
            <div>
              <p className="retro-title text-xs leading-tight">{m.name}</p>
              <p className="retro-subtitle">{m.dept}</p>
            </div>
            <div className="flex flex-wrap gap-1 justify-center">
              {m.skills.map((s, j) => (
                <span key={j} className="border border-black px-1.5 py-0.5 text-xs font-bold">{s}</span>
              ))}
            </div>
            <button className="retro-btn-sm retro-btn-primary w-full">Chat Now</button>
          </div>
        ))}
      </div>
      <button onClick={() => scroll(1)} className="retro-btn flex-shrink-0 w-10 h-10 !p-0 z-10">
        <span className="material-symbols-outlined text-xl">chevron_right</span>
      </button>
    </div>
  );
}
