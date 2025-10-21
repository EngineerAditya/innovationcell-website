# MAHE Innovation Centre - Landing Page

[](https://react.dev/)
[](https://www.typescriptlang.org/)
[](https://vitejs.dev/)
[](https://tailwindcss.com/)

A high-performance, production-ready landing page for the MAHE Innovation Centre, built to showcase modern web animation techniques, a clean component architecture, and first-class accessibility.

### **[View Live Demo →](https://maheinnovation.vercel.app)**

## 🎯 About This Project

This project is a modern, single-page application built from the ground up. It serves as a technical showcase for complex, performance-optimized frontend development. The primary goal was to integrate multiple advanced animation libraries (GSAP and Framer Motion) with a smooth-scroll engine (Lenis) to create a fluid, engaging user experience, all while adhering to strict accessibility (WCAG) standards.

-----

## ✨ Key Features

  * **High-Performance Canvas Animation:** A hero section featuring a 105-sprite crowd simulation built with **GSAP**, optimized to run smoothly on all devices.
  * **Dynamic Scroll Interactions:** Immersive scroll-reveal effects and 3D perspective transforms powered by **Framer Motion**, synchronized perfectly with a **Lenis** smooth-scroll container.
  * **First-Class Accessibility:** Full WCAG 2.1 AA compliance. The site is 100% keyboard-navigable, screen-reader-friendly (with proper ARIA implementation), and uses accessible-first components from **shadcn/ui**.
  * **Fully Responsive Design:** A mobile-first, utility-driven layout built with **Tailwind CSS** that looks and functions beautifully on all screen sizes.
  * **Modern Tech Stack:** Built with **React 19** and **Vite 7**, ensuring a fast, type-safe development experience with **TypeScript**.

-----

## 🛠️ Tech Stack

| Category | Technology |
|:---|:---|
| **Framework** | **React 19** |
| **Language** | **TypeScript 5.9** |
| **Build Tool** | **Vite 7** |
| **Styling** | **Tailwind CSS 3** |
| **UI Components** | **shadcn/ui** (on Radix UI) |
| **Canvas Animation** | **GSAP** |
| **Scroll Animation** | **Framer Motion** |
| **Smooth Scroll** | **Lenis** |

-----

## 🚀 Getting Started

### Prerequisites

  * Node.js 18.x or higher
  * `npm` 9.x or higher

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/EngineerAditya/innovationcell-website.git
    cd innovationcell-website
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The site will be available at `http://localhost:5173`.

### Production Build

```bash
# Creates an optimized production build in the /dist folder
npm run build

# Previews the local production build
npm run preview
```

-----

## 📂 Project Structure

A clean, component-based architecture was used to ensure scalability and maintainability.

```
innovationcell-website/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── peeps/           # Animation sprites
│   │   └── testimonials/    # User avatars
│   └── mac/                 # Tech stack icons
├── src/
│   ├── components/
│   │   ├── ui/                # shadcn UI components
│   │   ├── CrowdHero.tsx        # Hero animation (GSAP)
│   │   ├── ScrollAnimations.tsx # Scroll effects (Framer Motion)
│   │   ├── AboutMIC.tsx         # About section
│   │   ├── EventsInitiatives.tsx  # Events section
│   │   ├── TestimonialsSection.tsx  # Testimonials
│   │   ├── Navbar.tsx           # Navigation
│   │   └── Contact2.tsx         # Contact form
│   ├── data/
│   │   └── testimonials.ts      # Centralized testimonial data
│   ├── lib/
│   │   └── utils.ts           # shadcn utilities
│   ├── App.tsx                # Main component tree
│   ├── main.tsx               # App entry point
│   └── index.css              # Global styles & Tailwind layers
├── components.json            # shadcn config
├── tailwind.config.js         # Tailwind config
├── vite.config.ts             # Vite config
└── tsconfig.json              # TypeScript config
```

-----

## 📄 License

This project is open source and available under the **MIT License**.

-----

## 👤 Author

**Aditya**

  * **GitHub:** [@EngineerAditya](https://github.com/EngineerAditya)
