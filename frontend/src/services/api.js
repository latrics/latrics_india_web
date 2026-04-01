import { frontendConfig } from "../app/config";

/**
 * API Wrapper: Sends the Demo Form data to the backend via POST.
 * 
 * Design Pattern:
 * We wrap the native `fetch` API so that components don't have to handle HTTP headers,
 * JSON serialization, and try/catch block mapping manually. It returns a normalized
 * object `{ ok, status, data }` that is easy for React hooks to consume.
 * 
 * @param {Object} payload - { name, email, phone }
 */
export async function postDemoRequest(payload) {
  const response = await fetch(`${frontendConfig.apiBaseUrl}/api/demo-request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => ({}));

  return {
    ok: response.ok,
    status: response.status,
    data
  };
}

/**
 * API Wrapper: Sends a Newsletter Subscription request.
 * 
 * Similar to `postDemoRequest`, handles the network abstraction layer.
 * 
 * @param {string} email - The user's input email
 */
export async function postNewsletterSubscription(email) {
  const response = await fetch(`${frontendConfig.apiBaseUrl}/api/newsletter-subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });

  const data = await response.json().catch(() => ({}));

  return {
    ok: response.ok,
    status: response.status,
    data
  };
}
