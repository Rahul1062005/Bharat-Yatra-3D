# 🇮🇳 Bharat Yatra 3D (भारत यात्रा 3D)

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-bharat--yatra--3--d.vercel.app-blueviolet?style=for-the-badge&logo=vercel)](https://bharat-yatra-3-d.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r186-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

### 🚀 **[Explore Bharat Yatra 3D Live → https://bharat-yatra-3-d.vercel.app](https://bharat-yatra-3-d.vercel.app)**

*An immersive 3D cultural and geographical journey across India’s 28 States and 8 Union Territories.*

</div>

---

## 🌟 Highlights & Features

- **🗺️ Interactive 3D India Map**: Explore India's geography with interactive regions, multi-angle viewports, and regional telemetry.
- **🏛️ 36 Living Realms**: Deep dives into all 28 States and 8 Union Territories featuring historical background, cultural heritage, cuisine, geography, and native music.
- **🗿 3D Monuments & Landmarks**: Interactive 3D monument views, architectural details, and cultural spotlights.
- **🧭 AI Yatra Guide**: Built-in intelligent tourism guide providing curated cultural insights, travel advisories, and state knowledge.
- **🎮 "Guess the State" Mini-Game**: Interactive cultural and geographical trivia challenge to test your knowledge of India.
- **📅 Bharat Utsav Calendar**: Traditional festival and season explorer celebrating heritage and festivities across the subcontinent.
- **🎒 Custom Journey Planner**: Build and save multi-state travel itineraries tailored to seasons, themes, and budgets.
- **📱 PWA & Mobile-First**: Installable Progressive Web App with responsive design and smooth 60fps animations.

---

## 🌐 Live Deployment

The application is deployed on Vercel with automatic continuous integration:

**🔗 Production URL:** [https://bharat-yatra-3-d.vercel.app](https://bharat-yatra-3-d.vercel.app)

---

## 🛠️ Tech Stack

- **Frontend Core**: React 19, TypeScript
- **3D Graphics & Rendering**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Routing & State**: React Router v7
- **Icons & UI**: Lucide React, Glassmorphic CSS design system
- **Build Tool**: Vite
- **Deployment Platform**: Vercel

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rahul1062005/Bharat-Yatra-3D.git
   cd Bharat-Yatra-3D
   ```

2. **Install dependencies:**
   ```bash
   npm install
   cd client && npm install
   ```

3. **Start the development server:**
   ```bash
   # From root:
   npm run dev

   # Or inside client/:
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:5173
   ```

### Building for Production

```bash
npm run build
```

---

## 📁 Project Architecture

```
Bharat-Yatra-3D/
├── client/                     # Frontend client workspace
│   ├── public/                 # Static assets, PWA manifest, state media
│   ├── src/
│   │   ├── components/         # 3D Canvas, Modals, Navigation, Widgets
│   │   │   ├── 3d/             # Three.js / R3F Canvas & Map Models
│   │   │   ├── game/           # Guess the State trivia game
│   │   │   ├── itinerary/      # Journey planner & scheduler
│   │   │   └── ui/             # Modals, HUD overlays, drawers
│   │   ├── data/               # Rich data profiles for all 36 states & UTs
│   │   └── pages/              # Main view routes (Home, State Details, Map)
│   ├── index.html              # HTML shell & PWA configuration
│   └── vite.config.ts          # Vite configuration
├── vercel.json                 # Vercel deployment routing & SPA rewrite
└── package.json                # Root package configuration
```

---

## 📄 License

This project is created for educational, cultural, and exploratory purposes. All heritage media and cultural references celebrate the diversity and history of India.

<div align="center">
Made with ❤️ for Bharat 🇮🇳
</div>
