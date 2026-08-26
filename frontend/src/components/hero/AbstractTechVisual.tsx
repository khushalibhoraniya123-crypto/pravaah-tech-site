import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Globe, Palette, Zap, Code2, Check, Activity } from 'lucide-react';

export const AbstractTechVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[380px] sm:h-[420px] lg:h-[450px] flex items-center justify-center select-none">
      
      {/* Background Radial Glow Blobs */}
      <div className="absolute w-60 h-60 rounded-full bg-blue-500/15 blur-[80px] -top-6 left-6 pointer-events-none animate-pulse-subtle" />
      <div className="absolute w-64 h-64 rounded-full bg-purple-600/15 blur-[90px] -bottom-6 right-6 pointer-events-none animate-pulse-subtle" style={{ animationDelay: '2s' }} />
      <div className="absolute w-48 h-48 rounded-full bg-cyan-400/10 blur-[60px] top-1/3 left-1/3 pointer-events-none" />

      {/* SVG Flowing Abstract Wave / Ribbon - Designed around the Pravaah Brand Motif */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 700 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain opacity-95"
        >
          <defs>
            {/* Ribbon Gradients matching Pravaah brand identity */}
            <linearGradient id="brandWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#168BFF" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#1769E0" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#6638E8" stopOpacity="0.75" />
            </linearGradient>

            <linearGradient id="brandWave2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.7" />
              <stop offset="40%" stopColor="#1769E0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B3FE8" stopOpacity="0.75" />
            </linearGradient>

            <linearGradient id="brandWave3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1769E0" stopOpacity="0.65" />
              <stop offset="60%" stopColor="#6638E8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#B59CFF" stopOpacity="0.65" />
            </linearGradient>

            <linearGradient id="glowStrand" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D2FF" />
              <stop offset="50%" stopColor="#1769E0" />
              <stop offset="100%" stopColor="#8B3FE8" />
            </linearGradient>

            <filter id="glowFilterVisual" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Bottom Laminar Ribbon */}
          <path
            d="M 90,380 C 140,320 220,350 280,390 C 380,450 480,420 570,310 C 530,350 450,400 360,370 C 290,340 220,310 150,340 Z"
            fill="url(#brandWave3)"
            opacity="0.35"
            filter="url(#glowFilterVisual)"
          />

          {/* Middle Flowing Ribbon */}
          <path
            d="M 140,350 C 200,240 280,260 360,300 C 470,360 550,300 620,180 C 560,230 480,280 390,240 C 320,210 240,200 180,280 Z"
            fill="url(#brandWave2)"
            opacity="0.45"
          />

          {/* Top Soaring Wave Ribbon */}
          <path
            d="M 210,310 C 280,180 370,140 450,130 C 530,120 590,160 650,190 C 580,150 510,140 430,170 C 350,200 290,250 210,310 Z"
            fill="url(#brandWave1)"
            opacity="0.55"
          />

          {/* Glowing Vector Strands */}
          <path
            d="M 120,370 Q 280,150 480,260 T 660,190"
            stroke="url(#glowStrand)"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            className="animate-pulse"
          />
          <path
            d="M 160,390 Q 320,190 510,290 T 680,220"
            stroke="#00D2FF"
            strokeWidth="2"
            strokeDasharray="6 8"
            strokeOpacity="0.75"
            fill="none"
          />

          {/* Trailing Digital Data Pixels from Wave Crest */}
          <rect x="640" y="110" width="12" height="12" rx="2.5" fill="#6638E8" opacity="0.85" />
          <rect x="665" y="130" width="10" height="10" rx="2" fill="#8B3FE8" opacity="0.8" />
          <rect x="630" y="140" width="9" height="9" rx="2" fill="#1769E0" opacity="0.75" />
          <rect x="655" y="160" width="9" height="9" rx="2" fill="#6638E8" opacity="0.75" />
          <rect x="670" y="180" width="8" height="8" rx="1.5" fill="#8B3FE8" opacity="0.7" />
          <rect x="640" y="190" width="8" height="8" rx="1.5" fill="#00D2FF" opacity="0.8" />
          <rect x="658" y="210" width="7" height="7" rx="1.5" fill="#B59CFF" opacity="0.75" />
        </svg>
      </div>

      {/* Floating Ambient Glow Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '15%', left: '20%', size: 'w-2 h-2', bg: 'bg-[#00D2FF]', delay: 0 },
          { top: '25%', left: '75%', size: 'w-2.5 h-2.5', bg: 'bg-[#B59CFF]', delay: 1 },
          { top: '70%', left: '25%', size: 'w-2 h-2', bg: 'bg-[#1769E0]', delay: 2 },
          { top: '80%', left: '80%', size: 'w-3 h-3', bg: 'bg-[#6638E8]', delay: 1.5 },
          { top: '45%', left: '85%', size: 'w-1.5 h-1.5', bg: 'bg-[#00D2FF]', delay: 2.5 },
        ].map((p, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -12, 0],
              x: [0, 6, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
            style={{ top: p.top, left: p.left }}
            className={`absolute rounded-full ${p.size} ${p.bg} shadow-glow-blue`}
          />
        ))}
      </div>

      {/* ========================================================================= */}
      {/* FLOATING TECHNOLOGY CARDS (Glassmorphism & Micro-telemetry) */}
      {/* ========================================================================= */}

      {/* 1. AI Card (Top-Right) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1 sm:top-2 right-0 sm:right-2 z-20"
      >
        <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-medium hover:shadow-elevated transition-all duration-300 flex items-center gap-2.5 max-w-[190px] sm:max-w-[210px]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6638E8] to-[#8B3FE8] text-white flex items-center justify-center shrink-0 shadow-sm">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-[#081A3A]">AI Card</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-[10.5px] font-medium text-[#667085] leading-tight mt-0.5">
              Intelligent Models & Agents
            </p>
            <div className="mt-1 flex items-center gap-1 text-[9.5px] font-semibold text-[#6638E8]">
              <Activity className="w-2.5 h-2.5" />
              <span>99.4% Accuracy</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. WEB Card (Top-Left) */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-4 sm:top-6 left-0 sm:left-2 z-20"
      >
        <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-medium hover:shadow-elevated transition-all duration-300 flex items-center gap-2.5 max-w-[180px] sm:max-w-[200px]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1769E0] to-[#00D2FF] text-white flex items-center justify-center shrink-0 shadow-sm">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#081A3A]">WEB Card</span>
            <p className="text-[10.5px] font-medium text-[#667085] leading-tight mt-0.5">
              React • Next.js • Vite
            </p>
            <div className="mt-1 flex items-center gap-1 text-[9.5px] text-emerald-600 font-semibold">
              <Check className="w-2.5 h-2.5" />
              <span>Sub-second TTFB</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. UI/UX Card (Bottom-Left) */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-2 sm:bottom-4 left-0 sm:left-2 z-20"
      >
        <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-medium hover:shadow-elevated transition-all duration-300 max-w-[190px] sm:max-w-[210px]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#8B3FE8] to-[#6638E8] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Palette className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#081A3A]">UI/UX Card</span>
              <p className="text-[10px] text-[#667085]">Figma Design System</p>
            </div>
          </div>
          {/* Swatches preview matching brand colors */}
          <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[9.5px] font-medium text-[#667085]">Tokens</span>
            <div className="flex -space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#1769E0] border-2 border-white shadow-xs" />
              <div className="w-3 h-3 rounded-full bg-[#6638E8] border-2 border-white shadow-xs" />
              <div className="w-3 h-3 rounded-full bg-[#00D2FF] border-2 border-white shadow-xs" />
              <div className="w-3 h-3 rounded-full bg-[#081A3A] border-2 border-white shadow-xs" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. AUTOMATION Card (Bottom-Right) */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-6 right-0 sm:right-2 z-20"
      >
        <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-medium hover:shadow-elevated transition-all duration-300 flex items-center gap-2.5 max-w-[195px] sm:max-w-[215px]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00D2FF] to-[#1769E0] text-white flex items-center justify-center shrink-0 shadow-sm">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#081A3A]">AUTOMATION</span>
            <p className="text-[10.5px] font-medium text-[#667085] leading-tight mt-0.5">
              Pipelines & CI/CD
            </p>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-[8.5px] font-bold text-emerald-600 border border-emerald-200/60">
                ACTIVE 24/7
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 5. Center Code Card */}
      <motion.div
        animate={{ scale: [1, 1.02, 1], y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-30 max-w-[260px] sm:max-w-[290px] w-full"
      >
        <div className="rounded-2xl bg-[#06132D]/95 backdrop-blur-2xl border border-white/15 p-4 shadow-elevated text-left">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between pb-3 mb-2.5 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
              <Code2 className="w-3 h-3 text-[#00D2FF]" />
              <span>pravaah.ts</span>
            </div>
          </div>

          {/* Mini Code Snippet */}
          <div className="font-mono text-[11px] leading-relaxed space-y-1 text-slate-300">
            <p className="text-slate-400">
              <span className="text-[#B59CFF]">import</span> &#123; Future &#125; <span className="text-[#B59CFF]">from</span> <span className="text-emerald-400">'@pravaah/tech'</span>;
            </p>
            <p className="pt-1">
              <span className="text-[#00D2FF]">const</span> <span className="text-amber-300">buildNext</span> = <span className="text-[#B59CFF]">async</span> () =&gt; &#123;
            </p>
            <p className="pl-3 text-slate-400">
              <span className="text-[#B59CFF]">await</span> Innovate.scale(&#123;
            </p>
            <p className="pl-6 text-slate-300">
              quality: <span className="text-emerald-400">'enterprise'</span>,
            </p>
            <p className="pl-6 text-slate-300">
              growth: <span className="text-cyan-300">true</span>,
            </p>
            <p className="pl-3 text-slate-400">&#125;);</p>
            <p>&#125;;</p>
          </div>

          {/* Live Status indicator */}
          <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Engine Online
            </span>
            <span className="font-mono text-[9px] text-slate-500">v2.6.0</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
};
