# AiLydian - Official Corporate Website and Technology Ecosystem Portal

> The central hub for the AiLydian technology ecosystem, showcasing 15+ specialized platforms across healthcare, fintech, legal tech, agritech, gaming, and more.

[![Status](https://img.shields.io/badge/Status-Live-brightgreen)](https://www.ailydian.com)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

---

## Overview

www.ailydian.com is the official corporate website and ecosystem portal for AiLydian. It serves as the primary entry point for exploring the full portfolio of specialized platforms, establishing corporate identity, and enabling partnerships and enterprise inquiries. The site features an interactive 3D globe visualization, a comprehensive product portfolio, and direct navigation to all 15+ sub-platforms.

---

## Ecosystem Map

```mermaid
graph TD
    subgraph "AiLydian Ecosystem"
        A[www.ailydian.com] --> B[Healthcare]
        A --> C[FinTech]
        A --> D[Legal Tech]
        A --> E[AgriTech]
        A --> F[Gaming]
        A --> G[Tourism]
        A --> H[Automotive]
        A --> I[Government]
    end
    subgraph "Healthcare Suite"
        B --> B1[medi - Hospital SaaS]
        B --> B2[median - Blockchain Health]
        B --> B3[medical - Dashboard]
        B --> B4[agent - Multi-Agent]
    end
    subgraph "Innovation Suite"
        C --> C1[borsa - Trading]
        D --> D1[atty - Legal Intel]
        E --> E1[tarim - AgriTech]
        F --> F1[anatolia - MMO]
        F --> F2[oyun - NemesisAI]
    end
```

---

## Key Features

### Corporate Identity
- Brand showcase with visual identity standards
- Executive team and company information
- Partnership and enterprise contact information
- Investor relations section

### Technology Ecosystem Overview
- **15+ Platform Portfolio**: Interactive directory of all AiLydian sub-platforms
- **3D Globe Visualization**: Three.js powered interactive Earth with AI Communication Hub markers
- **Mega Navigation Menu**: 9 product categories with dropdown platform listings
- **SEO Optimized**: Structured data, sitemap, multi-language support

### Product Portfolio Presentation
- Healthcare Suite: medi, median, medical, agent
- FinTech: borsa (trading platform)
- Legal Tech: atty (legal intelligence)
- AgriTech: tarim (agricultural intelligence)
- Gaming: anatolia (MMO), oyun (NemesisAI)
- Tourism: holiday, alanya
- Automotive: otoail
- Voice: voice assistant PWA

### Technical Highlights
- Responsive design for all device sizes
- Progressive Web App (installable)
- Multi-language support (Turkish + English)
- Performance optimized with CDN delivery

---

## Technology Stack

| Category | Technology |
|----------|------------|
| Core | HTML5, CSS3, JavaScript |
| 3D Visualization | Three.js |
| Backend | Node.js (Express) |
| Database | PostgreSQL (via Prisma) |
| Authentication | Custom JWT + OAuth |
| Deployment | Vercel / Custom Server |
| Analytics | Custom Analytics Stack |

---

## Platform Directory

| Platform | URL | Category |
|----------|-----|----------|
| medi | medi.ailydian.com | Hospital SaaS |
| median | median.ailydian.com | Blockchain Health Records |
| medical | medical.ailydian.com | Clinical Dashboard |
| agent | agent.ailydian.com | Multi-Agent Healthcare |
| borsa | borsa.ailydian.com | Trading Platform |
| atty | atty.ailydian.com | Legal Intelligence |
| tarim | tarim.ailydian.com | Agricultural Intelligence |
| anatolia | anatolia.ailydian.com | MMO Gaming |
| oyun | oyun.ailydian.com | Gaming (NemesisAI) |
| voice | voice.ailydian.com | Voice Assistant PWA |
| otoail | otoail.ailydian.com | Automotive Intelligence |
| holiday | holiday.ailydian.com | Tourism Platform |

---

## Getting Started

### Local Development

```bash
# Clone the repository
git clone https://github.com/lydianai/www.ailydian.com.git
cd www.ailydian.com

# Install dependencies
npm install

# Configure environment
cp .env.example .env

# Start server
node server.js
# or
npm run dev
```

### Environment Variables

```env
DATABASE_URL=postgresql://user:password@host:5432/ailydian
JWT_SECRET=your_jwt_secret_here
SESSION_SECRET=your_session_secret_here
NEXT_PUBLIC_APP_URL=https://www.ailydian.com
```

---

## Project Structure

```
www.ailydian.com/
├── ailydian-from-github/   # Main frontend application
│   └── public/             # Static HTML/CSS/JS assets
├── ai-brain/               # Backend intelligence modules
├── routes/                 # Express route handlers
├── middleware/             # Authentication and security middleware
├── config/                 # Configuration files
├── public/                 # Additional static assets
├── server.js               # Main Express server
└── tsconfig.json           # TypeScript configuration
```

---

## Security

This site implements enterprise-grade security headers, CSP, rate limiting, and OWASP Top 10 protections. See [SECURITY.md](SECURITY.md) for vulnerability reporting.

---

## License

Copyright (c) 2024-2026 Lydian (AiLydian). All Rights Reserved.

This software is proprietary. See [LICENSE](LICENSE) for details.

---

## Contact

- **Website**: [www.ailydian.com](https://www.ailydian.com)
- **Email**: sardagemrah@gmail.com
- **Security**: See [SECURITY.md](SECURITY.md)
