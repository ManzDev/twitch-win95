import "./Win95IconManager.js";
import "./Win95StartBar.js";
import "./Win95BSODScreen.js";
import "./Win95StartMenu.js";

class Win95Desktop extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --desktop-background-color: #008282;
      }

      .wallpaper {
        background: var(--desktop-background-color);
        width: var(--resolution-width, 640px);
        height: var(--resolution-height, 480px);
        position: relative;
        cursor: default
      }

      win95-start-bar {
        position: absolute;
        bottom: 0;
      }

      win95-start-menu {
        position: absolute;
        bottom: 30px;
      }
    `;
  }

  enableBSOD() {
    this.shadowRoot.querySelector(".wallpaper").innerHTML = /* html */`
      <win95-bsod-screen></win95-bsod-screen>
    `;
  }

  connectedCallback() {
    this.render();
    // this.shadowRoot.querySelector("win95-start-bar").addEventListener("click", () => this.enableBSOD());
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${Win95Desktop.styles}</style>
    <div class="wallpaper">
      <win95-icon-manager></win95-icon-manager>
      <win95-start-menu></win95-start-menu>
      <win95-start-bar></win95-start-bar>
    </div>`;
  }
}

customElements.define("win95-desktop", Win95Desktop);
