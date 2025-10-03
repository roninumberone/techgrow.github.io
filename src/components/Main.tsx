"use client";
import { motion } from "framer-motion";

export default function Main({ t }: { t: any }) {
  return (
    <main>
      {/* Hero Section with Parallax */}
      <section
        id="home"
        ref={heroRef}
        className="relative py-32 md:py-40 overflow-hidden"
      >
        <motion.div
          style={{ y: yBg }}
          className="absolute inset-0 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899] -z-10"
        />

        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm"></div>
        </div>
        <div
          className="absolute top-40 right-20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-8 h-8 bg-white/30 rounded-full backdrop-blur-sm"></div>
        </div>
        <div
          className="absolute bottom-32 left-1/4 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-white"
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t.hero.title}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t.hero.subtitle}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 flex items-center justify-center font-semibold shadow-lg group"
                >
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold group"
                >
                  <MessageCircle className="h-5 w-5 mr-2 inline group-hover:scale-110 transition-transform" />
                  {t.header.cta}
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://placeholder-image-service.onrender.com/image/600x500?prompt=Modern%20website%20development%20and%20digital%20marketing%20illustration&id=hero-illustration"
                  alt="Ilustrasi modern website development dan digital marketing"
                  className="rounded-2xl shadow-2xl"
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-[#10B981] rounded-full opacity-20 blur-xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F59E0B] rounded-full opacity-20 blur-xl -z-10"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Enhanced Services Section with Hover Effects */}
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#818CF8] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C084FC] rounded-full blur-3xl opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group"
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full flex flex-col border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {index === 0 && <Code className="h-8 w-8 text-white" />}
                    {index === 1 && <Search className="h-8 w-8 text-white" />}
                    {index === 2 && (
                      <TrendingUp className="h-8 w-8 text-white" />
                    )}
                    {index === 3 && <Palette className="h-8 w-8 text-white" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#6366F1] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Hover reveal section */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      activeService === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Success Metrics:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {language === "id"
                            ? "Traffic meningkat 200%"
                            : "Traffic increased by 200%"}
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {language === "id"
                            ? "Konversi naik 150%"
                            : "Conversion increased by 150%"}
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {language === "id"
                            ? "20+ klien puas"
                            : "20+ satisfied clients"}
                        </li>
                      </ul>
                      <button className="mt-3 text-sm text-[#6366F1] font-medium hover:text-[#8B5CF6] transition-colors">
                        {language === "id"
                          ? "Lihat studi kasus →"
                          : "View case study →"}
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center text-[#6366F1] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>
                      {language === "id"
                        ? "Pelajari lebih lanjut"
                        : "Learn more"}
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
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
              <img
                src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Modern%20corporate%20website%20design&id=portfolio-1"
                alt="Desain website perusahaan modern"
                className="w-full h-48 object-cover"
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
              <img
                src="https://placeholder-image-service.onrender.com/image/400x300?prompt=E-commerce%20website%20with%20shopping%20cart&id=portfolio-2"
                alt="Website e-commerce dengan fitur keranjang belanja"
                className="w-full h-48 object-cover"
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
              <img
                src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Landing%20page%20with%20conversion%20elements&id=portfolio-3"
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

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.pricing.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.pricing.packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 ${
                  pkg.popular ? "ring-2 ring-[#2563eb] relative" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-[#2563eb] text-white px-4 py-1 rounded-tr-xl rounded-bl-xl text-sm font-semibold">
                    {language === "id" ? "Populer" : "Popular"}
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                <div className="my-6">
                  <span className="text-3xl font-bold text-[#2563eb]">
                    {pkg.price}
                  </span>
                  <span className="text-gray-600">{pkg.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-[#2563eb] text-white py-3 rounded-lg hover:bg-[#1d4ed8] transition-colors">
                  {pkg.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.testimonials.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://placeholder-image-service.onrender.com/image/60x60?prompt=Professional%20male%20portrait&id=testimonial-1"
                  alt="Foto klien testimoni"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Budi Santoso</h4>
                  <p className="text-gray-600">CEO, Retailindo</p>
                </div>
              </div>
              <p className="text-gray-700">
                {language === "id"
                  ? "Layanan pembuatan website sangat profesional. Hasilnya beyond expectation!"
                  : "Website development service is very professional. The result is beyond expectation!"}
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://placeholder-image-service.onrender.com/image/60x60?prompt=Professional%20female%20portrait&id=testimonial-2"
                  alt="Foto klien testimoni"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Dewi Anggraeni</h4>
                  <p className="text-gray-600">Owner, ButiqueDewi</p>
                </div>
              </div>
              <p className="text-gray-700">
                {language === "id"
                  ? "SEO service mereka meningkatkan traffic website saya hingga 300% dalam 3 bulan."
                  : "Their SEO service increased my website traffic by 300% in 3 months."}
              </p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://placeholder-image-service.onrender.com/image/60x60?prompt=Professional%20male%20portrait%20with%20glasses&id=testimonial-3"
                  alt="Foto klien testimoni"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Rudi Hermawan</h4>
                  <p className="text-gray-600">Director, TechSolution</p>
                </div>
              </div>
              <p className="text-gray-700">
                {language === "id"
                  ? "Google Ads campaign mereka sangat efektif, ROI meningkat signifikan."
                  : "Their Google Ads campaign is very effective, ROI increased significantly."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={contactForm.message}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2563eb] text-white py-3 px-4 rounded-lg hover:bg-[#1d4ed8] transition-colors"
                >
                  {t.contact.form.submit}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#2563eb] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {language === "id" ? "Alamat" : "Address"}
                  </h3>
                  <p className="text-gray-600">
                    Jl. Contoh No. 123, Jakarta Selatan
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#2563eb] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {language === "id" ? "Telepon" : "Phone"}
                  </h3>
                  <p className="text-gray-600">+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#2563eb] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@namausaha.com</p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-gray-900 mb-4">
                  {language === "id" ? "Ikuti Kami" : "Follow Us"}
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#2563eb] transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#2563eb] transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#2563eb] transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
