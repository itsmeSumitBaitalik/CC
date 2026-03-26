import { useState } from "react";
import StepIndicator from "./StepIndicator";
import GoogleButton from "../../shared/components/GoogleButton";
import AuthCardContainer from "../../shared/components/AuthCardContainer";

/* ── Shared input class ────────────────────────────────────────── */
const inputCls =
  "w-full pl-10 pr-3 py-2.5 border-2 border-black font-display text-sm font-medium " +
  "bg-[#fafafa] text-black outline-none shadow-retro-sm " +
  "focus:shadow-retro focus:bg-white transition-shadow duration-100";

const selectCls = inputCls + " select-input cursor-pointer";

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

/* ── Step 1: Account Info ──────────────────────────────────────── */
const Step1 = ({ data, onChange, onNext }) => {
  const [showPw, setShowPw] = useState(false);
  const [showCpw, setShowCpw] = useState(false);
  const strength = getStrength(data.password);

  const handleNext = () => {
    if (!data.fname || !data.email || !data.password) {
      alert("Please fill in all required fields.");
      return;
    }
    if (data.password !== data.confirmPw) {
      alert("Passwords do not match!");
      return;
    }
    onNext();
  };

  return (
    <div>
      {/* First + Last name row */}
      <div className="flex gap-3 mb-3.5">
        <div className="flex-1 min-w-0">
          <label className="block text-[11px] font-bold uppercase tracking-widest text-black mb-1.5">
            First Name
          </label>
          <div className="relative">
            <span className="input-icon">person</span>
            <input
              type="text" placeholder="Alex" required
              value={data.fname}
              onChange={(e) => onChange("fname", e.target.value)}
              className={inputCls}
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <label className="block text-[11px] font-bold uppercase tracking-widest text-black mb-1.5">
            Last Name
          </label>
          <div className="relative">
            <span className="input-icon">person</span>
            <input
              type="text" placeholder="Kumar" required
              value={data.lname}
              onChange={(e) => onChange("lname", e.target.value)}
              className={inputCls}
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="mb-3.5">
        <label className="block text-[11px] font-bold uppercase tracking-widest text-black mb-1.5">
          College Email
        </label>
        <div className="relative">
          <span className="input-icon">mail</span>
          <input
            type="email" placeholder="alex@college.edu" required
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
            className={inputCls}
          />
        </div>
      </div>

      {/* Password */}
      <div className="mb-3.5">
        <label className="block text-[11px] font-bold uppercase tracking-widest text-black mb-1.5">
          Password
        </label>
        <div className="relative">
          <span className="input-icon">lock</span>
          <input
            type={showPw ? "text" : "password"}
            placeholder="Create a strong password" required
            value={data.password}
            onChange={(e) => onChange("password", e.target.value)}
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
                className={`flex-1 h-1 border border-black transition-colors duration-200 ${i <= strength ? BAR_CLS[strength] : "bg-[#ddd]"
                  }`}
              />
            ))}
          </div>
          <div
            className="text-[10px] font-bold uppercase tracking-wider"
            style={{ color: data.password ? STRENGTH_COLORS[strength] : "#888" }}
          >
            {data.password ? STRENGTH_LABELS[strength] : "Enter a password"}
          </div>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="mb-4">
        <label className="block text-[11px] font-bold uppercase tracking-widest text-black mb-1.5">
          Confirm Password
        </label>
        <div className="relative">
          <span className="input-icon">lock</span>
          <input
            type={showCpw ? "text" : "password"}
            placeholder="Repeat your password" required
            value={data.confirmPw}
            onChange={(e) => onChange("confirmPw", e.target.value)}
            className={inputCls}
          />
          <button type="button" className="toggle-pw" onClick={() => setShowCpw((p) => !p)}>
            {showCpw ? "visibility" : "visibility_off"}
          </button>
        </div>
      </div>

      {/* Next button */}
      <button
        type="button"
        onClick={handleNext}
        className="w-full py-3 bg-black text-retro-yellow border-3 border-black shadow-retro
                   font-display text-[13px] font-bold uppercase tracking-widest
                   flex items-center justify-center gap-1.5 cursor-pointer
                   transition-all duration-100
                   hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-retro-sm"
      >
        Next: Campus Details
        <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_forward</span>
      </button>
    </div>
  );
};

/* ── Step 2: Campus Details ────────────────────────────────────── */
const DEPARTMENTS = [
  "Computer Science", "Engineering", "Business", "Design",
  "Arts & Humanities", "Science", "Law", "Medicine", "Other",
];
const YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Masters", "PhD"];

