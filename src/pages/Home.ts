import { replaceRoute } from "../router";

const template = `
  <h1>Home</h1>
  <button>go about page</button>
`;

export default class Home extends HTMLElement {
  titleEl: Element;
  buttonEl: HTMLButtonElement;

  constructor() {
    super();

    const appDiv = document.getElementById('app');
    
    appDiv.innerHTML = template;
  }

  connectedCallback() {
    this.titleEl = document.querySelector('h1');
    this.buttonEl = document.querySelector('button');

    this.buttonEl.addEventListener('click', this.handleButtonClicked);
  }

  handleButtonClicked() {
    replaceRoute('/about');
  }
  
}
customElements.define('home-page', Home);