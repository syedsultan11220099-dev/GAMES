"use client";
import { useState } from "react"; // ✅ important!
import { FaCrown } from "react-icons/fa";

export default function TopWinners() {
  const allWinners = [
    { name: "Abdul Rehman", coins: 98200, color: "text-yellow-400", position: "1st" },
    { name: "Sara Khan", coins: 94500, color: "text-gray-300", position: "2nd" },
    { name: "Ali Raza", coins: 91100, color: "text-amber-700", position: "3rd" },
    { name: "Usman Ali", coins: 88000, color: "text-white", position: "4th" },
    { name: "Fatima Noor", coins: 85000, color: "text-white", position: "5th" },
    // Add more if needed
  ];

  const [visibleCount, setVisibleCount] = useState(3); // initially show 3 winners
  const coinToPKR = 0.5; // 1 coin = 0.5 PKR

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, allWinners.length)); // show 3 more each time
  };

  return (
    <section className="text-center mb-16">
      <h2 className="text-4xl font-bold text-emerald-400 mb-8">
        🏆 Top Champions
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {allWinners.slice(0, visibleCount).map((w, i) => (
          <div
            key={i}
            className="bg-emerald-900/50 p-6 rounded-2xl shadow-lg w-60 hover:scale-105 transition-all duration-300"
          >
            <FaCrown className={`${w.color} text-4xl mx-auto mb-3 animate-bounce`} />
            <h3 className="text-xl font-semibold text-white">{w.name}</h3>
            <p className="text-emerald-300 mt-1">{w.position} Place</p>
            <p className="text-yellow-400 mt-2 text-lg font-bold">
              {w.coins.toLocaleString()} 🪙
            </p>
            <p className="text-emerald-300 mt-1">
              PKR {(w.coins * coinToPKR).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {visibleCount < allWinners.length && (
        <button
          className="mt-6 px-6 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-500 transition"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </section>
  );
}