const Step2 = ({ data, onChange, onBack, onSubmit, isLoading, isSuccess }) => {
  const handleSubmit = () => {
    if (!data.terms) {
      alert("Please accept the Terms of Service to continue.");
      return;
    }
    onSubmit();
  };

  return (
    <div>
      {/* College */}
      <div className="mb-3.5">
        <label className="block text-[11px] font-bold uppercase tracking-widest text-black mb-1.5">
          College / University
        </label>
        <div className="relative">
          <span className="input-icon">school</span>
          <input
            type="text" placeholder="e.g. IIT Bombay, DU, BITS Pilani" required
            value={data.college}
            onChange={(e) => onChange("college", e.target.value)}
            className={inputCls}
          />
        </div>
      </div>

      {/* Department + Year row */}
      <div className="flex gap-3 mb-3.5">
        <div className="flex-1 min-w-0">
          <label className="block text-[11px] font-bold uppercase tracking-widest text-black mb-1.5">
            Department
          </label>
          <div className="relative">
            <span className="input-icon">category</span>
            <select
              value={data.dept}
              onChange={(e) => onChange("dept", e.target.value)}
              className={selectCls}
            >
              <option value="">Select…</option>
              {DEPARTMENTS.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <label className="block text-[11px] font-bold uppercase tracking-widest text-black mb-1.5">
            Year
          </label>
          <div className="relative">
            <span className="input-icon">event</span>
            <select
              value={data.year}
              onChange={(e) => onChange("year", e.target.value)}
              className={selectCls}
            >
              <option value="">Year…</option>
              {YEARS.map((y) => <option key={y}>{y}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Roll Number */}
      <div className="mb-3.5">
        <label className="block text-[11px] font-bold uppercase tracking-widest text-black mb-1.5">
          College ID / Roll Number
        </label>
        <div className="relative">
          <span className="input-icon">badge</span>
          <input
            type="text" placeholder="e.g. 22CS1045"
            value={data.rollno}
            onChange={(e) => onChange("rollno", e.target.value)}
            className={inputCls}
          />
        </div>
      </div>

      {/* Interests */}
      <div className="mb-4">
        <label className="block text-[11px] font-bold uppercase tracking-widest text-black mb-1.5">
          Interests (helps us match you)
        </label>
        <div className="relative">
          <span className="input-icon">interests</span>
          <input
            type="text" placeholder="e.g. Hackathons, Music, AI, Sports"
            value={data.interests}
            onChange={(e) => onChange("interests", e.target.value)}
            className={inputCls}
          />
        </div>
      </div>

      {/* Terms */}
      <div className="flex items-start gap-2 mb-5">
        <input
          type="checkbox"
          id="terms"
          checked={data.terms}
          onChange={(e) => onChange("terms", e.target.checked)}
          className="w-4 h-4 border-2 border-black accent-black cursor-pointer mt-0.5 flex-shrink-0"
        />
        <label htmlFor="terms" className="text-[12px] font-medium text-[#555] leading-relaxed cursor-pointer">
          I agree to CampusConnect's{" "}
          <a href="#" className="text-black font-bold underline">Terms of Service</a> and{" "}
          <a href="#" className="text-black font-bold underline">Privacy Policy</a>. I understand my profile
          will be visible to fellow students.
        </label>
      </div>

      {/* Back + Submit */}
      <div className="flex gap-2.5">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-3 bg-white text-black border-3 border-black shadow-retro
                     font-display text-[13px] font-bold uppercase tracking-widest cursor-pointer
                     transition-all duration-100
                     hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-retro-sm"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading || isSuccess}
          className="flex-[2] py-3 bg-retro-red text-white border-3 border-black shadow-retro
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
    </div>
  );
};

/* ── SignupForm orchestrator ────────────────────────────────────── */
const SignupForm = ({ onGoogleSignup, onSignup, isLoading }) => {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fname: "", lname: "", email: "", password: "", confirmPw: "",
    college: "", dept: "", year: "", rollno: "", interests: "", terms: false,
  });

  const handleChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    if (!formData.terms) {
      alert("Please accept terms");
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
      subtitle="Join the campus network in 2 steps"
      footer={footer}
      maxWidth="max-w-[420px]"
    >

      {/* Step indicator */}
      <StepIndicator currentStep={step} />

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

      {/* Step panels */}
      {step === 1 ? (
        <Step1 data={formData} onChange={handleChange} onNext={() => setStep(2)} />
      ) : (
        <Step2
          data={formData}
          onChange={handleChange}
          onBack={() => setStep(1)}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      )}
    </AuthCardContainer>
  );
};

export default SignupForm;
