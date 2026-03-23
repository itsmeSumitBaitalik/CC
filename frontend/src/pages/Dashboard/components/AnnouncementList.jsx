export default function AnnouncementList() {
  const announcements = [
    { title: "Exam Schedule Released", time: "2 hours ago", dotColor: "bg-retro-green", pulse: true },
    { title: "Library Extended Hours", time: "5 hours ago", dotColor: "bg-retro-yellow", pulse: false },
    { title: "Hackathon Reg. Closing Soon!", time: "Yesterday", dotColor: "bg-retro-red", pulse: true },
  ];

  return (
    <div className="retro-card divide-y-3 divide-black">
      {announcements.map((ann, i) => (
        <div key={i} className="p-3 flex items-start gap-3 hover:bg-retro-yellow/40 transition-colors cursor-pointer">
          <div className={`w-2.5 h-2.5 rounded-full ${ann.dotColor} border-2 border-black mt-1.5 flex-shrink-0 ${ann.pulse ? "pulse" : ""}`}></div>
          <div>
            <p className="retro-title text-sm">{ann.title}</p>
            <p className="retro-meta mt-0.5">{ann.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
