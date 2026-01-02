import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { IRerenderItem } from '../../rerender-types.js';
import { UserService } from '../../../user/user.service.js';

@Component({
  selector: 'app-render-item',
  imports: [],
  templateUrl: './render-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenderItem {
  protected userService = inject(UserService);
  public readonly todoItem = input.required<IRerenderItem>();
  public changeItem = output<IRerenderItem>();

  protected returnBool() {
    console.log('returnBool render');
    return true;
  }

  protected changeInsideText() {
    this.changeItem.emit({
      key: this.todoItem().key,
      text: 'new Text',
    });
  }
}
