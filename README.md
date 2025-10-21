# MAHE Innovation Centre - Landing Page# MAHE Innovation Centre - Landing Page



A modern, production-ready landing page built for the MAHE Innovation Centre showcasing advanced web animations and accessibility features.A modern, accessible, and production-ready landing page showcasing the MAHE Innovation Centre's mission to foster innovation and entrepreneurship.



[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)



## 🌐 Live Demo## 🌐 Live Demo



**[View Live Site →](https://maheinnovation.vercel.app)****[View Live Site →](https://maheinnovation.vercel.app)**



> **Note:** Currently populated with placeholder content. Real data from MAHE Innovation Centre will be integrated upon project approval.---



---## 🎯 Overview



## 🎯 What This Project IsA fully functional, production-ready website demonstrating modern web development best practices with advanced animations, comprehensive accessibility features, and optimized performance



This is a fully functional landing page designed to showcase the MAHE Innovation Centre's mission and programs. The site demonstrates modern web development techniques including:---



- Advanced canvas animations using GSAP## ✨ Key Features

- Smooth scroll-linked animations with Framer Motion

- Full accessibility compliance (WCAG 2.1 AA)### Interactive Hero Section

- Responsive design across all devices- Canvas-based crowd animation using GSAP with 105 animated sprites

- Production-ready deployment on Vercel- Dynamic character walking animations with parallax depth

- Fully responsive design adapting to all screen sizes

---

### Scroll-Linked Animations

## 🛠️ Technical Implementation- Framer Motion scroll-reveal effects for seamless content transitions

- 3D perspective transforms on interactive elements

### Stack- Smooth scrolling experience powered by Lenis

- **React 19** with TypeScript for type-safe component development

- **Vite 7** for fast builds and hot module replacement### Content Sections

- **Tailwind CSS 3** for utility-first styling- **About MIC**: Comprehensive overview with statistics and feature highlights

- **shadcn/ui** for accessible UI components built on Radix UI- **Events & Initiatives**: Dynamic showcase of upcoming events and ongoing programs

- **GSAP** for canvas-based crowd animation (105 animated sprites)- **Testimonials**: Infinite marquee carousel with real community feedback

- **Framer Motion** for scroll-reveal effects and transitions- **Contact Form**: Fully accessible form with proper ARIA implementation

- **Lenis** for smooth scrolling experience

### Navigation Experience

### Key Features Built- Fixed vertical navigation with scroll-based active state tracking

- Smooth scroll-to-section functionality

**1. Interactive Hero Section**- Mobile-responsive hamburger menu

- Canvas animation with GSAP displaying walking crowd silhouettes

- Demonstrates parallax depth and character animation loops---

- Fully responsive with performance optimization

## 🛠️ Tech Stack

**2. Scroll-Linked Animations**

- Framer Motion `useScroll` and `useTransform` hooks| Category | Technology |

- Text reveals synchronized with scroll position|----------|------------|

- 3D perspective transforms on tech stack icons| **Framework** | React 19 |

| **Build Tool** | Vite 7 |

**3. Dynamic Content Sections**| **Language** | TypeScript 5.9 |

- About section with feature cards and statistics| **Styling** | Tailwind CSS 3 |

- Events showcase with email subscription form| **UI Components** | shadcn/ui + Radix UI |

- Infinite marquee testimonials carousel| **Animations** | GSAP (canvas), Framer Motion (scroll) |

- Contact form with proper ARIA labels and keyboard navigation| **Smooth Scroll** | Lenis |

| **Linting** | ESLint 9 |

**4. Smart Navigation**

- Fixed vertical navigation with scroll-based active state---

- Automatic section detection as user scrolls

- Smooth scroll-to-section on click## � Getting Started



---### Prerequisites

- Node.js 18 or higher

## 🚀 Setup & Development- npm 9 or higher



```bash### Installation

# Clone repository

git clone https://github.com/EngineerAditya/innovationcell-website.git1. **Clone the repository**

cd innovationcell-website   ```bash

   git clone https://github.com/EngineerAditya/innovationcell-website.git

# Install dependencies   cd innovationcell-website

npm install   ```



# Start dev server2. **Install dependencies**

npm run dev   ```bash

   npm install

# Build for production   ```

npm run build

3. **Start development server**

# Preview production build   ```bash

npm run preview   npm run dev

```   ```

   

---   Open [http://localhost:5173](http://localhost:5173) in your browser.



## 📁 Project Structure4. **Build for production**

   ```bash

```   npm run build

src/   ```

├── components/   

│   ├── CrowdHero.tsx         # GSAP canvas hero animation   Production files will be in the `dist/` directory.

│   ├── ScrollAnimations.tsx  # Framer Motion scroll effects

│   ├── AboutMIC.tsx          # About section with features5. **Preview production build**

│   ├── EventsInitiatives.tsx # Events with subscription form   ```bash

│   ├── TestimonialsSection.tsx # Infinite marquee carousel   npm run preview

│   ├── Navbar.tsx            # Scroll-tracking navigation   ```

│   └── Contact2.tsx          # Accessible contact form

├── data/---

│   └── testimonials.ts       # Centralized testimonial data

└── App.tsx                   # Main component composition## 📁 Project Structure

```

```

---innovationcell-website/

├── public/

## ♿ Accessibility│   ├── images/

│   │   ├── logo.svg              # MIC branding

Built with accessibility as a priority:│   │   ├── peeps/                # Animation sprites

│   │   └── testimonials/         # User avatars

- Semantic HTML structure with proper landmark regions│   └── mac/                      # Tech stack icons

- ARIA attributes for screen reader support├── src/

- Full keyboard navigation (Tab/Shift+Tab/Enter)│   ├── components/

- WCAG AAA compliant color contrast ratios│   │   ├── ui/                   # shadcn UI components

- Focus indicators on all interactive elements│   │   ├── CrowdHero.tsx         # Hero animation

- Proper form labels and associations│   │   ├── ScrollAnimations.tsx  # Scroll effects

│   │   ├── AboutMIC.tsx          # About section

---│   │   ├── EventsInitiatives.tsx # Events section

│   │   ├── TestimonialsSection.tsx # Testimonials

## 🎨 Customization│   │   ├── Navbar.tsx            # Navigation

│   │   ├── Contact2.tsx          # Contact form

Content is easily updatable through centralized data files:│   │   └── LenisSmoothScroll.tsx # Smooth scroll

│   ├── data/

- **Testimonials**: Edit `src/data/testimonials.ts`│   │   └── testimonials.ts       # Testimonial data

- **Hero Content**: Modify `src/components/CrowdHero.tsx`│   ├── lib/

- **About Section**: Update `src/components/AboutMIC.tsx`│   │   └── utils.ts              # Utilities

- **Events**: Change `src/components/EventsInitiatives.tsx`│   ├── App.tsx                   # Main component

- **Branding**: Replace logo at `/public/images/logo.svg`│   ├── main.tsx                  # Entry point

- **Colors**: Adjust CSS variables in `src/index.css`│   └── index.css                 # Global styles

├── components.json               # shadcn config

---├── tailwind.config.js            # Tailwind config

├── vite.config.ts                # Vite config

## 🚀 Deployment└── tsconfig.json                 # TypeScript config

```

Deployed on Vercel with automatic deployments from the main branch. Any push to `main` triggers a new production build.

---

**Live URL:** [maheinnovation.vercel.app](https://maheinnovation.vercel.app)

## ♿ Accessibility Features

---

Comprehensive accessibility implementation ensuring an inclusive user experience:

## 📄 License

- ✅ **Semantic HTML** - Proper element hierarchy and landmark regions

MIT License - Open source and free to use.- ✅ **ARIA Attributes** - Screen reader optimization with descriptive labels

- ✅ **Keyboard Navigation** - Full site accessibility via keyboard controls

---- ✅ **Focus Management** - Clear visual indicators for focused elements

- ✅ **Color Contrast** - WCAG AAA compliant contrast ratios

## 👤 Developer- ✅ **Form Accessibility** - Proper label associations and error handling

- ✅ **Alt Text** - Descriptive alternatives for all visual content

**Aditya**  - ✅ **Responsive Design** - Optimal experience across all device sizes

GitHub: [@EngineerAditya](https://github.com/EngineerAditya)

---

---

## 🎨 Customization

**Built with React, TypeScript, and modern web technologies**

### Update Testimonials
Edit `src/data/testimonials.ts`:

```typescript
export const testimonialsData = [
  {
    author: {
      name: "Full Name",
      role: "Position, Company",
      avatar: "/images/testimonials/avatar.jpg", // Optional
    },
    text: "Testimonial content here.",
    href: "https://linkedin.com/in/profile", // Optional
  },
];
```

### Modify Content
- **Hero Section**: `src/components/CrowdHero.tsx`
- **About Section**: `src/components/AboutMIC.tsx`
- **Events**: `src/components/EventsInitiatives.tsx`
- **Contact**: `src/App.tsx` (micContact object)

### Update Branding
- **Logo**: Replace `/public/images/logo.svg`
- **Favicon**: Update reference in `index.html`
- **Colors**: Modify CSS variables in `src/index.css`

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder via Netlify web interface
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

---

## � License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/EngineerAditya/innovationcell-website/issues).

---

## 👤 Author

**Aditya**
- GitHub: [@EngineerAditya](https://github.com/EngineerAditya)

---

## 🙏 Acknowledgments

- **MAHE Innovation Centre** for project inspiration
- **shadcn/ui** for the component system
- **GSAP** and **Framer Motion** for animation capabilities
- **Vercel** for deployment infrastructure

---

## � Contact

**MAHE Innovation Centre**  
📞 +91 96948 63033  
📧 contact@mic.mahe.edu

---

**Built with ❤️ for the MAHE Innovation Centre**
