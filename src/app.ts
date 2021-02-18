import { ImageComponent } from './componets/page/item/image.js';
import { PageComponents } from './componets/page/page.js';

class App {
  private readonly page: PageComponents;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponents();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'Image Title',
      'https://picsum.photos/600/300'
    );

    image.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);
