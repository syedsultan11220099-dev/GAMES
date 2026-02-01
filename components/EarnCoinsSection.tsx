export default function EarnCoinsSection() {
  const tasks = [
    {
      title: "🎮 Play Daily Games",
      desc: "Earn up to 500 coins every day by playing featured mini-games.",
    },
    {
      title: "🏆 Complete Challenges",
      desc: "Join weekly challenges to boost your rank and unlock badges.",
    },
    {
      title: "👫 Invite Friends",
      desc: "Get 1000 bonus coins for every friend that signs up and plays.",
    },
    {
      title: "💸 Invest in Game Assets",
      desc: "Own NFTs or tokens to receive passive daily coin rewards.",
    },
  ];

  return (
    <section className="bg-emerald-950 py-16 px-6 text-center text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-emerald-400 mb-10">
          💰 Earn More Coins & Climb the Ranks
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {tasks.map((task, i) => (
            <div
              key={i}
              className="bg-emerald-900/60 p-6 rounded-xl hover:bg-emerald-800/80 transition shadow-md"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                {task.title}
              </h3>
              <p className="text-gray-300">{task.desc}</p>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full transition">
          Start Earning Now 🚀
        </button>
      </div>
    </section>
  );
}
