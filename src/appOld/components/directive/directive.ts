import { Component } from '@angular/core';
import { Color } from '../../directive/color/color';

@Component({
  selector: 'app-directive',
  imports: [
    Color
  ],
  templateUrl: './directive.html',
})
export class Directive {

}
