import { Component, signal } from '@angular/core';
import { Navigation } from './navigation/navigation.js';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ Navigation, RouterOutlet ],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Заголовок');
  protected readonly tooltip = signal('Новая подсказка');

  showMessage() {
    alert(this.title());
  }
}
