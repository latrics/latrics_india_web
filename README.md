<div align="center">

# 🚁 LATRICS

### Transforming Industries Through Intelligent Innovation

*Industrial intelligence platform powered by autonomous drones, LiDAR mapping, and AI analytics*

<br/>

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.183-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.38-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4.8-010101?style=for-the-badge&logo=socketdotio&logoColor=white)

<br/>

[View Demo](#-demo) · [Report Bug](https://github.com/Aditya-Paul-2003/latrics_website/issues) · [Request Feature](https://github.com/Aditya-Paul-2003/latrics_website/issues)

</div>

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [WebSocket Events](#-websocket-events)
- [Usage Flow](#-usage-flow)
- [Contributing](#-contributing)
- [Future Improvements](#-future-improvements)
- [License](#-license)
- [Author](#-author)

---

## 🎯 Project Overview

**LATRICS** is a full-stack marketing and product showcase platform for an industrial intelligence company. It combines a visually stunning React frontend with a Node.js/Express backend to deliver an immersive experience featuring interactive 3D drone visualization, real-time simulated telemetry, and lead capture functionality.

### Problem It Solves

Industrial intelligence companies need a digital presence that matches the sophistication of their technology. Static websites fail to convey the precision and innovation behind autonomous drone operations, LiDAR mapping, and AI-driven analytics. LATRICS bridges this gap with:

- **Interactive 3D product visualization** — letting prospects engage with the technology
- **Real-time operational telemetry** — demonstrating platform reliability and scale
- **Seamless lead capture** — converting visitors into qualified demo requests
- **Industry-specific showcases** — tailored messaging for aerospace, energy, and infrastructure

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🎮 **Interactive 3D Drone** | Procedurally built drone model with spinning rotors, orbit controls, auto-rotation, and cinematic lighting using Three.js + React Three Fiber |
| 📡 **Real-Time Telemetry** | Simulated live metrics (uptime, pipelines, latency, alerts) broadcast via Socket.IO every 2.5 seconds |
| 📝 **Lead Capture Form** | Demo request form with server-side validation, MongoDB persistence, and real-time submission feedback |
| 📰 **Newsletter System** | Email subscription with duplicate detection, lowercase normalization, and unique index enforcement |
| 🎨 **Premium Design System** | 70+ custom Tailwind CSS v4 theme tokens, glassmorphism, gradients, and micro-animations |
| 🃏 **3D Tilt Cards** | Mouse-tracking parallax cards using Framer Motion's `useMotionValue`, `useSpring`, and `useTransform` |
| 📱 **Responsive Navigation** | Fixed navbar with scroll-aware blur, mobile hamburger drawer with `AnimatePresence` transitions |
| 🏭 **Industry Showcase** | Tabbed interface with spring-animated active indicator and cross-fade image transitions |
| ♿ **Accessibility** | `prefers-reduced-motion` support, semantic HTML, ARIA labels, and keyboard navigation |
| ⚡ **Performance Optimized** | rAF-throttled scroll events, `React.memo`, `viewport: { once: true }` animations, `Suspense` lazy loading |

---

## 🖥 Demo

<div align="center">

### Live Sections Preview

| Hero Section | 3D Drone Simulation |
|:---:|:---:|
| Full-viewport hero with animated heading and floating image cards | Interactive Three.js scene with orbit controls and auto-rotation |

| Highlights | Industries |
|:---:|:---:|
| 3D tilt cards with mouse-tracking parallax effect | Tabbed showcase with spring layout animations |

| Case Studies | Demo Form |
|:---:|:---:|
| Rounded cards with hover zoom and gradient overlays | Split-panel form with floating drone animation |

</div>

> 💡 **To see the live demo**: Clone the repo and run `npm run dev` — both frontend and backend start concurrently.

---

## 🛠 Tech Stack

<table>
<tr>
<td valign="top" width="50%">

### Frontend
| Technology | Purpose |
|-----------|---------|
| React 19.1 | UI library with hooks-based architecture |
| Vite 7.1.5 | Lightning-fast dev server and bundler |
| Tailwind CSS 4.2 | Utility-first CSS with custom design tokens |
| Framer Motion 12.38 | Declarative animations and layout transitions |
| Three.js 0.183 | WebGL 3D rendering engine |
| React Three Fiber 9.5 | React reconciler for Three.js |
| React Three Drei 10.7 | Essential Three.js helpers |
| Lucide React 1.7 | Tree-shakeable SVG icon library |
| Socket.IO Client 4.8.3 | WebSocket client for real-time updates |

</td>
<td valign="top" width="50%">

### Backend
| Technology | Purpose |
|-----------|---------|
| Node.js | JavaScript runtime |
| Express 4.21 | HTTP server framework |
| Mongoose 9.3 | MongoDB ODM with schema validation |
| Socket.IO 4.8.1 | WebSocket server for live broadcasts |
| cors 2.8.5 | Cross-origin request middleware |
| dotenv 17.3 | Environment variable loader |

### Infrastructure
| Technology | Purpose |
|-----------|---------|
| MongoDB Atlas | Cloud-hosted NoSQL database |
| npm Workspaces | Monorepo package management |
| Concurrently 9.1 | Parallel script execution |

</td>
</tr>
</table>

---

## 📁 Folder Structure

```
LATRICS/
├── package.json                    # Root monorepo config (workspaces + scripts)
├── PROJECT_STRUCTURE.md            # Developer reference guide
├── .gitignore                      # Git exclusion rules
│
├── backend/
│   ├── .env                        # Server environment variables
│   ├── package.json                # Backend dependencies
│   └── src/
│       ├── index.js                # Entry: boots DB, HTTP, Socket.IO, shutdown
│       ├── app.js                  # Express factory: CORS, JSON, route mounting
│       ├── config/
│       │   ├── env.js              # getPort(), resolveAllowedOrigins()
│       │   └── db.js               # MongoDB connection with DNS fix
│       ├── data/
│       │   └── liveMetrics.js      # Metric definitions (ranges, precision)
│       ├── models/
│       │   ├── Contact.js          # Demo request schema (name, email, phone)
│       │   └── Newsletter.js       # Newsletter schema (email, unique index)
│       ├── routes/
│       │   ├── demoRoutes.js       # POST /api/demo-request
│       │   ├── liveRoutes.js       # GET  /api/live
│       │   └── newsletterRoutes.js # POST /api/newsletter-subscribe
│       ├── services/
│       │   └── liveDataService.js  # Telemetry payload builder + Fisher-Yates
│       └── socket/
│           └── registerLiveSocket.js # Socket.IO broadcast manager
│
├── frontend/
│   ├── .env                        # VITE_API_URL
│   ├── index.html                  # HTML shell (Poppins font, meta, favicon)
│   ├── vite.config.js              # Vite + React + Tailwind plugins
│   ├── public/                     # 22 static assets (PNGs, SVGs)
│   └── src/
│       ├── main.jsx                # React entry point (StrictMode)
│       ├── styles.css              # Design system (70+ tokens, animations)
│       ├── app/
│       │   ├── App.jsx             # Root composition (hooks + sections)
│       │   ├── config.js           # API URL resolver
│       │   └── motion.js           # Framer Motion presets
│       ├── components/
│       │   ├── 3d/
│       │   │   ├── DroneScene.jsx  # Three.js canvas + lighting + controls
│       │   │   └── ProceduralDrone.jsx # Procedural drone mesh + rotors
│       │   ├── common/             # Reusable UI primitives
│       │   │   ├── Button.jsx      # 3 variants: primary/secondary/ghost
│       │   │   ├── Card.jsx        # 5 shells: elevated/telemetry/inset/flat/glass
│       │   │   ├── Container.jsx   # Max-width 1400px wrapper
│       │   │   ├── Section.jsx     # Vertical padding + bg variants
│       │   │   ├── SectionHeading.jsx # Eyebrow + title + description
│       │   │   ├── Tag.jsx         # Pill chip with optional icon
│       │   │   ├── TextField.jsx   # Accessible label + styled input
│       │   │   └── BannerMarquee.jsx # Infinite partner ticker
│       │   └── sections/           # 11 page-level sections
│       │       ├── Navbar.jsx      # Fixed header + mobile drawer
│       │       ├── Hero.jsx        # Full-viewport hero
│       │       ├── About.jsx       # Feature list card
│       │       ├── Simulation.jsx  # 3D drone section
│       │       ├── Highlights.jsx  # Tilt cards + scroll navigation
│       │       ├── WhyLatrics.jsx  # 6-card value grid
│       │       ├── Industries.jsx  # Tabbed industry showcase
│       │       ├── CaseStudies.jsx # 4 case study cards
│       │       ├── Milestones.jsx  # Stats counter grid
│       │       ├── DemoForm.jsx    # Lead capture form
│       │       └── Footer.jsx      # Links + newsletter
│       ├── data/
│       │   └── siteContent.js      # All static copy and content arrays
│       ├── hooks/
│       │   ├── useDemoRequest.js   # Form state + HTTP submission
│       │   └── useNavbarScroll.js  # rAF-throttled scroll tracker
│       ├── lib/
│       │   └── cn.js               # Class name utility (lightweight clsx)
│       └── services/
│           └── api.js              # Fetch wrappers (demo + newsletter)
```

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** v18+ and **npm** v9+
- **MongoDB Atlas** account (or local MongoDB instance)
- **Git**

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Aditya-Paul-2003/latrics_website.git
cd latrics_website

# 2. Install all dependencies (root + frontend + backend workspaces)
npm install

# 3. Set up environment variables (see next section)

# 4. Start both servers concurrently
npm run dev
```

This will launch:
- **Frontend** at `http://localhost:5173`
- **Backend** at `http://localhost:5005`

### Other Commands

| Command | Scope | Description |
|---------|-------|-------------|
| `npm run dev` | Root | Starts frontend + backend concurrently |
| `npm run build` | Root | Builds frontend for production (`frontend/dist/`) |
| `npm run start` | Root | Starts backend in production mode |

---

## 🔐 Environment Variables

### Backend (`backend/.env`)

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `PORT` | No | `5005` | Port the Express server listens on |
| `CORS_ORIGINS` | No | `*` (all) | Comma-separated list of allowed origins (e.g., `http://localhost:5173`) |
| `MONGODB_URI` | Yes | — | MongoDB Atlas connection string (e.g., `mongodb+srv://user:pass@cluster.mongodb.net/latrics`) |

### Frontend (`frontend/.env`)

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `VITE_API_URL` | No | `http://localhost:5005` | Backend API base URL |

### Example `.env` Files

```env
# backend/.env
PORT=5005
CORS_ORIGINS=http://localhost:5173
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/latrics
```

```env
# frontend/.env
VITE_API_URL=http://localhost:5005
```

---

## 📡 API Documentation

**Base URL:** `http://localhost:5005`

### REST Endpoints

| Method | Endpoint | Description | Request Body | Success | Error Codes |
|--------|----------|-------------|-------------|---------|-------------|
| `GET` | `/api/live` | Snapshot of simulated live telemetry metrics | — | `200` with metrics + activity feed | — |
| `POST` | `/api/demo-request` | Submit a demo request (lead capture) | `{ name, email, phone }` | `201` — saved to DB | `400` missing fields, `503` DB down, `500` server error |
| `POST` | `/api/newsletter-subscribe` | Subscribe email to newsletter | `{ email }` | `201` — subscribed | `400` invalid email, `409` already exists, `500` server error |

### Response Examples

<details>
<summary><b>GET /api/live</b> — 200 OK</summary>

```json
{
  "generatedAt": "2026-04-01T16:00:00.000Z",
  "metrics": [
    { "id": "uptime", "label": "Platform Uptime", "unit": "%", "value": 99.47 },
    { "id": "pipelines", "label": "Active Pipelines", "unit": "", "value": 142 },
    { "id": "latency", "label": "Inference Latency", "unit": "ms", "value": 95 },
    { "id": "alerts", "label": "Resolved Alerts", "unit": "", "value": 16 }
  ],
  "activity": [
    { "id": "1711972800000-0", "message": "Supply chain anomaly resolved", "secondsAgo": 12 },
    { "id": "1711972800000-1", "message": "AI copilot knowledge base refreshed", "secondsAgo": 28 }
  ]
}
```
</details>

<details>
<summary><b>POST /api/demo-request</b> — 201 Created</summary>

```json
// Request
{ "name": "Ravi Kumar", "email": "ravi@company.in", "phone": "+91 98765 43210" }

// Response
{ "message": "Request received and saved." }
```
</details>

<details>
<summary><b>POST /api/newsletter-subscribe</b> — 201 Created</summary>

```json
// Request
{ "email": "subscriber@example.com" }

// Response
{ "message": "Successfully subscribed to newsletter." }
```
</details>

---

## 🔌 WebSocket Events

| Event | Direction | Frequency | Payload |
|-------|-----------|-----------|---------|
| `live:update` | Server → Client | Every 2500ms + on initial connection | Same structure as `GET /api/live` response |

The Socket.IO server broadcasts simulated telemetry data to all connected clients. On initial connection, the client immediately receives the latest payload without waiting for the next interval.

---

## 🧭 Usage Flow

```
1. User visits the website
   └── React app loads with fade-in animation

2. User scrolls through sections
   ├── Navbar blurs and becomes sticky after 50px scroll
   ├── Sections animate into view (once) with stagger effects
   └── 3D drone scene loads in background (Suspense)

3. User interacts with 3D drone
   ├── Drag to rotate (OrbitControls)
   ├── Scroll to zoom (min: 3, max: 9 distance)
   └── Auto-rotation continues at 0.7 speed

4. User explores Industries
   ├── Clicks tab (Aerospace / Digital Intelligence / Sustainable Energy)
   ├── Active indicator spring-animates to new position
   └── Image cross-fades with scale transition

5. User submits Demo Request
   ├── Fills Name, Email, Phone fields
   ├── Clicks "Book demo"
   ├── Frontend validates → POST /api/demo-request
   ├── Backend validates → saves to MongoDB
   └── Success/error message appears below button

6. User subscribes to Newsletter (Footer)
   ├── Enters email → clicks arrow button
   ├── POST /api/newsletter-subscribe
   ├── Duplicate check → saves if new
   └── Status message auto-clears after 5 seconds
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m "feat: add amazing feature"
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing folder structure (components → sections, hooks, services)
- Use the design system tokens defined in `styles.css` — avoid hardcoded colors
- All static copy goes in `data/siteContent.js`
- Extract reusable logic into custom hooks
- Test on both desktop and mobile viewports

---

## 🔮 Future Improvements

| Priority | Enhancement | Description |
|----------|------------|-------------|
| 🔴 High | **Image Optimization** | Convert `hero_bg.png` (32MB) and other assets to WebP/AVIF with responsive `srcSet` |
| 🔴 High | **Authentication** | Add admin panel with JWT auth to manage demo requests and newsletter subscribers |
| 🟡 Medium | **Code Splitting** | Lazy-load 3D scene and heavy sections with `React.lazy()` + `Suspense` |
| 🟡 Medium | **Rate Limiting** | Add `express-rate-limit` to protect API endpoints from spam |
| 🟡 Medium | **Email Validation** | Implement RFC 5322 compliant email validation (not just `@` check) |
| 🟡 Medium | **Live Socket Integration** | Connect the frontend to the Socket.IO server for real-time metric display |
| 🟢 Low | **SEO Enhancement** | Add `react-helmet` for dynamic meta tags and Open Graph support |
| 🟢 Low | **Dark/Light Theme** | Toggle between dark and light modes using CSS custom properties |
| 🟢 Low | **Internationalization** | Add i18n support for multi-language content |
| 🟢 Low | **CI/CD Pipeline** | GitHub Actions for automated testing, linting, and deployment |
| 🟢 Low | **PWA Support** | Service worker for offline caching and installable app experience |

---

## 📄 License

This project is for educational and demonstration purposes.

---

<div align="center">

## 👤 Author

**Aditya Paul**

[![GitHub](https://img.shields.io/badge/GitHub-Aditya--Paul--2003-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Aditya-Paul-2003)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/)

---

<sub>Built with ❤️ using React, Three.js, and Express</sub>

</div>
