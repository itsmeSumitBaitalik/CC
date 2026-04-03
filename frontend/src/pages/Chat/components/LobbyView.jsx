// ── LobbyView ────────────────────────────────────────────────────────────────
// The landing view where users configure interests, match year, gender, and
// then kick off an anonymous chat session.

const INTEREST_TAGS = [
  "Hackathons", "Coding", "Design", "Music", "Sports",
  "Anime", "Startups", "Research", "Gaming", "Finance",
];

const MATCH_OPTIONS = ["Any Year", "1st–2nd", "3rd–4th", "Alumni"];

// ── InterestTag ────────────────────────────────────────────────────────────
function InterestTag({ label, selected, onToggle }) {
  return (
    <button
      onClick={() => onToggle(label)}
      className={`interest-tag border-3 border-black px-3 py-1 font-black uppercase text-xs ${
        selected ? "selected" : ""
      }`}
    >
      {label}
    </button>
  );
}

// ── GenderOption ───────────────────────────────────────────────────────────
function GenderOption({ value, label, icon, bg, iconColor, selected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(value)}
      className={`gender-opt flex-1 flex flex-col items-center gap-2 border-3 border-black p-4 ${
        selected ? "selected" : ""
      }`}
    >
      <div className={`w-10 h-10 ${bg} border-3 border-black flex items-center justify-center`}>
        <span className={`material-symbols-outlined ${iconColor} text-xl`}>{icon}</span>
      </div>
      <span className="font-black uppercase text-xs">{label}</span>
    </button>
  );
}

// ── LobbyView ─────────────────────────────────────────────────────────────
export default function LobbyView({
  selectedInterests,
  selectedMatch,
  selectedGender,
  onToggleInterest,
  onSetMatch,
  onSetGender,
  onStartChat,
}) {
  return (
    <div className="flex-1 flex flex-col items-center pt-12 pb-12 gap-6 overflow-y-auto retro-scroll bg-retro-yellow px-6">

      {/* ── Mascot + Title ── */}
      <div className="text-center">
        <div className="float inline-block mb-4" style={{ "--r": "-4deg" }}>
          <div className="w-24 h-24 bg-black border-3 border-black shadow-retro-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-retro-yellow" style={{ fontSize: "56px" }}>
              masks
            </span>
          </div>
        </div>
        <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">
          Campus<span className="bg-black text-retro-yellow px-2">Chat</span>
        </h2>
        <p className="text-sm font-black uppercase text-black/50 mt-2 tracking-widest">
          Anonymous • Interest-Based • Real Students
        </p>
      </div>

      {/* ── Config Card ── */}
      <div className="w-full max-w-xl bg-white border-3 border-black shadow-retro-lg">

        {/* Interests */}
        <div className="border-b-3 border-black p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-retro-green border-3 border-black flex-shrink-0" />
              <span className="font-black uppercase text-base">Your Interests</span>
              <div className="bg-retro-green border-2 border-black px-2 py-0.5">
                <span className="text-white font-black text-xs">ON</span>
              </div>
            </div>
            <button className="text-xs font-black uppercase border-3 border-black px-3 py-1 hover:bg-retro-yellow transition-colors">
              Manage
            </button>
          </div>

          {/* Selected interests display */}
          <div className="border-3 border-dashed border-black p-3 min-h-16">
            {selectedInterests.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {selectedInterests.map((tag) => (
                  <span
                    key={tag}
                    className="bg-retro-yellow border-3 border-black px-3 py-1 font-black uppercase text-xs shadow-retro-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-xs font-bold text-black/40 uppercase mt-2">
                Click tags below to add interests
              </p>
            )}
          </div>

          {/* Interest picker */}
          <div className="flex flex-wrap gap-2 mt-3">
            {INTEREST_TAGS.map((tag) => (
              <InterestTag
                key={tag}
                label={tag}
                selected={selectedInterests.includes(tag)}
                onToggle={onToggleInterest}
              />
            ))}
          </div>
        </div>

        {/* Match Year Filter */}
        <div className="border-b-3 border-black p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-retro-yellow border-3 border-black flex-shrink-0" />
            <span className="font-black uppercase text-base">Match With</span>
          </div>
          <div className="grid grid-cols-4 gap-0 border-3 border-black">
            {MATCH_OPTIONS.map((opt, i) => (
              <button
                key={opt}
                onClick={() => onSetMatch(opt)}
                className={`match-btn font-black uppercase text-xs py-3 ${
                  i < MATCH_OPTIONS.length - 1 ? "border-r-3 border-black" : ""
                } ${
                  selectedMatch === opt
                    ? "bg-black text-retro-yellow"
                    : "bg-white hover:bg-retro-yellow transition-colors"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Gender Filter */}
        <div className="border-b-3 border-black p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-retro-red border-3 border-black flex-shrink-0" />
            <span className="font-black uppercase text-base">Gender Filter</span>
          </div>
          <div className="flex gap-3 justify-center">
            <GenderOption
              value="male"
              label="Male"
              icon="male"
              bg="bg-retro-yellow"
              iconColor="text-black"
              selected={selectedGender === "male"}
              onSelect={onSetGender}
            />
            <GenderOption
              value="both"
              label="Both"
              icon="people"
              bg="bg-black"
              iconColor="text-retro-yellow"
              selected={selectedGender === "both"}
              onSelect={onSetGender}
            />
            <GenderOption
              value="female"
              label="Female"
              icon="female"
              bg="bg-retro-red"
              iconColor="text-white"
              selected={selectedGender === "female"}
              onSelect={onSetGender}
            />
          </div>
        </div>

        {/* Start Button */}
        <div className="p-5 flex gap-3">
          <button
            onClick={onStartChat}
            className="flex-1 bg-black text-retro-yellow border-3 border-black py-4 font-black uppercase text-lg shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined text-2xl">shuffle</span>
            Start Anonymous Chat
          </button>
        </div>
        <p className="text-center text-xs font-bold text-black/40 uppercase pb-4">
          Be respectful and follow our{" "}
          <span className="underline cursor-pointer">campus chat rules</span>
        </p>
      </div>

      {/* ── Stats Row ── */}
      <div className="flex gap-4 w-full max-w-xl">
        {[
          { value: "2.4k", label: "Chats Today" },
          { value: "847",  label: "Online Now" },
          { value: "92%",  label: "Stay Respectful" },
        ].map(({ value, label }) => (
          <div key={label} className="flex-1 bg-white border-3 border-black p-4 shadow-retro text-center">
            <p className="text-2xl font-black">{value}</p>
            <p className="text-xs font-black uppercase text-black/40 mt-1">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
