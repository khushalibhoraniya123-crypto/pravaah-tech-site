import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AdminUser } from '../models/AdminUser.js';
import { getDBStatus } from '../config/db.js';

export const adminLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: 'Email and password are required.',
      });
      return;
    }

    const defaultAdminEmail = (process.env.ADMIN_EMAIL || 'admin@pravaahtechnology.com').toLowerCase();
    const defaultAdminPassword = process.env.ADMIN_PASSWORD || 'Admin@Pravaah2026!';
    const jwtSecret = process.env.JWT_SECRET || 'pravaah_super_secret_jwt_key_2026_modern_agency';

    let userPayload = null;

    if (getDBStatus()) {
      const user = await AdminUser.findOne({ email: email.toLowerCase() });
      if (user) {
        const isMatch = await user.comparePassword(password);
        if (isMatch) {
          userPayload = {
            email: user.email,
            role: user.role,
            name: user.name,
          };
        }
      }
    }

    // Check against default credentials if DB user not found / not connected
    if (!userPayload && email.toLowerCase() === defaultAdminEmail && password === defaultAdminPassword) {
      userPayload = {
        email: defaultAdminEmail,
        role: 'admin',
        name: 'Pravaah Administrator',
      };
    }

    if (!userPayload) {
      res.status(401).json({
        success: false,
        message: 'Invalid email or password credentials.',
      });
      return;
    }

    const token = jwt.sign(userPayload, jwtSecret, { expiresIn: '7d' });

    res.status(200).json({
      success: true,
      message: 'Authentication successful.',
      token,
      user: userPayload,
    });
  } catch (error: any) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Login failed due to an internal server error.',
    });
  }
};

export const verifyAdminSession = async (req: Request, res: Response): Promise<void> => {
  // If the auth middleware passed, session is valid
  res.status(200).json({
    success: true,
    user: (req as any).user,
  });
};
