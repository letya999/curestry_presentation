# CLAUDE.md - AI Assistant Guide for Curestry Presentation Repository

**Last Updated**: 2025-01-23
**Repository**: curestry_presentation
**Purpose**: GitHub Pages presentation website for Curestry AgentOps platform

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Repository Structure](#repository-structure)
3. [Technology Stack](#technology-stack)
4. [Development Workflow](#development-workflow)
5. [Code Conventions](#code-conventions)
6. [Key Features](#key-features)
7. [Content Management](#content-management)
8. [Deployment](#deployment)
9. [Common Tasks](#common-tasks)
10. [Important Considerations](#important-considerations)

---

## Project Overview

### What is This Project?

This is a **static presentation website** for **Curestry**, an on-premise AgentOps platform for debugging, monitoring, and optimizing AI agent systems in production.

### Core Purpose

- **Landing Page**: Showcase Curestry's value proposition with animated SVG graphics
- **Three Presentations**: Product overview, B2B sales pitch, and investor deck
- **Lead Generation**: Contact information and interactive elements
- **SEO Optimization**: Structured data, sitemaps, and LLM integration files

### Target Audience

- AI-native startups building agent systems
- FinTech companies requiring on-premise solutions
- Enterprise clients with regulatory compliance needs
- Potential investors and partners

### Business Context

Curestry solves the problem of AI agent failures in production by:
- Reducing Mean Time to Resolution (MTTR) from 4-8 hours to ~1 hour
- Providing Root Cause Analysis (RCA) + AutoFix in one platform
- Offering on-premise deployment with zero external APIs
- Supporting local models (vLLM) for data sovereignty

---

## Repository Structure

```
curestry_presentation/
├── index.html                    # Main landing page with SVG animations
├── presentations/                # Three presentation HTML files
│   ├── product.html             # Product overview (image slides)
│   ├── b2b-sales.html           # B2B sales pitch (image slides)
│   └── investor-pitch.html      # Investor deck (image slides)
├── assets/
│   ├── css/
│   │   └── main.css             # Global styles for presentations
│   ├── js/
│   │   └── main.js              # Navigation and interactions
│   ├── images/                  # Product screenshots
│   │   ├── ab-testing.jpg
│   │   ├── monitoring-dashboard.jpg
│   │   └── rca-diagnostics.jpg
│   ├── pdf/                     # PDF versions of presentations
│   │   ├── curestry-product.pdf
│   │   ├── curestry-b2b-sales.pdf
│   │   └── curestry-investor-pitch.pdf
│   └── slides/                  # Slide images for presentations
│       ├── product/
│       ├── b2b-sales/
│       └── investor-pitch/
├── contexts/
│   └── context_for_prompts.md   # Comprehensive product context (427 lines)
├── llms.txt                     # LLM integration file (102 lines)
├── sitemap.xml                  # SEO sitemap
├── robots.txt                   # Search engine directives
├── favicon.png                  # Site favicon
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions deployment
├── .gitignore                   # Git ignore rules
└── README.md                    # Repository documentation

TOTAL FILES: ~30 files (excluding git internals)
```

### Critical Files

| File | Purpose | Location |
|------|---------|----------|
| `index.html` | Landing page with SVG animations, hero section, contact cards | Root |
| `contexts/context_for_prompts.md` | Complete product/business context for AI assistants | `/contexts/` |
| `llms.txt` | Structured data for LLM consumption | Root |
| `assets/css/main.css` | Global presentation styles | `/assets/css/` |
| `assets/js/main.js` | Presentation navigation logic | `/assets/js/` |
| `.github/workflows/deploy.yml` | Auto-deployment to GitHub Pages | `/.github/workflows/` |

---

## Technology Stack

### Frontend Technologies

- **HTML5**: Semantic markup with Russian language content (`lang="ru"`)
- **CSS**: Custom CSS with responsive design patterns
- **JavaScript**: Vanilla ES6+ (no frameworks)
- **Tailwind CSS**: Via CDN (https://cdn.tailwindcss.com)
  - Configured inline in HTML files
  - Custom theme extension for Inter font family

### Design System

- **Typography**: Inter font family (Google Fonts)
- **Color Palette**:
  - Background: `slate-950` (dark theme)
  - Accent: `cyan-400`, `cyan-500` (primary brand color)
  - Secondary: `blue-400`, `emerald-400` (feature badges)
  - Text: `white`, `slate-300`, `slate-400`
- **Animations**:
  - SVG flow animations (dashed lines)
  - Node pulse effects (glowing)
  - Label fade in/out transitions

### No Build Process

**IMPORTANT**: This project has NO build step:
- No npm/package.json
- No bundler (webpack, vite, etc.)
- No transpilation required
- All dependencies via CDN
- Pure static files served directly

### Hosting & Deployment

- **Platform**: GitHub Pages
- **Domain**: https://curestry.com (custom domain configured)
- **Auto-deployment**: Triggered on push to `main` branch
- **Fallback**: https://[username].github.io/curestry_presentation/

---

## Development Workflow

### Git Branch Strategy

**Main Branch**: `main`
- Production-ready code
- Auto-deploys to GitHub Pages on push
- Protected branch (requires review)

**Feature Branches**: `claude/[session-id]`
- Temporary branches for AI assistant work
- Named pattern: `claude/claude-md-[session-id]`
- Must start with `claude/` and end with matching session ID
- Example: `claude/claude-md-mibjx442o18aceiu-01DGSvzPf2c2sJzZGWZvCr44`

### Git Operations Best Practices

**For Push Operations**:
```bash
# Always use -u flag for initial push
git push -u origin <branch-name>

# Branch MUST start with 'claude/' and end with session ID
# Otherwise push will fail with 403 HTTP code

# Retry logic for network failures (up to 4 times):
# - 1st retry: wait 2s
# - 2nd retry: wait 4s
# - 3rd retry: wait 8s
# - 4th retry: wait 16s
```

**For Fetch/Pull Operations**:
```bash
# Prefer fetching specific branches
git fetch origin <branch-name>

# Same retry logic applies (4 times, exponential backoff)
git pull origin <branch-name>
```

### Commit Message Guidelines

Based on recent commit history:
```
# Pattern: [Action] [Component] to [Purpose]; [Details]

Examples:
✓ "Refactor index.html to enhance SVG animations and layout; update flow and node pulse animations..."
✓ "Add favicon and implement animated SVG nodes in index.html; enhance layout and content..."
✓ "Enhance index.html with improved SVG animations, faster flow effects..."

# Action verbs: Refactor, Add, Enhance, Update, Implement, Fix
# Be descriptive: Focus on "what" and "why"
# Use semicolons to separate multiple changes
```

### Development Process

1. **Local Development**:
   - Edit files directly (no compilation needed)
   - Open `index.html` in browser to preview
   - Use browser DevTools for debugging

2. **Testing**:
   - Manual testing in multiple browsers (Chrome, Firefox, Safari)
   - Responsive design testing (mobile, tablet, desktop)
   - Verify SVG animations render correctly
   - Test presentation navigation (arrow keys, buttons)

3. **Commit & Push**:
   - Stage changes: `git add .`
   - Commit with descriptive message
   - Push to feature branch: `git push -u origin <branch-name>`

4. **Deployment**:
   - Create PR to `main` branch
   - GitHub Actions automatically deploys to GitHub Pages
   - Verify at https://curestry.com

---

## Code Conventions

### HTML Conventions

**Structure**:
- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Always include `lang="ru"` attribute (Russian content)
- Include comprehensive meta tags (SEO, Open Graph, Twitter Cards)
- Add structured data (JSON-LD for Schema.org)

**Tailwind CSS Classes**:
- Use utility-first approach
- Responsive prefixes: `md:`, `lg:` for breakpoints
- Consistent spacing scale: `px-6`, `py-4`, `gap-3`, `mb-8`
- Dark theme default: `bg-slate-950`, `text-white`, `border-white/10`

**SVG Graphics**:
- Inline SVG for animations (not external files)
- Use `viewBox` for responsive scaling
- Define reusable elements in `<defs>`
- Apply CSS classes for animations (`.flow-line`, `.node-pulse`)

**Accessibility**:
- Include `alt` attributes for images
- Use semantic HTML for screen readers
- Ensure sufficient color contrast
- Keyboard navigation support (presentation controls)

### CSS Conventions

**File Organization**:
```css
/* 1. CSS Variables (custom properties) */
:root {
    --bg-dark: #0a0e1a;
    --accent-cyan: #00d9ff;
}

/* 2. Reset and base styles */
*, *::before, *::after { box-sizing: border-box; }

/* 3. Typography */
h1 { font-size: clamp(...); }

/* 4. Components */
.slide { ... }
.card { ... }

/* 5. Utilities */
.grid-2 { display: grid; }

/* 6. Media queries */
@media screen and (max-width: 768px) { ... }

/* 7. Print styles */
@media print { ... }
```

**Naming Patterns**:
- Use kebab-case: `.slide-counter`, `.presentation-nav`
- Component classes: `.card`, `.tag`, `.slide`
- Animation classes: `.flow-line`, `.node-pulse`, `.label-animation`
- Delay variants: `.flow-line-delay-1`, `.node-pulse-delay-2`

**Responsive Design**:
- Mobile-first approach (base styles for mobile)
- Breakpoint: `@media screen and (max-width: 768px)`
- Use `clamp()` for fluid typography
- Grid layouts collapse to single column on mobile

### JavaScript Conventions

**Code Style**:
- Modern ES6+ syntax (const/let, arrow functions, template literals)
- Vanilla JavaScript (no frameworks)
- Event delegation for performance
- Comments for major sections

**Function Organization**:
```javascript
// 1. Utility functions
const updateSlideVisibility = () => { ... };

// 2. Event listeners
document.addEventListener('DOMContentLoaded', () => { ... });

// 3. Initialization
updateSlideVisibility();
```

**Key Patterns**:
- Query DOM elements once, cache references
- Use `querySelectorAll()` + `forEach()` for multiple elements
- Smooth scrolling: `scrollIntoView({ behavior: 'smooth' })`
- Keyboard navigation: `document.addEventListener('keydown', ...)`

---

## Key Features

### 1. Landing Page (`index.html`)

**Hero Section**:
- Full-screen animated SVG background (Banking Support Agent graph)
- LangGraph-style node visualization
- Flowing connections with animated dashed lines
- Pulsing nodes with glow effects
- Russian language headlines and descriptions

**SVG Animation System**:
```css
/* Flow animation: Moving dashed lines */
@keyframes flow {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 20; }
}

/* Node pulse: Glowing effect */
@keyframes node-pulse {
    0%, 100% { opacity: 0.4; filter: drop-shadow(...); }
    50% { opacity: 1; filter: drop-shadow(...); }
}

/* Label fade: Tooltip animations */
@keyframes label-fade {
    0%, 100% { opacity: 0; transform: translateY(4px); }
    20%, 80% { opacity: 1; transform: translateY(0); }
}
```

**Sections**:
1. **Hero**: Value proposition + animated agent graph
2. **Features ("Почему мы")**: 3-column grid of core benefits
3. **Materials ("Материалы")**: Links to presentations with download/share buttons
4. **Contact ("Контакты")**: Interactive cards for Email, WhatsApp, Telegram

**Interactive Elements**:
- Copy-to-clipboard for contact info
- Copy link functionality for presentations
- Hover effects with transitions
- Responsive layout (mobile/tablet/desktop)

### 2. Presentations

**Structure**:
- All three presentations use image-based slides
- Vertical scroll layout (not slideshow navigation)
- Sticky header with back button and PDF download
- Fallback placeholders if images fail to load

**Presentation Files**:
- `product.html`: Product overview (technical details, features, ROI)
- `b2b-sales.html`: Sales pitch (problems, solutions, case studies)
- `investor-pitch.html`: Investor deck (market, traction, financials)

**Navigation**:
- Keyboard controls: Arrow Left/Right
- Button controls: Previous/Next
- Slide counter: "1 / 10"
- Auto-scroll to top on navigation

### 3. Responsive Design

**Breakpoints**:
- **Mobile**: < 768px (single column, smaller text)
- **Desktop**: >= 768px (multi-column grids, larger text)

**Responsive Patterns**:
```html
<!-- Typography -->
<h1 class="text-4xl md:text-7xl">...</h1>
<p class="text-base md:text-lg">...</p>

<!-- Layout -->
<div class="grid grid-cols-1 md:grid-cols-3">...</div>

<!-- Spacing -->
<div class="px-6 py-16">...</div>

<!-- Hide/show elements -->
<span class="hidden md:inline">Desktop text</span>
<span class="md:hidden">Mobile text</span>
```

### 4. SEO & Discoverability

**Meta Tags** (every page):
```html
<meta name="description" content="...">
<meta name="keywords" content="AI agents, debugging, RCA, ...">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:url" content="https://curestry.com/">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="https://curestry.com/">
```

**Structured Data**:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Curestry",
  "url": "https://curestry.com",
  "description": "AgentOps platform for AI agent debugging..."
}
```

**Files**:
- `sitemap.xml`: All page URLs for search engines
- `robots.txt`: Crawler directives (allow all)
- `llms.txt`: Structured info for LLM consumption

---

## Content Management

### Product Information Sources

**Primary Source**: `contexts/context_for_prompts.md`
- 427 lines of comprehensive product/business context
- Structured in 21 numbered sections
- Includes: Product details, team, target audience, pricing, roadmap, competitors, market size
- **Use this file** when updating content to maintain consistency

**LLM Integration**: `llms.txt`
- 102 lines of concise product information
- Structured for LLM consumption
- Covers: Features, problems solved, pricing, tech stack, contact info

### Content Update Process

**To Update Landing Page Content**:
1. Check `contexts/context_for_prompts.md` for accurate information
2. Edit `index.html` directly
3. Maintain Russian language for all user-facing text
4. Keep messaging consistent with product positioning

**To Update Presentations**:
1. Presentations use image slides (not HTML content)
2. Update images in `assets/slides/[presentation-name]/`
3. Name images sequentially: `page_1.jpg`, `page_2.jpg`, etc.
4. Update PDF versions in `assets/pdf/`

**To Add New Content**:
1. Follow existing HTML structure and Tailwind classes
2. Use Russian language (`lang="ru"`)
3. Add SEO meta tags if creating new pages
4. Update `sitemap.xml` with new URLs

### Russian Language Handling

**Character Encoding**:
- Always use UTF-8: `<meta charset="UTF-8">`
- Russian Cyrillic characters render correctly

**Common Russian Terms**:
- "Почему мы" = "Why us"
- "Материалы" = "Materials"
- "Контакты" = "Contacts"
- "Продуктовая презентация" = "Product presentation"
- "Скачать PDF" = "Download PDF"

**Translation Notes**:
- Keep technical terms in English: "RCA", "AutoFix", "On-Premise"
- Use Russian for marketing copy and CTAs
- Contact information can be in English (email addresses, URLs)

---

## Deployment

### GitHub Actions Workflow

**File**: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

**Trigger**: Automatic on push to `main` branch
**Action**: Publishes entire repository root to `gh-pages` branch
**Result**: Live at https://curestry.com (via custom domain)

### Manual Deployment Steps

1. **Merge to Main**:
   ```bash
   git checkout main
   git merge feature-branch
   git push origin main
   ```

2. **GitHub Actions Runs**:
   - Checks out code
   - Publishes to `gh-pages` branch
   - GitHub Pages serves content

3. **Verify Deployment**:
   - Check Actions tab in GitHub
   - Visit https://curestry.com
   - Test all pages and links

### Custom Domain Configuration

**Domain**: curestry.com
**Setup**: Settings → Pages → Custom domain
**DNS**: CNAME record pointing to GitHub Pages
**File**: `CNAME` file in repository root (if exists)

---

## Common Tasks

### Task 1: Update Landing Page Hero Text

**Location**: `index.html:278-283`

```html
<h1 class="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight text-shadow-lg">
    Curestry — Платформа для отладки AI-агентов
</h1>
<p class="text-base md:text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed text-shadow">
    Находи сбои за 10 минут. Исправляй автоматически.
</p>
```

**Steps**:
1. Open `index.html`
2. Find `<h1>` and `<p>` in hero section
3. Update Russian text
4. Maintain Tailwind classes
5. Test responsiveness

### Task 2: Add New Feature Badge

**Location**: `index.html:286-296`

```html
<div class="flex flex-wrap justify-center gap-3">
    <span class="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-sm md:text-base text-cyan-400 font-medium text-shadow">
        On-Premise
    </span>
    <!-- Add new badge here -->
</div>
```

**Steps**:
1. Copy existing `<span>` badge
2. Change color variant (cyan/blue/emerald)
3. Update text content
4. Ensure consistent spacing

### Task 3: Update Contact Information

**Location**: `index.html:466-544`

**Email Card** (line 466):
```html
<span class="font-mono text-slate-300 text-lg flex-1">team@curestry.com</span>
```

**WhatsApp Card** (line 501):
```html
<span class="font-mono text-slate-300 text-lg flex-1">+7 702 777 62 98</span>
<a href="https://wa.me/77027776298" target="_blank">...</a>
```

**Telegram Card** (line 528):
```html
<span class="font-mono text-slate-300 text-lg flex-1">@lauranovat</span>
<a href="https://t.me/lauranovat" target="_blank">...</a>
```

**Steps**:
1. Update display text in `<span>`
2. Update `href` attributes in `<a>` and `<button onclick>`
3. Test copy-to-clipboard functionality

### Task 4: Modify SVG Animation

**Location**: `index.html:162-274`

**To Change Animation Speed**:
```css
/* Line 82: Flow animation */
animation: flow 0.6s linear infinite;  /* Change 0.6s duration */

/* Line 106: Node pulse */
animation: node-pulse 2s ease-in-out infinite;  /* Change 2s duration */
```

**To Add New Node**:
```html
<!-- Copy existing node structure (lines 209-213) -->
<rect x="X" y="Y" width="100" height="70" rx="10"
      fill="url(#nodeGradient)"
      stroke="rgb(34, 211, 238)"
      stroke-width="2"
      class="node-pulse node-pulse-delay-1"
      filter="url(#glow)" />
<text x="X+50" y="Y+30" text-anchor="middle" fill="rgb(34, 211, 238)"
      font-size="13" font-weight="700" font-family="'Inter', monospace">
    Node Name
</text>
```

**To Add Connection**:
```html
<path d="M x1 y1 Q cx cy, x2 y2"
      stroke="rgb(34, 211, 238)"
      stroke-width="2.5"
      fill="none"
      marker-end="url(#arrowhead)"
      class="flow-line flow-line-delay-1" />
```

### Task 5: Add New Presentation

**Steps**:
1. Create presentation HTML file in `presentations/`
2. Copy structure from existing presentation
3. Update title, meta tags, and header
4. Add slide images to `assets/slides/[name]/`
5. Create PDF version in `assets/pdf/`
6. Add card to landing page "Материалы" section

**Template**:
```html
<!-- In index.html:350-456, add new card -->
<article class="h-full flex flex-col bg-slate-900/50 border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all">
    <div class="flex-1 flex flex-col p-6">
        <div class="flex-1">
            <h3 class="text-xl md:text-2xl font-bold text-white mb-3 text-shadow">
                [Presentation Title]
            </h3>
            <p class="text-sm md:text-base text-slate-400 leading-relaxed text-shadow">
                [Description]
            </p>
        </div>
        <div class="flex items-center gap-2 mt-auto pt-4">
            <!-- Web, PDF, Link buttons -->
        </div>
    </div>
</article>
```

### Task 6: Update Pricing Information

**Primary Source**: `contexts/context_for_prompts.md:339-355`

**Display Locations**:
- Landing page (if needed)
- Presentations (image-based, update source files)
- `llms.txt` (lines 38-48)

**Current Tiers**:
- Freemium: $0 (10K traces/month)
- Growth: $99 (50K traces/month)
- Pro: $299 (500K traces/month)
- Enterprise Cloud: $999+
- Enterprise On-Prem: $2-5K

### Task 7: Improve SEO

**Update Meta Tags**:
```html
<title>Curestry | [Specific Page Title]</title>
<meta name="description" content="[Compelling description with keywords]">
<meta name="keywords" content="AI agents, debugging, RCA, observability, ...">
```

**Update Structured Data**:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Curestry",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

**Update Sitemap** (`sitemap.xml`):
```xml
<url>
    <loc>https://curestry.com/new-page.html</loc>
    <lastmod>2025-01-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
```

---

## Important Considerations

### 1. Russian Language Content

**Primary Language**: Russian (ru)
- All user-facing text should be in Russian
- Technical terms can remain in English
- Meta descriptions should be in Russian
- Alt text should be in Russian

**Character Encoding**:
- Always UTF-8
- Test Cyrillic rendering in all browsers
- Ensure font supports Cyrillic characters (Inter does)

### 2. On-Premise Focus

**Key Messaging**:
- "On-Premise" is a primary differentiator
- Emphasize data sovereignty and security
- "Zero external APIs" is critical for target audience
- Local models support (vLLM)

**Target Industries**:
- FinTech (Bereke Bank, Kaspi, Freedom Holding)
- Regulated industries requiring data control
- Government agencies (Kazakhstan market)

### 3. No Build Process

**Direct Editing**:
- All changes are immediate (no compilation)
- Test by opening HTML files in browser
- No package manager or dependencies to install

**CDN Dependencies**:
- Tailwind CSS: https://cdn.tailwindcss.com
- Google Fonts: https://fonts.googleapis.com
- If CDN fails, site styling will break
- Consider self-hosting for production stability

### 4. Performance Optimization

**Current Issues**:
- Large SVG animations may impact performance on low-end devices
- Inline CSS increases HTML file size
- No image optimization or lazy loading

**Recommendations**:
- Optimize SVG animations (reduce nodes if needed)
- Consider lazy loading for presentation images
- Compress images before upload
- Minify CSS/JS for production (optional)

### 5. Accessibility (A11y)

**Current State**:
- Semantic HTML structure
- Keyboard navigation for presentations
- Alt text for images (with fallbacks)

**Improvements Needed**:
- ARIA labels for interactive elements
- Focus indicators for keyboard users
- Color contrast verification (WCAG AA)
- Screen reader testing

### 6. Security Considerations

**Current Setup**:
- Static site (no server-side code)
- All content public (GitHub Pages)
- No authentication or user data collection

**Best Practices**:
- Keep dependencies updated (Tailwind CDN version)
- Validate all external links
- No sensitive information in repository
- Use HTTPS (enforced by GitHub Pages)

### 7. Browser Compatibility

**Target Browsers**:
- Chrome/Edge (Chromium-based)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

**Known Issues**:
- SVG animations may perform differently across browsers
- Tailwind CDN config runs client-side (slight delay on load)
- Clipboard API requires HTTPS (works on GitHub Pages)

### 8. Content Consistency

**Source of Truth**: `contexts/context_for_prompts.md`
- 427 lines of comprehensive product information
- Update this file first when product changes
- Then propagate changes to HTML files and presentations

**Consistency Checks**:
- Pricing across all pages
- Feature descriptions
- Contact information
- Testimonials and case studies (when added)

### 9. Git Workflow Constraints

**Branch Naming**:
- MUST start with `claude/` for AI assistant work
- MUST end with matching session ID
- Otherwise, push will fail with 403 error

**Push Restrictions**:
- Use `-u` flag for initial push
- Implement retry logic for network failures
- Max 4 retries with exponential backoff (2s, 4s, 8s, 16s)

**Commit Best Practices**:
- Descriptive messages following existing pattern
- Reference file names changed
- Explain "what" and "why"

### 10. AI Assistant Guidelines

**When Updating Content**:
1. Read `contexts/context_for_prompts.md` first for accurate info
2. Maintain Russian language for user-facing text
3. Keep existing Tailwind class patterns
4. Test changes manually (no automated tests exist)

**When Adding Features**:
1. Follow vanilla JavaScript patterns (no frameworks)
2. Use Tailwind utility classes (no custom CSS unless necessary)
3. Ensure mobile responsiveness
4. Update this CLAUDE.md if significant changes

**When Debugging**:
1. Check browser console for JavaScript errors
2. Validate HTML structure
3. Test SVG rendering in multiple browsers
4. Verify responsive design at different breakpoints

**Communication**:
- Always reference file paths with line numbers (e.g., `index.html:278`)
- Explain changes clearly for human review
- Suggest testing steps for verification
- Document any new patterns or conventions

---

## Quick Reference

### File Paths

| Purpose | Path |
|---------|------|
| Landing page | `/index.html` |
| Product presentation | `/presentations/product.html` |
| B2B sales presentation | `/presentations/b2b-sales.html` |
| Investor pitch | `/presentations/investor-pitch.html` |
| Global styles | `/assets/css/main.css` |
| JavaScript utilities | `/assets/js/main.js` |
| Product context | `/contexts/context_for_prompts.md` |
| LLM integration | `/llms.txt` |
| Deployment workflow | `/.github/workflows/deploy.yml` |

### Color Palette

```css
/* Primary */
--bg-dark: #0a0e1a;          /* Background */
--accent-cyan: #00d9ff;      /* Primary brand color */
--text-main: #ffffff;        /* Main text */

/* Tailwind equivalents */
bg-slate-950                 /* Dark background */
text-white                   /* Primary text */
text-slate-300               /* Secondary text */
text-slate-400               /* Muted text */
border-white/10              /* Subtle borders */
bg-cyan-500/20               /* Cyan backgrounds */
text-cyan-400                /* Cyan text */
```

### Animation Classes

| Class | Purpose | Duration |
|-------|---------|----------|
| `.flow-line` | Animated dashed connection | 0.6s |
| `.node-pulse` | Glowing node effect | 2s |
| `.label-animation` | Fading tooltip | 4s |
| `.flow-line-delay-[1-5]` | Staggered flow animation | +0.2s each |
| `.node-pulse-delay-[1-7]` | Staggered pulse effect | +0.4s each |

### Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Default | < 768px | Mobile styles |
| `md:` | >= 768px | Tablet and desktop |

### Key Contacts

| Type | Value | Usage |
|------|-------|-------|
| Email | team@curestry.com | Primary contact |
| WhatsApp | +7 702 777 62 98 | Messaging |
| Telegram | @lauranovat | Direct contact |

### External Resources

| Resource | URL |
|----------|-----|
| Live site | https://curestry.com |
| Product PDF | https://curestry.com/assets/pdf/curestry-product.pdf |
| B2B Sales PDF | https://curestry.com/assets/pdf/curestry-b2b-sales.pdf |
| Investor PDF | https://curestry.com/assets/pdf/curestry-investor-pitch.pdf |

---

## Changelog

**2025-01-23**: Initial CLAUDE.md creation
- Comprehensive documentation of repository structure
- Development workflows and conventions
- Common tasks and troubleshooting
- Russian language handling guidelines
- Git workflow constraints documented

---

## Questions?

For any questions or clarifications about this repository:

1. **Product Information**: Read `contexts/context_for_prompts.md`
2. **Technical Issues**: Check browser console and validate HTML
3. **Deployment Issues**: Review `.github/workflows/deploy.yml` and GitHub Actions logs
4. **Content Updates**: Follow patterns in existing HTML files

**When in doubt**: Ask the human developer for clarification before making significant changes.

---

**End of CLAUDE.md**
