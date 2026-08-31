"use client";

import { useMutation } from '@tanstack/react-query';
import type { ContactFormData, ContactInquiryResponse } from '@/types';

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

export const useContactMutation = () => {
  return useMutation({
    mutationFn: submitContactInquiry,
  });
};
