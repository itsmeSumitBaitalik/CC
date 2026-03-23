import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      
      <div className="grid md:grid-cols-2 bg-base-100 shadow-xl rounded-2xl overflow-hidden w-[1100px]">

        {/* LEFT SIDE */}
        <div className="p-12 flex flex-col justify-center">

          <p className="text-sm text-primary mb-6">■ Finnger</p>

          <h1 className="text-4xl font-bold mb-2">
            Holla,<br />Welcome Back
          </h1>

          <p className="text-gray-500 mb-8">
            Hey, welcome back to your special place
          </p>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="stanley@gmail.com"
            className="input input-bordered w-full mb-4"
          />

          {/* PASSWORD WITH EYE BUTTON */}
          <div className="relative mb-4">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="input input-bordered w-full pr-12"
            />

            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

          </div>

          {/* REMEMBER + FORGOT */}
          <div className="flex justify-between items-center mb-6 text-sm">

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-primary" />
              Remember me
            </label>

            <a className="link link-hover text-gray-500">
              Forgot Password?
            </a>

          </div>

          {/* BUTTON */}
          <button className="btn btn-primary w-32">
            Sign In
          </button>

          <p className="text-sm mt-10 text-gray-500">
            Don't have an account?
            <span className="text-primary ml-1 cursor-pointer">Sign Up</span>
          </p>

        </div>


        {/* RIGHT SIDE IMAGE */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-10">

          <img
            src="https://illustrations.popsy.co/purple/mobile-login.svg"
            alt="login illustration"
            className="max-w-md"
          />

        </div>

      </div>

    </div>
  );
}