# Curestry Color Token System

## Обзор

Централизованная система управления цветами для всего сайта. Все цветовые токены определены в `theme.css` и доступны через CSS переменные.

## Использование

### В HTML/CSS

```css
/* Используйте CSS переменные */
.my-element {
    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border-accent);
}
```

### С Tailwind CSS

```html
<!-- Используйте utility классы или inline styles -->
<div class="bg-primary text-primary">
    Контент
</div>

<!-- Или inline styles с CSS переменными -->
<div style="background-color: var(--color-accent-cyan)">
    Контент
</div>
```

## Цветовые Токены

### Фоновые цвета (Background)
- `--color-bg-primary` - Основной фон (#0a0e1a)
- `--color-bg-secondary` - Вторичный фон (#0f172a)
- `--color-bg-card` - Фон карточек (полупрозрачный)
- `--color-bg-card-solid` - Фон карточек (непрозрачный)
- `--color-bg-overlay` - Фон оверлеев

### Акцентные цвета (Accent)
- `--color-accent-cyan` - Основной акцент (#00d9ff)
- `--color-accent-cyan-light` - Светлый cyan (#22d3ee)
- `--color-accent-cyan-dark` - Темный cyan (#06b6d4)
- `--color-accent-green` - Зеленый (#00ff88)
- `--color-accent-pink` - Розовый (#ff0080)
- `--color-accent-red` - Красный (#ff4d4d)
- `--color-accent-yellow` - Желтый (#ffc800)
- `--color-accent-blue` - Синий (#4361ee)

### Текстовые цвета (Text)
- `--color-text-primary` - Основной текст (#ffffff)
- `--color-text-secondary` - Вторичный текст (#e2e8f0)
- `--color-text-muted` - Приглушенный текст (#94a3b8)
- `--color-text-muted-dark` - Темный приглушенный (#64748b)
- `--color-text-disabled` - Отключенный текст (#475569)

### Границы (Borders)
- `--color-border-primary` - Основные границы
- `--color-border-secondary` - Вторичные границы
- `--color-border-accent` - Акцентные границы
- `--color-border-hover` - Границы при наведении

### Тени (Shadows)
- `--color-shadow-sm` - Малая тень
- `--color-shadow-md` - Средняя тень
- `--color-shadow-lg` - Большая тень
- `--color-shadow-neon` - Неоновое свечение
- `--color-shadow-neon-intense` - Интенсивное свечение

### Семантические цвета (Semantic)
- `--color-success` - Успех (ссылается на green)
- `--color-danger` - Ошибка (ссылается на red)
- `--color-warning` - Предупреждение (ссылается на yellow)
- `--color-info` - Информация (ссылается на cyan)

### Интерактивные элементы (Interactive)
- `--color-link` - Цвет ссылок
- `--color-link-hover` - Цвет ссылок при наведении
- `--color-button-bg` - Фон кнопок
- `--color-button-bg-hover` - Фон кнопок при наведении
- `--color-button-text` - Текст кнопок

## Градиенты

```css
--gradient-primary: linear-gradient(135deg, #00d9ff 0%, #06b6d4 100%);
--gradient-accent: linear-gradient(90deg, #00d9ff, #00ff88, #ff0080);
--gradient-radial: radial-gradient(circle at top right, ...);
--gradient-text: linear-gradient(135deg, #ffffff 0%, #b0c0ff 100%);
```

Использование:
```css
.my-element {
    background: var(--gradient-primary);
}
```

## Spacing Tokens

```css
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 3rem;     /* 48px */
```

## Border Radius Tokens

```css
--radius-sm: 0.375rem;   /* 6px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1.25rem;    /* 20px */
--radius-full: 9999px;   /* Полностью закругленный */
```

## Transition Tokens

```css
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
--transition-all: all 300ms ease;
```

## Z-Index Tokens

```css
--z-index-dropdown: 1000;
--z-index-sticky: 1020;
--z-index-fixed: 1030;
--z-index-modal: 1040;
--z-index-popover: 1050;
--z-index-tooltip: 1060;
```

## Utility Classes

Готовые классы для быстрого использования:

```html
<!-- Фон -->
<div class="bg-primary">...</div>
<div class="bg-secondary">...</div>
<div class="bg-card">...</div>

<!-- Текст -->
<p class="text-primary">...</p>
<p class="text-muted">...</p>
<span class="text-accent-cyan">...</span>

<!-- Границы -->
<div class="border-primary">...</div>
<div class="border-accent">...</div>

<!-- Переходы -->
<button class="transition-fast">...</button>
```

## Изменение темы

Чтобы изменить тему всего сайта, отредактируйте значения в `assets/css/theme.css`:

```css
:root {
    /* Измените значения здесь */
    --color-accent-cyan: #YOUR_NEW_COLOR;
}
```

Изменения применятся ко всем страницам сайта автоматически.

## Будущие темы

Поддержка светлой темы уже заложена:

```html
<html data-theme="light">
```

Переключение темы можно реализовать через JavaScript:

```javascript
document.documentElement.setAttribute('data-theme', 'light');
```

## Совместимость

- ✅ Работает со всеми современными браузерами
- ✅ Совместимо с Tailwind CSS
- ✅ Не конфликтует с существующими стилями
- ✅ Поддерживает каскадирование CSS

## Примеры

### Карточка с акцентом

```css
.feature-card {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border-primary);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    transition: var(--transition-all);
}

.feature-card:hover {
    border-color: var(--color-border-accent);
    box-shadow: 0 0 20px var(--color-shadow-neon);
}
```

### Кнопка с градиентом

```css
.cta-button {
    background: var(--gradient-primary);
    color: var(--color-button-text);
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--radius-md);
    transition: var(--transition-base);
}

.cta-button:hover {
    background: var(--color-accent-cyan-light);
    transform: translateY(-2px);
}
```

### Текст с градиентом

```css
.gradient-text {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

## Поддержка

Если нужно добавить новый цвет или токен, отредактируйте `assets/css/theme.css` и добавьте переменную в секцию `:root`.
