"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      <div className="backdrop-blur-md bg-white/70 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" 
                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                TechoCorp
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-x-1">
              <Link 
                href="/about" 
                className="px-4 py-2 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-300"
              >
                Tentang
              </Link>
              <Link 
                href="/services" 
                className="px-4 py-2 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-300"
              >
                Layanan
              </Link>
              <Link 
                href="/portfolio" 
                className="px-4 py-2 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-300"
              >
                Portofolio
              </Link>
              <Link 
                href="/contact" 
                className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium 
                hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 shadow-md hover:shadow-xl 
                hover:scale-105 active:scale-100"
              >
                Hubungi Kami
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 transition-all"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="bg-white border-t border-gray-100 px-4 py-2">
            <div className="space-y-1 py-3">
              <Link href="/about" 
                className="block px-4 py-3 rounded-xl text-base text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                Tentang
              </Link>
              <Link href="/services" 
                className="block px-4 py-3 rounded-xl text-base text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                Layanan
              </Link>
              <Link href="/portfolio" 
                className="block px-4 py-3 rounded-xl text-base text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                Portofolio
              </Link>
              <Link href="/contact" 
                className="block px-4 py-3 mt-4 rounded-xl text-base text-center text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-all">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
