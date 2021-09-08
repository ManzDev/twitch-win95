class Win95BSODScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: #0000CD;
        font-family: "IBM Plex Mono";
        font-weight: bold;
        font-size: 14px;
        cursor: none;
      }

      .title {
        display: inline-flex;
        background: #CDCCC8;
        color: #0000CD;
        padding: 4px 12px;
      }

      .message {
        color: #CDCCC8;
        margin: 0 2em;
      }

      .options {
        margin: 2em 0;
      }

      ul {
        list-style: none;
      }

      .center {
        text-align: center;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${Win95BSODScreen.styles}</style>
    <div class="title">Windows se tensó</div>
    <div class="message">
      <p>A fatal exception 0E has occurred at 0028:C0026822 in VXD VFAT(01) +
        0000798E. The current application will be terminated.</p>

      <div class="options">
        <ul>
          <li>* Press any key to terminate the current application.</li>
          <li>* Press CTRL+ALT+DEL again to restart your computer. You will lose any unsaved information in all applications.</li>
        </ul>
      </div>

      <p class="center">Press any key to continue.</p>
    </div>
    `;
  }
}

customElements.define("win95-bsod-screen", Win95BSODScreen);
