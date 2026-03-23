export default function Stats() {
  return (
<>
     {/* Stats Section */}
      <div className="bg-black w-full py-9 border-y-4 border-black">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {[
            ["500+", "Students Connected"],
            ["50+", "Campus Events Listed"],
            ["30+", "Active Communities"],
            ["100%", "Free To Use"],
          ].map(([num, label], i) => (
            <div
              key={i}
              className="flex flex-col items-center border-r-0 md:border-r-2 border-white/30 last:border-r-0"
            >
              <span className="text-4xl font-black text-white">{num}</span>
              <span className="text-xs text-white uppercase font-bold tracking-widest mt-1">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
      </>
  );
}