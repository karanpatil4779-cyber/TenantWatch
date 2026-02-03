<p align="center">
  <img src="public/tenant_favi.png" alt="TenantWatch Logo" width="150" />
</p>

<h1 align="center">🏙️ TenantWatch</h1>

<p align="center">
  <strong>Smart Property Risk Intelligence for Urban Renters</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Structure</a> •
  <a href="#contributing">Contributing</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?logo=tailwind-css" alt="Tailwind" />
</p>

---

## 🎯 About

**TenantWatch** is India's first crowd-sourced property risk intelligence platform. It helps urban renters make informed decisions by providing:

- 🧠 **Risk Intelligence** — Data-backed safety scores for rental properties
- 🗺️ **Interactive Maps** — Visualize issues across Mumbai, Delhi, Bengaluru & Pune
- 🧾 **Tenant Reviews** — Anonymous, verified reports from the community
- 📊 **Smart Analytics** — Seasonal trends, area comparisons & insights

> Think of it as **Google Maps + Glassdoor + Safety Audit for Rental Properties**

---

## ✨ Features

### Core Features

| Feature                | Description                                   |
| ---------------------- | --------------------------------------------- |
| 🏠 **Risk Map**        | Interactive map with color-coded risk markers |
| 📊 **Dashboard**       | Real-time analytics with trend charts         |
| 🔍 **Property Search** | Filter by budget, risk score, area            |
| 📝 **Issue Reporting** | Step-by-step wizard with media upload         |
| 👤 **User Profiles**   | Reputation scores & contribution tracking     |

### Advanced Features

| Feature                | Description                              |
| ---------------------- | ---------------------------------------- |
| 🛡️ **Admin Panel**     | Moderation queue & user management       |
| 🔔 **Smart Alerts**    | Notifications for nearby high-risk areas |
| 🏆 **Gamification**    | Badges, points & community leaderboard   |
| 🧠 **Smart Insights**  | AI-powered seasonal & area analysis      |
| 🏢 **Owner Dashboard** | Property management for landlords        |

---

## 🛠️ Tech Stack

| Category      | Technologies                     |
| ------------- | -------------------------------- |
| **Framework** | Next.js 16, React 19, TypeScript |
| **Styling**   | Tailwind CSS 4, CSS Variables    |
| **Animation** | Framer Motion                    |
| **Charts**    | Recharts                         |
| **Maps**      | Mapbox GL                        |
| **Icons**     | Lucide React                     |
| **Theming**   | next-themes (Dark/Light)         |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tenantwatch.git
cd tenantwatch

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
tenantwatch/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with meta tags
│   ├── page.tsx            # Main application entry
│   └── globals.css         # Global styles & design tokens
├── src/
│   ├── components/         # React components
│   │   ├── AdminPanel.tsx      # Admin moderation
│   │   ├── AlertsPanel.tsx     # Notifications
│   │   ├── DashboardView.tsx   # Analytics dashboard
│   │   ├── EnhancedSearch.tsx  # Property search
│   │   ├── IssueMap.tsx        # Interactive map
│   │   ├── Leaderboard.tsx     # Gamification
│   │   ├── PropertyProfile.tsx # Property details
│   │   └── ui/                 # Reusable primitives
│   └── lib/
│       ├── mock-data.ts    # Sample data & types
│       └── api.ts          # API service layer
├── public/
│   └── tenant_favi.png     # Favicon & OG image
└── backend/                # Express API server
```

---

## 🎨 Design System

### Colors

| Token                | Value     | Usage            |
| -------------------- | --------- | ---------------- |
| `--color-background` | `#0B0F0E` | Base background  |
| `--color-primary`    | `#34D399` | Emerald accent   |
| `--color-safe`       | `#10B981` | Safe indicators  |
| `--color-moderate`   | `#FACC15` | Warning states   |
| `--color-high`       | `#EF4444` | Danger/high risk |

### Typography

- **Font**: Geist Sans (Inter fallback)
- **Headings**: 32-48px
- **Body**: 14-16px

---

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  Made with ❤️ in India
</p>
