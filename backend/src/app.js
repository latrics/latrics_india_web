import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import contactRoutes from './routes/contact.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { contactRateLimit } from './middlewares/rateLimit.middleware.js';
import { config } from './config/env.js';

const app = express();

// Middlewares
app.use(helmet());
app.use(cors({
  origin: config.corsOrigin,
}));
app.use(express.json());

// Routes
app.use('/api/contact', contactRateLimit, contactRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Latrics API is running' });
});

// Error Handler
app.use(errorHandler);

export default app;
