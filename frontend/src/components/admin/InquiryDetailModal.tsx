import React from 'react';
import { X, Mail, Phone, Building2, Calendar, Trash2 } from 'lucide-react';
import type { AdminInquiry } from '../../types';

interface InquiryDetailModalProps {
  inquiry: AdminInquiry | null;
  onClose: () => void;
  onStatusChange: (id: string, newStatus: string) => void;
  onDelete: (id: string) => void;
}

export const InquiryDetailModal: React.FC<InquiryDetailModalProps> = ({
  inquiry,
  onClose,
  onStatusChange,
  onDelete,
}) => {
  if (!inquiry) return null;

  const formattedDate = new Date(inquiry.createdAt).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07152F]/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-elevated border border-[#E4E7EC] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B1B3A] text-white p-6 relative flex items-start justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              Inquiry Details
            </span>
            <h3 className="text-2xl font-bold mt-1 text-white">{inquiry.name}</h3>
            <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Submitted on {formattedDate}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC]">
            <div className="text-xs font-bold text-[#0B1B3A]">
              Current Pipeline Status:
            </div>
            <div className="flex items-center gap-2">
              {(['new', 'contacted', 'in_progress', 'closed'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => onStatusChange(inquiry._id, st)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    inquiry.status === st
                      ? 'bg-[#1769E0] text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {st.replace('_', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#1769E0]" /> Email Address
              </span>
              <a href={`mailto:${inquiry.email}`} className="text-sm font-bold text-[#0B1B3A] hover:text-[#1769E0] block break-all">
                {inquiry.email}
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-500" /> Phone Number
              </span>
              <div className="text-sm font-bold text-[#0B1B3A]">
                {inquiry.phone || 'Not provided'}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-purple-500" /> Company
              </span>
              <div className="text-sm font-bold text-[#0B1B3A]">
                {inquiry.company || 'Not provided'}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase">
                Selected Service & Budget
              </span>
              <div className="text-sm font-bold text-[#0B1B3A]">
                {inquiry.service}
              </div>
              <div className="text-xs text-[#6C3FE8] font-medium">
                {inquiry.budget || 'Flexible'}
              </div>
            </div>
          </div>

          {/* Full Message */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Project Description & Requirements
            </h4>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm text-[#0B1B3A] leading-relaxed whitespace-pre-wrap">
              {inquiry.message}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#F7F9FC] border-t border-[#E4E7EC] flex items-center justify-between">
          <button
            onClick={() => {
              if (window.confirm(`Are you sure you want to delete the inquiry from ${inquiry.name}?`)) {
                onDelete(inquiry._id);
                onClose();
              }
            }}
            className="flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 p-2 rounded-lg hover:bg-rose-50 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            <span>Delete Inquiry</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#0B1B3A] text-white text-xs font-semibold hover:bg-[#1769E0] transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
