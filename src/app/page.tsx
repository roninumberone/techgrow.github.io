"use client";

import { useEffect, useState } from "react";
import { translations } from "@/lib/translations";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  const [language, setLanguage] = useState<"id" | "en">("id");

  useEffect(() => {
    const userLang = navigator.language.startsWith("id") ? "id" : "en";
    setLanguage(userLang as "id" | "en");
  }, []);

  const t = translations[language];

  return (
    <main className="min-h-screen flex flex-col">
      <Header t={t} />
      <Hero t={t} />
      <Services t={t} />
      <Portfolio t={t} />
      <Pricing t={t} />
      {/* <Testimonials t={t} /> */}
      <Footer t={t} />
    </main>
  );
}
