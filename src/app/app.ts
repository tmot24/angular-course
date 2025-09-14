import { Component, signal } from '@angular/core';
import { Calculator } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  imports: [Calculator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Заголовок');
  protected readonly tooltip = signal('Новая подсказка');

  showMessage() {
    alert(this.title());
  }
}
