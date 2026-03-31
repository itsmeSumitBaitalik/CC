import { useState } from "react";

const fullMonthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export default function Calendar({ eventsData, joinedDays, onDayClick }) {
  const [currentYear, setCurrentYear] = useState(2025);
  const [currentMonth, setCurrentMonth] = useState(3);

  const prevMonth = () => {
    if (currentMonth === 1) { setCurrentMonth(12); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (currentMonth === 12) { setCurrentMonth(1); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  };

  const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
  const today = new Date();
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  const calendarCells = [];
  for (let i = 0; i < totalCells; i++) {
    const dayNum = i - firstDay + 1;
    const isCurrentMonth = dayNum >= 1 && dayNum <= daysInMonth;
    const key = `${currentYear}-${currentMonth}-${dayNum}`;
    const dayEvents = eventsData[key] || [];
    const isToday = isCurrentMonth && today.getFullYear() === currentYear && today.getMonth() + 1 === currentMonth && today.getDate() === dayNum;
    const isJoined = joinedDays.has(key);
    const colIndex = i % 7;

    calendarCells.push(
      <div
        key={i}
        className={`cal-day relative border-b-3 border-r-3 border-black flex flex-col items-start justify-start pt-1 px-1 pb-1 min-h-[70px] ${colIndex === 6 ? 'border-r-0' : ''} ${!isCurrentMonth ? 'bg-black/5' : 'bg-white'} ${dayEvents.length ? 'has-event' : ''}`}
        onClick={() => dayEvents.length && isCurrentMonth && onDayClick({ day: dayNum, month: currentMonth, year: currentYear, events: dayEvents })}
      >
        <span className={`retro-label leading-none mb-1 ${isToday ? 'bg-black text-retro-yellow w-5 h-5 flex items-center justify-center rounded-full' : (isCurrentMonth ? 'text-black' : 'text-black/20')}`}>
          {isCurrentMonth ? dayNum : ''}
        </span>
        {isJoined && isCurrentMonth && (
          <div className="absolute top-1 right-1 w-3.5 h-3.5 flex items-center justify-center">
            <span className="material-symbols-outlined text-retro-yellow" style={{ fontSize: '11px', WebkitTextStroke: '1px #000' }}>star</span>
          </div>
        )}
        <div className="flex flex-col gap-0.5 w-full">
          {dayEvents.slice(0, 3).map((ev, j) => (
            <div key={j} className="flex items-center gap-0.5 px-1 py-0.5 border border-black w-full" style={{ background: ev.color }}>
              <span className="material-symbols-outlined" style={{ fontSize: '9px', color: ev.textColor }}>{ev.icon}</span>
              <span style={{ fontSize: '7px', fontWeight: 900, textTransform: 'uppercase', color: ev.textColor, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flex: 1 }}>{ev.label.slice(0, 10)}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="retro-card">
      <div className="flex items-center justify-between px-5 py-4 border-b-3 border-black bg-retro-yellow">
        <button onClick={prevMonth} className="retro-btn-sm w-9 h-9 !p-0">‹</button>
        <div className="text-center">
          <h2 className="retro-title text-2xl tracking-tighter">{fullMonthNames[currentMonth - 1]} {currentYear}</h2>
          <p className="retro-subtitle">Pick a date to see events</p>
        </div>
        <button onClick={nextMonth} className="retro-btn-sm w-9 h-9 !p-0">›</button>
      </div>
      <div className="grid grid-cols-7 border-b-3 border-black">
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
          <div key={d} className="py-2 text-center retro-label border-r-3 border-black last:border-r-0 bg-white">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7">{calendarCells}</div>
      <div className="border-t-3 border-black px-5 py-3 flex flex-wrap gap-4">
        {[
          { icon: 'bolt', color: 'bg-retro-red', textColor: 'text-white', label: 'Hackathon' },
          { icon: 'music_note', color: 'bg-retro-green', textColor: 'text-white', label: 'Cultural' },
          { icon: 'build', color: 'bg-retro-yellow', textColor: 'text-black', label: 'Workshop' },
          { icon: 'sports_soccer', color: 'bg-white', textColor: 'text-black', label: 'Sports' },
          { icon: 'star', color: 'bg-white', textColor: 'text-black', label: 'Joined' },
        ].map((l, i) => (
          <div key={i} className="meta-item gap-1.5">
            <div className={`w-5 h-5 ${l.color} border-2 border-black flex items-center justify-center`}><span className={`material-symbols-outlined ${l.textColor}`} style={{ fontSize: '11px' }}>{l.icon}</span></div>
            <span className="retro-label">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
