// components/y-circle-button.js
class YCircleButton extends HTMLElement {
    static get observedAttributes() { return ['label', 'href']; }
  
    constructor() {
      super();
      this._a = document.createElement('a');
      // Estructura mínima, sin clases. Tú lo estilizas por selectores (y-circle-button > a, y-circle-button > a > span, etc.)
      this._a.setAttribute('rel', 'bookmark');
      // Icono por slot (opcional)
      this._slot = document.createElement('slot');
      this._labelEl = document.createElement('span'); // visible; puedes ocultarlo en CSS si usas solo icono
  
      this._a.append(this._slot, this._labelEl);
    }
  
    connectedCallback() {
      this.render();
      if (!this.contains(this._a)) this.append(this._a);
      // Accesibilidad de teclado: Space activa el enlace (Enter ya funciona nativo)
      this._a.addEventListener('keydown', (e) => {
        if (e.code === 'Space') { e.preventDefault(); this._a.click(); }
      });
    }
  
    attributeChangedCallback() { this.render(); }
  
    render() {
      const label = this.getAttribute('label') ?? '';
      const href  = this.getAttribute('href')  ?? '#';
      this._a.setAttribute('href', href);
      this._a.setAttribute('aria-label', label);
      this._labelEl.textContent = label;
    }
  }
  
  customElements.define('y-circle-button', YCircleButton);
  