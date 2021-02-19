import { ImageComponent } from './componets/page/item/image.js';
import { NoteComponent } from './componets/page/item/note.js';
import { TodoComponent } from './componets/page/item/todo.js';
import { VideoComponent } from './componets/page/item/video.js';
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

    const note = new NoteComponent('NoteTitle', 'NoteBody');
    note.attachTo(appRoot, 'beforeend');

    const todo = new TodoComponent('Todo Title', 'Todolist');
    todo.attachTo(appRoot, 'beforeend');

    const video = new VideoComponent(
      'Video Title',
      'https://www.youtube.com/embed/k3o0tvTLVjY'
    );

    video.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);
