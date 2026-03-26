/**
 * TickerBanner — shared by Login and Signup
 * Accepts an `items` array prop so each page can have its own text.
 */
const TickerBanner = ({ items }) => {
  // Duplicate for seamless infinite loop
  const loopItems = [...items, ...items];

  return (
    <div className="bg-black overflow-hidden py-2 border-b-3 border-black">
      <div className="ticker-scroll flex whitespace-nowrap text-[12px] font-semibold tracking-widest text-retro-green">
        {loopItems.map((item, index) => (
          <span key={index} className="mr-12">
            {item} <span className="text-retro-yellow">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerBanner;
