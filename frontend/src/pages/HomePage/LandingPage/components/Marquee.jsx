export default function Marquee() {
  return (
    <div className="bg-black py-4 border-y-4 border-black marquee-container overflow-hidden whitespace-nowrap flex w-full">
      <div className="marquee-wrapper flex whitespace-nowrap w-max">
        <span className="text-retro-yellow text-2xl font-black uppercase mx-4">
          Hackathons • Concerts • Clubs • Study Groups • Mentors • Friend Requests • Hackathons • Concerts • Clubs • Study Groups • Mentors • Friend Requests •
        </span>

        <span className="text-retro-yellow text-2xl font-black uppercase mx-4">
          Hackathons • Concerts • Clubs • Study Groups • Mentors • Friend Requests • Hackathons • Concerts • Clubs • Study Groups • Mentors • Friend Requests •
        </span>
      </div>

      <style>{`
        .marquee-wrapper {
          animation: marqueeSlide 18s linear infinite;
        }

        @keyframes marqueeSlide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}