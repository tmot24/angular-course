import { Component } from '@angular/core';
import { Color } from '../../directive/color/color';

@Component({
  selector: 'app-directive',
  imports: [
    Color
  ],
  templateUrl: './directive.html',
  styleUrl: './directive.css'
})
export class Directive {

}
