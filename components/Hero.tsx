"use client";

import SignupForm from "./Signup";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 px-6 sm:px-10 md:px-16 overflow-hidden min-h-[80vh]"
      style={{ backgroundImage: "url('/Golden Wheel in Fiery Cavern.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Animated Coins */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 md:w-6 h-4 md:h-6 rounded-full bg-yellow-400 shadow-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ["-10%", "110%"],
            rotate: [0, 360],
            x: [`0%`, `${Math.random() * 20 - 10}%`],
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 4,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Sparkle / Particle Burst */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 md:w-3 h-2 md:h-3 bg-gradient-to-r from-green-300 to-yellow-400 rounded-full opacity-80"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20 * Math.random() - 10, 0],
            scale: [1, 1.5, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 2,
            ease: "easeInOut",
            delay: Math.random(),
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">
        {/* Left Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-green-400 via-teal-300 to-yellow-300 text-transparent bg-clip-text animate-pulse">
            Play. Win. <br /> Earn Real Rewards! 🎮💰
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-md sm:max-w-lg">
            Join thousands of gamers winning coins, cash, and exclusive prizes daily. Click below to start your journey to top rewards!
          </p>
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(34,197,94,0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-400 to-teal-400 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-lg sm:text-xl shadow-lg transition-all text-black"
          >
            Join & Start Winning
          </motion.button>
        </motion.div>

        {/* Right Signup Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="bg-emerald-800/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-2xl max-w-md mx-auto md:mx-0"
          >
            <SignupForm />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bouncing Coins */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-10 w-8 h-8 md:w-12 md:h-12 bg-yellow-400 rounded-full shadow-2xl"
          style={{ left: `${20 + i * 25}%` }}
          animate={{ y: [0, -25, 0], scale: [1, 1.3, 1], rotate: [0, 360, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 + i * 0.3, ease: "easeInOut" }}
        />
      ))}

      {/* Sparkle overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </section>
  );
}
