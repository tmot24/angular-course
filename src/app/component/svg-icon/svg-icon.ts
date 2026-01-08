import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  imports: [],
  templateUrl: './svg-icon.html',
  styleUrl: './svg-icon.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIcon {
  icon = input.required<string>();
  height = input<number>(16);
  width = input<number>(16);
  href = computed(() => `images/${this.icon()}.svg#${this.icon()}`);
}
