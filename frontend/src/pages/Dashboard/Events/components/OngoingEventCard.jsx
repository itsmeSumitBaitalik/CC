import { getEventStyle } from '../eventConfig';

export default function OngoingEventCard({ event }) {
  const { type, title, desc, loc, time, progress, percent, people, btnText } = event;
  const style = getEventStyle(type);
  const { icon, headerBg, barColor, color: liveColor } = style;

  return (
    <div className="retro-card card-lift overflow-hidden flex flex-col h-full">
      <div className={`${headerBg} flex items-center justify-between px-5 py-3 border-b-3 border-black flex-shrink-0`}>
        <div className="flex items-center gap-2">
          <div className="retro-icon-box-sm bg-white">
            <span className="material-symbols-outlined" style={{ fontSize: '14px', color: liveColor }}>{icon}</span>
          </div>
          <span className={`retro-label ${style.textColor} text-sm uppercase`}>{type}</span>
        </div>
        <div className="retro-badge bg-white">
          <div className={`w-2 h-2 ${barColor} rounded-full pulse mr-1.5`}></div>
          <span className="retro-label uppercase" style={{ color: liveColor }}>Live</span>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="flex flex-col">
          <h3 className="retro-title text-xl mb-1">{title}</h3>
          <p className="text-sm font-medium text-black/60 mb-3 line-clamp-2">{desc}</p>
          <div className="meta-row mb-3 flex flex-wrap gap-4">
            <span className="meta-item"><span className="material-symbols-outlined text-sm">location_on</span>{loc}</span>
            <span className="meta-item"><span className="material-symbols-outlined text-sm">schedule</span>{time}</span>
          </div>
          <div className="mb-0">
            <div className="flex justify-between mb-1">
              <span className="retro-label text-[10px] uppercase opacity-50">Progress</span>
              <span className="retro-label text-[10px] uppercase opacity-50">{progress}</span>
            </div>
            <div className="retro-progress-track h-3 bg-black/5">
              <div 
                className={`h-full ${barColor} grow-bar`} 
                style={{ "--w": percent || '0%', width: percent || '0%' }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 flex-shrink-0">
          <div className="meta-item">
            <span className="material-symbols-outlined text-sm">group</span>
            <span className="retro-label text-xs">{people}</span>
          </div>
          <button className="retro-btn-sm retro-btn-primary px-4">
            {btnText || 'JOIN →'}
          </button>
        </div>
      </div>
    </div>
  );
}
