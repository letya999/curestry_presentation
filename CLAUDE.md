# CLAUDE.md - Curestry Presentation Website

**Updated**: 2025-01-23
**Purpose**: GitHub Pages сайт для Curestry AgentOps платформы (русский язык)

---

## Проект

**Что**: Статический презентационный сайт для Curestry — on-premise платформа для отладки AI-агентов
**Аудитория**: AI-стартапы, финтех, инвесторы (Казахстан/СНГ)
**Язык**: Русский (ru) для пользователей, английский для технических терминов

---

## Структура

```
curestry_presentation/
├── index.html                      # Главная страница с SVG анимациями
├── presentations/                  # 3 презентации (вертикальная прокрутка изображений)
│   ├── product.html               # Продуктовая
│   ├── b2b-sales.html             # B2B продажи
│   └── investor-pitch.html        # Инвесторская
├── assets/
│   ├── css/main.css               # Стили презентаций
│   ├── js/main.js                 # Навигация и интеракции
│   ├── images/                    # Скриншоты продукта
│   ├── pdf/                       # PDF версии презентаций
│   └── slides/                    # Изображения слайдов
├── contexts/
│   └── context_for_prompts.md     # ⭐ ПОЛНЫЙ контекст продукта (427 строк)
├── llms.txt                       # Данные для LLM (102 строки)
├── sitemap.xml, robots.txt        # SEO
└── .github/workflows/deploy.yml   # Auto-deploy на GitHub Pages
```

**Критичные файлы**:
- `contexts/context_for_prompts.md` — источник правды для всего контента
- `index.html` — лендинг с анимированным графом агентов
- `llms.txt` — структурированная инфа для AI

---

## Технологии

