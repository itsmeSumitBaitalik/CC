export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 relative">

      <div className="mb-12">
        <div className="flex items-center gap-0 mb-4">
          <div className="w-8 h-8 bg-[#4CAF50] border-4 border-black shrink-0"></div>

          <h2 className="text-6xl font-black uppercase tracking-tighter bg-black text-white px-8 py-3 border-4 border-black shadow-retro">
            WHAT STUDENTS SAY
          </h2>
        </div>

        <p className="text-2xl font-bold uppercase mt-4 italic">
          Real stories from real students across India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-white border-4 border-black p-8 shadow-retro">
          <span className="text-6xl font-black text-[#F5A623] leading-none block mb-4">
            "
          </span>

          <p className="text-lg font-bold mb-6">
            I found out about my college's biggest hackathon through
            CampusConnect just 2 days before registration closed. Won 2nd place!
          </p>

          <div className="border-t-2 border-black pt-4">
            <p className="font-black uppercase">Aryan Mehta</p>
            <p className="text-sm font-medium">VJTI Mumbai, 2nd Year</p>
          </div>
        </div>

        <div className="bg-white border-4 border-black p-8 shadow-retro">
          <span className="text-6xl font-black text-[#4CAF50] leading-none block mb-4">
            "
          </span>

          <p className="text-lg font-bold mb-6">
            The anonymous chat helped me make 3 real friends in my first week.
            It felt way less scary than walking up to strangers.
          </p>

          <div className="border-t-2 border-black pt-4">
            <p className="font-black uppercase">Priya Sharma</p>
            <p className="text-sm font-medium">DTU Delhi, 1st Year</p>
          </div>
        </div>

        <div className="bg-white border-4 border-black p-8 shadow-retro">
          <span className="text-6xl font-black text-[#E05C3A] leading-none block mb-4">
            "
          </span>

          <p className="text-lg font-bold mb-6">
            Found my mentor through the platform. He helped me crack my first
            internship interview. Couldn't have done it alone.
          </p>

          <div className="border-t-2 border-black pt-4">
            <p className="font-black uppercase">Karan Patel</p>
            <p className="text-sm font-medium">BITS Pilani, 3rd Year</p>
          </div>
        </div>

      </div>

      {/* Floating Icons */}

      <div
        className="absolute top-10 left-4 bg-[#4CAF50] border-4 border-black p-2 shadow-retro -rotate-12 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box"
        style={{ "--rotation": "8deg", animationDelay: "2.8s" }}
      >
        <span className="material-symbols-outlined text-white">format_quote</span>
      </div>

      <div
        className="absolute top-10 right-4 bg-white border-4 border-black p-2 shadow-retro rotate-10 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box"
        style={{ "--rotation": "-12deg", animationDelay: "3.2s" }}
      >
        <span className="material-symbols-outlined">favorite</span>
      </div>

      <div
        className="absolute bottom-10 left-4 bg-white border-4 border-black p-2 shadow-retro -rotate-8 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box"
        style={{ "--rotation": "10deg", animationDelay: "3.6s" }}
      >
        <span className="material-symbols-outlined">thumb_up</span>
      </div>

      <div
        className="absolute bottom-10 right-4 bg-[#E05C3A] border-4 border-black p-2 shadow-retro rotate-12 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box"
        style={{ "--rotation": "-8deg", animationDelay: "4s" }}
      >
        <span className="material-symbols-outlined text-white">
          sentiment_satisfied
        </span>
      </div>

    </section>
  );
}