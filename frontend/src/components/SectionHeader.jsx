export default function SectionHeader({ color = "bg-retro-green", title, badge, badgeBg, action, onAction, size = "lg" }) {
  const squareSize = size === "lg" ? "w-6 h-6" : "w-5 h-5";

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-0">
        <div className={`${squareSize} ${color} border-3 border-black shrink-0`}></div>
        <h2 className={`retro-title retro-card px-4 py-1.5 ${size === "lg" ? "text-xl" : "text-lg"}`}>{title}</h2>
        {badge && (
          <div className={`retro-badge ml-3 ${badgeBg || "bg-retro-red"} text-white shadow-retro-sm`}>
            {badge}
          </div>
        )}
      </div>
      {action && (
        <button onClick={onAction} className="retro-btn-sm">{action}</button>
      )}
    </div>
  );
}
