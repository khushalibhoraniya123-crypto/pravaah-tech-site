"use client";

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { TESTIMONIALS_DATA } from '@/data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="testimonials" className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-[#E8F1FC] via-[#F6F2FE]/70 to-[#EDF4FC] relative overflow-hidden border-b border-[#D8E4F5]">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#6638E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
            <Badge variant="blue">CLIENT ENDORSEMENTS</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
              Trusted by Ambitious <span className="gradient-text-blue-purple">Founders & Leaders</span>
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              Read how our technical architecture and engineering sprints empowered real businesses to scale their digital operations.
            </p>
          </div>
        </Reveal>

        {/* Carousel / Slider Container */}
        <Reveal direction="up" delay={120}>
          <div 
            className="max-w-4xl mx-auto relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Active Testimonial Card */}
            <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-[#D6E3F4] shadow-elevated p-8 sm:p-12 relative overflow-hidden transition-all duration-500 min-h-[340px] flex flex-col justify-between">
              
              {/* Subtle top brand gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1769E0] via-[#6638E8] to-[#00D2FF]" />
              
              {/* Large quote watermark */}
              <div className="absolute top-6 right-8 text-blue-100/70 pointer-events-none select-none">
                <Quote className="w-20 h-20 rotate-180" />
              </div>

              <div className="relative z-10 space-y-6">
                {/* Rating & Project Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(TESTIMONIALS_DATA[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="px-3.5 py-1 rounded-full text-xs font-bold text-[#1769E0] bg-blue-50/90 border border-blue-100 flex items-center gap-1.5 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#6638E8]" />
                    <span>{TESTIMONIALS_DATA[currentIndex].metricHighlight}</span>
                  </span>
                </div>

                {/* Content Quote */}
                <p className="text-base sm:text-xl text-[#0B1B3A] font-medium leading-relaxed italic">
                  &ldquo;{TESTIMONIALS_DATA[currentIndex].content}&rdquo;
                </p>

                {/* Client Profile */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 flex-wrap gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${TESTIMONIALS_DATA[currentIndex].avatarBg} text-white font-black text-sm flex items-center justify-center shadow-xs`}>
                      {TESTIMONIALS_DATA[currentIndex].avatarText}
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#0B1B3A]">
                        {TESTIMONIALS_DATA[currentIndex].name}
                      </div>
                      <div className="text-xs text-[#667085]">
                        {TESTIMONIALS_DATA[currentIndex].role} • <strong className="text-[#1769E0]">{TESTIMONIALS_DATA[currentIndex].company}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-[#6638E8] bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60">
                    {TESTIMONIALS_DATA[currentIndex].projectTag}
                  </div>
                </div>
              </div>

            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between mt-6 px-2">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? 'w-8 bg-[#1769E0]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous review"
                  className="w-10 h-10 rounded-xl bg-white border border-[#D6E3F4] text-[#0B1B3A] hover:bg-[#0B1B3A] hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-xs hover:scale-105"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next review"
                  className="w-10 h-10 rounded-xl bg-white border border-[#D6E3F4] text-[#0B1B3A] hover:bg-[#0B1B3A] hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-xs hover:scale-105"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
