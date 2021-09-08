class Win95StartButton extends HTMLElement {
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
        padding: 1px;
        margin: 2px;
        box-shadow: -1px -1px 0 #828282 inset;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 54px;
        height: 20px;
      }

      :host([selected]) .button {
        border: 1px solid #000;
        border-bottom-color: #fff;
        border-right-color: #fff;
        box-shadow:
          1px 1px 0 #828282 inset,
          -1px -1px 0 #DFD8DF inset;
        position: relative;
      }

      :host([selected]) .button::after {
        content: "";
        display: block;
        position: absolute;
        width: 90%;
        height: 65%;
        border: 1px dotted #000;
      }

      .button span {
        font-family: "W95FA";
        text-shadow: 1px 0 0 #000;
        letter-spacing: 1px;
        font-size: 12.5px;
      }
    `;
  }

  select() {
    this.setAttribute("selected", true);
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.addEventListener("click", () => this.select());
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${Win95StartButton.styles}</style>
    <div class="button">
      <img src="logo.png" alt="Windows logo">
      <span>Start</span>
    </div>`;
  }
}

customElements.define("win95-start-button", Win95StartButton);
