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
        width: 50px;
        height: 20px;
      }

      .button span {
        font-family: "W95FA";
        text-shadow: 1px 0 0 #000;
        letter-spacing: 1px;
        font-size: 12.5px;
      }
    `;
  }

  connectedCallback() {
    this.render();
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
