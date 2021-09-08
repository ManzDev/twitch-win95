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
        margin: 6px 2px;
      }

      .icon-container, .icon {
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
        border: 1px solid transparent;
      }

      :host([selected]) .icon {
        filter: brightness(0.4);
      }

      :host([selected]) .icon-container {
        position: relative;
      }

      :host([selected]) .icon-container::after {
        content: "";
        display: block;
        background: #000082;
        inset: 0;
        position: absolute;
        mix-blend-mode: exclusion;
      }

      :host([selected]) .name {
        background: #000082;
        color: #fff;
        border: 1px dotted #828282;
      }
    `;
  }

  unselect() {
    this.removeAttribute("selected");
  }

  select(data) {
    if (!data.ctrlKey) {
      const event = new CustomEvent("unselect-all", { composed: true });
      this.dispatchEvent(event);
    }
    this.setAttribute("selected", true);
  }

  connectedCallback() {
    this.name = this.getAttribute("name") ?? "my-computer";
    this.render();
    this.addEventListener("click", (ev) => this.select({ ctrlKey: ev.ctrlKey }));
  }

  render() {
    const imagePath = `icons/32x32/${this.name}.png`;
    const text = this.name.replace(/-/g, " ");
    this.shadowRoot.innerHTML = /* html */`
    <style>${Win95Icon.styles}</style>
    <div class="icon-container">
      <img class="icon" src="${imagePath}" alt="${text}">
    </div>
    <div class="name">${text}</div>`;
  }
}

customElements.define("win95-icon", Win95Icon);
