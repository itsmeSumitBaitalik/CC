import React from 'react';

const QuickStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((s, i) => (
        <div key={i} className={`${s.bg} border-3 border-black p-4 shadow-retro card-lift flex flex-col items-start`}>
          <span className={`material-symbols-outlined text-3xl ${s.textClass || 'text-white'}`}>{s.icon}</span>
          <p className={`text-3xl font-black mt-1 leading-none ${s.textClass || 'text-white'}`}>{s.count}</p>
          <p className={`text-xs font-black uppercase mt-1 ${s.textClass || 'text-white/70'}`}>
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
