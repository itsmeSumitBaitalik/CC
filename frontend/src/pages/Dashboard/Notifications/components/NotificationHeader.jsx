import React from 'react';

const NotificationHeader = ({ onMarkAllRead }) => {
  return (
    <div className="bg-retro-yellow border-b-3 border-black px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-black flex items-center justify-center flex-shrink-0">
          <span className="material-symbols-outlined text-retro-yellow" style={{ fontSize: '13px' }}>
            notifications
          </span>
        </div>
        <span className="font-black uppercase text-sm tracking-tight">Notifications</span>
      </div>
      <button
        onClick={onMarkAllRead}
        className="mark-read-btn border-2 border-black px-2 py-0.5 text-xs font-black uppercase transition-all hover:bg-black hover:text-retro-yellow cursor-pointer"
      >
        Mark all read
      </button>
    </div>
  );
};

export default NotificationHeader;
