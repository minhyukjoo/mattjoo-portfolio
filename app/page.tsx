"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { TabType, FILMS_CATEGORIES, PHOTOS_CATEGORIES, SOCIAL_LINKS } from "../portfolioData";
import { Mail } from "lucide-react";

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TABS: TabType[] = ["HOME", "FILMS", "PHOTOS", "STORY", "CONTACT"];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("HOME");
  const [, setDirection] = useState<number>(0);

  const handleTabChange = (newTab: TabType) => {
    const currentIndex = TABS.indexOf(activeTab);
    const newIndex = TABS.indexOf(newTab);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(newTab);
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 30;
    const currentIndex = TABS.indexOf(activeTab);

    if (info.offset.x < -swipeThreshold && currentIndex < TABS.length - 1) {
      const nextTab = TABS[currentIndex + 1];
      handleTabChange(nextTab);
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      const prevTab = TABS[currentIndex - 1];
      handleTabChange(prevTab);
    }
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0
    })
  };

  return (
    <div className="bg-black text-white w-full min-h-screen relative overflow-hidden flex flex-col justify-between">
      
      {/* Ambient Backdrop */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
        <div className="absolute top-[-10%] left-[-20%] w-[30rem] h-[30rem] bg-amber-950/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[35rem] h-[35rem] bg-amber-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      </div>

      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Swipe Viewport */}
      <motion.div 
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 pt-44 pb-24 z-10 flex-grow flex items-center justify-center touch-none cursor-grab active:cursor-grabbing select-none"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={activeTab}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            className="w-full flex items-center justify-center pointer-events-auto"
          >
            {activeTab === "HOME" && (
              <div className="w-full flex flex-col justify-center items-center text-center space-y-12 py-12">
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-[0.2em] md:tracking-[0.3em] uppercase bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
                    @mattjoofilm
                  </h1>
                  <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-[#f59e0b]">
                    Full Website In the Works
                  </p>
                </div>
                <div className="flex gap-10 items-center text-gray-500">
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="hover:text-[#f59e0b] transition-colors duration-300 p-2">
                    <InstagramIcon className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a href={SOCIAL_LINKS.email} className="hover:text-[#f59e0b] transition-colors duration-300 p-2">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>
              </div>
            )}

            {activeTab === "FILMS" && (
              <div className="w-full max-w-5xl flex flex-col items-center py-6">
                <h2 className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-[#f59e0b] mb-12">Film Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full px-2 sm:px-0">
                  {FILMS_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="aspect-[4/3] sm:aspect-square rounded-2xl border border-white/5 bg-white/[0.01] active:bg-white/[0.05] flex items-center justify-center p-6 text-center cursor-pointer group shadow-xl">
                      <span className="text-xs font-bold tracking-[0.2em] text-gray-400 group-hover:text-white uppercase transition-colors">{cat.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "PHOTOS" && (
              <div className="w-full max-w-4xl flex flex-col items-center py-6">
                <h2 className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-[#f59e0b] mb-12">Photography Matrices</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full px-2 sm:px-0">
                  {PHOTOS_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="aspect-[4/3] sm:aspect-square rounded-2xl border border-white/5 bg-white/[0.01] active:bg-white/[0.05] flex items-center justify-center p-6 text-center cursor-pointer group shadow-xl">
                      <span className="text-xs font-bold tracking-[0.2em] text-gray-400 group-hover:text-white uppercase transition-colors">{cat.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "STORY" && (
              <div className="w-full max-w-2xl text-center flex flex-col items-center px-2 space-y-12 py-6">
                <div>
                  <h2 className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-gray-600 mb-2">[ Narrative ]</h2>
                  <p className="text-xs font-mono text-[#f59e0b] tracking-widest">( Swipe left or right anywhere to shift views )</p>
                </div>
                <div className="text-left space-y-10 font-light text-sm sm:text-base leading-relaxed tracking-wide bg-white/[0.01] border border-white/5 p-6 md:p-10 rounded-2xl backdrop-blur-md text-gray-300">
                  <section className="space-y-3">
                    <h3 className="text-xs font-mono text-white uppercase tracking-widest">01 / Cinematic Foundations</h3>
                    <p>Operating from the Old Town neighborhood of Chicago, Illinois, MattJooFilm focuses on high-end mirrorless systems and immersive storytelling mechanics to design deep visual narratives.</p>
                  </section>
                  <section className="space-y-3 pt-6 border-t border-white/5">
                    <h3 className="text-xs font-mono text-white uppercase tracking-widest">02 / Frame Acquisition & Optics</h3>
                    <p>Every production layout depends heavily on optical fidelity. Utilizing highly responsive camera frames like the X-E5 alongside extensive prime layouts ensures raw color spaces can carry deep contrast lines.</p>
                  </section>
                </div>
              </div>
            )}

            {activeTab === "CONTACT" && (
              <div className="w-full max-w-md px-2 py-6">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4 bg-white/[0.01] border border-white/5 p-6 md:p-8 rounded-3xl shadow-2xl backdrop-blur-md">
                  <h3 className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-center text-gray-400 mb-2">Direct Inquiry</h3>
                  <div>
                    <input type="email" placeholder="Your Email Address" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f59e0b] text-white font-light" />
                  </div>
                  <div>
                    <textarea rows={4} placeholder="Project Details / Scope Message..." className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f59e0b] text-white font-light resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3 rounded-xl bg-amber-600 active:bg-amber-500 font-bold text-xs tracking-widest uppercase shadow-lg shadow-amber-950/20">
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

    </div>
  );
}