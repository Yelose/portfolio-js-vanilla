# 🟣 `<y-inline-svg>` Component

## Overview

`<y-inline-svg>` is a **custom Web Component** that loads and inlines an external SVG file directly into the DOM.  
It prevents long inline SVG markup from cluttering your HTML, while keeping accessibility, scalability, and SEO benefits.

This component does **not** use Shadow DOM or internal styles, so it inherits styles from your global CSS.

---

## Attributes

| Attribute | Type | Required | Description |
|------------|------|-----------|--------------|
| `src` | `string` | ✅ | The path to the SVG file (relative or absolute). |
| `aria-label` | `string` | ⛔ | Accessible name for screen readers (used when the SVG conveys meaning). |
| `title` | `string` | ⛔ | Optional title element to embed inside the SVG. |
| `desc` | `string` | ⛔ | Optional description element inside the SVG. |
| `decorative` | `boolean` | ⛔ | If present, the SVG is marked `aria-hidden="true"` and ignored by screen readers. |
| `lazy` | `boolean` | ⛔ | Enables lazy loading using `IntersectionObserver`. |

---

## Behavior

- Fetches the SVG file from the given `src` and inlines it as a real `<svg>` element.
- Automatically removes `<script>` tags and unsafe attributes (`on*`).
- Normalizes the SVG for responsive scaling (`width="100%"`, `height="auto"`).
- Uses caching to avoid multiple fetches of the same SVG.
- Provides a fallback `<img>` if loading fails.
- Optionally lazy-loads the SVG when it enters the viewport.

---

## Accessibility (a11y)

| Feature | Description |
|----------|-------------|
| **`aria-label`** | Adds a readable name for assistive technologies. |
| **`title`** and **`desc`** | Automatically inserted into the SVG with unique IDs. |
| **`decorative`** | Marks the SVG as hidden from screen readers. |
| **Keyboard** | Not focusable (it’s an image, not interactive). |

### Examples

#### Decorative (ignored by screen readers)
```html
<y-inline-svg src="/assets/illustrations/hero.svg" decorative></y-inline-svg>
```

#### Informative with accessibility metadata

```html
<y-inline-svg
  src="/assets/illustrations/teaching.svg"
  aria-label="Developer teaching kids to code"
  title="Teaching session"
  desc="A person explaining code to students in front of a big monitor.">
</y-inline-svg>
```

#### Lazy loading

```html
<y-inline-svg src="/assets/illustrations/about.svg" lazy></y-inline-svg>
```

---

## Internal Behavior Summary

1. **Connected** → checks for `lazy` and loads immediately or via IntersectionObserver.
2. **Fetch** → retrieves SVG and caches it.
3. **Parse & sanitize** → removes unsafe tags/attributes.
4. **Normalize** → ensures responsive width and accessibility attributes.
5. **Render** → replaces component content with the parsed `<svg>`.
6. **Fallback** → if fetch fails, replaces with an `<img>` using the same `src`.

---

## File Reference

| File                               | Purpose         |
| ---------------------------------- | --------------- |
| `/components/y-inline-svg.js`      | Component logic |
| `/docs/components/y-inline-svg.md` | Documentation   |

---

## Changelog

| Version | Date       | Description                                                                      |
| ------- | ---------- | -------------------------------------------------------------------------------- |
| `1.0.0` | 2025-11-11 | Initial component version with lazy loading, sanitization, and full a11y support |

```

---

¿Quieres que te haga también la documentación del `y-about-section` en el mismo formato, ahora que vas a pasar a esa parte del proyecto?
```
