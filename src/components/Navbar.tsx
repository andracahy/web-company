'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" 
              className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                scrolled 
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent' 
                  : 'text-white'
              }`}>
              TechoCorp
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-1">
            <button onClick={() => scrollToSection('about')} 
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}>
              Tentang
            </button>
            <button onClick={() => scrollToSection('services')} 
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}>
              Layanan
            </button>
            <button onClick={() => scrollToSection('portfolio')} 
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}>
              Portofolio
            </button>
            <button onClick={() => scrollToSection('contact')} 
              className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium 
              hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 shadow-md hover:shadow-xl 
              hover:scale-105 active:scale-100"
            >
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                scrolled 
                  ? 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50' 
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}>
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

      {/* Mobile Menu - Improved */}
      <div className={`
        md:hidden fixed inset-x-0 top-16 transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
      `}>
        <div className="bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-col space-y-1">
              <button onClick={() => scrollToSection('about')} 
                className="px-4 py-3 rounded-xl text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all">
                Tentang
              </button>
              <button onClick={() => scrollToSection('services')} 
                className="px-4 py-3 rounded-xl text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all">
                Layanan
              </button>
              <button onClick={() => scrollToSection('portfolio')} 
                className="px-4 py-3 rounded-xl text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all">
                Portofolio
              </button>
              <button onClick={() => scrollToSection('contact')} 
                className="block px-4 py-3 mt-4 rounded-xl text-base text-center text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-all">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
