import { AfterContentInit, ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-view-signal',
  imports: [],
  templateUrl: './view-signal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewSignal implements AfterContentInit{
  protected refComp = viewChild.required<ElementRef<HTMLParagraphElement>>('ref');

  ngAfterContentInit() {
    console.log('this.refComp()', this.refComp());
  }
}
