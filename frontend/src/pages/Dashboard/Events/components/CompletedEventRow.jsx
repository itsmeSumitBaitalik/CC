import { getEventStyle } from '../eventConfig';

export default function CompletedEventRow({ event }) {
  const { day, month, type, title, detail, attended } = event;
  const style = getEventStyle(type);
  const { icon, iconBg, textColor: iconTextColor } = style;

  return (
    <div className="retro-card card-lift flex items-center gap-0 overflow-hidden opacity-80">
      <div className="bg-black/10 flex flex-col items-center justify-center px-4 py-5 border-r-3 border-black flex-shrink-0 w-20">
        <span className="font-black text-2xl leading-none">{day}</span>
        <span className="retro-label uppercase opacity-60 text-[10px]">{month}</span>
      </div>
      <div className="flex items-center gap-3 px-4 py-3 flex-shrink-0 border-r-3 border-black min-w-[140px]">
        <div className={`retro-icon-box-sm w-8 h-8 ${iconBg}`}>
          <span className={`material-symbols-outlined ${iconTextColor === 'white' ? 'text-white' : 'text-black'}`} style={{ fontSize: '16px' }}>{icon}</span>
        </div>
        <span className="retro-label text-xs uppercase">{type}</span>
      </div>
      <div className="px-4 py-3 flex-1 min-w-0">
        <h3 className="retro-title text-base leading-none truncate">{title}</h3>
        <p className="retro-meta mt-1 text-[10px] uppercase opacity-50 truncate">{detail}</p>
      </div>
      <div className="px-4 flex-shrink-0 flex items-center gap-3">
        <div className="meta-item bg-black/5 px-2 py-1 rounded-sm border-2 border-black/10">
          <span className={`material-symbols-outlined text-sm ${attended ? 'text-retro-green' : 'text-black/30'}`}>{attended ? 'check_circle' : 'cancel'}</span>
          <span className={`retro-label text-[10px] uppercase font-black ${attended ? 'text-retro-green' : 'text-black/30'}`}>{attended ? 'Attended' : 'Missed'}</span>
        </div>
        <button className="retro-btn-sm bg-white hover:bg-black hover:text-white transition-all text-[10px] font-black uppercase px-3">
          Details →
        </button>
      </div>
    </div>
  );
}
