"use client";

import Hero from "@/components/Hero";
// import Partners from "@/components/Partners";
import EarnCoinsSection from "@/components/EarnCoinsSection";
import EarnPage from "@/components/earn";
import Game from "@/components/game";

import { motion } from "framer-motion";
import Earn from "./earn/page";

export default function HomePage() {
  return (
    <main className="bg-emerald-950 text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <Hero />

      {/* PARTNER LOGOS */}
      <EarnCoinsSection />
            <Earn />
      <Game />



      {/* EARN REWARDS SECTION */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 relative overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-4 text-green-300"
        >
          Earn Rewards
        </motion.h2>
        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
          Play and earn real rewards from your favorite games. The more you play, the more you win!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-green-400/50 transition"
        >
          Start Earning
        </motion.button>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6 bg-emerald-800 text-center">
        <h2 className="text-4xl font-bold mb-12 text-green-300">Features We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Fast & Secure",
              desc: "Enjoy seamless experience with top-tier security and lightning speed performance.",
            },
            {
              title: "24/7 Support",
              desc: "Our team is always ready to help you, anywhere and anytime.",
            },
            {
              title: "User Friendly",
              desc: "Simple, clean, and intuitive design made for everyone.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-emerald-900/80 rounded-2xl shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-4 text-green-300">{f.title}</h3>
              <p className="text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CASHOUT SECTION */}
      <section className="py-20 bg-gradient-to-br from-emerald-800 to-green-900 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-green-300">Instant Cashout</h2>
        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
          Convert your gaming rewards into cash, gift cards, or crypto — instantly and securely.
        </p>
        <button className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
          View Rewards
        </button>
      </section>

      {/* ABOUT US SECTION */}
      <section className="py-20 px-6 md:px-16 bg-emerald-900">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-green-300">About Us</h2>
            <p className="text-gray-300 leading-relaxed">
              We empower gamers to earn real rewards for playing their favorite games.
              Our mission is to make gaming not just fun — but financially rewarding for everyone!
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-64 rounded-2xl bg-[url('/gaming-bg.jpg')] bg-cover bg-center shadow-lg"
          ></motion.div>
        </div>
      </section>

      {/* PLAY GAMES GRID */}
      <EarnCoinsSection />

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-emerald-950">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-300">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Ali Khan", review: "Earned my first 1000 PKR in just a week 🎉" },
            { name: "Sara Ahmed", review: "Super fun! Cashing out rewards instantly." },
            { name: "Bilal Hussain", review: "Best app for gamers! Fast payouts and real money!" },
          ].map((u, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-emerald-900/80 p-6 rounded-2xl shadow-lg transition"
            >
              <p className="text-gray-200 mb-4 text-lg italic">“{u.review}”</p>
              <h4 className="font-semibold text-green-400 text-right">- {u.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-green-300">FAQ</h2>
        <div className="space-y-4">
          {[
            { q: "What is this platform?", a: "A gaming reward portal where you earn for playing." },
            { q: "How can I earn rewards?", a: "Play daily challenges and leaderboard competitions." },
            { q: "How do I cash out?", a: "Redeem rewards instantly via Easypaisa or JazzCash." },
            { q: "Is it free to use?", a: "Completely free — play, win, and earn!" },
          ].map((item, i) => (
            <details key={i} className="bg-emerald-800 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">{item.q}</summary>
              <p className="mt-2 text-gray-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="relative py-20 px-6 text-center bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)] animate-pulse"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-500 animate-pulse">
            Stay Updated & Earn More
          </h2>
          <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
            Get exclusive updates, bonuses, and early access to games. Join now and start earning 🚀
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col md:flex-row justify-center items-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 w-80 rounded-full bg-emerald-800/70 border border-emerald-500/40 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Join Now
            </button>
          </form>
        </div>
        
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-800 py-6 text-center text-gray-400 text-sm">
        © 2025 GameEarn | All Rights Reserved.
      </footer>
    </main>
  );
}
