import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  email: {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
  },
  cronSchedule: process.env.CRON_SCHEDULE || '0 9,21 * * *',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
};
