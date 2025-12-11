import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ApiResponse } from '@monorepo/common';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000';

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req: Request, res: Response<ApiResponse>) => {
  res.json({
    success: true,
    message: 'Server is healthy',
    data: {
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
  });
});

app.get('/api', (_req: Request, res: Response<ApiResponse>) => {
  res.json({
    success: true,
    message: 'Welcome to the API',
  });
});

app.use('*', (_req: Request, res: Response<ApiResponse>) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});
