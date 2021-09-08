class Win95StateBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {

      }
    `;
  }

  connectedCallback() {
    // this.iconEnabled =
    this.name = this.getAttribute("name") ?? "Default App";
    this.render();
  }

  render() {
    // const name =
    this.shadowRoot.innerHTML = /* html */`
    <style>${Win95StateBar.styles}</style>
    <img src="">
    <div class="name">${name}</div>`;
  }
}

customElements.define("win95-state-bar", Win95StateBar);
