"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#EEF5FD] via-[#F6F2FE]/80 to-[#EAF2FC] px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#D6E3F4] shadow-elevated">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#1769E0] border border-blue-100 flex items-center justify-center mx-auto shadow-xs">
          <Sparkles className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-[#6638E8] uppercase tracking-wider">Error 404</span>
          <h1 className="text-3xl font-extrabold text-[#0B1B3A]">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="w-full">
            <Button variant="primary" size="md" withArrow className="w-full justify-center shadow-glow-blue">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
