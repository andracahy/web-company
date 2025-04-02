import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <header className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-white pt-32 pb-40">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="md:w-2/3">
            <h1 className="text-5xl font-bold mb-6">Cerita Kami</h1>
            <p className="text-xl text-gray-100">Membangun masa depan digital Indonesia sejak 2014</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative pb-24">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Visi Kami</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Menjadi pemimpin dalam transformasi digital di Indonesia, memberikan solusi inovatif yang memberdayakan bisnis untuk berkembang di era digital.
              </p>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Misi Kami</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Menghadirkan solusi teknologi terdepan
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Memberikan layanan berkualitas tinggi
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Mendukung pertumbuhan bisnis klien
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">10+ Tahun Pengalaman</h3>
                <p className="text-gray-600">Berpengalaman melayani berbagai sektor industri dengan solusi teknologi terbaik.</p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">100+ Proyek Sukses</h3>
                <p className="text-gray-600">Berhasil menyelesaikan ratusan proyek untuk klien dari berbagai industri.</p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">50+ Tim Ahli</h3>
                <p className="text-gray-600">Didukung oleh tim profesional berpengalaman di bidangnya.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}