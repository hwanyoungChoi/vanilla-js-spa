const template = `
  <h1>About</h1>
  <button>go home page</button>
`;

export default class About extends HTMLElement {
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
  }
  
}
customElements.define('about-page', About);