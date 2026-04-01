/**
 * Centralized frontend runtime configuration.
 * Keeping this in one place makes it much easier to debug environment issues.
 */
export function resolveApiBaseUrl() {
  const envUrl = import.meta.env.VITE_API_URL;

  if (envUrl) {
    return envUrl.replace(/\/$/, "");
  }

  if (import.meta.env.DEV) {
    return "http://localhost:5005";
  }

  return window.location.origin;
}

export const frontendConfig = {
  apiBaseUrl: resolveApiBaseUrl()
};
