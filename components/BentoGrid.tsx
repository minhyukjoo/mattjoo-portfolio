"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Film, Layers, Globe } from "lucide-react";

export const BentoGrid = () => {
  return (
    <section id="about" className="py-20 w-full max-w-7xl mx-auto px-5 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
        
        {/* Card 1: Feature Block */}
        <motion.div 
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-2 md:row-span-2 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 relative overflow-hidden group flex flex-col justify-between"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
          <div className="flex justify-between items-start">
            <div className="p-3 bg-cyan-950/50 rounded-xl border border-cyan-500/30 text-cyan-400">
              <Film className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">01 / Focus</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Immersive Visual Narratives</h3>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed font-light">
              Crafting stories with cinematic intent. From high-end multi-cam synchronization to tailored color profiles, every sequence is engineered to carry deep emotional impact.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Square Showcase Block */}
        <motion.div 
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 relative overflow-hidden group flex flex-col justify-between"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
          <div className="p-3 bg-orange-950/50 rounded-xl border border-orange-500/30 text-orange-400 self-start">
            <Camera className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block mb-1">02 / Production Matrix</span>
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Uncompromising Tools</h3>
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              Utilizing high-dynamic-range bodies and stable tracking configurations optimized for clear, crisp image acquisition.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Linear Workflow Element */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 relative overflow-hidden group flex items-center gap-5"
        >
          <div className="p-3 bg-cyan-950/50 rounded-xl border border-cyan-500/30 text-cyan-400 shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-tight">Post Workflow</h4>
            <p className="text-gray-400 text-xs font-light mt-0.5">Reliable redundancy arrays ensure your high-bitrate media files are safely processed.</p>
          </div>
        </motion.div>

        {/* Card 4: Wide Logistics Row */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="md:col-span-2 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 relative overflow-hidden group flex items-center justify-between"
        >
          <div className="flex items-center gap-5">
            <div className="p-3 bg-orange-950/50 rounded-xl border border-orange-500/30 text-orange-400 shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-tight">Remote Ready</h4>
              <p className="text-gray-400 text-xs font-light mt-0.5">Flexible architecture structured around rugged environments and destination production schedules.</p>
            </div>
          </div>
          <div className="hidden sm:block text-right pr-2">
            <span className="text-[1.75rem] font-bold text-white/5 tracking-tighter group-hover:text-white/10 transition font-mono">MJ.FILM</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};