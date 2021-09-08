import "./Win95Icon.js";

class Win95IconManager extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.appList = ["my-computer", "network-neighborhood", "inbox", "recycle-bin", "the-microsoft-network", "my-briefcase", "internet-explorer"];
  }

  static get styles() {
    return /* css */`
      :host {
        display: flex;
        height: 100%;
        width: 100%;
      }

      .container {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(6, 1fr);
        grid-auto-flow: column;
        height: calc(480px - 28px);
      }
    `;
  }

  unselectAll() {
    console.log("unselectAll");
    const icons = this.shadowRoot.querySelectorAll("win95-icon");
    icons.forEach((icon) => {
      icon.unselect();
    });
  }

  updateAppList() {
    const container = this.shadowRoot.querySelector(".container");
    this.appList.forEach((name) => {
      const icon = document.createElement("win95-icon");
      icon.setAttribute("name", name);
      container.appendChild(icon);
    });
  }

  connectedCallback() {
    this.render();
    this.updateAppList();
    this.addEventListener("unselect-all", this.unselectAll);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${Win95IconManager.styles}</style>
    <div class="container"></div>`;
  }
}

customElements.define("win95-icon-manager", Win95IconManager);
