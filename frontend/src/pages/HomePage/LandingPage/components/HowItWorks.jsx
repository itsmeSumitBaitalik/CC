export default function HowItWorks() {
  return (
    <>
      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-y-4 border-black relative bg-retro-yellow">
        <div className="mb-12">
          <div className="flex items-center gap-0 mb-4">
            <div className="w-8 h-8 bg-[#4CAF50] border-4 border-black shrink-0"></div>

            <h2 className="text-6xl font-black uppercase tracki ng-tighter bg-black text-white px-8 py-3 border-4 border-black shadow-retro">
              HOW IT WORKS
            </h2>
          </div>

          <p className="text-2xl font-bold uppercase mt-4 italic">
            Get started in 3 simple steps.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row gap-8">
          <div className="hidden md:block absolute top-1/2 left-0 w-full border-t-4 border-black border-dashed -translate-y-1/2 -z-10"></div>

          {/* Step 1 */}

          <div className="flex-1 bg-white border-4 border-black p-8 shadow-retro flex flex-col items-center text-center relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-xl border-4 border-black">
              01
            </div>

            <div className="bg-[#4CAF50] w-16 h-16 border-4 border-black flex items-center justify-center mb-6 mt-4">
              <span className="material-symbols-outlined text-white text-4xl">
                person
              </span>
            </div>

            <h3 className="text-xl font-black uppercase mb-4">
              CREATE YOUR PROFILE
            </h3>

            <p className="font-bold">
              Sign up with your college email. Set your interests, year, and
              department.
            </p>
          </div>

          {/* Step 2 */}

          <div className="flex-1 bg-white border-4 border-black p-8 shadow-retro flex flex-col items-center text-center relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-xl border-4 border-black">
              02
            </div>

            <div className="bg-[#E05C3A] w-16 h-16 border-4 border-black flex items-center justify-center mb-6 mt-4">
              <span className="material-symbols-outlined text-white text-4xl">
                explore
              </span>
            </div>

            <h3 className="text-xl font-black uppercase mb-4">
              EXPLORE YOUR CAMPUS
            </h3>

            <p className="font-bold">
              Discover events, communities, mentors and students who match your
              vibe.
            </p>
          </div>

          {/* Step 3 */}

          <div className="flex-1 bg-white border-4 border-black p-8 shadow-retro flex flex-col items-center text-center relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-xl border-4 border-black">
              03
            </div>

            <div className="bg-white w-16 h-16 border-4 border-black flex items-center justify-center mb-6 mt-4">
              <span className="material-symbols-outlined text-black text-4xl">
                handshake
              </span>
            </div>

            <h3 className="text-xl font-black uppercase mb-4">
              CONNECT & GROW
            </h3>

            <p className="font-bold">
              Chat anonymously, join clubs, attend events, find mentors — all in
              one place.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
