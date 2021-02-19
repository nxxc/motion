import { Component } from './components/component';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponents } from './components/page/page.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponents();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'Image Title',
      'https://picsum.photos/600/300'
    );
    this.page.addChild(image);

    const note = new NoteComponent('NoteTitle', 'NoteBody');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo Title', 'Todolist');
    this.page.addChild(todo);

    const video = new VideoComponent(
      'Video Title',
      'https://www.youtube.com/embed/k3o0tvTLVjY'
    );
    this.page.addChild(video);
  }
}

new App(document.querySelector('.document')! as HTMLElement);
