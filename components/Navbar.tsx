"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS, TabType } from "../portfolioData";

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Navbar = ({ activeTab, setActiveTab }: NavbarProps) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-0 right-0 max-w-max mx-auto bg-black/80 backdrop-blur-xl border border-white/10 rounded-full p-0.5 z-[99999] shadow-2xl transition-all duration-300 ease-in-out ${
        visible ? "top-16" : "-top-32"
      }`}
    >
      <div className="flex items-center justify-center gap-0.5 text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.12em] sm:tracking-[0.18em] relative h-8 md:h-9.5">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setActiveTab(item)}
            className={`relative h-full min-w-[56px] sm:min-w-[70px] md:min-w-[80px] px-2.5 sm:px-4 md:px-5 uppercase flex items-center justify-center rounded-full outline-none cursor-pointer transition-colors duration-300 max-md:pointer-events-none ${
              activeTab === item ? "text-black font-black" : "text-gray-400"
            }`}
          >
            {activeTab === item && (
              <div className="absolute inset-0 z-0 pointer-events-none">
                {/* 1. Core Amber Pill */}
                <motion.div
                  layoutId="slidingPill"
                  className="absolute inset-0 bg-[#f59e0b] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
                
                {/* 2. Pro-Mist Glow Bloom */}
                <motion.div
                  layoutId="slidingBloom1"
                  className="absolute inset-0 bg-[#d97706]/80 rounded-full blur-md"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />

                {/* 3. High-Intensity Core Halation */}
                <motion.div
                  layoutId="slidingBloom2"
                  className="absolute inset-[-4px] bg-[#f59e0b]/50 rounded-full blur-xl"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              </div>
            )}
            <span className="relative z-10">{item}</span>
          </button>
        ))}
      </div>
    </header>
  );
};