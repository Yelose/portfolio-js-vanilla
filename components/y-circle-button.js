// components/y-circle-button.js

// Load the component stylesheet once
(function ensureYCircleButtonStyles() {
  if (!document.querySelector('link[data-y-circle-button]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/components/y-circle-button.css'; // adjust path if needed
    link.dataset.yCircleButton = 'true';
    document.head.append(link);
  }
})();

class YCircleButton extends HTMLElement {
  static get observedAttributes() { return ['label', 'href']; }

  constructor() {
    super();
    this._a = document.createElement('a');
    this._slot = document.createElement('slot');
    this._labelEl = document.createElement('span');
    this._labelEl.className = 'label';

    this._a.append(this._slot, this._labelEl);
    this.append(this._a);
  }

  connectedCallback() { this._render(); }

  attributeChangedCallback() { this._render(); }

  _render() {
    const label = this.getAttribute('label') ?? '';
    const href  = this.getAttribute('href')  ?? '#';
    this._a.setAttribute('href', href);
    this._a.setAttribute('aria-label', label);
    this._labelEl.textContent = label; // visible fallback text
  }
}

customElements.define('y-circle-button', YCircleButton);
