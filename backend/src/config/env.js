/**
 * Centralized backend environment helpers.
 */
export function getPort() {
  return Number.parseInt(process.env.PORT, 10) || 5005;
}

export function resolveAllowedOrigins() {
  const configuredOrigins = process.env.CORS_ORIGINS;

  if (configuredOrigins) {
    return configuredOrigins.split(",").map((origin) => origin.trim()).filter(Boolean);
  }

  return true;
}
