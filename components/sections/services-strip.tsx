import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Cpu, 
  Sparkles, 
  Server,
  Zap,
  Layers,
  Code
} from 'lucide-react';

const STRIP_ITEMS = [
  { label: 'Web Development', icon: Globe },
  { label: 'Mobile Apps (iOS & Android)', icon: Smartphone },
  { label: 'UI/UX Design Systems', icon: Palette },
  { label: 'Software Architecture & ERP', icon: Cpu },
  { label: 'AI Solutions & Agents', icon: Sparkles },
  { label: 'Cloud & DevOps Infrastructure', icon: Server },
  { label: 'Business Process Automation', icon: Zap },
  { label: 'Microservices & Custom APIs', icon: Layers },
  { label: 'Next.js 15 & React 19', icon: Code },
];

export const ServicesStrip: React.FC = () => {
  return (
    <div className="w-full bg-[#06132D] text-white py-3.5 overflow-hidden border-y border-[#0E2856] relative">
      <div className="flex select-none">
        {/* Repeating strip items */}
        <div className="flex shrink-0 items-center justify-around gap-8 animate-marquee whitespace-nowrap">
          {STRIP_ITEMS.concat(STRIP_ITEMS).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wide text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-blue-500/10 text-[#38BDF8] flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span>{item.label}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600 ml-4" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
