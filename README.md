# Pravaah Technology — Modern Full-Stack Website & Admin System

> **High-Performance Technology Company Website & Management Platform**  
> Built with **React 18**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Express.js**, and **MongoDB / Mongoose**.

---

## 🌟 Overview & Highlights

- **Visual Design**: Navy/Dark Blue branding (`#0B1B3A`, `#07152F`), Electric Blue → Purple gradients (`#1769E0` → `#6C3FE8`), glassmorphism cards with soft shadows, subtle glow particles, and responsive layouts.
- **Hero Tech Visual**: Interactive abstract flowing wave ribbon SVG, glowing particles, and floating glass cards (AI, WEB, UI/UX, AUTOMATION, and live code preview).
- **Single Source of Truth Configuration**: Phone numbers, email addresses, WhatsApp chat link, office address, and social links are centralized in `frontend/src/config/contact.ts`. You only need to edit **ONE** file to update business contact info across the entire website!
- **Working Contact Pipeline**: Real-time project inquiry form with budget selectors, service selection, form validation, confetti feedback, and MongoDB storage (with memory fallback).
- **Protected Admin Portal (`/admin`)**:
  - Secure JWT authentication.
  - Live inquiry pipeline overview with status filters (`New`, `Contacted`, `In Progress`, `Closed`).
  - Search query filtering across names, emails, companies, and messages.
  - Detailed inquiry inspector modal & deletion management.

---

## 🚀 Quick Start (Development)

### 1. Install Dependencies
```bash
# From the project root
npm run install:all
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` in both `backend` and `frontend`:

**`backend/.env`**:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/pravaah_technology
JWT_SECRET=pravaah_super_secret_jwt_key_2026_modern_agency
ADMIN_EMAIL=admin@pravaahtechnology.com
ADMIN_PASSWORD=Admin@Pravaah2026!
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

**`frontend/.env`**:
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Run Development Servers
```bash
# Runs both Backend (port 5000) and Frontend (port 5173) concurrently
npm run dev
```

- **Website URL**: `http://localhost:5173/`
- **Admin Portal**: `http://localhost:5173/admin`
  - **Email**: `admin@pravaahtechnology.com`
  - **Password**: `Admin@Pravaah2026!`
- **API Health**: `http://localhost:5000/api/health`

---

## 📁 Centralized Business Information

To update contact information, phone numbers, email IDs, WhatsApp numbers, office address, and company stats, edit:

📂 `frontend/src/config/contact.ts`

```typescript
export const CONTACT_CONFIG = {
  companyName: "Pravaah Technology",
  phone: "+91 98765 43210",          // Displayed phone
  phoneRaw: "+919876543210",          // Tel: link
  email: "pravaahtechnologies15@gmail.com",
  whatsapp: "+91 98765 43210",       // Displayed WhatsApp
  whatsappRaw: "919876543210",        // WhatsApp chat link
  address: {
    street: "358, 3rd Floor, Amorina Textile Market, near Polaris Mall, opp Saswat Plazza, Punagam, Varachha",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    postalCode: "395010",
    fullFormatted: "358, 3rd Floor, Amorina Textile Market, near Polaris Mall, opp Saswat Plazza, Punagam, Varachha, Surat, Gujarat 395010"
  },
  stats: {
    projectsDelivered: "50+",
    happyClients: "25+",
    digitalSolutions: "10+",
    clientSatisfaction: "99%",
  }
};
```

---

## 🏗️ Project Architecture

```
Pravaah_Technology/
├── package.json                   # Root orchestrator scripts
├── README.md                      # Comprehensive documentation
├── backend/                       # Node.js + Express + TypeScript + Mongoose
│   ├── src/
│   │   ├── config/db.ts           # Mongoose connection & fallback detection
│   │   ├── models/                # ContactInquiry & AdminUser Mongoose schemas
│   │   ├── controllers/           # Contact, Auth, and Admin controllers
│   │   ├── routes/                # REST endpoints (/api/contact, /api/auth, /api/admin)
│   │   ├── middleware/            # JWT authentication & global error handlers
│   │   ├── utils/memoryStore.ts   # In-memory persistence & demo seed data
│   │   └── server.ts              # Express application entrypoint
│   └── tsconfig.json
│
└── frontend/                      # Vite + React 18 + TypeScript + Tailwind CSS
    ├── src/
    │   ├── config/contact.ts      # 🌟 CENTRAL BUSINESS & CONTACT CONFIG
    │   ├── data/                  # Services, Solutions, Tech Matrix, Portfolio, Process, Values
    │   ├── types/                 # TypeScript interfaces
    │   ├── context/               # AuthContext (Admin) & ToastContext
    │   ├── services/api.ts        # Client API SDK
    │   ├── components/
    │   │   ├── common/            # Navbar, Footer, Logo, Button, Badge, Modals, FloatingActions
    │   │   ├── hero/              # AbstractTechVisual (SVG wave ribbons & floating tech cards)
    │   │   ├── cards/             # Glassmorphic Service, Solution, Value, Project & Tech cards
    │   │   └── admin/             # Inquiry detail modal & admin components
    │   ├── sections/              # Hero, ServicesStrip, About, Values, Stats, Services, Solutions, Tech, Process, Portfolio, Contact
    │   └── pages/                 # HomePage, AboutPage, ServicesPage, SolutionsPage, PortfolioPage, ContactPage, AdminPage, NotFoundPage
    ├── index.html                 # SEO tags, Google Fonts (Inter, Plus Jakarta Sans)
    ├── vite.config.ts
    └── tailwind.config.js
```

---

## 🛡️ Production Build & Deployment

### 1. Build Verification
```bash
npm run build
```
This builds both the backend (`backend/dist`) and the optimized frontend bundle (`frontend/dist`).

### 2. Recommended Deployment Strategy
- **Frontend** → [Vercel](https://vercel.com) / [Netlify](https://netlify.com) / [Cloudflare Pages](https://pages.cloudflare.com)
  - Root directory: `frontend`
  - Build command: `npm run build`
  - Output directory: `dist`
  - Environment variable: `VITE_API_URL=https://your-backend-domain.com/api`

- **Backend** → [Render](https://render.com) / [Railway](https://railway.app) / [AWS EC2](https://aws.amazon.com)
  - Root directory: `backend`
  - Build command: `npm run build`
  - Start command: `npm run start`
  - Environment variables: `PORT=5000`, `MONGODB_URI=...`, `JWT_SECRET=...`, `ADMIN_EMAIL=...`, `ADMIN_PASSWORD=...`

- **Database** → [MongoDB Atlas](https://www.mongodb.com/atlas)
  - Create a free or dedicated cluster and paste the connection URI into `MONGODB_URI`.

---

## 📄 License & Attribution
© 2026 Pravaah Technology. All Rights Reserved.
