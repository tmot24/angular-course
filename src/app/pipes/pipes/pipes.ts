import { Component } from '@angular/core';
import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { CustomPipe } from '../custom-pipe/custom-pipe.js';

@Component({
  selector: 'app-pipes',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    CustomPipe
  ],
  templateUrl: './pipes.html',
})
export class Pipes {
  protected foo = 'foo';
  protected bar = 'BaR';

  protected date = new Date().toDateString();

  protected readonly UpperCasePipe = UpperCasePipe;
}
