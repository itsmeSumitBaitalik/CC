// ── FindingView ───────────────────────────────────────────────────────────────
// Shown while the app is searching for an anonymous match.

export default function FindingView({ selectedInterests, onCancel }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-6 bg-retro-yellow">

      {/* Radar icon */}
      <div className="text-center">
        <div className="w-24 h-24 bg-black border-3 border-black shadow-retro-lg flex items-center justify-center mx-auto mb-6">
          <span
            className="material-symbols-outlined text-retro-yellow spin-slow"
            style={{ fontSize: "52px" }}
          >
            radar
          </span>
        </div>

        <h2 className="text-4xl font-black uppercase tracking-tighter finding">
          Finding a match...
        </h2>
        <p className="text-sm font-black uppercase text-black/50 mt-2">
          Matching based on your interests
        </p>

        {/* Interest tags */}
        <div className="flex gap-2 flex-wrap justify-center mt-4">
          {selectedInterests.length > 0 ? (
            selectedInterests.map((tag) => (
              <span
                key={tag}
                className="bg-white border-3 border-black px-3 py-1 font-black uppercase text-xs shadow-retro-sm"
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="bg-white border-3 border-black px-3 py-1 font-black uppercase text-xs">
              Any Topic
            </span>
          )}
        </div>
      </div>

      {/* Cancel */}
      <button
        onClick={onCancel}
        className="bg-retro-red border-3 border-black px-8 py-3 font-black uppercase text-sm shadow-retro text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
      >
        Cancel
      </button>
    </div>
  );
}
