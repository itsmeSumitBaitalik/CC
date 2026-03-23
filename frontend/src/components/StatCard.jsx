export default function StatCard({ icon, count, label, bg, iconColor, className = "" }) {
  const textColor = iconColor || (bg === "bg-white" || bg === "bg-retro-yellow" ? "text-black" : "text-white");
  return (
    <div className={`retro-card p-4 card-hover flex gap-4 items-center ${className}`}>
      <div className={`retro-icon-box ${bg}`}>
        <span className={`material-symbols-outlined ${textColor} text-2xl`}>{icon}</span>
      </div>
      <div>
        <p className="text-3xl font-black leading-none">{count}</p>
        <p className="retro-meta mt-1">{label}</p>
      </div>
    </div>
  );
}
