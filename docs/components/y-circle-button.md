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
This slot can contain text, an SVG, or even another Web Component like `<y-inline-svg>`.

### Example (basic SVG)

```html
<y-circle-button label="Portfolio" href="/pages/portfolio.html">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 7h18v13H3z M9 3h6v4H9z" />
  </svg>
  <span>Portfolio</span>
</y-circle-button>
```

### Example (with `<y-inline-svg>`)

```html
<y-circle-button label="About" href="/pages/about.html">
  <y-inline-svg src="/assets/icons/user.svg" decorative></y-inline-svg>
  <span>About</span>
</y-circle-button>
```

This combination allows you to **keep the HTML clean** and manage SVG assets as separate files.
The `<y-inline-svg>` component automatically loads and inlines the SVG with full accessibility and responsive scaling.

---

## Behavior

* Internally creates an `<a>` element with `href` and `aria-label`.
* Supports keyboard interaction: `Tab`, `Enter`, and `Space`.
* Fully responsive (size controlled by external CSS).
* No internal styles; all visuals are defined in `styles/components/y-circle-button.css`.
* Compatible with other Web Components, including `<y-inline-svg>`.

---

## Accessibility (a11y)

| Feature            | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| **Keyboard**       | Focusable and clickable via `Enter` or `Space`.                      |
| **Screen readers** | Uses the `label` attribute as `aria-label`.                          |
| **Focus styles**   | Define in external CSS with `:focus-visible`.                        |
| **Reduced motion** | You can add `@media (prefers-reduced-motion)` in your styles.        |
| **SVGs / icons**   | Use `decorative` on `<y-inline-svg>` when the icon is purely visual. |

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

### With `<y-inline-svg>`

```html
<y-circle-button label="Portfolio" href="/pages/portfolio.html">
  <y-inline-svg src="/assets/icons/portfolio.svg" decorative></y-inline-svg>
  <span>Portfolio</span>
</y-circle-button>
```

---

## Integration Example

Place multiple buttons inside a semantic `<menu>` element:

```html
<aside>
  <menu>
    <y-circle-button label="About" href="/pages/about.html">
      <y-inline-svg src="/assets/icons/user.svg" decorative></y-inline-svg>
      <span>About</span>
    </y-circle-button>

    <y-circle-button label="Portfolio" href="/pages/portfolio.html">
      <y-inline-svg src="/assets/icons/portfolio.svg" decorative></y-inline-svg>
      <span>Portfolio</span>
    </y-circle-button>

    <y-circle-button label="Tutorials" href="/pages/tutorials.html">
      <y-inline-svg src="/assets/icons/book.svg" decorative></y-inline-svg>
      <span>Tutorials</span>
    </y-circle-button>

    <y-circle-button label="Skills" href="/pages/skills.html">
      <y-inline-svg src="/assets/icons/star.svg" decorative></y-inline-svg>
      <span>Skills</span>
    </y-circle-button>
  </menu>
</aside>
```

---

## File Reference

| File                                  | Purpose              |
| ------------------------------------- | -------------------- |
| `/components/y-circle-button.js`      | Component logic      |
| `/components/y-inline-svg.js`         | SVG loader component |
| `/docs/components/y-circle-button.md` | Documentation        |

---

## Changelog

| Version | Date       | Description                                                      |
| ------- | ---------- | ---------------------------------------------------------------- |
| `1.0.0` | 2025-11-10 | Initial component version                                        |
| `1.1.0` | 2025-11-11 | Added support and documentation for `<y-inline-svg>` inside slot |




