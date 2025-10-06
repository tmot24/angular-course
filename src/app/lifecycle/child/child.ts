import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
  WritableSignal
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, OnChanges {
  /*  @Input() title?: string;
    @Output() eventChange = new EventEmitter<string>();

    protected temptTitle = signal<string | undefined>(undefined);

    ngOnInit(): void {
      this.temptTitle.set(this.title);
    }

    protected clickHandler() {
      this.temptTitle.set('Мутация');
      this.eventChange.emit(this.temptTitle());
    }*/

  @Input() title?: WritableSignal<string>;

  protected temptTitle = signal<string | undefined>(undefined);

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('каждый раз, когда меняются input параметры у компонента или директивы, changes', changes);
  }

  ngOnInit(): void {
    console.log('init');
    this.temptTitle.set(this.title?.());
  }

  ngDoCheck(): void {
    console.log('каждый раз при любом изменении');
  }

  ngAfterContentInit(): void {
    console.log('contentInit');
  }

  ngAfterContentChecked(): void {
    console.log('каждый раз при изменении html');
  }

  ngAfterViewInit(): void {
    console.log('после того как вся вёрстка будет отрисована');
  }

  ngOnDestroy(): void {
    console.log('до уничтожения');
  }

  protected clickHandler() {
    this.temptTitle.set('Мутация');
    const title = this.temptTitle();
    if (title) {
      this.title?.set(title);
    }
  }
}
