import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <header className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-white pt-32 pb-40">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="md:w-2/3">
            <h1 className="text-5xl font-bold mb-6">Layanan Kami</h1>
            <p className="text-xl text-gray-100">Solusi lengkap untuk kebutuhan teknologi bisnis Anda</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
              {/* Icon */}
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Pengembangan Website</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Website Perusahaan</li>
              <li>• E-commerce</li>
              <li>• Aplikasi Web Custom</li>
              <li>• Portal Berita</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
              {/* Icon */}
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Solusi Jaringan</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Instalasi Jaringan</li>
              <li>• Keamanan Jaringan</li>
              <li>• Maintenance</li>
              <li>• Konsultasi IT</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
              {/* Icon */}
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Cloud Service</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Cloud Hosting</li>
              <li>• Server Management</li>
              <li>• Backup Solution</li>
              <li>• Cloud Consulting</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}