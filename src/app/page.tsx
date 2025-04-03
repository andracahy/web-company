'use client';

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <motion.header 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        id="hero" 
        className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"
        ></motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
            className="md:w-2/3"
          >
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
          </motion.div>
        </div>
      </motion.header>

      {/* Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        id="services" 
        className="relative py-32 bg-white"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16 text-gray-800">
            Layanan Unggulan
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "/icons/web-dev.png",
                title: "Pengembangan Website",
                items: [
                  "Website Perusahaan",
                  "E-commerce",
                  "Aplikasi Web Custom",
                  "Portal Berita"
                ]
              },
              {
                icon: "/network-icon.png",
                title: "Solusi Jaringan",
                items: [
                  "Instalasi Jaringan",
                  "Pemeliharaan Jaringan",
                  "Keamanan Jaringan",
                  "Optimasi Jaringan"
                ]
              },
              {
                icon: "/cloud-icon.png",
                title: "Cloud Service",
                items: [
                  "Migrasi Cloud",
                  "Manajemen Cloud",
                  "Keamanan Cloud",
                  "Optimasi Cloud"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                  <Image 
                    src={service.icon} 
                    alt={service.title}
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <ul className="space-y-3 text-gray-600">
                  {service.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent -skew-y-6"></div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        id="about" 
        className="relative py-32 bg-gray-50"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16 text-gray-800">Tentang Kami</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Menjadi pemimpin dalam transformasi digital di Indonesia, memberikan solusi inovatif yang memberdayakan bisnis untuk berkembang di era digital.
              </p>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Misi Kami</h3>
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
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-6">
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
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        id="portfolio" 
        className="relative py-32 bg-white"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16 text-gray-800">Portfolio Kami</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl overflow-hidden group">
              <div className="h-64 relative">
                <Image
                  src="/images/portofolio-1.png"
                  alt="E-commerce Platform"
                  fill
                  className="object-cover"
                />
              </div>
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
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl overflow-hidden group">
              <div className="h-64 relative">
                <Image
                  src="/portfolio-2.png"
                  alt="School Management System"
                  fill
                  className="object-cover"
                />
              </div>
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
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        id="contact" 
        className="relative py-32 bg-gray-50"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16 text-gray-800">Hubungi Kami</motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                  <Image 
                    src="/location-icon.png" 
                    alt="Location"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Alamat</h3>
                  <p className="text-gray-600">Jl. Jend. Sudirman No. 123, Jakarta, Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                  <Image 
                    src="/phone-icon.png" 
                    alt="Phone"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Telepon</h3>
                  <p className="text-gray-600">+62 21 1234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                  <Image 
                    src="/email-icon.png" 
                    alt="Email"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@company.com</p>
                </div>
              </div>
            </motion.div>
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama</label>
                    <input type="text" id="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subjek</label>
                  <input type="text" id="subject" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan</label>
                  <textarea id="message" rows={4} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full px-6 py-3 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Kirim Pesan</button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
}