import { AfterViewInit, computed, Directive, OnDestroy, signal } from '@angular/core';

@Directive({
  selector: '[appColor]',
  host: {
    '[style.color]': 'color()',
    '[class]': 'computedClass()',
    '(click)': 'handleClick($event);',
  },
})
export class Color implements AfterViewInit, OnDestroy {
  private intervalId?: number;

  protected handleClick(event: MouseEvent) {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    } else {
      this.changeColor();
    }
  }

  protected changeColor() {
    this.intervalId = setInterval(() => {
      this.color.set(this.getColor());
    }, 1000);
  }

  protected color = signal('orange');
  protected isTrue = signal(true);
  protected computedClass = computed(() => {
    const classes: Record<string, boolean> = {
      'directive': this.isTrue(),
      'primary': this.isTrue(),
    };

    return Object.keys(classes).filter((key) => classes[key]);
  });

  protected getColor () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  ngAfterViewInit(): void {
    this.changeColor();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
