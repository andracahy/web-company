import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center justify-between">
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a href="mailto:contact@techcorp.id" 
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              contact@techcorp.id
            </a>
          </div>

          {/* Company Name - Centered */}
          <Link href="/" className="flex items-center gap-3 mx-auto">
            <h3 className="text-xl font-bold text-white">TechCorp</h3>
            <span className="h-4 w-[1px] bg-gray-700"></span>
            <span className="text-gray-400 text-sm">IT Solutions</span>
          </Link>

          {/* Phone Number */}
          <div className="flex items-center gap-6">
            <a href="tel:+622112345678" 
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +62 21 1234 5678
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center">
          <span className="text-gray-400 text-sm">© 2024 TechCorp</span>
        </div>
      </div>
    </footer>
  );
}
