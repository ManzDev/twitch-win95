import "./Win95Icon.js";

class Win95IconManager extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: flex;
        height: 100%;
        width: 100%;
      }

      .container {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(6, 1fr);
        grid-auto-flow: column;
        height: calc(480px - 28px);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${Win95IconManager.styles}</style>
    <div class="container">
      <win95-icon name="my-computer"></win95-icon>
      <win95-icon name="network-neighborhood"></win95-icon>
      <win95-icon name="inbox"></win95-icon>
      <win95-icon name="recycle-bin"></win95-icon>
      <win95-icon name="the-microsoft-network"></win95-icon>
      <win95-icon name="my-briefcase"></win95-icon>
    </div>`;
  }
}

customElements.define("win95-icon-manager", Win95IconManager);
