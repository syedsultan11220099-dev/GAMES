"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { FaCoins, FaTrophy, FaGamepad, FaWallet, FaGift } from "react-icons/fa";

// Task / Game interface
interface Activity {
  id: number;
  title: string;
  reward: number; // in coins
  status: "Pending" | "Claimable" | "Completed";
  type: "Task" | "Game";
}

// Mock data for tasks and mini-games
const initialActivities: Activity[] = [
  { id: 1, title: "Win 1 Game Today", reward: 500, status: "Claimable", type: "Game" },
  { id: 2, title: "Invite a Friend", reward: 1000, status: "Pending", type: "Task" },
  { id: 3, title: "Complete Daily Quiz", reward: 300, status: "Claimable", type: "Task" },
  { id: 4, title: "Spin the Wheel Offer", reward: 700, status: "Claimable", type: "Task" },
  { id: 5, title: "Play Arcade Mini-Game", reward: 800, status: "Pending", type: "Game" },
];

export default function EarnPage() {
  const coinToPKR = 0.1;

  const [coins, setCoins] = useState(128500); // User balance (frontend mock)
  const [activities, setActivities] = useState<Activity[]>(initialActivities);
  const [activeTab, setActiveTab] = useState<"Tasks" | "Games">("Tasks");
  const [showConfetti, setShowConfetti] = useState(false);
  const [bills, setBills] = useState<{ left: string; delay: number; scale: number }[]>([]);

  // 💸 Background coins animation
  useEffect(() => {
    setBills(
      Array.from({ length: 20 }).map(() => ({
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 6,
        scale: Math.random() * 0.8 + 0.5,
      }))
    );
  }, []);

  // Handle claiming a reward
  const handleClaim = (id: number) => {
    const activity = activities.find(a => a.id === id);
    if (!activity || activity.status !== "Claimable") return;

    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);

    // Update coin balance
    setCoins(prev => prev + activity.reward);

    // Mark activity as completed
    setActivities(prev =>
      prev.map(a => (a.id === id ? { ...a, status: "Completed" } : a))
    );

    /*
      🔹 Backend Integration Placeholder:
      - Replace the frontend mock code above with API call:
        POST /api/claim-activity
        body: { userId, activityId }
      - API should:
        1. Validate activity completion
        2. Update user coin balance in DB
        3. Return updated activity & coin data
    */
  };

  // Filter activities based on tab
  const filteredActivities = activities.filter(a => a.type === (activeTab === "Tasks" ? "Task" : "Game"));

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#030614] via-[#051d24] to-[#041e1f] text-white flex flex-col items-center">

      {/* Background coins */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {bills.map((b, i) => (
          <motion.div
            key={i}
            className="absolute opacity-70"
            style={{ left: b.left }}
            initial={{ y: "-10vh", scale: b.scale }}
            animate={{ y: "110vh", rotate: 360 }}
            transition={{ duration: 6 + Math.random() * 3, delay: b.delay, repeat: Infinity, ease: "linear" }}
          >
            <svg width="40" height="25" viewBox="0 0 200 100" fill="none">
              <rect width="200" height="100" rx="10" fill="#00FF88" />
              <text x="50%" y="55%" textAnchor="middle" fill="#003300" fontSize="50" fontWeight="bold">🪙</text>
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Confetti */}
      <AnimatePresence>{showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}</AnimatePresence>

      {/* Hero Section */}
      <section className="text-center pt-20 pb-8 px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-yellow-400 to-green-300 bg-clip-text text-transparent"
        >
          Earn Coins & Cash From Gaming 💰
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mt-4 text-lg md:text-xl"
        >
          Complete tasks, play mini-games, grab offers, and turn coins into PKR instantly!
        </motion.p>
      </section>

      {/* Coin Balance */}
      <section className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-emerald-400 mb-8">
        <p className="text-yellow-400 font-semibold">Your Balance</p>
        <p className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-2">
          <FaCoins className="animate-spin" /> {coins.toLocaleString()} 🪙
        </p>
        <p className="text-emerald-300">≈ {(coins * coinToPKR).toFixed(2)} PKR</p>
      </section>

      {/* Tabs: Tasks / Games */}
      <section className="max-w-6xl mx-auto px-6 mb-6">
        <div className="flex justify-center gap-4 mb-6">
          {["Tasks", "Games"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "Tasks" | "Games")}
              className={`py-2 px-6 rounded-2xl font-semibold ${
                activeTab === tab ? "bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 text-gray-900" : "bg-gray-700 text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map(a => (
            <motion.div
              key={a.id}
              whileHover={{ scale: 1.03 }}
              className={`bg-[#071310]/80 border ${a.type === "Task" ? "border-emerald-700" : "border-yellow-400"} p-4 rounded-2xl shadow-lg`}
            >
              <h3 className="text-lg md:text-xl font-semibold text-yellow-300 mb-2">{a.title}</h3>
              <p className="text-gray-300 text-sm mb-4">
                Reward: {a.reward} 🪙 (~{(a.reward*coinToPKR).toFixed(2)} PKR)
              </p>
              <button
                onClick={() => handleClaim(a.id)}
                disabled={a.status !== "Claimable"}
                className={`w-full py-2 rounded-xl font-bold ${
                  a.status === "Claimable"
                    ? "bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 text-gray-900 hover:scale-105 transition-all"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
              >
                {a.status === "Claimable" ? "Claim / Play" : a.status}
              </button>

              {/*
                🔹 Backend hooks:
                - Replace `filteredActivities` with API GET /api/user-activities
                - When user clicks "Claim / Play", call POST /api/claim-activity
                - Update coins & activity status from backend
              */}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Offers Carousel / Slider */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-4 text-center">Special Offers</h2>
        <div className="flex overflow-x-auto gap-4 py-2">
          {[
            { title: "Double Coins Weekend", reward: 1500 },
            { title: "Limited Time: Spin & Win", reward: 800 },
            { title: "Watch Ad & Earn", reward: 200 },
          ].map((offer, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="min-w-[220px] bg-[#0c1f1d]/80 border border-yellow-400 p-4 rounded-2xl shadow-lg flex-shrink-0"
            >
              <h3 className="text-yellow-300 font-semibold text-lg mb-2">{offer.title}</h3>
              <p className="text-gray-300">Reward: {offer.reward} 🪙 (~{(offer.reward*coinToPKR).toFixed(2)} PKR)</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-yellow-400 via-emerald-400 to-green-300 text-gray-900 text-center py-12 px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-4">Turn Your Playtime Into Paytime 💸</motion.h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Play mini-games, complete tasks, grab offers — earn coins and cash out anytime!
        </p>
        <a
          href="/signup"
          className="bg-gray-900 text-yellow-400 font-bold py-3 px-8 rounded-3xl text-lg hover:bg-gray-800 transition-all"
        >
          Join the Game 🔥
        </a>
      </section>
    </main>
  );
}
