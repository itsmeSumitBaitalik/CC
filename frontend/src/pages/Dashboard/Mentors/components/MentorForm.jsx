export default function MentorForm({ isOpen, onClose }) {
  return (
    <div className={`form-panel ${isOpen ? 'open' : ''}`}>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="retro-label">Full Name</label>
          <input className="retro-input" placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="retro-label">Year / Department</label>
          <input className="retro-input" placeholder="e.g. 3rd Year • Computer Science" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="retro-label">Primary Skills</label>
          <input className="retro-input" placeholder="React, DSA, Design, etc." />
        </div>
        <div className="flex flex-col gap-1">
          <label className="retro-label">Availability</label>
          <select className="retro-select">
            <option>Weekdays only</option>
            <option>Weekends only</option>
            <option>Anytime</option>
            <option>By appointment</option>
          </select>
        </div>
        <div className="md:col-span-2 flex flex-col gap-1">
          <label className="retro-label">Why do you want to mentor?</label>
          <textarea rows="3" className="retro-input resize-none" placeholder="Tell juniors what they can expect from sessions with you..."></textarea>
        </div>
        <div className="md:col-span-2 flex gap-4">
          <button className="retro-btn retro-btn-dark px-8 py-3">Submit Application →</button>
          <button onClick={onClose} className="retro-btn px-8 py-3">Cancel</button>
        </div>
      </div>
    </div>
  );
}
