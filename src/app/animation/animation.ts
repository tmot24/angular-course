import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-animation',
  imports: [],
  templateUrl: './animation.html',
  styleUrl: './animation.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Animation {
  protected isShow = signal(false);
  protected duration = signal(1000);
  protected delay = signal(0);
  protected translateY = signal(20);

  protected toggle() {
    this.isShow.update((prev) => !prev);
  }

  protected animationStart(event: Event) {
    console.log('start', event);
  }

  protected animationStop(event: Event) {
    console.log('stop', event);
  }
}
