/**
 * AuthFooter — shared footer used by both Login and Signup pages
 */
const AuthFooter = () => (
  <footer className="bg-black border-t-3 border-black px-8 py-3.5 flex items-center justify-between">
    <span className="text-retro-yellow font-bold text-[13px] uppercase tracking-widest">
      CampusConnect
    </span>
    <span className="text-[#888] text-[12px] font-medium tracking-wider">
      v2.1.0 · 2025 · All rights reserved
    </span>
  </footer>
);

export default AuthFooter;