**Frontend**: HTML5 + CSS3 + Vanilla JS (ES6+)
**Styling**: Tailwind CSS (CDN: https://cdn.tailwindcss.com)
**Шрифты**: Inter (Google Fonts)
**Build**: ❌ НЕТ (no npm, no bundler, pure static files)
**Deploy**: GitHub Pages → https://curestry.com (auto on push to `main`)

**Цвета**:
- Background: `slate-950` (#0f172a)
- Accent: `cyan-400/500` (#22d3ee / #06b6d4)
- Text: `white`, `slate-300/400`

---

## Git Workflow

**Основная ветка**: `main` (production, auto-deploy)

**Feature ветки**: `claude/[session-id]`
- ОБЯЗАТЕЛЬНО начинается с `claude/` и заканчивается session ID
- Пример: `claude/claude-md-mibjx442o18aceiu-01DGSvzPf2c2sJzZGWZvCr44`
- Иначе push вернёт 403

**Push**:
```bash
git push -u origin claude/[session-id]
# Retry до 4 раз при network errors (2s, 4s, 8s, 16s backoff)
```

**Commits**:
```
Pattern: [Action] [Component] to [Purpose]; [Details]
Example: "Add comprehensive CLAUDE.md documentation; includes structure, workflows, conventions"
Verbs: Add, Update, Refactor, Enhance, Fix
```

---

## Код

### HTML
- Семантика: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- `lang="ru"` всегда
- Meta tags: description, keywords, Open Graph, Twitter Cards
- Structured data: JSON-LD Schema.org
- Tailwind classes: `text-4xl md:text-7xl`, `px-6 py-16`, `grid grid-cols-1 md:grid-cols-3`

### CSS
- Переменные: `:root { --bg-dark: #0a0e1a; }`
- Naming: kebab-case (`.slide-counter`, `.flow-line`)
- Breakpoint: `@media screen and (max-width: 768px)`
- Animations: `@keyframes flow`, `@keyframes node-pulse`

### JavaScript
- ES6+: `const/let`, arrow functions, template literals
- Vanilla (no frameworks)
- Event delegation
- DOM caching
- Smooth scroll: `scrollIntoView({ behavior: 'smooth' })`

---

## Ключевые фичи

**Landing (index.html)**:
1. **Hero**: SVG граф Banking Support Agent с анимацией (flowing lines, pulsing nodes)
2. **Почему мы**: 3 карточки (RCA+AutoFix, On-Premise, Dev-First)
3. **Материалы**: Ссылки на 3 презентации (Web/PDF/Copy link)
4. **Контакты**: Email, WhatsApp, Telegram (copy-to-clipboard)

**Презентации**:
- Вертикальная прокрутка изображений
- Sticky header (назад, скачать PDF)
- Fallback placeholders при ошибке загрузки

**SVG анимации**:
```css
.flow-line { animation: flow 0.6s linear infinite; }
.node-pulse { animation: node-pulse 2s ease-in-out infinite; }
.label-animation { animation: label-fade 4s ease-in-out infinite; }
```

---

## Контент

**Источник правды**: `contexts/context_for_prompts.md` (427 строк)
- Продукт, команда, ЦА, цены, roadmap, конкуренты, рынок
- ВСЕГДА читать перед изменением контента

**Обновить лендинг**:
1. Читаем `contexts/context_for_prompts.md`
2. Редактируем `index.html`
3. Сохраняем русский язык
4. Тестируем в браузере

**Обновить презентации**:
1. Заменить изображения в `assets/slides/[name]/` (page_1.jpg, page_2.jpg...)
2. Обновить PDF в `assets/pdf/`

**Русский язык**:
- UTF-8: `<meta charset="UTF-8">`
- Термины: "Почему мы", "Материалы", "Контакты"
- Технические слова оставлять на английском: RCA, AutoFix, On-Premise

---

## Deploy

**Auto**: Push to `main` → GitHub Actions → GitHub Pages → https://curestry.com

**Manual**:
```bash
git checkout main
git merge feature-branch
git push origin main
# Check: GitHub Actions tab → verify curestry.com
```

---

## Частые задачи

**Hero текст**: `index.html:278-283`
**Бейджи**: `index.html:286-296`
**Контакты**: `index.html:466-544` (Email, WhatsApp, Telegram)
**Анимации**: `index.html:82, 106` (`.flow-line`, `.node-pulse`)
**Новая презентация**: Copy structure from `presentations/product.html` + add slides to `assets/slides/[name]/`

---

## Важно

**🇷🇺 Русский язык**:
- Весь пользовательский текст на русском
- Технические термины на английском (RCA, AutoFix, vLLM)

**🏢 On-Premise фокус**:
- Главный дифференциатор
- Zero external APIs
- Data sovereignty для финтеха

**⚡ No Build Process**:
- Прямое редактирование HTML/CSS/JS
- Открыть в браузере для теста
- Никаких npm/webpack/vite

**📱 Responsive**:
- Breakpoint: 768px
- Mobile-first (< 768px base styles)
- Tailwind: `md:` prefix для desktop

**🎨 Контент источники**:
- `contexts/context_for_prompts.md` — primary source of truth
- `llms.txt` — краткая версия для AI

---

## Quick Reference

**Файлы**: `index.html` (лендинг), `contexts/context_for_prompts.md` (контекст), `assets/css/main.css`, `assets/js/main.js`
**Контакты**: team@curestry.com, +7 702 777 62 98 (WhatsApp), @lauranovat (Telegram)
**Сайт**: https://curestry.com
**Pricing**: $0 (Freemium, 10K), $99 (Growth, 50K), $299 (Pro, 500K), $2-5K (On-Prem)

---

## Workflow для AI ассистента

1. **Читать контекст**: `contexts/context_for_prompts.md` перед изменениями
2. **Сохранять русский**: Весь UI текст на русском
3. **Следовать паттернам**: Tailwind classes, naming conventions
4. **Тестировать локально**: Открыть HTML в браузере
5. **Коммитить описательно**: Pattern "Action Component to Purpose"
6. **Пушить на правильную ветку**: `claude/[session-id]`

**При сомнениях**: спросить у пользователя

---

**End of CLAUDE.md**
