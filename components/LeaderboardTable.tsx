"use client";
import { useEffect, useState } from "react";

interface Player {
  id: number;
  name: string;
  coins: number;
  city: string;
}

export default function LeaderboardTable() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [visibleCount, setVisibleCount] = useState(10); // show 10 initially
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  const coinToPKR = 0.5; // 1 coin = 0.5 PKR

  const cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta", "Multan", "Faisalabad", "Rawalpindi"];

  // Predefined offers for the slider
  const offers = [
    "🎁 Complete daily mission: +500 coins",
    "💎 Invite a friend: +1000 coins",
    "🏆 Win a mini-game: +750 coins",
    "🔥 Weekend bonus: +2000 coins",
    "🎯 Complete 5 tasks: +1500 coins",
  ];

  // Generate 100 dummy players
  useEffect(() => {
    const fakePlayers = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `Player_${i + 1}`,
      coins: Math.floor(Math.random() * 90000) + 1000,
      city: cities[Math.floor(Math.random() * cities.length)],
    })).sort((a, b) => b.coins - a.coins);

    setPlayers(fakePlayers);
  }, []);

  // Slider effect: change offer every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex(prev => (prev + 1) % offers.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Handle Load More
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 10, players.length));
  };

  return (
    <section className="bg-gray-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Offers Slider */}
        <div className="bg-emerald-900/80 rounded-xl p-4 mb-8 text-center text-lg font-semibold text-yellow-400 animate-pulse">
          {offers[currentOfferIndex]}
        </div>

        <h2 className="text-3xl font-bold text-emerald-400 mb-8 text-center">
          🧩 Top Players
        </h2>

        <div className="overflow-x-auto rounded-xl border border-emerald-700">
          <table className="w-full text-left border-collapse">
            <thead className="bg-emerald-900 text-emerald-300 uppercase text-sm">
              <tr>
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Player Name</th>
                <th className="py-3 px-4">City</th>
                <th className="py-3 px-4 text-right">Coins</th>
                <th className="py-3 px-4 text-right">PKR</th>
              </tr>
            </thead>
            <tbody>
              {players.slice(0, visibleCount).map((p, i) => (
                <tr
                  key={p.id}
                  className="border-b border-gray-800 hover:bg-emerald-800/60 transition-all"
                >
                  <td className="py-2 px-4 font-semibold text-emerald-400">
                    #{i + 1}
                  </td>
                  <td className="py-2 px-4">{p.name}</td>
                  <td className="py-2 px-4">{p.city}</td>
                  <td className="py-2 px-4 text-right text-yellow-400 font-bold">
                    {p.coins.toLocaleString()} 🪙
                  </td>
                  <td className="py-2 px-4 text-right text-emerald-300 font-medium">
                    {Math.floor(p.coins * coinToPKR).toLocaleString()} PKR
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Load More button */}
        {visibleCount < players.length && (
          <div className="text-center mt-6">
            <button
              className="px-6 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-500 transition"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
