import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-white mb-4">TechCorp</h3>
            <p className="text-sm text-gray-400 max-w-md text-center md:text-left">
              Solusi digital terdepan untuk kemajuan bisnis Anda
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="mailto:contact@techcorp.id" className="hover:text-white transition-colors">
              contact@techcorp.id
            </a>
            <a href="tel:+622112345678" className="hover:text-white transition-colors">
              +62 21 1234 5678
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm">© 2024 TechCorp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
