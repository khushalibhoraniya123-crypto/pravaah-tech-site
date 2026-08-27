import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-500 py-3">
      <Link to="/" className="flex items-center gap-1 hover:text-[#1769E0] transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {isLast || !item.path ? (
              <span className="font-semibold text-[#0B1B3A] truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-[#1769E0] transition-colors truncate max-w-[150px]">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
