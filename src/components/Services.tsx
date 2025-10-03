"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Search, TrendingUp, Palette, ArrowRight } from "lucide-react";

export default function Services({ t }: { t: any }) {
  const [activeService, setActiveService] = useState<number | null>(null);

  type ServiceItem = {
    title: string;
    subtitle: string;
    desc: string;
  };
  return (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service: ServiceItem, index: number) => (
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
              <div className="bg-white p-8 rounded-4xl shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full flex flex-col border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {index === 0 && <Code className="h-8 w-8 text-white" />}
                  {index === 1 && <TrendingUp className="h-8 w-8 text-white" />}
                  {index === 2 && <Palette className="h-8 w-8 text-white" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#6366F1] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>

                {/* Hover reveal section */}
                <div className={`overflow-hidden transition-all duration-500`}>
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Success Metrics:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        "Traffic meningkat 200%"
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        "Konversi naik 150%"
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        "20+ klien puas"
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
