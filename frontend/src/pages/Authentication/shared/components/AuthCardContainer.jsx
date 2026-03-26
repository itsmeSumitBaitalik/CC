import React from 'react';

const AuthCardContainer = ({ icon, iconColor, iconClass = "", title, subtitle, children, footer, maxWidth = "max-w-[420px]" }) => {
  return (
    <div className={`bg-white border-3 border-black shadow-retro-lg p-5 sm:p-7 md:p-9 w-full md:w-[60%] ${maxWidth}`}>
      {/* Card Header */}
      <div className="flex items-center gap-3 mb-7 pb-5 border-b-2 border-black">
        <div className={`w-11 h-11 ${iconColor} border-2 border-black flex items-center justify-center`}>
          <span className={`material-symbols-outlined ${iconClass}`} style={{ fontSize: "22px" }}>{icon}</span>
        </div>
        <div>
          <div className="text-[22px] font-bold uppercase tracking-wider text-black">{title}</div>
          <div className="text-[12px] font-medium text-[#555] mt-0.5">{subtitle}</div>
        </div>
      </div>

      {children}

      {/* Card Bottom / Footer */}
      {footer}
    </div>
  );
};

export default AuthCardContainer;
