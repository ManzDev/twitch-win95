export class Win95Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .button {
        border: 1px solid #000;
        border-top-color: #fff;
        border-left-color: #fff;
        padding: 1px 5px;
        margin: 2px;
        box-shadow: -1px -1px 0 #828282 inset;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        min-width: 94px;
        height: 20px;
      }

      :host([selected]) .button {
        border: 1px solid #000;
        border-bottom-color: #fff;
        border-right-color: #fff;
        box-shadow:
          1px 1px 0 #828282 inset,
          -1px -1px 0 #DFD8DF inset;
        background:
          conic-gradient(#fff 90deg, #BFB8BF 0 180deg, #fff 0 270deg, #BFB8BF 0 360deg);
        background-position: 0 0;
        background-size: 2px 2px;
        text-shadow: 0.5px 0 0 #000, -0.25px 0 0 #000;
      }

      .icon {
        margin-right: 3px;
      }

      span {
        font-family: "W95FA";
        letter-spacing: 0.5px;
        font-size: 12.5px;
        user-select: none;
      }
    `;
  }

  toggle() {
    this.toggleAttribute("selected");
  }

  connectedCallback() {
    this.icon = this.getAttribute("icon");
    this.text = this.getAttribute("text") ?? "Untitled App";
    this.render();
    this.addEventListener("click", () => this.toggle());
  }

  getIcon() {
    return this.icon ? /* html */`<img class="icon" src="icons/16x16/${this.icon}.png" alt="${this.text}" />` : "";
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${Win95Button.styles}</style>
    <div class="button">
      ${this.getIcon()}
      <span>${this.text}</span>
    </div>`;
  }
}

customElements.define("win95-button", Win95Button);
