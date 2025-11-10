# 🟣 `<y-circle-button>` Component

## Overview

`<y-circle-button>` is a **custom Web Component** used to create circular navigation buttons with full accessibility and responsive behavior.  
It’s built with pure JavaScript (no Shadow DOM, no CSS inside) so you can style it entirely from external stylesheets.

Typical use: main menu buttons on the home page.

---

## Attributes

| Attribute | Type | Required | Description |
|------------|------|-----------|--------------|
| `href` | `string` | ✅ | Destination URL. Acts as a standard link. |
| `label` | `string` | ✅ (recommended) | Accessible name for screen readers (`aria-label`). |

---

## Slots

You can place **any visible content** inside the component.  
This slot can contain an SVG icon, text, or both.

### Example

```html

<y-circle-button label="Portfolio" href="/pages/portfolio.html">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 7h18v13H3z M9 3h6v4H9z" />
  </svg>
  <span>Portfolio</span>
</y-circle-button>

```

---

## Behavior

* Internally creates an `<a>` element with `href` and `aria-label`.
* Supports keyboard interaction: `Tab`, `Enter`, and `Space`.
* Fully responsive (size controlled by external CSS).
* No internal styles; all visuals are defined in `styles/components/y-circle-button.css`.

---

## Accessibility (a11y)

| Feature            | Description                                                   |
| ------------------ | ------------------------------------------------------------- |
| **Keyboard**       | Focusable and clickable via `Enter` or `Space`.               |
| **Screen readers** | Uses the `label` attribute as `aria-label`.                   |
| **Focus styles**   | Define in external CSS with `:focus-visible`.                 |
| **Reduced motion** | You can add `@media (prefers-reduced-motion)` in your styles. |

---

## Styling Example

External CSS file: `styles/components/y-circle-button.css`

```css
y-circle-button > a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  inline-size: clamp(3rem, 12vw, 6rem);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: var(--btn-bg, hsl(338 84% 55%));
  color: var(--btn-fg, white);
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;
}

y-circle-button > a:hover,
y-circle-button > a:focus-visible {
  background: var(--btn-bg-hover, hsl(338 84% 45%));
  transform: scale(1.05);
}

y-circle-button svg {
  inline-size: 45%;
  block-size: auto;
  fill: currentColor;
}

y-circle-button span {
  margin-block-start: 0.3em;
  font-size: clamp(0.7rem, 2vw, 1rem);
}
```

---

## Usage Examples

### Basic

```html
<y-circle-button label="About" href="/pages/about.html"></y-circle-button>
```

### Icon + Text

```html
<y-circle-button label="Tutorials" href="/pages/tutorials.html">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 5h16v14H4z" />
  </svg>
  <span>Tutorials</span>
</y-circle-button>
```

### Icon Only

```html
<y-circle-button label="Skills" href="/pages/skills.html">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l2 7h-4z" />
  </svg>
</y-circle-button>
```

---

## Integration Example

Place multiple buttons inside a semantic `<menu>` element:

```html
<aside>
  <menu>
    <y-circle-button label="About" href="/pages/about.html"></y-circle-button>
    <y-circle-button label="Portfolio" href="/pages/portfolio.html"></y-circle-button>
    <y-circle-button label="Tutorials" href="/pages/tutorials.html"></y-circle-button>
    <y-circle-button label="Skills" href="/pages/skills.html"></y-circle-button>
  </menu>
</aside>
```

---

## File Reference

| File                                     | Purpose         |
| ---------------------------------------- | --------------- |
| `/components/y-circle-button.js`         | Component logic |
| `/styles/components/y-circle-button.css` | Visual design   |
| `/docs/components/y-circle-button.md`    | Documentation   |

---

## Changelog

| Version | Date        | Description                                 |
| ------- | ----------- | ------------------------------------------- |
| `1.0.0` | 2025-11-10  | Initial component version                   |
| `1.1.0` | *(planned)* | Add i18n support and icon slot improvements |

```

