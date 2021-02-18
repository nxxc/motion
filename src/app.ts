import { PageComponents } from './componets/page.js';

class App {
  private readonly page: PageComponents;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponents();
    this.page.attachTo(appRoot);
  }
}

new App(document.querySelector('.document')! as HTMLElement);
