export default function Topbar({ subtitle, title }) {
  return (
    <div className="sticky top-0 z-40 bg-white border-b-3 border-black px-6 flex items-center justify-between" style={{ minHeight: "73px" }}>
      <div>
        <p className="text-xs font-black uppercase tracking-widest text-black/30">{subtitle}</p>
        <h1 className="text-2xl font-black uppercase tracking-tighter leading-none">{title}</h1>
      </div>
      <button className="relative w-10 h-10 bg-retro-yellow border-3 border-black flex items-center justify-center shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
        <span className="material-symbols-outlined text-xl">notifications</span>
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-retro-red border-2 border-black flex items-center justify-center rounded-full">
          <span className="text-white text-xs font-black">7</span>
        </div>
      </button>
    </div>
  );
}
