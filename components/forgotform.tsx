export default function ForgotForm() {
  return (
    <main className="flex min-h-screen">
      {/* LEFT PANEL */}
      {/* background color change setting here */}
      {/* <div className="w-full md:w-1/2 bg-[#071428] flex flex-col justify-center px-8 py-12"> */}
              <div className="w-full md:w-1/2 bg-golden-200 flex flex-col justify-center px-8 py-12">

        <div className="max-w-md mx-auto">
          {/* Logo */}
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-2">2xBet</h1>

          {/* Heading */}
          <h2 className="text-2xl font-semibold mb-2 text-white">Forgot Your Password?</h2>
          <p className="text-gray-400 text-sm mb-8">
            Enter your email to receive password reset instructions.
          </p>

          {/* FORM */}
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm text-white mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <span className="bg-yellow-400 text-black px-3 flex items-center rounded-l">
                  {/* mail icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M16 12H8m8 0H8m0 0v0m0-6a4 4 0 018 0v12a4 4 0 01-8 0V6z" />
                  </svg>
                </span>
                <input
                  type="email"
                  className="w-full p-2 rounded-r bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Captcha */}
            <div>
              <label className="block text-sm text-white mb-1">Captcha <span className="text-red-500">*</span></label>
              <div className="bg-[#02041a] text-center py-2 mb-2 select-none text-white tracking-widest font-bold">
                7 4 2 1 8 6
              </div>
              <input
                type="text"
                className="w-full p-2 rounded bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter captcha"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-300 transition">
              SEND RESET LINK
            </button>

            {/* Back to login link */}
            <p className="text-center text-sm mt-4 text-gray-300">
              Remember your password?{" "}
              <a href="#" className="text-yellow-400 hover:underline">Login Now</a>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT PANEL with image + overlay */}
      <div className="hidden md:block w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/cards-bg.jpg')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: 'inset -120px 0 120px rgba(0,0,0,0.6)' }}
        />
      </div>
    </main>
  );
}
