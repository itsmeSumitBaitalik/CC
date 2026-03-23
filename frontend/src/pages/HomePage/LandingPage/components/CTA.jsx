export default function CTA() {

  const floatingIcon =
    "absolute z-0 w-12 h-12 flex items-center justify-center border-4 border-black shadow-retro floating-icon-box";

  const floatingLarge =
    "border-4 border-black p-6 shadow-retro";

  const ctaButton =
    "border-4 border-black px-10 py-4 text-xl font-black shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase";

  return (
    <section className="bg-retro-yellow py-12 px-6 relative overflow-hidden border-black max-w-6xl mx-auto">

      <div
        className={`${floatingIcon} left-20 top-10 bg-[#E05C3A] rotate-10`}
        style={{ "--rotation": "10deg", animationDelay: "6.8s" }}
      >
        <span className="material-symbols-outlined text-white">bolt</span>
      </div>

      <div
        className={`${floatingIcon} right-20 top-10 bg-[#4CAF50] -rotate-[8deg]`}
        style={{ "--rotation": "-8deg", animationDelay: "7.2s" }}
      >
        <span className="material-symbols-outlined text-white">flag</span>
      </div>

      {/* Side Decorations */}

      <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 z-0">
        <div
          className={`${floatingLarge} bg-[#4CAF50] rotate-12`}
          style={{ "--rotation": "-12deg", animationDelay: "7.6s" }}
        >
          <span className="material-symbols-outlined text-5xl text-white">
            rocket_launch
          </span>
        </div>
      </div>

      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-0">
        <div
          className={`${floatingLarge} bg-white rotate-12`}
          style={{ "--rotation": "12deg", animationDelay: "8s" }}
        >
          <span className="material-symbols-outlined text-5xl text-black">
            star
          </span>
        </div>
      </div>

      {/* CTA Card */}

      <div className="max-w-4xl mx-auto bg-white border-4 border-black p-12 shadow-retro relative z-10 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
          Ready to connect with your campus?
        </h2>

        <p className="text-xl font-bold text-gray-800 mb-10 max-w-2xl">
          Join thousands of students already discovering events, mentors, and
          communities on CampusConnect.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">

          <button className={`${ctaButton} bg-[#4CAF50]`}>
            Get Started
          </button>

          <button className={`${ctaButton} bg-white`}>
            Learn More
          </button>

        </div>
      </div>

    </section>
  );
}