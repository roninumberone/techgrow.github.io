"use client";
import { useState, useEffect, useRef } from "react";
import { Globe } from "lucide-react";

export default function Header({ t }: { t: any }) {
  const [language, setLanguage] = useState<"id" | "en">("id");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const userLanguage = navigator.language || "en";
    if (userLanguage.includes("id")) {
      setLanguage("id");
    } else {
      setLanguage("en");
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              TechGrow
            </div>
          </div>

          {/* Desktop Navigation */}
          <div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-800 hover:text-[#6366F1] transition-colors font-medium"
              >
                {t.nav[0]}
              </a>
              <a
                href="#services"
                className="text-gray-800 hover:text-[#6366F1] transition-colors font-medium"
              >
                {t.nav[1]}
              </a>
              <a
                href="#portfolio"
                className="text-gray-800 hover:text-[#6366F1] transition-colors font-medium"
              >
                {t.nav[2]}
              </a>
              <a
                href="#pricing"
                className="text-gray-800 hover:text-[#6366F1] transition-colors font-medium"
              >
                {t.nav[3]}
              </a>
              <a
                href="#contact"
                className="text-gray-800 hover:text-[#6366F1] transition-colors font-medium"
              >
                {t.nav[4]}
              </a>
            </nav>
            {/* CTA & Language Toggle */}
            <div className="flex items-center space-x-4">
              {/* <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-700 hover:text-[#6366F1] transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5 mr-1" />
              <span className="font-medium">
                {language === "id" ? "ID" : "EN"}
              </span>
            </button> */}

              {/* Mobile menu button */}
              <button
                className="md:hidden text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-gray-700 hover:text-[#2563eb] transition-colors py-2"
              >
                {t.nav[0]}
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-[#2563eb] transition-colors py-2"
              >
                {t.nav[1]}
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-[#2563eb] transition-colors py-2"
              >
                {t.nav[2]}
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-[#2563eb] transition-colors py-2"
              >
                {t.nav[3]}
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#2563eb] transition-colors py-2"
              >
                {t.nav[4]}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
