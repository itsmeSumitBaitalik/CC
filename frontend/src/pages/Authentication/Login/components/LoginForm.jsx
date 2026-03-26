import { useState } from "react";

const LoginForm = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      onSubmit?.(e);
      setTimeout(() => setIsSuccess(false), 2000);
    }, 1200);
  };

  const getButtonContent = () => {
    if (isLoading) return "Logging in...";
    if (isSuccess)
      return (
        <>
          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>check_circle</span>
          Welcome Back!
        </>
      );
    return (
      <>
        <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>login</span>
        Enter Campus
      </>
    );
  };

  /* Shared input classes */
  const inputCls =
    "w-full pl-10 pr-3 py-2.5 border-2 border-black font-display text-sm font-medium " +
    "bg-[#fafafa] text-black outline-none shadow-retro-sm " +
    "focus:shadow-retro focus:bg-white transition-shadow duration-100";

  return (
    <form onSubmit={handleSubmit}>
      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-widest text-black mb-1.5">
          College Email
        </label>
        <div className="relative">
          <span className="input-icon">mail</span>
          <input type="email" id="email" placeholder="you@college.edu" required className={inputCls} />
        </div>
      </div>

      {/* Password */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-[11px] font-bold uppercase tracking-widest text-black mb-1.5">
          Password
        </label>
        <div className="relative">
          <span className="input-icon">lock</span>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="••••••••"
            required
            className={inputCls}
          />
          <button
            type="button"
            className="toggle-pw"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "visibility" : "visibility_off"}
          </button>
        </div>
      </div>

      {/* Remember / Forgot */}
      <div className="flex items-center justify-between mb-5">
        <label className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 border-2 border-black accent-black cursor-pointer"
          />
          Remember me
        </label>
        <span className="text-[12px] font-bold uppercase tracking-wider text-black underline cursor-pointer">
          Forgot password?
        </span>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading || isSuccess}
        className="w-full py-3.5 bg-black text-retro-yellow border-3 border-black shadow-retro
                   font-display text-sm font-bold uppercase tracking-widest cursor-pointer
                   flex items-center justify-center gap-2
                   transition-all duration-100
                   hover:enabled:translate-x-0.5 hover:enabled:translate-y-0.5 hover:enabled:shadow-retro-sm
                   active:enabled:translate-x-1 active:enabled:translate-y-1 active:enabled:shadow-none
                   disabled:opacity-80 disabled:cursor-not-allowed"
      >
        {getButtonContent()}
      </button>
    </form>
  );
};

export default LoginForm;
