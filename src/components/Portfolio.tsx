"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Portfolio({ t }: { t: any }) {
  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t.portfolio.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src="/pt.png"
              alt="Desain website perusahaan modern"
              className="w-full h-48 object-cover"
              width={400}
              height={300}
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Website Perusahaan</h3>
              <p className="text-gray-600 mt-2">
                Desain modern dengan fitur responsif
              </p>
            </div>
          </motion.div>
          {/* Portfolio Item 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src="/estore.png"
              alt="Website e-commerce dengan fitur keranjang belanja"
              className="w-full h-48 object-cover"
              width={400}
              height={300}
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">E-Commerce Store</h3>
              <p className="text-gray-600 mt-2">
                Platform penjualan online lengkap
              </p>
            </div>
          </motion.div>
          {/* Portfolio Item 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src="/lpage.png"
              width={400}
              height={300}
              alt="Landing page dengan elemen konversi"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Landing Page</h3>
              <p className="text-gray-600 mt-2">
                Optimized untuk konversi tinggi
              </p>
            </div>
          </motion.div>
        </div>
        <div className="text-center mt-12">
          <button className="inline-flex items-center text-[#2563eb] hover:text-[#1d4ed8] font-semibold">
            {t.portfolio.cta}
            <ChevronRight className="ml-1 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
