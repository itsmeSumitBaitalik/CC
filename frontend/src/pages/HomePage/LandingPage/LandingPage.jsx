import HeroSection from "./components/HeroSection"
import Marquee from "./components/Marquee"
import Features from "./components/Features"
import Stats from "./components/Stats"
import UseCases from "./components/UseCases"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"


export default function Landingpage() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <Features />
      <Stats />
      <UseCases />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}