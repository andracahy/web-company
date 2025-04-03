import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-white pt-32 pb-40">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="md:w-2/3">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
              Solusi Digital untuk Era Modern
            </h1>
            <p className="text-xl mb-8 text-gray-100">Transformasi digital yang membawa bisnis Anda ke level berikutnya</p>
            <div className="flex gap-4">
              <Link href="/contact" 
                className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Mulai Sekarang
              </Link>
              <Link href="/portfolio" 
                className="bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                Lihat Portfolio
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Layanan Unggulan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
              {/* Icon */}
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-indigo-600 transition-colors">
              Pengembangan Website
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Website modern dengan teknologi terkini untuk menghadirkan pengalaman digital yang luar biasa.
            </p>
          </div>
          <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
              {/* Icon */}
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-indigo-600 transition-colors">
              Solusi Jaringan
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Infrastruktur jaringan yang aman dan handal untuk perusahaan Anda.
            </p>
          </div>
          <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
              {/* Icon */}
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-indigo-600 transition-colors">
              Cloud Server
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Layanan cloud computing dengan performa tinggi dan keamanan maksimal.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Tentang Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Visi Kami</h3>
              {/* Existing about content */}
            </div>
            <div className="space-y-6">
              {/* Existing achievements content */}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Portfolio Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Existing portfolio items */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Hubungi Kami</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              {/* Existing contact info */}
            </div>
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {/* Existing contact form */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}