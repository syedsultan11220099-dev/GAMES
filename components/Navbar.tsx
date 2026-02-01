"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-emerald-950/90 shadow-2xl scale-[1.01]"
          : "bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-green-300 to-emerald-500 text-transparent bg-clip-text drop-shadow-lg hover:scale-105 transition-transform">
          2xCash
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-10 font-medium">
          {[
            { name: "Home", href: "/" },
            // { name: "FAQS", href: "/faqs" },
            // { name: "Login", href: "/login" },
            { name: "Game Play", href: "/game" },
            { name: "Earn", href: "/earn" },
            //  { name: "Game Play", href: "/game" },
            { name: "Cashout", href: "/cashout" },
            // { name: "Forgot Password", href: "/forgot-password" },
            { name: "About us", href: "/aboutus" },
             { name: "Leadership", href: "/leadership" },
             


          ].map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className="relative group text-white transition-transform transform hover:-translate-y-1 hover:scale-105"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/signup"
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-green-400 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/50 transition-transform hover:scale-105 relative overflow-hidden"
        >
          <span className="relative z-10">🚀 Get Started</span>
          <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity"></span>
        </Link>
      </div>
    </nav>
  );
}
