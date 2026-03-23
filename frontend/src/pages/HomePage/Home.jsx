import React from "react";
import Navbar from "./Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="bg-retro-yellow font-display text-black min-h-screen">
      {/* <h1>Welcome to home</h1>
      <button className="btn btn-primary">Smash</button> */}
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </div>
  );
};

export default Home;
