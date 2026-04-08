import React from 'react';

const NotificationItem = ({ notification, onRespond }) => {
  const { type, message, status, isRead, sender, createdAt, referenceId, _id, id } = notification;

  // Normalize ID and status/message
  const actualNotifId = _id || id;
  const currentMsg = status || message;

  const isPending = type === 'friend_request' && !currentMsg;
  const isAccepted = type === 'friend_request' && currentMsg === 'accepted';
  const isRejected = type === 'friend_request' && currentMsg === 'rejected';

  const timeAgo = (dateStr) => {
    const diff = Math.floor((Date.now() - new Date(dateStr)) / 1000);
    if (diff < 60) return 'just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  const avatar = sender?.avatar ? (
    <img
      src={sender.avatar}
      alt={sender.username}
      className="w-9 h-9 rounded-full border-3 border-black object-cover"
    />
  ) : (
    <div className="w-9 h-9 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center flex-shrink-0">
      <span className="material-symbols-outlined text-lg">person</span>
    </div>
  );
  // console.log("username", referenceId?.sender?.username)
  const ful = referenceId?.sender?.username || 'Someone';
  const time = timeAgo(createdAt);

  return (
    <div className={`flex items-start gap-3 px-4 py-3 notif-item transition-colors hover:bg-retro-yellow/15 ${!isRead ? 'bg-retro-yellow/10' : ''} ${isRejected ? 'opacity-60' : ''}`}>
      <div className="flex-shrink-0 relative">
        {avatar}
        {!isRead && <div className="absolute -top-1 -right-1 w-2 h-2 bg-retro-red border-2 border-black rounded-full pulse"></div>}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-black uppercase leading-tight">
          <span className="text-black">
            {isAccepted ? 'You' : ful}{' '}
          </span>
          <span className="font-medium text-black/60">
            {isPending && 'sent you a friend request'}
            {isAccepted && `accepted ${ful} friend request`}
            {isRejected && 'declined your friend request'}
          </span>
        </p>
        <p className="text-xs font-bold text-black/30 uppercase mt-0.5">{time}</p>

        {isPending && (
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => onRespond(referenceId?._id || referenceId, 'accepted', actualNotifId)}
              className="bg-[#4CAF50] text-white border-3 border-black px-3 py-1 font-black text-[11px] uppercase cursor-pointer shadow-[2px_2px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            >
              Accept
            </button>
            <button
              onClick={() => onRespond(referenceId?._id || referenceId, 'rejected', actualNotifId)}
              className="bg-white text-black border-3 border-black px-3 py-1 font-black text-[11px] uppercase cursor-pointer shadow-[2px_2px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none hover:bg-retro-red hover:text-white transition-all"
            >
              Reject
            </button>
          </div>
        )}

        {isAccepted && (
          <div className="mt-1.5 inline-flex items-center gap-1 bg-retro-green border-2 border-black px-2 py-0.5">
            <span className="material-symbols-outlined text-white" style={{ fontSize: '12px' }}>
              check
            </span>
            <span className="text-white font-black text-xs uppercase">Now Friends</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationItem;
