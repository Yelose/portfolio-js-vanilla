# 🌐 Yelose Portfolio (HTML / CSS / JS Vanilla)

[![Status](https://img.shields.io/badge/status-active-success?style=flat-square)](https://github.com/Yelose/yelose-portfolio-vanilla)
[![Made With](https://img.shields.io/badge/made%20with-HTML%20%7C%20CSS%20%7C%20JS-blue?style=flat-square)](https://developer.mozilla.org/)
[![Deployed on](https://img.shields.io/badge/deployed%20on-GitHub%20Pages-222222?logo=githubpages&style=flat-square)](https://yelose.dev)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](./LICENSE)
[![Issues](https://img.shields.io/github/issues/Yelose/yelose-portfolio-vanilla?style=flat-square)](https://github.com/Yelose/yelose-portfolio-vanilla/issues)

---

**Yelose Portfolio** es un sitio web personal diseñado y desarrollado por **Marina González Suárez** como parte de su proyecto final de *Diseño de Páginas Web (Nivel 2)* y, al mismo tiempo, como su **portfolio profesional real** publicado en [https://yelose.dev](https://yelose.dev).

El proyecto está desarrollado **sin frameworks ni build tools**, utilizando únicamente **HTML, CSS y JavaScript moderno**, con una estructura clara y escalable por carpetas.

---

## 🧱 Estructura del proyecto

/
├─ index.html ← Home
├─ pages/ ← Páginas internas
│ ├─ about.html
│ ├─ portfolio.html
│ ├─ tutorials.html
│ ├─ skills.html
│ └─ legal/
│ ├─ cookies.html
│ ├─ privacy.html
│ └─ legal.html
├─ components/ ← Web Components (prefijo y-)
│ ├─ y-header.js
│ ├─ y-footer.js
│ ├─ y-hero.js
│ └─ y-scircle-button.js
├─ styles/
│ ├─ base.css ← variables, reset, tipografía
│ ├─ layout.css ← grid/flex, responsive
│ ├─ components.css ← estilos comunes
│ └─ pages/ ← CSS específicos por página
├─ scripts/
│ ├─ main.js ← interacciones globales
│ └─ data-loader.js ← carga de JSON opcional
├─ data/ ← contenido estructurado opcional
│ ├─ projects.json
│ └─ posts.json
├─ seo/
│ ├─ robots.txt
│ ├─ sitemap.xml
│ └─ favicons/
└─ docs/ ← notas y documentación adicional


---

## 🧩 Tecnologías utilizadas

- **HTML5 semántico**
- **CSS3 modular** con variables (`--color-primary`, `--font-base`, etc.)
- **JavaScript ES6+** (sin dependencias externas)
- **Custom Elements (Web Components)** con prefijo `y-`
- **Responsive design** (mobile-first)
- **Accesibilidad básica (WCAG AA)**
- **SEO on-page** (meta tags, OG/Twitter, sitemap, robots.txt)

---

## ⚙️ Organización del desarrollo

El desarrollo se gestiona íntegramente desde **GitHub Projects**, utilizando **milestones**, **issues** y **labels** para dividir el trabajo en fases.

### 🗓️ Milestones
| ID | Título | Objetivo |
|----|---------|-----------|
| **001** | Setup base | Estructura inicial, home y estilos globales |
| **002** | Content & Pages | Páginas About, Portfolio, Tutorials, Skills |
| **003** | SEO & Legal | Metadatos, accesibilidad, legales y despliegue |

### 🧾 Issues
Cada milestone agrupa entre **3 y 4 issues** bien definidos, con descripción, checklist y etiquetas.  
Ejemplos:
- `chore: crear repositorio y estructura base`
- `feat(home): maquetar index.html`
- `content(about): crear página About`
- `seo+a11y: metadatos, OG/Twitter y estructura accesible`
- `deploy: GitHub Pages + yelose.dev + validaciones`

---

## 🚀 Despliegue

El sitio se publica mediante **GitHub Pages** con dominio personalizado:

🔗 **https://yelose.dev**

Configuración:
- Branch: `main`
- Directory: `/`
- HTTPS: ✅ activado
- Custom domain: `yelose.dev`

---

## 🧭 Objetivo final

Mostrar experiencia técnica y creatividad visual en desarrollo web moderno sin frameworks, con:

- Estructura clara y escalable  
- Estilo visual coherente y accesible  
- Buenas prácticas de SEO y documentación  
- Control del ciclo completo de desarrollo (**planificación → publicación**)

---

## 👩‍💻 Autor

**Marina González Suárez**  
Frontend & Web Developer — Asturias, España  

📧 [yelose85@gmail.com](mailto:yelose85@gmail.com)  
🌐 [https://yelose.dev](https://yelose.dev)  
🐙 [GitHub @Yelose](https://github.com/Yelose)

---

## 🪪 Licencia

Este proyecto se publica bajo licencia **MIT**.  
El contenido textual y las imágenes son propiedad de Marina González Suárez y no deben reutilizarse sin permiso.

---
