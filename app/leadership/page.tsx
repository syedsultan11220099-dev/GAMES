// "use client";
// import { useState, useEffect } from "react";

// interface Player {
//   id: number;
//   name: string;
//   coins: number;
//   avatar: string;
// }

// export default function LeaderboardTable() {
//   const [players, setPlayers] = useState<Player[]>([]);

//   // simulate API data (you can later fetch from backend)
//   useEffect(() => {
//     const data = [
//       { id: 1, name: "Abdul Rehman", coins: 9800, avatar: "/avatars/a1.png" },
//       { id: 2, name: "Sara Khan", coins: 8750, avatar: "/avatars/a2.png" },
//       { id: 3, name: "Ali Raza", coins: 7500, avatar: "/avatars/a3.png" },
//       { id: 4, name: "Fatima Noor", coins: 6800, avatar: "/avatars/a4.png" },
//       { id: 5, name: "Zain Malik", coins: 6400, avatar: "/avatars/a5.png" },
//     ];
//     setPlayers(data);
//   }, []);

//   return (
//     <section className="bg-gray-950 text-white py-16 px-6">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-emerald-400 mb-10">
//           🎮 Gaming Leadership Board
//         </h2>

//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-emerald-900 text-emerald-300">
//               <th className="py-3 px-4 text-left">Rank</th>
//               <th className="py-3 px-4 text-left">Player</th>
//               <th className="py-3 px-4 text-right">Coins</th>
//             </tr>
//           </thead>
//           <tbody>
//             {players.map((player, index) => (
//               <tr
//                 key={player.id}
//                 className={`border-b border-gray-700 hover:bg-emerald-800 transition ${
//                   index === 0 ? "bg-emerald-900/60" : ""
//                 }`}
//               >
//                 <td className="py-3 px-4 font-bold text-emerald-400">
//                   #{index + 1}
//                 </td>
//                 <td className="py-3 px-4 flex items-center gap-3">
//                   <img
//                     src={player.avatar}
//                     alt={player.name}
//                     className="w-10 h-10 rounded-full border border-emerald-500"
//                   />
//                   {player.name}
//                 </td>
//                 <td className="py-3 px-4 text-right text-yellow-400 font-semibold">
//                   {player.coins.toLocaleString()} 🪙
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <p className="text-sm text-gray-400 mt-6">
//           Earn coins by playing games, completing challenges, and investing in new tournaments!
//         </p>
//       </div>
//     </section>
//   );
// }
import TopWinners from "@/components/TopWinners";
import LeaderboardTable from "@/components/LeaderboardTable";
import EarnCoinsSection from "@/components/EarnCoinsSection";

export default function LeadershipPage() {
  return (
    <>
      <TopWinners />
      <LeaderboardTable />
      <EarnCoinsSection />
    </>
  );
}
