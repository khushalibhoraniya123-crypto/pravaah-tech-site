import { Request, Response } from 'express';
import { ContactInquiry } from '../models/ContactInquiry.js';
import { getDBStatus } from '../config/db.js';
import { inMemoryInquiries } from '../utils/memoryStore.js';

export const getInquiries = async (req: Request, res: Response): Promise<void> => {
  try {
    const { search = '', service = 'all', status = 'all', page = '1', limit = '50' } = req.query;

    const pageNum = Math.max(1, parseInt(page as string, 10) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(limit as string, 10) || 50));
    const searchQuery = (search as string).trim().toLowerCase();

    if (getDBStatus()) {
      const queryFilter: any = {};

      if (service && service !== 'all') {
        queryFilter.service = new RegExp(`^${service}$`, 'i');
      }

      if (status && status !== 'all') {
        queryFilter.status = status;
      }

      if (searchQuery) {
        queryFilter.$or = [
          { name: { $regex: searchQuery, $options: 'i' } },
          { email: { $regex: searchQuery, $options: 'i' } },
          { company: { $regex: searchQuery, $options: 'i' } },
          { message: { $regex: searchQuery, $options: 'i' } },
        ];
      }

      const total = await ContactInquiry.countDocuments(queryFilter);
      const inquiries = await ContactInquiry.find(queryFilter)
        .sort({ createdAt: -1 })
        .skip((pageNum - 1) * limitNum)
        .limit(limitNum);

      res.status(200).json({
        success: true,
        data: inquiries,
        pagination: {
          total,
          page: pageNum,
          pages: Math.ceil(total / limitNum),
          limit: limitNum,
        },
      });
      return;
    } else {
      // In-memory filter
      let filtered = [...inMemoryInquiries];

      if (service && service !== 'all') {
        filtered = filtered.filter((i) => i.service.toLowerCase() === (service as string).toLowerCase());
      }

      if (status && status !== 'all') {
        filtered = filtered.filter((i) => i.status === status);
      }

      if (searchQuery) {
        filtered = filtered.filter(
          (i) =>
            i.name.toLowerCase().includes(searchQuery) ||
            i.email.toLowerCase().includes(searchQuery) ||
            (i.company && i.company.toLowerCase().includes(searchQuery)) ||
            i.message.toLowerCase().includes(searchQuery)
        );
      }

      const total = filtered.length;
      const paginated = filtered.slice((pageNum - 1) * limitNum, pageNum * limitNum);

      res.status(200).json({
        success: true,
        data: paginated,
        pagination: {
          total,
          page: pageNum,
          pages: Math.ceil(total / limitNum),
          limit: limitNum,
        },
      });
      return;
    }
  } catch (error: any) {
    console.error('Fetch inquiries error:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve inquiries.' });
  }
};

export const getInquiryStats = async (_req: Request, res: Response): Promise<void> => {
  try {
    if (getDBStatus()) {
      const total = await ContactInquiry.countDocuments();
      const newCount = await ContactInquiry.countDocuments({ status: 'new' });
      const contactedCount = await ContactInquiry.countDocuments({ status: 'contacted' });
      const inProgressCount = await ContactInquiry.countDocuments({ status: 'in_progress' });
      const closedCount = await ContactInquiry.countDocuments({ status: 'closed' });

      res.status(200).json({
        success: true,
        stats: {
          total,
          new: newCount,
          contacted: contactedCount,
          inProgress: inProgressCount,
          closed: closedCount,
        },
      });
      return;
    } else {
      const total = inMemoryInquiries.length;
      const newCount = inMemoryInquiries.filter((i) => i.status === 'new').length;
      const contactedCount = inMemoryInquiries.filter((i) => i.status === 'contacted').length;
      const inProgressCount = inMemoryInquiries.filter((i) => i.status === 'in_progress').length;
      const closedCount = inMemoryInquiries.filter((i) => i.status === 'closed').length;

      res.status(200).json({
        success: true,
        stats: {
          total,
          new: newCount,
          contacted: contactedCount,
          inProgress: inProgressCount,
          closed: closedCount,
        },
      });
      return;
    }
  } catch (error: any) {
    console.error('Stats error:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve stats.' });
  }
};

export const updateInquiryStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['new', 'contacted', 'in_progress', 'closed'];
    if (!status || !validStatuses.includes(status)) {
      res.status(400).json({ success: false, message: 'Invalid status provided.' });
      return;
    }

    if (getDBStatus()) {
      const updated = await ContactInquiry.findByIdAndUpdate(
        id,
        { status, updatedAt: new Date() },
        { new: true }
      );
      if (!updated) {
        res.status(404).json({ success: false, message: 'Inquiry not found.' });
        return;
      }
      res.status(200).json({ success: true, data: updated, message: 'Status updated.' });
      return;
    } else {
      const idx = inMemoryInquiries.findIndex((i) => i._id === id);
      if (idx === -1) {
        res.status(404).json({ success: false, message: 'Inquiry not found.' });
        return;
      }
      inMemoryInquiries[idx].status = status;
      inMemoryInquiries[idx].updatedAt = new Date();
      res.status(200).json({ success: true, data: inMemoryInquiries[idx], message: 'Status updated.' });
      return;
    }
  } catch (error: any) {
    console.error('Update status error:', error);
    res.status(500).json({ success: false, message: 'Failed to update inquiry status.' });
  }
};

export const deleteInquiry = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (getDBStatus()) {
      const deleted = await ContactInquiry.findByIdAndDelete(id);
      if (!deleted) {
        res.status(404).json({ success: false, message: 'Inquiry not found.' });
        return;
      }
      res.status(200).json({ success: true, message: 'Inquiry deleted successfully.' });
      return;
    } else {
      const idx = inMemoryInquiries.findIndex((i) => i._id === id);
      if (idx === -1) {
        res.status(404).json({ success: false, message: 'Inquiry not found.' });
        return;
      }
      inMemoryInquiries.splice(idx, 1);
      res.status(200).json({ success: true, message: 'Inquiry deleted successfully.' });
      return;
    }
  } catch (error: any) {
    console.error('Delete inquiry error:', error);
    res.status(500).json({ success: false, message: 'Failed to delete inquiry.' });
  }
};
