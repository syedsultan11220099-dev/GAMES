"use client";

import SignupForm from "@/components/Signup";

export default function SignupPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center relative bg-emerald-600"
      style={{
        backgroundImage: "url('/signcover.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Signup form card */}
      <div className="relative z-10 w-full max-w-md bg-emerald-900/95 p-8 rounded-2xl shadow-xl border border-emerald-700/50">
        {/* Stylish heading */}
        <h2 className="text-3xl font-extrabold text-center mb-2 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent tracking-wide">
          Create Account
        </h2>
        <p className="text-center text-gray-300 mb-6 text-sm">
          Join us and start your journey today
        </p>

        <SignupForm />
      </div>
    </main>
  );
}
