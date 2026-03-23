import { useCases } from "../asset/Data";

export default function UseCases() {
  return (
    <>
      {/* USE CASES */}

      <section className="max-w-6xl mx-auto px-6 py-12 relative">
        <div className="mb-12">
          <div className="flex items-center gap-0 mb-4">
            <div className="w-8 h-8 bg-[#4CAF50] border-4 border-black shrink-0"></div>

            <h2 className="text-6xl font-black uppercase tracking-tighter bg-black text-white px-8 py-3 border-4 border-black shadow-retro">
              USE CASES
            </h2>
          </div>

          <p className="text-2xl font-bold uppercase mt-4 italic">
            CampusConnect works for every kind of student.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((item, i) => (
            <div
              key={i}
              className="bg-white border-4 border-black p-8 shadow-retro flex flex-col gap-6 relative"
            >
              <div
                className={`absolute -top-4 -right-4 px-4 py-1 font-bold text-sm border-4 border-black ${item.tagColor}`}
              >
                {item.tag}
              </div>

              <div
                className={`w-16 h-16 border-4 border-black flex items-center justify-center ${item.iconBg}`}
              >
                <span
                  className={`material-symbols-outlined text-4xl ${item.iconColor}`}
                >
                  {item.icon}
                </span>
              </div>

              <h3 className="text-3xl font-black uppercase">{item.title}</h3>

              <p className="font-medium text-lg text-gray-800">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Floating Icons */}

        <div
          className="absolute top-10 left-4 bg-[#4CAF50] border-4 border-black p-2 shadow-retro rotate-[8deg] -z-10 w-12 h-12 flex items-center justify-center floating-icon-box"
          style={{ "--rotation": "8deg", animationDelay: "2.8s" }}
        >
          <span className="material-symbols-outlined text-white">
            rocket_launch
          </span>
        </div>

        <div
          className="absolute top-10 right-4 bg-white border-4 border-black p-2 shadow-retro -rotate-12 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box"
          style={{ "--rotation": "-12deg", animationDelay: "3.2s" }}
        >
          <span className="material-symbols-outlined">ads_click</span>
        </div>

        <div
          className="absolute bottom-10 left-4 bg-white border-4 border-black p-2 shadow-retro rotate-10 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box"
          style={{ "--rotation": "10deg", animationDelay: "3.6s" }}
        >
          <span className="material-symbols-outlined">lightbulb</span>
        </div>

        <div
          className="absolute bottom-10 right-4 bg-[#E05C3A] border-4 border-black p-2 shadow-retro -rotate-[8deg] -z-10 w-12 h-12 flex items-center justify-center floating-icon-box"
          style={{ "--rotation": "-8deg", animationDelay: "4s" }}
        >
          <span className="material-symbols-outlined text-white">
            emoji_events
          </span>
        </div>
      </section>
    </>
  );
}
