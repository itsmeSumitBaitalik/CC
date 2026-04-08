import { login } from "../../../api/allApis/auth.api"; // adjust path
import { useState } from "react";
import { toast } from "react-toastify";
import TickerBanner from "../shared/components/TickerBanner";
import AuthLeftPanel from "../shared/components/AuthLeftPanel";
import AuthFooter from "../shared/components/AuthFooter";
import AuthNav from "../shared/components/AuthNav";
import AuthCard from "./components/AuthCard";
import "../shared/auth.css";
import { TickerData } from "../../../asset/data";


const FEATURES = [
  "Discover & register for campus events",
  "Connect with verified mentors",
  "Chat anonymously with peers",
  "Earn XP for every interaction",
];

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = () => {
    toast.info("Google Sign-In: Connect your OAuth provider here.");
  };

  const handleLogin = async (email, password) => {
    setIsLoading(true);

    try {
      const res = await login(email, password);

      console.log("Login success");
      toast.success("Login successful!");

      // redirect
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);

      return true;

    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-bg bg-retro-yellow min-h-screen flex flex-col font-display">
      <TickerBanner items={TickerData.login} />
      <AuthNav linkTo="/signup" linkText="Create Account" />

      <main className="flex-1 flex items-center justify-center px-6 py-12 gap-12 max-md:flex-col max-md:items-center">
        <AuthLeftPanel
          label="Student Platform"
          title={<>Welcome<br /><span className="hero-accent">Back</span><br />Student.</>}
          subtitle="Log in to your campus hub — events, mentors, anonymous chat, and your growing community are waiting."
        >
          <div className="flex flex-col gap-2.5">
            {FEATURES.map((feature, index) => (
              <div key={index} className="flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-wider text-black">
                <div className="w-2 h-2 bg-retro-green flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 bg-black text-retro-yellow text-[11px] font-bold tracking-wider uppercase px-2.5 py-1.5 mt-2">
              <div className="w-1.5 h-1.5 bg-retro-green rounded-full" />
              12,400+ Students Already On Campus
            </div>
          </div>
        </AuthLeftPanel>
        <AuthCard
          onGoogleLogin={handleGoogleLogin}
          onLogin={handleLogin}
          isLoading={isLoading}
        />
      </main>

      <AuthFooter />
    </div>
  );
};

export default Login;