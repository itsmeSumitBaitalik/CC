export default function Hero() {
  const styles = {
    floatingIcon: "border-4 border-black p-4 shadow-retro floating-icon-box",

    buttonBase:
      "border-4 border-black px-10 py-4 text-xl font-black shadow-retro-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all",
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
      <div className="relative mb-8">
        <h1 className="text-6xl md:text-8xl font-black leading-none uppercase tracking-tighter max-w-4xl mb-8">
          Never Miss What's{" "}
          <span className="bg-white px-4 border-4 border-black">Happening</span>{" "}
          On Campus
        </h1>

        {/* Floating Icons */}

        <div className="hidden md:block absolute -top-10 -left-20 animate-bounce">
          <div
            className={`bg-white ${styles.floatingIcon} -rotate-12`}
            style={{ "--rotation": "-12deg", animationDelay: "0s" }}
          >
            <span className="material-symbols-outlined text-4xl">school</span>
          </div>
        </div>

        <div className="hidden md:block absolute top-30 -right-2 animate-pulse">
          <div
            className={`bg-[#4CAF50] ${styles.floatingIcon} rotate-15`}
            style={{ "--rotation": "15deg", animationDelay: "0.4s" }}
          >
            <span className="material-symbols-outlined text-4xl text-white">
              coffee
            </span>
          </div>
        </div>

        <div className="hidden md:block absolute -bottom-10 left-10 animate-bounce">
          <div
            className={`bg-[#E05C3A] ${styles.floatingIcon} rotate-[5deg]`}
            style={{ "--rotation": "5deg", animationDelay: "0.8s" }}
          >
            <span className="material-symbols-outlined text-4xl text-white">
              campaign
            </span>
          </div>
        </div>
      </div>

      <p className="text-xl md:text-2xl font-medium max-w-2xl mb-12 bg-white/50 border-4 border-black p-4 inline-block">
        Discover events, find mentors, join communities — all in one place.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <button className={`bg-[#4CAF50] ${styles.buttonBase}`}>
          GET STARTED
        </button>

        <button className={`bg-white ${styles.buttonBase}`}>LEARN MORE</button>
      </div>
    </section>
  );
}
