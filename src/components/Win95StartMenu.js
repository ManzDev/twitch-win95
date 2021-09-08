import "./Win95StartMenuOption.js";

class Win95StartMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        min-width: 166px;
        min-height: 232px;
        background: #C3C3C3;

        border: 1px solid #000;
        border-top-color: #BFC2C2;
        border-left-color: #BFC2C2;
        box-shadow:
          -1px -1px 0 #828282 inset,
          1px 1px 0 #fff inset;
        position: relative;
      }

      .container {
        display: grid;
        grid-template-columns: 20px 1fr;
      }

      .win95-banner {
        background: #828282;
        background-image: url(icons/win95-banner.png);
        background-position: bottom;
        width: 20px;
        left: 2px;
        bottom: 0;
      }

      .menu {
        display: flex;
        flex-direction: column;
      }

      hr {
        margin: 2px;
        margin-left: 0px;
        margin-right: 1px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${Win95StartMenu.styles}</style>
    <div class="container">
      <div class="win95-banner"></div>
      <div class="menu">
        <win95-start-menu-option name="programs" shortcut="P" expand></win95-start-menu-option>
        <win95-start-menu-option name="documents" shortcut="D" expand></win95-start-menu-option>
        <win95-start-menu-option name="settings" shortcut="S" expand></win95-start-menu-option>
        <win95-start-menu-option name="find" shortcut="F" expand></win95-start-menu-option>
        <win95-start-menu-option name="help" shortcut="H"></win95-start-menu-option>
        <win95-start-menu-option name="run..." shortcut="R"></win95-start-menu-option>
        <hr>
        <win95-start-menu-option name="shut-down..." shortcut="u"></win95-start-menu-option>
      </div>
    </div>`;
  }
}

customElements.define("win95-start-menu", Win95StartMenu);
