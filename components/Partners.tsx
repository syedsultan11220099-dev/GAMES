"use client";

import { motion } from "framer-motion";

const topPlayers = [
  { name: "Ali Khan", coins: 1200, avatar: "/avatars/ali.png" },
  { name: "Sara Ahmed", coins: 1100, avatar: "/avatars/sara.png" },
  { name: "Bilal Hussain", coins: 950, avatar: "/avatars/bilal.png" },
  { name: "Ayesha", coins: 900, avatar: "/avatars/ayesha.png" },
  { name: "Fahad", coins: 850, avatar: "/avatars/fahad.png" },
];

export default function Leaderboard() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-800 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-400 animate-pulse drop-shadow-lg">
        Top Players
      </h2>

      {/* Floating particle effects */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-yellow-400 rounded-full opacity-50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 10 * Math.random() - 5, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 2,
            ease: "easeInOut",
            delay: Math.random(),
          }}
        />
      ))}

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto relative z-10">
        {topPlayers.map((player, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.07, y: -5 }}
            className={`relative p-6 rounded-3xl shadow-2xl cursor-pointer border-2 ${
              idx === 0
                ? "border-yellow-400 bg-emerald-800"
                : idx === 1
                ? "border-sky-400 bg-emerald-800"
                : idx === 2
                ? "border-purple-400 bg-emerald-800"
                : "border-emerald-600 bg-emerald-900"
            } hover:shadow-xl transition-all duration-500`}
          >
            {/* Rank Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div
                className={`text-sm font-bold px-3 py-1 rounded-full text-black ${
                  idx === 0
                    ? "bg-yellow-400"
                    : idx === 1
                    ? "bg-sky-400"
                    : idx === 2
                    ? "bg-purple-400"
                    : "bg-gray-400"
                } animate-pulse`}
              >
                #{idx + 1}
              </div>
            </div>

            {/* Player avatar */}
            <motion.img
              src={player.avatar}
              alt={player.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-yellow-400 shadow-lg"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />

            {/* Player info */}
            <h3 className="text-white font-bold text-xl text-center">{player.name}</h3>
            <p className="text-yellow-400 font-semibold text-center">{player.coins} Coins</p>

            {/* Coin sparkle */}
            <motion.div
              className="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full opacity-80"
              animate={{
                y: [0, -10, 0],
                x: [0, 5, -5, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
