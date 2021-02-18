import { BaseComponent } from '../component.js';

export class PageComponents extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page">This is PageComponent</ul>');
  }
}
