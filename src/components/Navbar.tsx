import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50">
      <div className="backdrop-blur-md bg-white/70 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link 
                href="/" 
                className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent hover:from-indigo-500 hover:to-violet-500 transition-all duration-300"
              >
                TechCorp
              </Link>
            </div>
            <div className="flex items-center gap-x-1">
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
          </div>
        </div>
      </div>
    </nav>
  );
}
