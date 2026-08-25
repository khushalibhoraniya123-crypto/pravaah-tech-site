import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Parsing Middlewares
const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(',').map((url) => url.trim())
  : '*';

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or server-to-server)
      if (!origin || allowedOrigins === '*') {
        return callback(null, true);
      }
      if (Array.isArray(allowedOrigins) && (allowedOrigins.includes(origin) || allowedOrigins.includes('*'))) {
        return callback(null, true);
      }
      // Allow Vercel preview domains if main domain is listed
      return callback(null, true);
    },
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Root index status
app.get('/', (_req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'Pravaah Technology API Server',
    version: '1.0.0',
    documentation: '/api/health',
    timestamp: new Date().toISOString(),
  });
});

// Health check
app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Pravaah Technology API',
    environment: process.env.NODE_ENV || 'development',
  });
});

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Pravaah Technology API server listening on http://localhost:${PORT}`);
  });
};

startServer();

export default app;
