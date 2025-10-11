import { AfterViewInit, Component, contentChild, contentChildren } from '@angular/core';

@Component({
  selector: 'app-view-content',
  imports: [],
  templateUrl: './view-content.html',
})
export class ViewContent implements AfterViewInit {
  protected child = contentChild<HTMLDivElement>('viewContentChild');
  protected children = contentChildren<HTMLDivElement>('viewContentChildren');

  ngAfterViewInit(): void {
    console.log(this.child());
    console.log(this.children());
  }
}
