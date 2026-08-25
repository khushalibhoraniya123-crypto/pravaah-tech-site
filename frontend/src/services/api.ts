import type { ContactFormData, ContactInquiryResponse, AdminInquiry, AdminStats } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  // Public Contact Form Submission
  async submitContact(data: ContactFormData): Promise<ContactInquiryResponse> {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit project inquiry. Please try again.');
    }
    return result;
  },

  // Admin Login
  async adminLogin(email: string, password: string): Promise<{ success: boolean; token: string; user: any; message?: string }> {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Authentication failed. Please check credentials.');
    }
    return result;
  },

  // Verify Admin Token
  async verifyAdminSession(token: string): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.ok;
    } catch {
      return false;
    }
  },

  // Fetch Inquiries
  async getInquiries(
    token: string,
    params?: { search?: string; service?: string; status?: string; page?: number; limit?: number }
  ): Promise<{ success: boolean; data: AdminInquiry[]; pagination: { total: number; page: number; pages: number; limit: number } }> {
    const query = new URLSearchParams();
    if (params?.search) query.append('search', params.search);
    if (params?.service && params.service !== 'all') query.append('service', params.service);
    if (params?.status && params.status !== 'all') query.append('status', params.status);
    if (params?.page) query.append('page', params.page.toString());
    if (params?.limit) query.append('limit', params.limit.toString());

    const response = await fetch(`${API_BASE_URL}/admin/inquiries?${query.toString()}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to fetch inquiries.');
    }
    return result;
  },

  // Fetch Admin Stats
  async getStats(token: string): Promise<{ success: boolean; stats: AdminStats }> {
    const response = await fetch(`${API_BASE_URL}/admin/stats`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to fetch inquiry statistics.');
    }
    return result;
  },

  // Update Status
  async updateStatus(token: string, id: string, status: string): Promise<{ success: boolean; message: string; data: AdminInquiry }> {
    const response = await fetch(`${API_BASE_URL}/admin/inquiries/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to update status.');
    }
    return result;
  },

  // Delete Inquiry
  async deleteInquiry(token: string, id: string): Promise<{ success: boolean; message: string }> {
    const response = await fetch(`${API_BASE_URL}/admin/inquiries/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to delete inquiry.');
    }
    return result;
  },
};
