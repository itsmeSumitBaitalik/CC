export default function EventCard({ event }) {
  const { type, icon, headerBg, badgeColor, date, title, desc, loc, time, seats, seatPct, seatLabel, registered } = event;
  const iconBgColor = headerBg === 'bg-retro-yellow' ? 'bg-black' : 'bg-white';
  const iconStyleColor = headerBg === 'bg-retro-yellow' ? '#F5A623' : headerBg === 'bg-retro-red' ? '#E05C3A' : headerBg === 'bg-retro-green' ? '#4CAF50' : '#000';

  return (
    <div className="retro-card card-lift overflow-hidden">
      <div className={`${headerBg} border-b-3 border-black flex items-center justify-between px-5 py-3`}>
        <div className="flex items-center gap-2">
          <div className={`retro-icon-box-sm ${iconBgColor}`}>
            <span className="material-symbols-outlined" style={{ fontSize: '14px', color: iconStyleColor }}>{icon}</span>
          </div>
          <span className={`${badgeColor} retro-label text-sm`}>{type}</span>
        </div>
        <span className={`retro-badge ${headerBg === 'bg-white' ? 'border-black bg-white' : badgeColor === 'text-white' ? 'border-white text-white' : 'border-black bg-white'}`}>{date}</span>
      </div>
      <div className="p-5">
        {registered && (
          <div className="retro-badge bg-retro-red text-white w-fit mb-2">⭐ You're Registered</div>
        )}
        <h3 className="retro-title text-lg mb-1">{title}</h3>
        <p className="text-sm font-medium text-black/60 mb-3">{desc}</p>
        <div className="meta-row flex-col gap-1.5 mb-4">
          <span className="meta-item"><span className="material-symbols-outlined text-sm">location_on</span>{loc}</span>
          <span className="meta-item"><span className="material-symbols-outlined text-sm">schedule</span>{time}</span>
          <span className="meta-item"><span className="material-symbols-outlined text-sm">group</span>{seats}</span>
        </div>
        {seatPct && (
          <div className="mb-4">
            <div className="retro-progress-track">
              <div className="h-full bg-black grow-bar" style={{ "--w": seatPct, width: seatPct }}></div>
            </div>
            <p className="retro-meta mt-1">{seatLabel}</p>
          </div>
        )}
        <button className={`retro-btn w-full py-2 text-sm ${registered ? 'bg-white' : 'retro-btn-primary'}`}>
          {registered ? 'View Details →' : 'Register →'}
        </button>
      </div>
    </div>
  );
}
