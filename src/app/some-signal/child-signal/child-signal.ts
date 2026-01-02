import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core';

@Component({
  selector: 'app-child-signal',
  imports: [],
  templateUrl: './child-signal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildSignal {
  public parentValue = input.required<number>();
  public valueMultiplier = computed(() => this.parentValue() * 2);

  public changeParentText = output<string>();

  public value = model.required<number>()

  protected increment() {
    this.value.update((prev) => prev + 1)
  }

  public changeParentTextClick() {
    this.changeParentText.emit('Изменён родитель');
  }

}
