"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaShieldAlt, FaCoins, FaRocket, FaUsers, FaHandshake } from "react-icons/fa";

// Premium, responsive About Us / Earning page component
// Requirements: TailwindCSS + Framer Motion + react-countup + react-icons

export default function AboutUsPremium() {
  const stats = [
    { id: 1, label: "Users Earning Daily", value: 20000, suffix: "+" },
    { id: 2, label: "Coins Distributed", value: 1200000, suffix: "+" },
    { id: 3, label: "Tasks Completed", value: 85000, suffix: "+" },
    { id: 4, label: "Rewards Redeemed", value: 50000, suffix: "+" },
  ];

  const steps = [
    {
      id: 1,
      icon: "📝",
      title: "Complete Simple Tasks",
      desc: "Play short games, watch a short video, or finish a micro-task — takes 30–60s.",
    },
    {
      id: 2,
      icon: "💰",
      title: "Accumulate Coins",
      desc: "Every success adds coins to your secure wallet. Track all activity in-app.",
    },
    {
      id: 3,
      icon: "🏆",
      title: "Redeem Rewards",
      desc: "Instant conversion: coins → PKR or gift cards. Withdraw or spend instantly.",
    },
    {
      id: 4,
      icon: "🚀",
      title: "Boost Your Earnings",
      desc: "Upgrade tasks, invite friends or complete daily streaks to multiply coins.",
    },
  ];

  const features = [
    { icon: <FaShieldAlt />, title: "Secure Payouts", desc: "Encrypted transfers with instant settlements." },
    { icon: <FaCoins />, title: "Real PKR Value", desc: "Clear conversion, no hidden fees." },
    { icon: <FaRocket />, title: "Fast Withdrawals", desc: "Withdraw to bank/mobile wallet in minutes." },
    { icon: <FaUsers />, title: "Community Driven", desc: "Join thousands earning daily." },
    { icon: <FaHandshake />, title: "100% Transparent", desc: "Task results & payout logs are visible to users." },
  ];

  // animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
  };

  return (
    <main className="bg-gradient-to-b from-[#05060a] via-[#07070f] to-[#02020a] text-white overflow-hidden">
      {/* floating coins background - purely decorative */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute left-0 top-10 opacity-10 w-96 animate-float-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#FACC15" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>
          <circle cx="40" cy="40" r="20" fill="url(#g1)" />
          <circle cx="160" cy="160" r="30" fill="url(#g1)" />
        </svg>
        <svg className="absolute right-0 bottom-20 opacity-6 w-80 animate-float" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="50" r="26" fill="#FDE68A" />
          <circle cx="40" cy="150" r="20" fill="#86efac" />
        </svg>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="inline-flex items-center gap-2 text-sm bg-emerald-700/20 text-emerald-300 px-3 py-1 rounded-full mb-6">Earn • Fast Payout • Trusted</p>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Earn <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-yellow-300 to-emerald-200">coins</span> doing simple tasks —
                <br /> Convert to <span className="text-yellow-400">PKR</span> instantly.
              </h1>

              <p className="mt-6 text-gray-300 max-w-xl">No investment, no tricks. Complete quick, engaging tasks and withdraw your earnings directly to your bank or mobile wallet. Safe, transparent and built for real people.</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/signup" className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-emerald-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">Start Earning</a>
                <a href="#how" className="inline-flex items-center gap-3 border border-emerald-700 text-emerald-300 px-5 py-3 rounded-full hover:bg-emerald-900/40 transition">How it works</a>
              </div>

              {/* trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-10 h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-yellow-400">🏆</div>
                  <div>
                    <div className="text-sm font-semibold">Instant Payouts</div>
                    <div className="text-xs text-gray-400">No waiting — withdraw fast</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-10 h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-emerald-300">🔒</div>
                  <div>
                    <div className="text-sm font-semibold">Secure & Transparent</div>
                    <div className="text-xs text-gray-400">Audit logs & visible payouts</div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Stats cards */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <motion.div key={s.id} whileHover={{ scale: 1.03 }} className="bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-emerald-800/30">
                    <div className="text-sm text-gray-300">{s.label}</div>
                    <div className="mt-3 flex items-baseline gap-3">
                      <div className="text-3xl md:text-4xl font-extrabold text-yellow-400">
                        <CountUp end={s.value} duration={2} separator="," />
                        <span className="text-lg text-gray-300">{s.suffix}</span>
                      </div>
                      <div className="text-xs text-gray-400">since launch</div>
                    </div>
                    <div className="mt-4 h-2 bg-emerald-900 rounded-full overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-yellow-400 to-emerald-400" style={{ width: `${50 + (i % 4) * 10}%` }}></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* small note */}
              <p className="mt-6 text-xs text-gray-400">Millions in coins distributed. Thousands of users cashing out daily.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-emerald-400 text-center mb-10">How it Works — 4 simple steps</motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-gradient-to-br from-black/30 to-black/20 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.desc}</p>
                <div className="mt-4">
                  <a className="inline-block text-sm font-semibold text-emerald-300 hover:text-emerald-200">Learn more →</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES / TRUST */}
      <section className="py-20 bg-[#070718]">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 text-center mb-10">Why our users trust us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, y: -6 }} className="bg-black/25 backdrop-blur-md p-6 rounded-2xl text-center shadow hover:shadow-2xl transition">
                <div className="text-3xl text-yellow-400 mb-4 flex justify-center">{f.icon}</div>
                <h4 className="font-semibold mb-2">{f.title}</h4>
                <p className="text-sm text-gray-300">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS + CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="space-y-6">
              <h3 className="text-3xl font-bold text-emerald-400">Real People, Real Earnings</h3>
              <p className="text-gray-300">"I started doing short tasks and withdraw money in PKR every week. It's simple and reliable." — <span className="font-semibold">Sana K.</span></p>

              <div className="mt-6 flex gap-4">
                <a href="/signup" className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-emerald-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">Start Earning</a>
                <a href="/learn-more" className="inline-flex items-center gap-3 border border-emerald-700 text-emerald-300 px-5 py-3 rounded-full hover:bg-emerald-900/30 transition">Learn More</a>
              </div>
            </motion.div>

            <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl">
                <p className="text-gray-300">"Earned 3,500 PKR last month just completing simple tasks."</p>
                <div className="mt-4 text-sm text-gray-400">— Ali R.</div>
              </div>
              <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl">
                <p className="text-gray-300">"Fast payouts and the tasks are actually fun."</p>
                <div className="mt-4 text-sm text-gray-400">— Maria P.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-[#071021] to-[#071018]">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-emerald-300 mb-4">Ready to start earning real money?</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-gray-300 mb-8">Sign up in seconds, complete your first task, and withdraw — it's that simple.</motion.p>

          <a href="/signup" className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-emerald-400 text-black font-semibold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition">Create Account — Start Earning</a>
        </div>
      </section>

      {/* Small CSS for floating animations (Tailwind can't animate custom keyframes inline) */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 4.5s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
      `}</style>
    </main>
  );
}
