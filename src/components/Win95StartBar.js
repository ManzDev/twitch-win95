import "./Win95StartButton.js";
import "./Win95StateBar.js";
import "./Win95DateBar.js";

class Win95StartBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: flex;
        background: #C3C3C3;
        width: 100%;
        height: 28px;
        border-top: 1px solid #fff;
        box-shadow: 0 -1px 0 #c3c3c3;
      }

      win95-date-bar {
        margin-left: auto;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${Win95StartBar.styles}</style>
    <win95-start-button></win95-start-button>
    <win95-state-bar name="Welcome"></win95-state-bar>
    <win95-state-bar icon="minesweeper" name="Minesweeper"></win95-state-bar>
    <win95-date-bar></win95-date-bar>
    `;
  }
}

customElements.define("win95-start-bar", Win95StartBar);
