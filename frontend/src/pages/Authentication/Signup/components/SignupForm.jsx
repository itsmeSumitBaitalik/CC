import { useState } from "react";
import GoogleButton from "../../shared/components/GoogleButton";
import AuthCardContainer from "../../shared/components/AuthCardContainer";

/* ── Shared input class ────────────────────────────────────────── */
const inputCls =
  "w-full pl-10 pr-3 py-2.5 border-2 border-black font-display text-sm font-medium " +
  "bg-[#fafafa] text-black outline-none shadow-retro-sm " +
  "focus:shadow-retro focus:bg-[#fff9e6] transition-all duration-100";

/* ── Password strength helper ──────────────────────────────────── */
const getStrength = (val) => {
  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;
  return score;
};

const STRENGTH_LABELS = ["", "Weak — keep going", "Fair — add symbols", "Good — almost there", "Strong password"];
const STRENGTH_COLORS = ["#888", "#E05C3A", "#F5A623", "#4CAF50", "#4CAF50"];
const BAR_CLS = ["", "bg-retro-red", "bg-retro-yellow", "bg-retro-green", "bg-retro-green"];

const SignupForm = ({ onGoogleSignup, onSignup, isLoading }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const [formData, setFormData] = useState({
    username: "", email: "", password: "", terms: false,
  });

  const strength = getStrength(formData.password);

  const handleChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    if (!formData.username || !formData.email || !formData.password) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!formData.terms) {
      alert("Please accept the Terms of Service to continue.");
      return;
    }

    const success = await onSignup?.(formData);

    if (success) {
      setIsSuccess(true);
    }
  };

  const footer = (
    <div className="text-center mt-[18px] pt-4 border-t-2 border-[#eee] text-[13px] font-medium text-[#555]">
      Already have an account?{" "}
      <a href="/login" className="text-black font-bold no-underline border-b-2 border-black">
        Log in →
      </a>
    </div>
  );

  return (
    <AuthCardContainer
      icon="school"
      iconColor="bg-retro-red"
      iconClass="text-white"
      title="Create Account"
      subtitle="Join the campus network today"
      footer={footer}
      maxWidth="max-w-[420px]"
    >
      {/* Google button */}
      <GoogleButton onClick={onGoogleSignup} />

      {/* Divider */}
      <div className="flex items-center gap-2.5 mb-[18px]">
        <div className="flex-1 h-0.5 bg-black" />
        <div className="text-[11px] font-bold uppercase tracking-widest text-black">
          or sign up with email
        </div>
        <div className="flex-1 h-0.5 bg-black" />
      </div>

      {/* Single Step Form */}
      <div>
        {/* First + Last name row */}
        <div className="flex gap-3 mb-3.5">
          <div className="flex-1 min-w-0">
            <label className="block text-[11px] font-bold uppercase tracking-widest text-black mb-1.5">
              First Name *
            </label>
            <div className="relative">
              <span className="input-icon">person</span>
              <input
                type="text" placeholder="Alex" required
                value={formData.username}
                onChange={(e) => handleChange("username", e.target.value)}
                className={inputCls}
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="mb-3.5">
          <label className="block text-[11px] font-bold uppercase tracking-widest text-black mb-1.5">
            College Email *
          </label>
          <div className="relative">
            <span className="input-icon">mail</span>
            <input
              type="email" placeholder="alex@college.edu" required
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={inputCls}
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-[11px] font-bold uppercase tracking-widest text-black mb-1.5">
            Password *
          </label>
          <div className="relative">
            <span className="input-icon">lock</span>
            <input
              type={showPw ? "text" : "password"}
              placeholder="Create a strong password" required
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className={inputCls}
            />
            <button type="button" className="toggle-pw" onClick={() => setShowPw((p) => !p)}>
              {showPw ? "visibility" : "visibility_off"}
            </button>
          </div>

          {/* Password strength indicator */}
          <div className="mt-1.5">
            <div className="flex gap-1 mb-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`flex-1 h-1 border border-black transition-colors duration-200 ${i <= strength ? BAR_CLS[strength] : "bg-[#ddd]"}`}
                />
              ))}
            </div>
            <div
              className="text-[10px] font-bold uppercase tracking-wider"
              style={{ color: formData.password ? STRENGTH_COLORS[strength] : "#888" }}
            >
              {formData.password ? STRENGTH_LABELS[strength] : "Enter a password"}
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2 mb-5">
          <input
            type="checkbox"
            id="terms"
            checked={formData.terms}
            onChange={(e) => handleChange("terms", e.target.checked)}
            className="w-4 h-4 border-2 border-black accent-black cursor-pointer mt-0.5 flex-shrink-0"
          />
          <label htmlFor="terms" className="text-[12px] font-medium text-[#555] leading-relaxed cursor-pointer">
            I agree to CampusConnect's{" "}
            <a href="#" className="text-black font-bold underline">Terms of Service</a> and{" "}
            <a href="#" className="text-black font-bold underline">Privacy Policy</a>.
          </label>
        </div>

        {/* Submit */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading || isSuccess}
          className="w-full py-3 bg-retro-red text-white border-3 border-black shadow-retro
                     font-display text-[13px] font-bold uppercase tracking-widest
                     flex items-center justify-center gap-2 cursor-pointer
                     transition-all duration-100
                     hover:enabled:translate-x-0.5 hover:enabled:translate-y-0.5 hover:enabled:shadow-retro-sm
                     disabled:opacity-80 disabled:cursor-not-allowed"
        >
          {isSuccess ? (
            <>
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>check_circle</span>
              Welcome to Campus!
            </>
          ) : isLoading ? (
            "Creating account..."
          ) : (
            <>
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>rocket_launch</span>
              Join Campus
            </>
          )}
        </button>
      </div>
    </AuthCardContainer>
  );
};

export default SignupForm;
