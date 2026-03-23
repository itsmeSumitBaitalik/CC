export default function CompletedEventRow({ event }) {
  const { day, month, type, icon, iconBg, title, detail, attended } = event;
  const iconTextColor = (iconBg === 'bg-retro-yellow' || iconBg === 'bg-white') ? 'text-black' : 'text-white';

  return (
    <div className="retro-card card-lift flex items-center gap-0 overflow-hidden opacity-80">
      <div className="bg-black/10 flex flex-col items-center justify-center px-4 py-5 border-r-3 border-black flex-shrink-0 w-20">
        <span className="font-black text-2xl leading-none">{day}</span>
        <span className="retro-label">{month}</span>
      </div>
      <div className="flex items-center gap-3 px-4 py-3 flex-shrink-0 border-r-3 border-black">
        <div className={`retro-icon-box-sm w-8 h-8 ${iconBg}`}>
          <span className={`material-symbols-outlined ${iconTextColor}`} style={{ fontSize: '16px' }}>{icon}</span>
        </div>
        <span className="retro-label">{type}</span>
      </div>
      <div className="px-4 py-3 flex-1">
        <h3 className="retro-title text-base leading-none">{title}</h3>
        <p className="retro-meta mt-0.5">{detail}</p>
      </div>
      <div className="px-4 flex-shrink-0 flex items-center gap-3">
        <div className="meta-item">
          <span className={`material-symbols-outlined text-sm ${attended ? 'text-retro-green' : 'text-black/30'}`}>{attended ? 'check_circle' : 'cancel'}</span>
          <span className={`retro-label ${attended ? 'text-retro-green' : 'text-black/30'}`}>{attended ? 'Attended' : 'Missed'}</span>
        </div>
        <button className="retro-btn-sm bg-white">View →</button>
      </div>
    </div>
  );
}
