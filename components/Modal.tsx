"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // close modal when clicking overlay
      >
        <motion.div
          className="bg-emerald-900 rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-300 hover:text-white text-xl font-bold"
          >
            &times;
          </button>

          {/* Modal Content */}
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
