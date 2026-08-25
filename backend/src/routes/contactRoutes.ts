import { Router } from 'express';
import { submitContactForm } from '../controllers/contactController.js';

const router = Router();

// POST /api/contact - Public contact submission
router.post('/', submitContactForm);

export default router;
