import { Directive, ElementRef, Input, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import { distinctUntilChanged, interval, map, Subject, takeUntil } from 'rxjs';

const COLORS = [ 'red', 'green', 'blue', 'purple', 'pink', 'orange', 'yellow' ];

@Directive({
  selector: '[appColor]'
})
export class Color implements OnDestroy {
  @Input('appColor') colors: string[] = COLORS;

  // private readonly colors = COLORS;
  private readonly destroy$ = new Subject<void>();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private zone: NgZone
  ) {
    // Запускаем поток вне Angular, чтобы не вызывать change detection каждую секунду
    this.zone.runOutsideAngular(() => {
      interval(1000).pipe(
        // каждый тик вычисляем цвет
        map(() => this.pick()),
        // не применять стиль, если цвет не сменился (опционально)
        distinctUntilChanged(),
        // автоматически завершить поток при destroy
        takeUntil(this.destroy$)
      ).subscribe(color => {
        // безопасное изменение DOM через Renderer2
        this.renderer.setStyle(this.el.nativeElement, 'color', color);
      });
    });
  }

  ngOnDestroy(): void {
    // next() — это «сигнал остановиться».
    this.destroy$.next();
    // затем закрываем Subject (хорошая гигиена ресурсов)
    this.destroy$.complete();
  }

  private pick(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
