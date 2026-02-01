"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { FaCoins } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";

// =====================
// Mock Games & Offers
// =====================
const gamesData = [
  { id: 1, name: "Ludo Star", src: "ludogame.jpg", reward: 500 },
  { id: 2, name: "Teen Patti Gold", src: "teen-patti.jpg", reward: 700 },
  { id: 3, name: "Dice Rolling", src: "dice roll.png", reward: 400 },
  { id: 4, name: "Poker", src: "poker card.jpg", reward: 600 },
  { id: 5, name: "JetX", src: "jetX.jpg", reward: 800 },
  { id: 6, name: "Battle Infinity", src: "battle-infinity-game.png", reward: 650 },
  { id: 7, name: "Spin & Gold", src: "Spin & Gold.jpg", reward: 550 },
  { id: 8, name: "Cash Frenzy", src: "Cash Frenzy.webp", reward: 700 },
  { id: 9, name: "Gambino Slots", src: "Gambino Slots.jpg", reward: 600 },
  { id: 10, name: "Roulette", src: "routlette.jpg", reward: 500 },
  { id: 11, name: "Epic Wilds", src: "Epic Wilds (Jackpot).png", reward: 750 },
  { id: 12, name: "Hot Shot", src: "hot shot.jpg", reward: 450 },
  { id: 13, name: "777 Lucky Game", src: "777.jpg", reward: 600 },
  { id: 14, name: "Lots of Slots", src: "lots of slots .jpg", reward: 650 },
  { id: 15, name: "Blackjack", src: "Blackjack.png", reward: 550 },
];

const offersData = [
  { id: 1, title: "Daily Dice Roll Bonus", desc: "Complete dice roll to get +50% coins!" },
  { id: 2, title: "Invite a Friend", desc: "Get 100 🪙 for every friend who joins!" },
  { id: 3, title: "Special Weekend Challenge", desc: "Play JetX to earn double coins!" },
];

// =====================
// Component
// =====================
export default function PlayEarnPage() {
  const [coins, setCoins] = useState(128500); // User coins
  const coinToPKR = 0.1; // Mock conversion
  const [recentReward, setRecentReward] = useState<number | null>(null);
  const [selectedGame, setSelectedGame] = useState<null | typeof gamesData[0]>(null);
  const [coinRain, setCoinRain] = useState<{ left: string; delay: number; scale: number }[]>([]);

  // Coin rain particles
  useEffect(() => {
    setCoinRain(
      Array.from({ length: 25 }).map(() => ({
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 6,
        scale: Math.random() * 0.8 + 0.5,
      }))
    );
  }, []);

  // Handle Play click
  const handleClickPlay = (game: typeof gamesData[0]) => {
    setSelectedGame(game);
  };

  // Confirm play (mock coins addition)
  const handleConfirmPlay = (reward: number) => {
    // 🔹 Backend placeholder:
    // POST /api/play-game
    // body: { userId, gameId }
    // response: { coinsEarned }
    setCoins(prev => prev + reward);
    setRecentReward(reward);
    setSelectedGame(null);

    setTimeout(() => setRecentReward(null), 2000);
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#030614] via-[#051d24] to-[#041e1f] text-white overflow-x-hidden">

      {/* 💸 Coin Rain Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {coinRain.map((b, i) => (
          <motion.div
            key={i}
            className="absolute opacity-70"
            style={{ left: b.left }}
            initial={{ y: "-10vh", scale: b.scale }}
            animate={{ y: "110vh", rotate: 360 }}
            transition={{
              duration: 6 + Math.random() * 3,
              delay: b.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="text-yellow-400 text-2xl font-bold">🪙</span>
          </motion.div>
        ))}
      </div>

      {/* 🎉 Reward Popup */}
      <AnimatePresence>
        {recentReward && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: -30, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-2xl font-bold shadow-lg z-50"
          >
            +{recentReward} 🪙 Added!
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🎮 Hero Section */}
      <section className="text-center pt-24 pb-16 px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-emerald-400 via-yellow-400 to-green-300 bg-clip-text text-transparent mb-6"
        >
          Play Games & Earn Coins 💰
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-lg md:text-2xl mb-10"
        >
          Choose your game, complete challenges, and convert coins into PKR instantly.
        </motion.p>

        {/* Balance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-emerald-400 mb-10"
        >
          <p className="text-yellow-400 font-semibold">Your Balance</p>
          <p className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-2">
            <FaCoins className="animate-spin" /> {coins.toLocaleString()} 🪙
          </p>
          <p className="text-emerald-300">≈ {(coins * coinToPKR).toFixed(2)} PKR</p>
        </motion.div>
      </section>

      {/* 🎲 Games Slider */}
      <section className="px-6 md:px-16 mb-20">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 }, 1440: { slidesPerView: 6 } }}
        >
          {gamesData.map(game => (
            <SwiperSlide key={game.id}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-emerald-800/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={game.src}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-2 py-1 rounded-xl text-sm font-bold flex items-center gap-1 shadow-md">
                  <FaCoins /> {game.reward} 🪙
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-white font-semibold mb-2">{game.name}</h3>
                  <button
                    onClick={() => handleClickPlay(game)}
                    className="bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 text-gray-900 font-bold py-2 px-4 rounded-xl w-full hover:scale-105 transition"
                  >
                    Play & Earn
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 🎁 Offers / Tasks Slider */}
      <section className="px-6 md:px-16 mb-20">
        <h2 className="text-4xl font-bold text-emerald-400 mb-6 text-center">Trending Offers & Tasks</h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {offersData.map(offer => (
            <SwiperSlide key={offer.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#071310]/70 border border-emerald-700 p-6 rounded-3xl shadow-md hover:shadow-emerald-400/30 transition-all"
              >
                <h3 className="text-2xl font-semibold mb-2 text-yellow-300">{offer.title}</h3>
                <p className="text-gray-300 text-sm">{offer.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 🔥 Modal for Play / Confirm */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-emerald-900 rounded-3xl p-8 max-w-sm mx-4 text-center shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">{selectedGame.name}</h3>
              <p className="text-gray-300 mb-4">
                Reward: <span className="text-teal-400 font-bold">{selectedGame.reward} 🪙</span>
              </p>
              <p className="text-gray-400 mb-6">
                Confirm your play to add coins to your balance!
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleConfirmPlay(selectedGame.reward)}
                  className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-xl font-bold hover:scale-105 transition"
                >
                  Confirm
                </button>
                <button
                  onClick={() => setSelectedGame(null)}
                  className="bg-gray-700 text-gray-200 py-2 px-4 rounded-xl hover:scale-105 transition"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔹 Backend Notes: 
        1. Replace `setCoins(prev => prev + reward)` inside handleConfirmPlay 
           with your POST API call to backend for recording play.
        2. Offers / tasks can come dynamically from API later.
        3. Coins, rewards, leaderboard feed can be replaced by backend response.
      */}
    </main>
  );
}
