class Win95DateBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: flex;
      }
      .speaker {
        width: 16px;
        height: 16px;
      }
      .date-container {
        font-family: "W95FA";
        font-size: 12.5px;
        border: 1px inset #fff;
        width: 64px;
        height: 20px;
        margin: 3px;
        padding: 0 6px;
        padding-left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .date {
        padding-left: 6px;
      }
    `;
  }

  updateDate() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const mode = hours < 12 ? "AM" : "PM";
    this.dateDiv.textContent = `${hours > 12 ? hours - 12 : hours}:${minutes} ${mode}`;
  }

  connectedCallback() {
    this.render();
    this.updateDate();
    setInterval(() => this.updateDate(), 1000);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${Win95DateBar.styles}</style>
    <div class="date-container">
      <img class="speaker" src="icons/16x16/speaker.png">
      <span class="date"></span>
    </div>`;
    this.dateDiv = this.shadowRoot.querySelector(".date");
  }
}

customElements.define("win95-date-bar", Win95DateBar);
