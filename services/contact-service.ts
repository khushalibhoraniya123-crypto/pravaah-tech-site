import type { ContactFormData, ContactInquiryResponse } from '@/types';

/**
 * Submits a project contact inquiry to the backend API endpoint.
 * @param data ContactFormData
 * @returns Promise<ContactInquiryResponse>
 */
export const submitContactInquiry = async (data: ContactFormData): Promise<ContactInquiryResponse> => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || 'Failed to submit project inquiry.');
  }

  return resData;
};
