import { useState, useEffect } from "react";

const EVENT_TYPES = ["Workshop", "Seminar", "Hackathon", "Conference", "Webinar", "Cultural", "Sports", "Other"];

export default function EventModal({ isOpen, onClose, onSubmit, initialData = null, isLoading = false }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    registrationLink: "",
    campusName: "",
    eventType: "Workshop",
    totalSeats: "",
  });

  // Populate data when editing
  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setFormData({
          title: initialData.title || "",
          description: initialData.description || "",
          date: initialData.date ? new Date(initialData.date).toISOString().split('T')[0] : "",
          time: initialData.time || "",
          location: initialData.location || "",
          registrationLink: initialData.registrationLink || "",
          campusName: initialData.campusName || "",
          eventType: initialData.eventType || "Workshop",
          totalSeats: initialData.totalSeats || "",
        });
      } else {
        // Reset
        setFormData({
          title: "",
          description: "",
          date: "",
          time: "",
          location: "",
          registrationLink: "",
          campusName: "",
          eventType: "Workshop",
          totalSeats: "",
        });
      }
    }
  }, [isOpen, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  const inputCls = "w-full border-2 border-black px-3 py-2 bg-white text-sm font-medium shadow-retro-sm focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] outline-none transition-all";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 font-display">
      <div className="bg-retro-yellow border-4 border-black w-full max-w-lg shadow-retro max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b-4 border-black px-5 py-4 flex items-center justify-between">
          <h2 className="text-xl font-black uppercase tracking-wider">
            {initialData ? "Edit Event" : "Create Event"}
          </h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center border-2 border-black hover:bg-retro-red hover:text-white transition-colors font-black">
            ✕
          </button>
        </div>

        {/* Scrollable Body */}
        <form id="event-form" onSubmit={handleSubmit} className="p-5 flex flex-col gap-4 overflow-y-auto retro-scroll bg-[#fafafa]">
          
          <div>
            <label className="block text-xs font-black uppercase mb-1.5 text-black">Event Title *</label>
            <input required type="text" name="title" value={formData.title} onChange={handleChange} className={inputCls} placeholder="e.g. HackSprint 2025" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase mb-1.5 text-black">Event Type *</label>
              <select required name="eventType" value={formData.eventType} onChange={handleChange} className={inputCls}>
                {EVENT_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-black uppercase mb-1.5 text-black">Date *</label>
              <input required type="date" name="date" value={formData.date} onChange={handleChange} className={inputCls} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase mb-1.5 text-black">Campus Name *</label>
              <input required type="text" name="campusName" value={formData.campusName} onChange={handleChange} className={inputCls} placeholder="e.g. Main Campus" />
            </div>
            <div>
              <label className="block text-xs font-black uppercase mb-1.5 text-black">Location *</label>
              <input required type="text" name="location" value={formData.location} onChange={handleChange} className={inputCls} placeholder="e.g. Block C, Room 204" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase mb-1.5 text-black">Registration Link *</label>
            <input required type="url" name="registrationLink" value={formData.registrationLink} onChange={handleChange} className={inputCls} placeholder="https://..." />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase mb-1.5 text-black">Time *</label>
              <input required type="text" name="time" value={formData.time} onChange={handleChange} className={inputCls} placeholder="e.g. 10:00 AM — 2:00 PM" />
            </div>
            <div>
              <label className="block text-xs font-black uppercase mb-1.5 text-black">Total Seats</label>
              <input type="number" name="totalSeats" value={formData.totalSeats} onChange={handleChange} className={inputCls} placeholder="e.g. 100" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase mb-1.5 text-black">Description *</label>
            <textarea required name="description" value={formData.description} onChange={handleChange} rows="3" className={inputCls} placeholder="What is this event about?"></textarea>
          </div>

        </form>

        {/* Footer */}
        <div className="bg-white border-t-4 border-black px-5 py-4 flex justify-end gap-3 flex-shrink-0">
          <button type="button" onClick={onClose} disabled={isLoading} className="px-5 py-2 border-2 border-black font-black uppercase text-sm hover:bg-black hover:text-white transition-colors">
            Cancel
          </button>
          <button type="submit" form="event-form" disabled={isLoading} className="px-5 py-2 bg-retro-green text-white border-2 border-black shadow-retro-sm font-black uppercase text-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
            {isLoading ? "Saving..." : (initialData ? "Update Event" : "Create Event")}
          </button>
        </div>
      </div>
    </div>
  );
}
