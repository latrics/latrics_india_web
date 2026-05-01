import app from './app.js';
import { connectDB } from './config/db.js';
import { config } from './config/env.js';
import { initCronJobs } from './jobs/export.job.js';

// Connect to Database
connectDB();

// Initialize Cron Jobs
initCronJobs();

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
