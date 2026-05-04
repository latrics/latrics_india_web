// src/middlewares/error.middleware.js
// ─────────────────────────────────────────────────────────────
//  Central error handler. All errors flow here via next(err).
//  Never leaks stack traces in production.
// ─────────────────────────────────────────────────────────────

const { IS_PROD } = require("../config/env");

// 404 — route not found
function notFound(req, res, next) {
  res.status(404).json({
    success: false,
    error: `Route not found: ${req.method} ${req.originalUrl}`,
  });
}

// General error handler (must have 4 args for Express to treat it as error handler)
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  const status = err.status || err.statusCode || 500;

  // Always log the full error server-side
  console.error(`[ERROR] ${status} — ${err.message}`);
  if (!IS_PROD) console.error(err.stack);

  res.status(status).json({
    success: false,
    error: IS_PROD && status === 500
      ? "An internal error occurred. Please try again later."
      : err.message,
    // Only include stack in development
    ...(IS_PROD ? {} : { stack: err.stack }),
  });
}

module.exports = { notFound, errorHandler };
