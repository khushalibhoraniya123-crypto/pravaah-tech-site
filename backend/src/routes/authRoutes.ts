import { Router } from 'express';
import { adminLogin, verifyAdminSession } from '../controllers/authController.js';
import { authenticateAdmin } from '../middleware/authMiddleware.js';

const router = Router();

// POST /api/auth/login
router.post('/login', adminLogin);

// GET /api/auth/verify (protected)
router.get('/verify', authenticateAdmin, verifyAdminSession);

export default router;
