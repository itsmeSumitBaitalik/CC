/**
 * GoogleButton — shared by Login and Signup
 * Accepts `onClick` and an optional `label` prop.
 */
const GoogleIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.34-8.16 2.34-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    <path fill="none" d="M0 0h48v48H0z" />
  </svg>
);

const GoogleButton = ({ onClick, label = "Continue with Google" }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center justify-center gap-2.5 w-full py-3 bg-white
               border-3 border-black shadow-retro font-display text-[13px] font-bold
               uppercase tracking-widest text-black mb-5 cursor-pointer
               transition-all duration-100
               hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-retro-sm
               active:translate-x-1 active:translate-y-1 active:shadow-none"
  >
    <GoogleIcon />
    {label}
  </button>
);

export default GoogleButton;
