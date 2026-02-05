# Marco Bruno - Anti-Gravity Portfolio

A high-performance "Deep Space" portfolio website built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## 🚀 Overview

- **Tech Stack**: Next.js 16 (App Router), TypeScript, Tailwind CSS, Framer Motion.
- **Visuals**: Particles background, 3D tilt effects, Glassmorphism, Orbital physics visualizer.
- **Performance**: Optimized for speed, responsive design, and best practices.

## 🛠️ Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment

This project is optimized for deployment on **Vercel**.

1.  Push this repository to GitHub/GitLab/Bitbucket.
2.  Import the project in Vercel.
3.  Vercel will detect Next.js automatically.
4.  Click **Deploy**.

### Build Command

```bash
npm run build
```

The build command compiles the application for production usage.

## 📂 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components (Hero, ProjectGrid, Visualizer, etc.).
- `data/`: Content data (portfolio.ts).
- `lib/`: Utility functions.
- `public/`: Static assets (images, fonts).

## ✨ Key Features

- **Project Grid**: Responsive, filterable interactive grid in `components/ProjectCarousel.tsx`.
- **Space Particles**: Canvas-based star field in `components/SpaceParticles.tsx`.
- **System Visualizer**: Animated SVG network in `components/AutomationVisualizer.tsx`.
