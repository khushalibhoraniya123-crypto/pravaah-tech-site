import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Mail, 
  Search, 
  Filter, 
  RefreshCw, 
  LogOut, 
  Trash2, 
  Eye, 
  AlertCircle,
  Inbox
} from 'lucide-react';
import { Logo } from '../components/common/Logo';
import { Button } from '../components/common/Button';
import { InquiryDetailModal } from '../components/admin/InquiryDetailModal';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { api } from '../services/api';
import type { AdminInquiry, AdminStats } from '../types';
import { CONTACT_CONFIG } from '../config/contact';

export const AdminPage: React.FC = () => {
  const { isAuthenticated, token, login, logout, user } = useAuth();
  const { showToast } = useToast();

  // Login form state
  const [email, setEmail] = useState('admin@pravaahtechnology.com');
  const [password, setPassword] = useState('Admin@Pravaah2026!');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Inquiries & Dashboard State
  const [inquiries, setInquiries] = useState<AdminInquiry[]>([]);
  const [stats, setStats] = useState<AdminStats>({
    total: 0,
    new: 0,
    contacted: 0,
    inProgress: 0,
    closed: 0,
  });
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [activeInquiry, setActiveInquiry] = useState<AdminInquiry | null>(null);

  // Fetch inquiries when authenticated
  const fetchData = async () => {
    if (!token) return;
    try {
      setIsLoadingData(true);
      const [inquiriesRes, statsRes] = await Promise.all([
        api.getInquiries(token, {
          search: searchQuery,
          service: selectedService,
          status: selectedStatus,
        }),
        api.getStats(token),
      ]);

      setInquiries(inquiriesRes.data || []);
      setStats(statsRes.stats || { total: 0, new: 0, contacted: 0, inProgress: 0, closed: 0 });
      setIsLoadingData(false);
    } catch (err: any) {
      setIsLoadingData(false);
      showToast('Error Loading Data', err.message || 'Failed to fetch inquiries.', 'error');
    }
  };

  useEffect(() => {
    if (isAuthenticated && token) {
      fetchData();
    }
  }, [isAuthenticated, token, selectedService, selectedStatus]);

  // Handle Search Debounce or Submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
  };

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setIsLoggingIn(true);

    try {
      const res = await api.adminLogin(email, password);
      login(res.token, res.user);
      setIsLoggingIn(false);
      showToast('Welcome Back', 'Admin portal authenticated successfully.', 'success');
    } catch (err: any) {
      setIsLoggingIn(false);
      setLoginError(err.message || 'Invalid email or password credentials.');
    }
  };

  // Handle Status Change
  const handleStatusChange = async (id: string, newStatus: string) => {
    if (!token) return;
    try {
      await api.updateStatus(token, id, newStatus);
      showToast('Status Updated', `Inquiry status changed to ${newStatus}.`, 'success');
      fetchData();
      if (activeInquiry && activeInquiry._id === id) {
        setActiveInquiry((prev) => (prev ? { ...prev, status: newStatus as any } : null));
      }
    } catch (err: any) {
      showToast('Update Failed', err.message, 'error');
    }
  };

  // Handle Delete
  const handleDelete = async (id: string) => {
    if (!token) return;
    try {
      await api.deleteInquiry(token, id);
      showToast('Deleted', 'Inquiry removed successfully.', 'info');
      fetchData();
    } catch (err: any) {
      showToast('Delete Failed', err.message, 'error');
    }
  };

  // Render Login view if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#07152F] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Ambient background light */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#1769E0]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center space-y-4">
          <div className="flex justify-center">
            <Logo variant="light" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Admin Access Portal
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Sign in to manage client project inquiries and lead pipelines.
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
          <div className="bg-white/95 backdrop-blur-xl py-8 px-6 shadow-elevated rounded-3xl sm:px-10 border border-white/20">
            
            {loginError && (
              <div className="mb-6 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#334155] uppercase tracking-wider mb-2">
                  Admin Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@pravaahtechnology.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E4E7EC] bg-[#F7F9FC] text-sm text-[#0B1B3A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769E0]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#334155] uppercase tracking-wider mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E4E7EC] bg-[#F7F9FC] text-sm text-[#0B1B3A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769E0]"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-100 text-[11px] text-[#1769E0] font-medium leading-relaxed">
                Default credentials pre-filled for instant verification: <br />
                <span className="font-mono text-[10px] text-slate-700">admin@pravaahtechnology.com / Admin@Pravaah2026!</span>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  withArrow
                  loading={isLoggingIn}
                  className="w-full justify-center"
                >
                  Authenticate & Sign In
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#101828] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Title Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white border border-[#E4E7EC] shadow-soft">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1769E0] to-[#6C3FE8] text-white flex items-center justify-center shadow-glow-blue">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">Inquiry Management</h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                  Protected API
                </span>
              </div>
              <p className="text-xs text-[#667085] mt-0.5">
                Logged in as <strong className="text-[#0B1B3A]">{user?.email || 'Administrator'}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              disabled={isLoadingData}
              className="px-4 py-2.5 rounded-xl border border-[#E4E7EC] bg-white hover:bg-slate-50 text-xs font-semibold text-[#0B1B3A] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoadingData ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <button
              onClick={logout}
              className="px-4 py-2.5 rounded-xl bg-rose-50 border border-rose-200 hover:bg-rose-100 text-xs font-semibold text-rose-700 flex items-center gap-2 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Stats Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-[#E4E7EC] shadow-soft">
            <span className="text-xs font-semibold text-slate-400 uppercase">Total Inquiries</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A] mt-1">{stats.total}</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-soft">
            <span className="text-xs font-semibold text-blue-500 uppercase">New Leads</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1769E0] mt-1">{stats.new}</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-amber-100 shadow-soft">
            <span className="text-xs font-semibold text-amber-600 uppercase">Contacted</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 mt-1">{stats.contacted}</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-soft">
            <span className="text-xs font-semibold text-[#6C3FE8] uppercase">In Progress</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#6C3FE8] mt-1">{stats.inProgress}</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-soft">
            <span className="text-xs font-semibold text-emerald-600 uppercase">Closed / Won</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 mt-1">{stats.closed}</div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-5 rounded-3xl bg-white border border-[#E4E7EC] shadow-soft flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search */}
          <form onSubmit={handleSearchSubmit} className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, keyword..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E4E7EC] bg-[#F7F9FC] text-xs sm:text-sm text-[#0B1B3A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769E0]"
            />
          </form>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Service Filter */}
            <div className="flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-3 py-2 rounded-xl border border-[#E4E7EC] bg-[#F7F9FC] text-xs font-semibold text-[#0B1B3A] focus:bg-white focus:outline-none"
              >
                <option value="all">All Services</option>
                {CONTACT_CONFIG.inquiryServices.map((srv, i) => (
                  <option key={i} value={srv}>
                    {srv}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 rounded-xl border border-[#E4E7EC] bg-[#F7F9FC] text-xs font-semibold text-[#0B1B3A] focus:bg-white focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Inquiries Table */}
        <div className="rounded-3xl bg-white border border-[#E4E7EC] shadow-soft overflow-hidden">
          {inquiries.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <Inbox className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-[#0B1B3A]">No inquiries found</h3>
              <p className="text-xs text-[#667085]">
                {searchQuery || selectedService !== 'all' || selectedStatus !== 'all'
                  ? 'Try adjusting your search query or filters.'
                  : 'New submissions from the contact form will appear here.'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F7F9FC] text-slate-500 font-bold uppercase tracking-wider text-[11px] border-b border-[#E4E7EC]">
                  <tr>
                    <th className="py-4 px-6">Client / Contact</th>
                    <th className="py-4 px-6">Service Requested</th>
                    <th className="py-4 px-6">Budget</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6">Date</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4E7EC]">
                  {inquiries.map((inq) => {
                    const dateStr = new Date(inq.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    });

                    const statusStyles: Record<string, string> = {
                      new: 'bg-blue-50 text-[#1769E0] border-blue-200',
                      contacted: 'bg-amber-50 text-amber-700 border-amber-200',
                      in_progress: 'bg-purple-50 text-[#6C3FE8] border-purple-200',
                      closed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                    };

                    return (
                      <tr key={inq._id} className="hover:bg-slate-50/80 transition-colors">
                        {/* Name & Company */}
                        <td className="py-4 px-6">
                          <div className="font-bold text-[#0B1B3A]">{inq.name}</div>
                          <div className="text-xs text-[#667085] flex items-center gap-1.5 mt-0.5">
                            <span>{inq.email}</span>
                            {inq.company && <span>• {inq.company}</span>}
                          </div>
                        </td>

                        {/* Service */}
                        <td className="py-4 px-6 font-medium text-[#0B1B3A]">
                          {inq.service}
                        </td>

                        {/* Budget */}
                        <td className="py-4 px-6 text-xs text-[#667085] font-medium">
                          {inq.budget || 'Flexible'}
                        </td>

                        {/* Status */}
                        <td className="py-4 px-6">
                          <select
                            value={inq.status}
                            onChange={(e) => handleStatusChange(inq._id, e.target.value)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border cursor-pointer ${
                              statusStyles[inq.status] || 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="in_progress">In Progress</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>

                        {/* Submission Date */}
                        <td className="py-4 px-6 text-xs text-[#667085] whitespace-nowrap">
                          {dateStr}
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setActiveInquiry(inq)}
                              className="p-2 rounded-lg bg-slate-100 hover:bg-[#0B1B3A] hover:text-white text-[#0B1B3A] transition-colors cursor-pointer"
                              title="View details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm(`Delete inquiry from ${inq.name}?`)) {
                                  handleDelete(inq._id);
                                }
                              }}
                              className="p-2 rounded-lg bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-600 transition-colors cursor-pointer"
                              title="Delete inquiry"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

      {/* Inquiry Detail Modal */}
      <InquiryDetailModal
        inquiry={activeInquiry}
        onClose={() => setActiveInquiry(null)}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
};
