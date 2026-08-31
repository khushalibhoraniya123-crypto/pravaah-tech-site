"use client";

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { TESTIMONIALS_DATA } from '@/data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
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

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex] || TESTIMONIALS_DATA[0];

  return (
    <section id="testimonials" className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-[#E8F1FC] via-[#F6F2FE]/70 to-[#EDF4FC] relative overflow-hidden border-b border-[#D8E4F5]">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#6638E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
            <Badge variant="blue">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
              What Our <span className="gradient-text-blue-purple">Clients Say</span>
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              Discover how we have helped visionary leaders and high-growth companies scale their digital impact.
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
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1769E0] via-[#6638E8] to-[#00D2FF]" />

              <div className="space-y-6">
                {/* Header: Star Rating & Big Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-xs" />
                    ))}
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50/80 text-[#1769E0] flex items-center justify-center">
                    <Quote className="w-6 h-6 rotate-180" />
                  </div>
                </div>

                {/* Review Quote Body */}
                <p className="text-base sm:text-xl md:text-2xl font-medium text-[#0B1B3A] leading-relaxed italic">
                  &ldquo;{currentTestimonial.content}&rdquo;
                </p>
              </div>

              {/* Client Info Strip */}
              <div className="pt-6 border-t border-[#D6E3F4] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                <div className="flex items-center gap-4">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#1769E0] to-[#6638E8] text-white font-extrabold flex items-center justify-center text-lg shadow-sm">
                    {currentTestimonial.avatarText}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0B1B3A]">{currentTestimonial.name}</h4>
                    <p className="text-xs text-[#6638E8] font-semibold">{currentTestimonial.role}, {currentTestimonial.company}</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100 self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Verified Client Partner</span>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-6 px-2">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? 'w-8 bg-gradient-to-r from-[#1769E0] to-[#6638E8]'
                        : 'w-2.5 bg-[#D4E2F5] hover:bg-slate-400'
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
