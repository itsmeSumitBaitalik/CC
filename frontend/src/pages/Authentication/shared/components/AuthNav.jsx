import { Link } from "react-router-dom";

const AuthNav = ({ linkTo, linkText }) => {
  return (
    <nav className="bg-retro-yellow border-b-3 border-black flex items-center justify-between px-4 md:px-8 h-16 sticky top-0 z-50 w-full">
      <Link to="/" className="flex items-center gap-1.5 md:gap-2 text-black no-underline font-bold text-[17px] sm:text-lg md:text-xl uppercase tracking-widest shrink-0">
        CampusConnect
        <span className="hidden sm:inline-block bg-black text-retro-yellow text-[10px] font-bold px-1.5 py-0.5 tracking-widest">
          v2.1
        </span>
      </Link>

      <Link
        to={linkTo}
        className="text-[11px] md:text-[13px] font-semibold uppercase tracking-wider text-black no-underline
                   border-2 border-black px-3 md:px-4 py-1.5 bg-white shadow-retro-sm
                   transition-all duration-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none whitespace-nowrap"
      >
        {linkText}
      </Link>
    </nav>
  );
};

export default AuthNav;
