import React from 'react';

const AuthLeftPanel = ({ label, title, subtitle, children }) => {
  return (
    <div className="w-full md:w-[40%] flex flex-col gap-6 md:sticky md:top-24 h-max">
      {/* Section label */}
      <div className="inline-flex items-center gap-2">
        <div className="w-2.5 h-2.5 bg-retro-green flex-shrink-0" />
        <div className="bg-black text-white text-[11px] font-bold tracking-widest uppercase px-2.5 py-1">
          {label}
        </div>
      </div>

      {/* Hero heading */}
      <h1 className="text-[52px] font-bold leading-[1.05] uppercase text-black tracking-tight">
        {title}
      </h1>

      {/* Subtext */}
      <p className="text-[15px] font-medium text-black leading-relaxed max-w-[340px]">
        {subtitle}
      </p>

      {/* Dynamic Content (Features or XP Cards) */}
      {children}
    </div>
  );
};

export default AuthLeftPanel;
