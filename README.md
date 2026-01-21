# Kanchana Dhana - Interactive Portfolio

A stunning, interactive portfolio website inspired by milli.agency, showcasing frontend and fullstack development skills.

## Features

- 🎨 **Animated Grid Background** - Interactive grid that responds to cursor movement
- 🎬 **Center Media Carousel** - Rotating icons/images showcasing skills
- ✨ **3D Name Reveal** - Dramatic name animation with letter-by-letter reveal
- 📱 **Fully Responsive** - Works beautifully on all devices
- ⚡ **Performance Optimized** - Built with Next.js 14 and modern React patterns

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── Hero/
│       ├── AnimatedGrid.tsx
│       ├── CenterMedia.tsx
│       ├── NameReveal.tsx
│       └── index.tsx
└── public/
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm run build
```

Then deploy to Vercel or your preferred hosting platform.
