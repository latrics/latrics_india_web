# Contact Form Backend

Production-ready Node.js backend for contact form submissions with twice-daily CSV email reports.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Create your env file
cp .env.example .env
# → Open .env and fill in your values (see Configuration below)

# 3. Start in development
npm run dev

# 4. Start in production
npm start
```

---

## Configuration (`.env`)

All behaviour is controlled by environment variables. **No code changes needed** when credentials rotate — just update `.env` and restart.

| Variable | Required | Description |
|---|---|---|
| `PORT` | No | HTTP port (default: 5000) |
| `MONGO_URI` | **Yes** | MongoDB connection string |
| `SMTP_HOST` | **Yes** | SMTP server hostname |
| `SMTP_PORT` | **Yes** | SMTP port (587 = STARTTLS, 465 = SSL) |
| `SMTP_SECURE` | No | `true` for port 465, `false` for 587 (default) |
| `SMTP_USER` | **Yes** | SMTP username / email |
| `SMTP_PASS` | **Yes** | SMTP password or App Password |
| `EMAIL_FROM` | **Yes** | Sender display name + address |
| `EMAIL_TO` | **Yes** | Recipient of CSV reports |
| `CRON_SCHEDULE` | No | Cron expression (default: `0 9,21 * * *`) |
| `CORS_ORIGIN` | No | Frontend URL(s), comma-separated |
| `RATE_LIMIT_MAX` | No | Max requests per IP per window (default: 20) |
| `RATE_LIMIT_WINDOW_MS` | No | Rate limit window in ms (default: 900000 = 15 min) |

### Gmail Setup
1. Enable 2-Factor Authentication on your Google account
2. Go to **Google Account → Security → App Passwords**
3. Generate a new App Password for "Mail"
4. Use that 16-character password as `SMTP_PASS`

---

## API

### `POST /api/contact`

**Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+91 9876543210",
  "message": "Hello, I'd like to learn more about your services."
}
```

**Success response (201):**
```json
{
  "success": true,
  "message": "Thank you! We'll be in touch soon.",
  "id": "665f1a2b3c4d5e6f7a8b9c0d"
}
```

**Validation error (422):**
```json
{
  "success": false,
  "errors": [
    { "field": "email", "message": "Please provide a valid email address" }
  ]
}
```

### `GET /health`
Returns server uptime. Used by uptime monitors and Render's health check.

---

## Frontend Integration

```javascript
// Vanilla JS fetch
const response = await fetch("https://your-backend.onrender.com/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, phone, message }),
});

const data = await response.json();
if (data.success) {
  alert("Message sent!");
} else {
  console.error(data.errors);
}
```

---

## CSV Email Flow

- **Schedule**: controlled by `CRON_SCHEDULE` (default: 9 AM and 9 PM daily)
- **No duplicates**: records are flagged `exported: true` after a successful email send
- **Failure safety**: if the email fails, records stay `exported: false` and will be included in the next run
- **No disk writes**: CSV is generated as a memory buffer — works on read-only filesystems

---

## Deployment on Render

1. Push this `backend/` folder to GitHub
2. Create a **Web Service** on [render.com](https://render.com)
3. Set **Build Command**: `npm install`
4. Set **Start Command**: `npm start`
5. Add all environment variables in the Render dashboard
6. Enable **Auto-Deploy** on push

> ⚠️ Render free tier spins down after inactivity. Use the [UptimeRobot](https://uptimerobot.com) free tier to ping `/health` every 5 minutes to keep it alive.

---

## Changing Credentials Later

1. Update the value in your `.env` file (local) or in Render's environment variables dashboard
2. Restart the server (Render does this automatically on env var save)
3. That's it — no code changes needed

---

## Logs Reference

| Prefix | Meaning |
|---|---|
| `[SERVER]` | HTTP server lifecycle |
| `[DB]` | MongoDB connection events |
| `[CONTACT]` | New contact form submission saved |
| `[CRON]` | Scheduled export job activity |
| `[EMAIL]` | Email send attempts and outcomes |
| `[RATE-LIMIT]` | Rate limit blocks |
| `[CORS]` | Blocked cross-origin requests |
| `[ERROR]` | Application errors |

---

## Troubleshooting

**"Missing required environment variables" on startup**
→ Copy `.env.example` to `.env` and fill in all required fields.

**Email not sending**
→ Check `SMTP_*` values. For Gmail, make sure you're using an App Password, not your real Gmail password.

**CORS errors from frontend**
→ Add your frontend URL to `CORS_ORIGIN` in `.env`. Restart the server.

**MongoDB connection failing**
→ Check `MONGO_URI`. Make sure your IP is whitelisted in MongoDB Atlas (or use `0.0.0.0/0` for all IPs).

**Cron job not running**
→ Check `CRON_SCHEDULE` format. Validate at [crontab.guru](https://crontab.guru).
