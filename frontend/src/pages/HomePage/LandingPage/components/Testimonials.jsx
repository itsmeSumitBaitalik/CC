export default function Testimonials() {
  const testimonialsData = [
    {
      id: 1,
      name: "Aryan Mehta",
      college: "VJTI Mumbai, 2nd Year",
      testimonial: "I found out about my college's biggest hackathon through CampusConnect just 2 days before registration closed. Won 2nd place!",
      color: "#F5A623",
    },
    {
      id: 2,
      name: "Priya Sharma",
      college: "DTU Delhi, 1st Year",
      testimonial: "The anonymous chat helped me make 3 real friends in my first week. It felt way less scary than walking up to strangers.",
      color: "#4CAF50",
    },
    {
      id: 3,
      name: "Karan Patel",
      college: "BITS Pilani, 3rd Year",
      testimonial: "Found my mentor through the platform. He helped me crack my first internship interview. Couldn't have done it alone.",
      color: "#E05C3A",
    },
  ];
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
        {testimonialsData.map((item, index) => (

          <div className="bg-white border-4 border-black p-8 shadow-retro flex flex-col" key={index}>
            <span className="text-6xl font-black text-[#F5A623] leading-none block mb-4">
              "
            </span>

            <div className="flex flex-col justify-between h-full" >
              <p className="text-lg font-bold mb-6">
                {item.testimonial}
              </p>

              <div className="border-t-2 border-black pt-4">
                <p className="font-black uppercase">{item.name}</p>
                <p className="text-sm font-medium">{item.college}</p>
              </div>
            </div>

          </div>
        ))}

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