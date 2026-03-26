import { Link } from "react-router-dom";
import GoogleButton from "../../shared/components/GoogleButton";
import LoginForm from "./LoginForm";
import AuthCardContainer from "../../shared/components/AuthCardContainer";

const AuthCard = ({ onGoogleLogin, onLogin, isLoading }) => {
  const footer = (
    <div className="text-center mt-5 pt-4 border-t-2 border-[#eee] text-[13px] font-medium text-[#555]">
      New to campus?{" "}
      <Link to="/signup" className="text-black font-bold no-underline border-b-2 border-black">
        Create your account →
      </Link>
    </div>
  );

  return (
    <AuthCardContainer 
      icon="lock" 
      iconColor="bg-retro-yellow" 
      title="Login" 
      subtitle="Access your campus account" 
      footer={footer}
    >
      {/* Google Sign In */}
      <GoogleButton onClick={onGoogleLogin} />

      {/* Divider */}
      <div className="flex items-center gap-2.5 mb-5 mt-5">
        <div className="flex-1 h-0.5 bg-black" />
        <div className="text-[11px] font-bold uppercase tracking-widest text-black">or login with email</div>
        <div className="flex-1 h-0.5 bg-black" />
      </div>

      {/* Login Form */}
      <LoginForm onSubmit={onLogin} isLoading={isLoading} />
    </AuthCardContainer>
  );
};

export default AuthCard;
