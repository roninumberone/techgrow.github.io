"use client";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useRef } from "react";

export default function Hero({ t }: { t: any }) {
  const heroRef = useRef<HTMLElement>(null);

  // Animate background position based on scroll
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="py-32  md:py-50 overflow-hidden"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-53 items-center">
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
                Konsultasi
                <MessageCircle className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
              <Image
                src="/laptop.png"
                width={700}
                height={600}
                alt="Ilustrasi modern website development dan digital marketing"
                // className="rounded-2xl shadow-2xl"
                priority
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
  );
}
