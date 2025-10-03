"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Services({ t }: { t: any }) {
  type PricingPackage = {
    name: string;
    title: string;
    subtitle: string;
    price: string;
    period: string;
    cta: string;
    features: string[];
    popular?: boolean;
  };
  return (
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
          {t.pricing.packages.map((pkg: PricingPackage, index: number) => (
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
                  "Populer"
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
  );
}
