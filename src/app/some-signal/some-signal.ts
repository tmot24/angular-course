import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ChildSignal } from './child-signal/child-signal.js';
import { ViewSignal } from './view-signal/view-signal.js';

@Component({
  selector: 'app-some-signal',
  imports: [
    ChildSignal,
    ViewSignal,
  ],
  templateUrl: './some-signal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SomeSignal {
  protected text = signal('Я родитель');
  protected parentValue = signal(10)

  protected changeText(newText: string) {
    this.text.set(newText);
  }
}
