import "../shared/auth.css";
import TickerBanner from "../shared/components/TickerBanner";
import AuthFooter from "../shared/components/AuthFooter";
import AuthNav from "../shared/components/AuthNav";
import AuthLeftPanel from "../shared/components/AuthLeftPanel";
import SignupForm from "./components/SignupForm";
import { useState } from "react";
import { signup } from "../../../api/allApis/auth.api";
import { TickerData } from "../../../asset/data";
import { toast } from "react-toastify";


const XP_CARDS = [
  { label: "Events", value: "340+", sub: "This Semester" },
  { label: "Mentors", value: "820", sub: "Verified & Active" },
  { label: "Communities", value: "210", sub: "Open to Join" },
  { label: "XP Awarded", value: "1.2M", sub: "Total Campus XP" },
];

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignup = () => {
    toast.info("Google Sign-Up: Connect your OAuth provider here.");
  };

  const handleSignup = async (formData) => {
    setIsLoading(true);

    try {
      const { username, email, password, terms } = formData;

      const res = await signup(username, email, password, terms);

      console.log("Signup success");
      toast.success("Signup successful!");

      // redirect
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);

      return true;

    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-bg bg-retro-yellow min-h-screen flex flex-col font-display">
      <TickerBanner items={TickerData.signup} />
      <AuthNav linkTo="/login" linkText="Log In" />


      <main className="flex-1 flex items-start justify-center px-6 py-12 gap-12 max-md:flex-col max-md:items-center w-full">
        <AuthLeftPanel
          label="Join Today — Free"
          title={<>Your<br />Campus<br /><span className="hero-accent">Starts</span><br />Here.</>}
          subtitle="Join 12,400+ students already on CampusConnect. Discover events, find mentors, chat anonymously, and earn XP for everything you do."
        >
          <div className="grid grid-cols-2 gap-2.5">
            {XP_CARDS.map(({ label, value, sub }) => (
              <div
                key={label}
                className="bg-white border-2 border-black shadow-retro-sm p-3"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#555]">
                  {label}
                </div>
                <div className="text-[22px] font-bold text-black mt-0.5">{value}</div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-retro-green">
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </AuthLeftPanel>
        <SignupForm onGoogleSignup={handleGoogleSignup} onSignup={handleSignup} isLoading={isLoading} />
      </main>

      <AuthFooter />
    </div>
  );
};

export default Signup;