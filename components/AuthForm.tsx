"use client";

export default function SignupForm() {
  return (
    <div className="bg-emerald-800 text-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md mx-auto">
      {/* Heading */}
      <h1 className="text-lg md:text-xl font-semibold mb-4 text-center">
        Signin 
      </h1>

      {/* Form */}
      <form className="space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-md text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Enter password"
          className="w-full px-4 py-2 rounded-md text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
    
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 py-2 rounded-md font-medium transition"
        >
          Sign in
        </button>
      </form>

      {/* Divider */}
      <div className="my-4 flex items-center">
        <div className="flex-grow border-t border-gray-600"></div>
        <span className="px-2 text-gray-400 text-sm">or</span>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>

      {/* Social Buttons */}
      <div className="space-y-2">
        <button className="w-full bg-white text-black py-2 rounded-md shadow-sm hover:bg-gray-100 transition">
          Continue with Google
        </button>
        <button className="w-full bg-white text-black py-2 rounded-md shadow-sm hover:bg-gray-100 transition">
          Continue with Facebook
        </button>
      </div>

      {/* Terms */}
      <p className="text-xs text-gray-400 mt-3 text-center leading-relaxed">
        By joining you agree to the{" "}
        <a href="#" className="underline">
          Terms of Service
        </a>{"/terms"}
        and{" "}
        <a href="#" className="underline">
          Privacy Policy
        </a>.
      </p>
    </div>
  );
}
