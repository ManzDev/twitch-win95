class Win95Icon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        margin: 8px 0;
      }

      .icon {
        width: var(--icon-size, 32px);
        height: var(--icon-size, 32px);
      }

      .name {
        font-family: "W95FA";
        font-size: 12.5px;
        letter-spacing: 0.25px;
        text-transform: capitalize;
        color: #fff;
        padding: 2px 4px;
        text-align: center;
      }

      :host([selected]) .name {
        background: #000082;
        color: #fff;
      }
    `;
  }

  select() {
    this.setAttribute("selected", true);
  }

  connectedCallback() {
    this.name = this.getAttribute("name") ?? "my-computer";
    this.render();
    this.addEventListener("click", () => this.select());
  }

  render() {
    const imagePath = `icons/${this.name}.png`;
    const text = this.name.replace(/-/g, " ");
    this.shadowRoot.innerHTML = /* html */`
    <style>${Win95Icon.styles}</style>
    <img class="icon" src="${imagePath}" alt="${text}">
    <div class="name">${text}</div>`;
  }
}

customElements.define("win95-icon", Win95Icon);
