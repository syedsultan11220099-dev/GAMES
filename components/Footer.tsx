"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-gray-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
