"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoneyBillWave, FaWallet, FaExchangeAlt, FaCoins, FaTimes } from "react-icons/fa";
import Confetti from "react-confetti";

interface Transaction {
  date: string;
  method: string;
  amount: number;
  status: string;
}

export default function CashoutSection() {
  const [coins, setCoins] = useState(128500);
  const coinToPKR = 0.1;
  const [method, setMethod] = useState("JazzCash");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<Transaction[]>([
    { date: "Nov 7, 2025", method: "JazzCash", amount: 2000, status: "✅ Completed" },
    { date: "Nov 8, 2025", method: "Easypaisa", amount: 1500, status: "⏳ Pending" },
  ]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [accountNumber, setAccountNumber] = useState(""); // user input account
  const [maskedNumber, setMaskedNumber] = useState("03XX-XXXXXXX"); // frontend mock

  const pkrValue = (coins * coinToPKR).toFixed(2);

  const handleCashoutClick = () => {
    const numAmount = parseFloat(amount);
    if (!numAmount || numAmount < 500) {
      setMessage("❗ Minimum withdrawal is 500 PKR");
      return;
    }
    if (numAmount > Number(pkrValue)) {
      setMessage("❗ Insufficient balance");
      return;
    }

    // open account modal instead of processing immediately
    setShowAccountModal(true);
  };

  const handleConfirmCashout = () => {
    // process cashout (frontend only, backend hook here later)
    setCoins(prev => prev - Number(amount) / coinToPKR);

    const newTransaction: Transaction = {
      date: new Date().toLocaleDateString(),
      method,
      amount: Number(amount),
      status: "✅ Completed",
    };
    setHistory([newTransaction, ...history]);

    setMessage(`🎉 Cashout successful to ${accountNumber || maskedNumber}`);
    setAmount("");
    setShowConfetti(true);
    setShowAccountModal(false);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <section className="relative text-white py-16 px-4 md:px-12 overflow-hidden min-h-screen bg-gradient-to-b from-[#020a0f] via-[#041914] to-[#010607]">
      
      {/* Background coins */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.img
            key={i}
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="coin"
            className="absolute w-10 h-10 opacity-60"
            initial={{ y: -50, x: Math.random() * 1200 }}
            animate={{ y: [0, 900], rotate: [0, 360] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: Math.random() * 6 + 5,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Confetti */}
      <AnimatePresence>
        {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      </AnimatePresence>

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-12 drop-shadow-lg"
      >
        💸 Cashout Center
      </motion.h1>

      {/* Balance */}
      <motion.div className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-emerald-400 mb-10">
        <h2 className="text-2xl font-bold mb-2 text-yellow-400">Available Balance</h2>
        <motion.p
          key={coins}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-2 flex justify-center items-center gap-3 text-yellow-300"
        >
          <FaCoins className="animate-spin" /> {coins.toLocaleString()} 🪙
        </motion.p>
        <p className="text-emerald-300 text-lg">≈ {pkrValue} PKR</p>
      </motion.div>

      {/* Cashout Form */}
      <motion.div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-emerald-400 mb-16">
        <div className="space-y-5">
          <div>
            <label className="block text-gray-200 mb-2">Select Method</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full bg-gray-800/70 border border-emerald-400 text-white rounded-lg p-3 focus:outline-none focus:ring focus:ring-emerald-400"
            >
              <option>JazzCash</option>
              <option>Easypaisa</option>
              <option>Bank Transfer</option>
              <option>PayPal</option>
              <option>Crypto (USDT)</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-200 mb-2">Enter Amount (PKR)</label>
            <input
              type="number"
              placeholder="e.g. 1500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-gray-800/70 border border-yellow-400 text-white rounded-lg p-3 focus:outline-none focus:ring focus:ring-yellow-400"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCashoutClick}
            className="w-full bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 text-gray-900 font-bold py-3 rounded-full mt-4 shadow-lg flex justify-center items-center gap-3"
          >
            <FaMoneyBillWave /> Cashout Now
          </motion.button>

          {message && (
            <motion.p key={message} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-center text-emerald-300 font-semibold">
              {message}
            </motion.p>
          )}
        </div>
      </motion.div>

      {/* Modal for account number */}
      <AnimatePresence>
        {showAccountModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="bg-gray-900/90 backdrop-blur-lg p-8 rounded-3xl w-11/12 max-w-md shadow-xl relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button onClick={() => setShowAccountModal(false)} className="absolute top-4 right-4 text-gray-300 hover:text-red-500">
                <FaTimes size={20} />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Enter {method} Account</h2>
              <input
                type="text"
                placeholder={maskedNumber}
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="w-full bg-gray-800/70 border border-emerald-400 text-white rounded-lg p-3 focus:outline-none focus:ring focus:ring-emerald-400 mb-4"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleConfirmCashout}
                className="w-full bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 text-gray-900 font-bold py-3 rounded-full shadow-lg flex justify-center items-center gap-2"
              >
                Confirm Cashout
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
