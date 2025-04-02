import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <header className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-white pt-32 pb-40">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="md:w-2/3">
            <h1 className="text-5xl font-bold mb-6">Portfolio Kami</h1>
            <p className="text-xl text-gray-100">Karya terbaik kami dalam menghadirkan solusi digital</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden group">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-indigo-600 transition-colors">
                E-commerce Platform
              </h3>
              <p className="text-gray-600 mb-4">
                Pengembangan platform e-commerce dengan fitur lengkap untuk brand fashion terkemuka.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">MongoDB</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden group">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-indigo-600 transition-colors">
                Sistem Manajemen Sekolah
              </h3>
              <p className="text-gray-600 mb-4">
                Aplikasi web untuk mengelola administrasi dan pembelajaran sekolah.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Laravel</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">MySQL</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Vue.js</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}