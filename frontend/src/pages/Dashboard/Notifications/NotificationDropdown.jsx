import React, { useState, useEffect, useRef } from 'react';
import NotificationHeader from './components/NotificationHeader';
import NotificationItem from './components/NotificationItem';
import NotificationEmptyState from './components/NotificationEmptyState';
import { getNotifications, responseRequest } from '../../../api/allApis/notification.api';
import socket from '../../../lib/socket';

const NotificationDropdown = () => {
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const dropdownRef = useRef(null);

  const fetchNotifications = async () => {
    try {
      const res = await getNotifications();
      // Extract notifications array from response
      // console.log("notification response", res);  
      const data = res.data?.notifications || res.data || [];
      setNotifications(Array.isArray(data) ? data : []);
      updateUnreadCount(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Failed to fetch notifications:', err);
    }
  };

  const updateUnreadCount = (list) => {
    const count = list.filter((n) => !n.isRead).length;
    setUnreadCount(count);
  };

  useEffect(() => {
    fetchNotifications();

    // Listen for real-time notifications
    socket.on("notification:new", (newNotif) => {
      setNotifications((prev) => {
        // Prevent duplicates
        if (prev.find(n => (n._id || n.id) === (newNotif._id || newNotif.id))) return prev;
        const updated = [newNotif, ...prev];
        updateUnreadCount(updated);
        return updated;
      });
    });

    return () => {
      socket.off("notification:new");
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      fetchNotifications();
    }
  };

  const handleMarkAllRead = async () => {
    try {
      // Assuming a markAllRead API exists or we update each 
      // await markAllRead(); // Need to check if this exists in notification.api.js

      const updated = notifications.map((n) => ({ ...n, isRead: true }));
      setNotifications(updated);
      setUnreadCount(0);
    } catch (err) {
      console.error('Failed to mark all read:', err);
    }
  };

  const handleRespond = async (referenceId, status, notifId) => {
    try {
      // API call: responseRequest(requestId, status) 
      // requestId should be referenceId (the ID of the pending request)
      await responseRequest(referenceId, status);
      
      const updated = notifications.map((n) => {
        const idMatched = (n._id && n._id === notifId) || (n.id && n.id === notifId);
        return idMatched ? { ...n, message: status, status: status, isRead: true } : n;
      });
      setNotifications(updated);
      updateUnreadCount(updated);
    } catch (err) {
      console.error('Failed to respond to request:', err);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Topbar Bell Button */}
      <button
        onClick={handleToggle}
        className="relative w-10 h-10 bg-white border-3 border-black flex items-center justify-center shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer"
      >
        <span className="material-symbols-outlined text-xl">notifications</span>
        {unreadCount > 0 && (
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-retro-red border-2 border-black flex items-center justify-center rounded-full">
            <span className="text-white text-[10px] font-black leading-none">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          </div>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-14 w-80 bg-white border-3 border-black shadow-retro z-50 animate-in fade-in zoom-in duration-150">
          <NotificationHeader onMarkAllRead={handleMarkAllRead} />

          {/* List */}
          <div className="max-h-80 overflow-y-auto divide-y-2 divide-black/10 retro-scroll">
            {notifications.length > 0 ? (
              notifications.map((n) => (
                <NotificationItem
                  key={n._id}
                  notification={n}
                  onRespond={handleRespond}
                />
              ))
            ) : (
              <NotificationEmptyState />
            )}
          </div>

          {/* Footer */}
          <div className="border-t-3 border-black px-4 py-2 bg-white">
            <p className="text-xs font-bold uppercase text-black/30 text-center">
              CampusConnect Notifications
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
