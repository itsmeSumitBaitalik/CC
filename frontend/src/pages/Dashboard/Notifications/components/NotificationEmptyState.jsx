import React from 'react';

const NotificationEmptyState = () => {
  return (
    <div className="py-10 text-center">
      <span className="material-symbols-outlined text-4xl text-black/20">
        notifications_off
      </span>
      <p className="text-xs font-black uppercase text-black/30 mt-2">
        No notifications yet
      </p>
    </div>
  );
};

export default NotificationEmptyState;
