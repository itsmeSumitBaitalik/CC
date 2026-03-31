import { useState } from 'react';
import { createPortal } from 'react-dom';
import { getEventStyle } from '../eventConfig';
import RegistrationModal from './RegistrationModal';

export default function EventCard({ event, onEdit, onDelete, onRegister, onUnregister }) {
  const { type, date, title, desc, loc, time, seats, seatPct, seatLabel, registered } = event;
  const style = getEventStyle(type);
  const { icon, headerBg, badgeColor, iconBg: iconBgColor } = style;
  const [isOpen, setOpen] = useState(false);
  const [status, setStatus] = useState('default');

  const open = (s) => { setStatus(s); setOpen(true); };
  const iconStyleColor = style.color;

  // Guard against NaN/invalid seatPct
  const safeSeatPct = seatPct && !isNaN(parseFloat(seatPct)) ? seatPct : null;

  const modal = isOpen && createPortal(
    <RegistrationModal
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      event={event}
      status={status}
      onRegister={onRegister}
      onUnregister={onUnregister}
    />,
    document.body
  );

  return (
    <>
      <div className="retro-card card-lift overflow-hidden flex flex-col h-full">
        <div className={`${headerBg} border-b-3 border-black flex items-center justify-between px-5 py-3 flex-shrink-0`}>
          <div className="flex items-center gap-2">
            <div className={`retro-icon-box-sm ${iconBgColor}`}>
              <span className="material-symbols-outlined" style={{ fontSize: '14px', color: iconStyleColor }}>{icon}</span>
            </div>
            <span className={`${badgeColor} retro-label text-sm uppercase`}>{type}</span>
          </div>
          <div className="flex items-center gap-2">
            {onEdit && (
              <button onClick={(e) => { e.stopPropagation(); onEdit(event); }} className="w-6 h-6 border-2 border-black bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors" title="Edit Event">
                <span className="material-symbols-outlined text-[14px]">edit</span>
              </button>
            )}
            {onDelete && (
              <button onClick={(e) => { e.stopPropagation(); onDelete(event._id || event.id); }} className="w-6 h-6 border-2 border-black bg-white flex items-center justify-center hover:bg-retro-red hover:text-white transition-colors" title="Delete Event">
                <span className="material-symbols-outlined text-[14px]">delete</span>
              </button>
            )}
            <span className={`retro-badge ml-2 px-2 py-0.5 border-2 ${headerBg === 'bg-white' ? 'border-black bg-white text-black' : 'border-current opacity-80'}`}>{date}</span>
          </div>
        </div>
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div className="flex flex-col">
            {registered && (
              <div className="retro-badge bg-retro-red text-white w-fit mb-2 shadow-retro-sm">⭐ Registered</div>
            )}
            <h3 className="retro-title text-lg mb-1">{title}</h3>
            <p className="text-sm font-medium text-black/60 mb-3 line-clamp-2">{desc}</p>
            <div className="meta-row flex-col gap-1.5 mb-4 items-start">
              <span className="meta-item"><span className="material-symbols-outlined text-sm">location_on</span>{loc}</span>
              <span className="meta-item"><span className="material-symbols-outlined text-sm">schedule</span>{time}</span>
              <span className="meta-item"><span className="material-symbols-outlined text-sm">group</span>{seats}</span>
            </div>
            {safeSeatPct && (
              <div className="mb-4">
                <div className="retro-progress-track h-2 bg-black/5">
                  <div
                    className="h-full bg-black grow-bar"
                    style={{ "--w": safeSeatPct, width: safeSeatPct }}
                  ></div>
                </div>
                {seatLabel && <p className="retro-meta mt-1 text-[10px] uppercase opacity-60 font-black">{seatLabel}</p>}
              </div>
            )}
          </div>
          <button
            onClick={() => open(registered ? 'registered' : 'default')}
            className={`retro-btn w-full py-2 text-xs font-black uppercase shadow-retro active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex-shrink-0 ${registered ? 'bg-white text-black' : 'retro-btn-primary'}`}
          >
            {registered ? 'View Details →' : 'Register Now →'}
          </button>
        </div>
      </div>
      {modal}
    </>
  );
}