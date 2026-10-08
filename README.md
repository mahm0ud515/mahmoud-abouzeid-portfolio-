# Mahmoud Abouzeid — AI & Data Science Portfolio

Production-quality personal portfolio website positioning **Mahmoud Abouzeid** as an **AI & Data Science Engineer** specializing in Healthcare AI, Explainable Machine Learning (SHAP), Computer Vision, and Agentic RAG architectures.

Built with **React**, **TypeScript**, **Vite**, and **Vanilla CSS Design Tokens**.

---

## 🌟 Key Highlights & Verification

- **100% Truthful Data**: Every metric, project, institution, and technology is strictly supported by Mahmoud's verified resume and project artifacts.
- **Headline Research Spotlight**: Dedicated deep dive for **DualRisk-AI** featuring authentic manuscript figures prepared for *Informatics in Medicine Unlocked* (Elsevier), including 0.9173 and 0.9521 external ROC-AUC temporal validation on 8,153 post-pandemic NHANES adults.
- **8 Comprehensive Real Projects**: Includes ARAGbMR (52,250 EGP funding award), Leaf Lab (97.3% accuracy, 87k samples), Medical Ultrasound U-Net Segmentation (0.85 F1), FitLife Pro, Restaurant Chatbot, Sentiment Analysis, and YOLOv5 Detection.
- **Interactive Capabilities**:
  - Live search and filter for verified technical skills.
  - Interactive project detail modal with problem, approach, solution, architecture steps, and contributions.
  - Interactive figure viewer with high-resolution inspection.
  - Dark / Light mode toggle with persistent preference (`localStorage`).
  - One-click verified resume download (`mahmoud-abouzeid-resume.pdf`).
  - Accessible, responsive sticky navigation with mobile drawer.

---

## 🚀 How to Run the Project Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation & Launch
```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in your browser
# http://127.0.0.1:5173/
```

### Production Build
```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Architecture

```
my-resume/
├── public/
│   ├── favicon.svg                           # Custom AI node favicon
│   ├── mahmoud-abouzeid-resume.pdf           # Downloadable PDF resume
│   └── projects/
│       └── dualrisk/                         # Real manuscript figures (Figures 1-4, Architecture)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                        # Sticky header, section tracker, theme toggle, mobile drawer
│   │   ├── Hero.tsx                          # Positioning, headline stats, primary/secondary CTAs
│   │   ├── About.tsx                         # Professional philosophy & 4 specialization pillars
│   │   ├── Skills.tsx                        # Categorized skills with search & verified tags
│   │   ├── DualRiskDeepDive.tsx              # Spotlight on DualRisk-AI clinical research & figures
│   │   ├── Projects.tsx                      # Filterable project catalog
│   │   ├── ProjectModal.tsx                  # Deep-dive interactive modal with architecture breakdown
│   │   ├── Experience.tsx                    # Freelance AI/ML developer timeline
│   │   ├── Education.tsx                     # B.Sc. in AI & Data Science (AASTMT) & ITI 60-hr Track
│   │   ├── Contact.tsx                       # Verified contacts, copy buttons, direct email composer
│   │   ├── Footer.tsx                        # Minimal footer with navigation & resume link
│   │   └── Icons.tsx                         # Vector icons for GitHub and LinkedIn
│   ├── data/
│   │   ├── profile.ts                        # Bio, contacts, statistics, specialization summaries
│   │   ├── skills.ts                         # Grouped skill sets
│   │   ├── projects.ts                       # All 8 projects with problem/approach/solution/metrics
│   │   ├── experience.ts                     # Work history details
│   │   ├── education.ts                      # Degree & certification details
│   │   └── achievements.ts                   # Grants, evaluation scores, manuscript records
│   ├── styles/
│   │   └── index.css                         # CSS tokens, dark/light themes, typography, cards
│   ├── types/
│   │   └── index.ts                          # TypeScript interfaces
│   ├── App.tsx                               # Application root & theme state
│   └── main.tsx                              # Application entry point
├── Mahmoud Abouzeid resume_v1.pdf            # Original resume source file
├── package.json
└── vite.config.ts
```

---

## 🛠️ How to Update Content

The project uses clean, decoupled data files in `src/data/`. You never need to touch layout JSX to update information:

1. **Update Personal Info / Links**:
   - Edit [src/data/profile.ts](file:///c:/Users/Mahmoud/Desktop/My%20resume/src/data/profile.ts).
   - Change your title, email, phone, location, LinkedIn, or GitHub URLs.

2. **Add or Edit Projects**:
   - Edit [src/data/projects.ts](file:///c:/Users/Mahmoud/Desktop/My%20resume/src/data/projects.ts).
   - Add new project objects following the `Project` interface. Define the category (`Healthcare AI`, `Agentic & RAG`, `Mobile & On-Device AI`, `Computer Vision`, or `NLP & Analytics`), problem, approach, solution, metrics, and architecture steps.

3. **Add or Edit Skills**:
   - Edit [src/data/skills.ts](file:///c:/Users/Mahmoud/Desktop/My%20resume/src/data/skills.ts).
   - Add skill items under the appropriate category or create a new group.

4. **Update Experience or Education**:
   - Edit [src/data/experience.ts](file:///c:/Users/Mahmoud/Desktop/My%20resume/src/data/experience.ts) and [src/data/education.ts](file:///c:/Users/Mahmoud/Desktop/My%20resume/src/data/education.ts).

5. **Update the Resume PDF**:
   - Replace `public/mahmoud-abouzeid-resume.pdf` with your new PDF using the exact same file name.

6. **Add Project Images / Figures**:
   - Place images in `public/projects/<project-name>/` and reference them using relative paths like `/projects/<project-name>/image.png`.

---

## 🌐 Deployment Options

The project builds standard static HTML/JS/CSS into the `dist/` folder:

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add `"deploy": "gh-pages -d dist"` to `scripts` in `package.json`
3. Set `base: '/<repository-name>/'` in `vite.config.ts` if deploying under a project subdirectory
4. Run: `npm run build && npm run deploy`
