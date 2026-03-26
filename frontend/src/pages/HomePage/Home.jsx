import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-retro-yellow font-display text-black min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
