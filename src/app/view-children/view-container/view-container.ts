import { Component } from '@angular/core';
import { ViewContent } from '../view-content/view-content';

@Component({
  selector: 'app-view-container',
  imports: [
    ViewContent,
  ],
  templateUrl: './view-container.html',
})
export class ViewContainer {

}
