import { AfterViewInit, Component, ElementRef, viewChild, viewChildren } from '@angular/core';
import { Calculator } from '../../components/calculator/calculator';

@Component({
  selector: 'app-view-element',
  imports: [
    Calculator,
  ],
  templateUrl: './view-element.html',
})
export class ViewElement implements AfterViewInit {
  protected paragraph = viewChild<ElementRef<HTMLParagraphElement>>('paragraph');
  protected calculator = viewChild(Calculator);
  protected calculators = viewChildren(Calculator);

  ngAfterViewInit(): void {
    console.log(this.paragraph());
    console.log(this.calculator());
    console.log(this.calculators());
  }
}
