export default function OngoingEventCard({ event }) {
  const { type, icon, headerBg, barColor, title, desc, loc, time, progress, percent, people, btnText } = event;
  const liveColor = headerBg.includes('red') ? '#E05C3A' : '#4CAF50';

  return (
    <div className="retro-card card-lift overflow-hidden">
      <div className={`${headerBg} flex items-center justify-between px-5 py-3 border-b-3 border-black`}>
        <div className="flex items-center gap-2">
          <div className="retro-icon-box-sm bg-white">
            <span className="material-symbols-outlined" style={{ fontSize: '14px', color: liveColor }}>{icon}</span>
          </div>
          <span className="retro-label text-white text-sm">{type}</span>
        </div>
        <div className="retro-badge bg-white">
          <div className={`w-2 h-2 ${barColor} rounded-full pulse mr-1.5`}></div>
          <span className="retro-label" style={{ color: liveColor }}>Live</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="retro-title text-xl mb-1">{title}</h3>
        <p className="text-sm font-medium text-black/60 mb-3">{desc}</p>
        <div className="meta-row mb-3">
          <span className="meta-item"><span className="material-symbols-outlined text-sm">location_on</span>{loc}</span>
          <span className="meta-item"><span className="material-symbols-outlined text-sm">schedule</span>{time}</span>
        </div>
        <div className="mb-3">
          <div className="flex justify-between mb-1">
            <span className="retro-label">Progress</span>
            <span className="retro-label">{progress}</span>
          </div>
          <div className="retro-progress-track h-3">
            <div className={`h-full ${barColor} grow-bar`} style={{ "--w": percent, width: percent }}></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="meta-item">
            <span className="material-symbols-outlined text-sm">group</span>
            <span className="retro-label">{people}</span>
          </div>
          <button className="retro-btn-sm retro-btn-primary">{btnText}</button>
        </div>
      </div>
    </div>
  );
}
