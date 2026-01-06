import { Component, signal } from '@angular/core';
import { myObjects } from './object-list.constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-object-list',
  imports: [
    RouterLink
  ],
  templateUrl: './object-list.html',
})
export class ObjectList {
  protected myObjects = signal(myObjects);
}



