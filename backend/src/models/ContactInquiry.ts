import mongoose, { Schema, Document } from 'mongoose';

export interface IContactInquiry extends Document {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  status: 'new' | 'contacted' | 'in_progress' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

const ContactInquirySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your full name'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email address'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address',
      ],
    },
    phone: {
      type: String,
      trim: true,
      default: '',
    },
    company: {
      type: String,
      trim: true,
      default: '',
    },
    service: {
      type: String,
      required: [true, 'Please select a service'],
      trim: true,
    },
    budget: {
      type: String,
      trim: true,
      default: 'Flexible / Not sure yet',
    },
    message: {
      type: String,
      required: [true, 'Please provide project details or message'],
      trim: true,
      maxlength: [3000, 'Message cannot exceed 3000 characters'],
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'in_progress', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

export const ContactInquiry = mongoose.model<IContactInquiry>('ContactInquiry', ContactInquirySchema);
