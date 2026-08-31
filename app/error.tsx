"use client";

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#EEF5FD] via-[#F6F2FE]/80 to-[#EAF2FC] px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#D6E3F4] shadow-elevated">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center mx-auto shadow-xs">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider">System Notice</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A]">Something Went Wrong</h1>
          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
            An unexpected error occurred while loading this view. Please try reloading or returning home.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={() => reset()}
            className="w-full justify-center shadow-glow-blue"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            <span>Try Again</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
