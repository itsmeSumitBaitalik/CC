import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* Common styles */
  const borderBox = "border-4 border-black shadow-retro";
  const navLink = "bg-white border-4 border-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors block text-center md:inline-block md:text-left";
  const buttonStyle = "border-4 border-black px-6 py-2 font-bold shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all w-full md:w-auto text-center";

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{
        background: "rgba(245, 166, 35, 0.25)",
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
        borderBottom: '5px solid',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className={`bg-white px-4 md:px-8 py-2 ${borderBox} shrink-0`}>
          <h1 className="text-xl md:text-2xl font-bold tracking-tighter uppercase whitespace-nowrap">
            CampusConnect
          </h1>
        </div>

        {/* Mobile menu toggle button */}
        <button 
          className="lg:hidden flex items-center justify-center bg-white border-4 border-black p-2 shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined font-black block">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className={`hidden lg:flex gap-2 bg-white/30 p-2 ${borderBox}`}>
          <a className={navLink} href="/about">
            About Us
          </a>
          <a className={navLink} href="/">
            Home
          </a>
          <a className={navLink} href="#">
            Contact Us
          </a>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex gap-2 shrink-0">
          <NavLink to="/login" className={`${buttonStyle} bg-[#4CAF50]`}>
            Login
          </NavLink>
          <NavLink to="/signup" className={`${buttonStyle} bg-[#E05C3A] text-white`}>
            Signup
          </NavLink>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-retro-yellow border-b-4 border-black p-4 flex flex-col gap-4 shadow-retro-lg z-50">
          <div className={`flex flex-col gap-2 bg-white/30 p-3 ${borderBox}`}>
            <a className={navLink} href="/about" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a className={navLink} href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a className={navLink} href="#" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </div>
          <div className="flex flex-col gap-3">
            <NavLink to="/login" className={`${buttonStyle} bg-[#4CAF50]`} onClick={() => setIsMenuOpen(false)}>Login</NavLink>
            <NavLink to="/signup" className={`${buttonStyle} bg-[#E05C3A] text-white`} onClick={() => setIsMenuOpen(false)}>Signup</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
