"use client";

import { useMutation } from '@tanstack/react-query';
import { submitContactInquiry } from '@/services/contact-service';

/**
 * Custom React Query mutation hook for submitting contact inquiries.
 */
export const useContactMutation = () => {
  return useMutation({
    mutationFn: submitContactInquiry,
  });
};
