import StarRating from "./StarRating";

export default function MentorCard({ mentor, colorClass }) {
  
  console.log("mentor data from mentor card", mentor);

  return (
    <div className="retro-card card-lift overflow-hidden">
      <div className={`${colorClass} h-2 border-b-3 border-black`}></div>
      <div className="p-5">
        <div className="flex items-start gap-4 mb-3">
          <div className="relative flex-shrink-0">
            <div className="retro-avatar retro-avatar-md bg-retro-yellow">
              <span className="material-symbols-outlined text-2xl">person</span>
            </div>
            <div className={`retro-status-dot ${mentor.online ? 'online pulse' : 'offline'}`}></div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="retro-title text-base leading-none">{mentor.name}</h3>
            <p className="retro-meta mt-0.5">{mentor.dept}</p>
            <div className="flex items-center gap-0.5 mt-1">
              <StarRating rating={mentor.rating} />
              <span className="retro-label ml-1 text-black/50">{mentor.rating.toFixed(1)}</span>
            </div>
          </div>
          {mentor.mine && (
            <div className="retro-badge bg-retro-red text-white flex-shrink-0">MY MENTOR</div>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {mentor.skills.map((s, j) => (
            <span key={j} className={`skill-tag retro-badge ${j === 0 ? 'bg-retro-yellow' : ''}`}>{s}</span>
          ))}
        </div>
        <p className="text-sm font-medium text-black/60 mb-4 leading-snug">{mentor.bio}</p>
        <button className={`retro-btn w-full py-2 text-sm ${mentor.mine ? 'retro-btn-primary' : 'bg-white'}`}>
          {mentor.mine ? 'Message →' : 'Connect →'}
        </button>
      </div>
    </div>
  );
}
