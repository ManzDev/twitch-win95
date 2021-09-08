class Win95StartMenuOption extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .option {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 6px;
      }

      .option:hover {
        background: #000082;
        color: #fff;
      }

      .icon {
        width: 32px;
        height: 32px;
      }

      .text {
        font-family: "Windows";
        font-size: 12.5px;
        letter-spacing: 0.25px;
        text-transform: capitalize;
        margin-left: 6px;
      }

      .arrow {
        font-size: 8px;
        transform: scale(0.8, 1.5);
        margin-left: auto;
      }
    `;
  }

  connectedCallback() {
    this.icon = this.getAttribute("name") ?? "programs";
    this.name = this.getAttribute("name") ?? "Untitled App";
    this.expand = this.hasAttribute("expand");
    this.render();
  }

  render() {
    const icon = this.icon.replaceAll(".", "");
    const name = this.name.replace("-", " ");
    this.shadowRoot.innerHTML = /* html */`
    <style>${Win95StartMenuOption.styles}</style>
    <div class="option">
      <img class="icon" src="icons/32x32/${icon}.png" alt="${name}">
      <div class="text">${name}</div>
      ${this.expand ? /* html */"<span class=\"arrow\">►</span>" : ""}
    </div>
    `;
  }
}

customElements.define("win95-start-menu-option", Win95StartMenuOption);
