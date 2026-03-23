import React from "react";
// import "../Css/landing.css";

export default function Navbar() {
  /* Common styles */

  const borderBox = "border-4 border-black shadow-retro";

  const navLink =
    "bg-white border-4 border-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors";

  const buttonStyle =
    "border-4 border-black px-6 py-2 font-bold shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all";

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{
        background: "rgba(245, 166, 35, 0.25)",
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
        borderBottom:'5px solid',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <div className={`bg-white px-8 py-2 ${borderBox}`}>
          <h1 className="text-2xl font-bold tracking-tighter uppercase">
            CampusConnect
          </h1>
        </div>

        {/* Navigation Links */}

        <div className={`flex gap-2 bg-white/30 p-2 ${borderBox}`}>
          <a className={navLink} href="#">
            About Us
          </a>

          <a className={navLink} href="#">
            Home
          </a>

          <a className={navLink} href="#">
            Contact Us
          </a>
        </div>

        {/* Auth Buttons */}

        <div className="flex gap-2">
          <button className={`${buttonStyle} bg-[#4CAF50]`}>
            Login
          </button>

          <button className={`${buttonStyle} bg-[#E05C3A] text-white`}>
            Signup
          </button>
        </div>

      </div>
    </nav>
    // <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    //   <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/30 backdrop-blur-[30px] border-[3px] border-black p-3">
    //     {/* Logo */}
    //     <div className="bg-white border-[3px] border-black px-4 py-1">
    //       <span className="text-xl font-bold tracking-tighter">
    //         CAMPUSCONNECT
    //       </span>
    //     </div>

    //     {/* Links */}
    //     <div className="hidden md:flex gap-4">
    //       <button className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_black] px-4 py-1 font-bold uppercase hover:bg-black hover:text-white transition-all duration-200">
    //         Home
    //       </button>

    //       <button className="bg-black text-white border-[3px] border-black shadow-[4px_4px_0px_0px_black] px-4 py-1 font-bold uppercase transition-all duration-200">
    //         About Us
    //       </button>

    //       <button className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_black] px-4 py-1 font-bold uppercase hover:bg-black hover:text-white transition-all duration-200">
    //         Contact Us
    //       </button>
    //     </div>

    //     {/* Auth Buttons */}
    //     <div className="flex gap-2">
    //       <button className={`${buttonStyle} bg-[#4CAF50]`}>Login</button>

    //       <button className={`${buttonStyle} bg-[#E05C3A] text-white`}>
    //         Signup
    //       </button>
    //     </div>
    //   </div>
    // </nav>
  );
}
