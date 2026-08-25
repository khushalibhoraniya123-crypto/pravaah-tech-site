import { Router } from 'express';
import {
  getInquiries,
  getInquiryStats,
  updateInquiryStatus,
  deleteInquiry,
} from '../controllers/adminController.js';
import { authenticateAdmin } from '../middleware/authMiddleware.js';

const router = Router();

// Protect all admin inquiry routes
router.use(authenticateAdmin);

// GET /api/admin/inquiries
router.get('/inquiries', getInquiries);

// GET /api/admin/stats
router.get('/stats', getInquiryStats);

// PATCH /api/admin/inquiries/:id
router.patch('/inquiries/:id', updateInquiryStatus);

// DELETE /api/admin/inquiries/:id
router.delete('/inquiries/:id', deleteInquiry);

export default router;
