# Curestry Presentation Website

GitHub Pages website for Curestry - AgentOps Platform.

## Project Structure

- `index.html` - Main landing page
- `presentations/` - 3 HTML presentations (product, b2b-sales, investor-pitch)
- `assets/css/main.css` - Global styles
- `assets/js/main.js` - JavaScript utilities
- `assets/pdf/` - PDF versions of presentations
- `sitemap.xml` - SEO sitemap
- `robots.txt` - Robots file for crawlers
- `llms.txt` - LLM integration file

## Setup

1. Clone the repository
2. Push to GitHub
3. Enable GitHub Pages in Settings → Pages
4. Select "Deploy from a branch" and choose `main`
5. Site will be available at `https://username.github.io/curestry_presentation/`

## Custom Domain

1. Go to Settings → Pages
2. Add custom domain (e.g., curestry.com)
3. Update DNS records with GitHub CNAME
4. Update CNAME file in repo

## Exporting Presentations to PDF

1. Open each presentation in browser
2. Press Ctrl+P (or Cmd+P on Mac)
3. Select "Save as PDF"
4. Save to `assets/pdf/`

## SEO Notes

- All pages include proper meta tags and structured data
- Sitemap.xml for search engines
- robots.txt for crawler control
- llms.txt for LLM agent integration
- Semantic HTML5 structure with proper H1/H2/H3 hierarchy

