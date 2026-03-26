import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import CTA from '../LandingPage/components/CTA';

import AboutHero from './components/AboutHero';
import AboutMarquee from './components/AboutMarquee';
import OurStory from './components/OurStory';
import WhatWeBelieve from './components/WhatWeBelieve';
import MeetTheTeam from './components/MeetTheTeam';

import './about.css';

const About = () => {
  return (
    <div className="bg-retro-yellow font-display text-black selection:bg-black selection:text-white">
      <AboutHero />
      <AboutMarquee />
      <OurStory />
      <WhatWeBelieve />
      <MeetTheTeam />
      <CTA />
    </div>
  );
};

export default About;
