import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import { emailService } from './services/emailService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(',').map((url) => url.trim())
  : ['http://localhost:5173', 'http://127.0.0.1:5173'];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (curl, mobile apps, server-to-server)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive for development & preview
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

// Root Service Info
app.get('/', (_req, res) => {
  res.status(200).json({
    service: 'Pravaah Technology - Email Service API',
    status: 'online',
    version: '1.0.0',
    documentation: '/api/health',
    timestamp: new Date().toISOString(),
  });
});

// Health check and SMTP Status
app.get('/api/health', async (_req, res) => {
  const smtpStatus = await emailService.verifyConnection();
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Pravaah Technology Nodemailer API',
    environment: process.env.NODE_ENV || 'development',
    smtp: smtpStatus,
  });
});

// Contact Route
app.use('/api/contact', contactRoutes);

// 404 Handler
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: 'API route not found.',
  });
});

// Error Handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error occurred.',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Pravaah Technology Nodemailer API server running on http://localhost:${PORT}`);
  console.log(`📧 Notification recipient: ${process.env.NOTIFICATION_EMAIL || 'pravaahtechnologies15@gmail.com'}`);
});

export default app;
