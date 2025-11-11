// components/y-inline-svg.js
(() => {
    const cache = new Map(); // src -> Promise<string>
  
    class YInlineSVG extends HTMLElement {
      static get observedAttributes() {
        return ['src', 'aria-label', 'decorative', 'title', 'desc', 'lazy'];
      }
  
      constructor() {
        super();
        this._loaded = false;
        this._io = null;
      }
  
      connectedCallback() {
        if (this.hasAttribute('lazy')) {
          this._observe();
        } else {
          this._load();
        }
      }
  
      disconnectedCallback() {
        if (this._io) this._io.disconnect();
      }
  
      attributeChangedCallback(name, _old, _new) {
        if (!this.isConnected) return;
        if (name === 'src') {
          this._loaded = false;
          this._load(true);
        } else if (['aria-label', 'decorative', 'title', 'desc'].includes(name)) {
          const svg = this.querySelector('svg');
          if (svg) this._applyA11y(svg);
        }
      }
  
      _observe() {
        if (this._io) this._io.disconnect();
        this._io = new IntersectionObserver((entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              this._io.disconnect();
              this._io = null;
              this._load();
              break;
            }
          }
        }, { rootMargin: '200px' });
        this._io.observe(this);
      }
  
      async _load(force = false) {
        const src = this.getAttribute('src');
        if (!src || (this._loaded && !force)) return;
  
        try {
          const svgText = await this._fetchSVG(src);
          const svgEl = this._parseSVG(svgText);
          if (!svgEl) throw new Error('Invalid SVG');
  
          this._sanitize(svgEl);
          this._normalize(svgEl);
          this._applyA11y(svgEl);
  
          this.replaceChildren(svgEl);
          this._loaded = true;
        } catch (err) {
          const alt = this.getAttribute('aria-label') || '';
          const img = document.createElement('img');
          img.src = src || '';
          img.alt = alt || '';
          img.style.width = '100%';
          this.replaceChildren(img);
          this._loaded = true;
        }
      }
  
      _fetchSVG(src) {
        if (!cache.has(src)) {
          cache.set(src, fetch(src, { mode: 'cors' }).then(r => {
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            return r.text();
          }));
        }
        return cache.get(src);
      }
  
      _parseSVG(text) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'image/svg+xml');
        return doc.querySelector('svg');
      }
  
      _sanitize(svg) {
        svg.querySelectorAll('script, iframe').forEach(n => n.remove());
        svg.querySelectorAll('*').forEach(n => {
          [...n.attributes].forEach(a => {
            if (/^on/i.test(a.name)) n.removeAttribute(a.name);
          });
        });
      }
  
      _normalize(svg) {
        // 🔹 Asegura escalado fluido
        svg.removeAttribute('width');
        svg.removeAttribute('height');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', 'auto');
        svg.style.width = '100%';
        svg.style.height = 'auto';
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  
        if (!this.hasAttribute('decorative')) {
          svg.setAttribute('role', 'img');
        }
      }
  
      _applyA11y(svg) {
        const decorative = this.hasAttribute('decorative');
        const label = this.getAttribute('aria-label') || '';
        const titleText = this.getAttribute('title') || '';
        const descText = this.getAttribute('desc') || '';
  
        svg.removeAttribute('aria-labelledby');
        svg.removeAttribute('aria-describedby');
        svg.removeAttribute('aria-label');
        svg.querySelectorAll('title, desc').forEach(n => n.remove());
  
        if (decorative) {
          svg.setAttribute('aria-hidden', 'true');
          svg.removeAttribute('role');
          return;
        } else {
          svg.removeAttribute('aria-hidden');
          svg.setAttribute('role', 'img');
        }
  
        const ids = [];
        if (titleText) {
          const t = document.createElementNS('http://www.w3.org/2000/svg', 'title');
          const tid = `t-${crypto.randomUUID?.() || Math.random().toString(36).slice(2)}`;
          t.id = tid;
          t.textContent = titleText;
          svg.prepend(t);
          ids.push(tid);
        }
        if (descText) {
          const d = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
          const did = `d-${crypto.randomUUID?.() || Math.random().toString(36).slice(2)}`;
          d.id = did;
          d.textContent = descText;
          svg.insertBefore(d, svg.firstChild?.nextSibling || null);
          svg.setAttribute('aria-describedby', did);
        }
        if (label) {
          svg.setAttribute('aria-label', label);
        } else if (ids.length) {
          svg.setAttribute('aria-labelledby', ids.join(' '));
        }
      }
    }
  
    customElements.define('y-inline-svg', YInlineSVG);
  })();
  