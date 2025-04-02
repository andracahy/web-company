import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      <div className="backdrop-blur-md bg-white/70 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent hover:from-indigo-500 hover:to-violet-500 transition-all duration-300">
                TechCorp
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
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
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
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50">
              Tentang
            </Link>
            <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50">
              Layanan
            </Link>
            <Link href="/portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50">
              Portofolio
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
