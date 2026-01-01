import { Component, inject, signal } from '@angular/core';
import { IRerenderItem } from './rerender-types.js';
import { RenderItem } from './item/render-item/render-item.js';
import { UserService } from '../user/user.service.js';

@Component({
  selector: 'app-rerender',
  imports: [
    RenderItem,
  ],
  templateUrl: './rerender.html',
})
export class Rerender {
  protected userService = inject(UserService);
  protected todoArr = signal<IRerenderItem[]>([ {
    key: '1',
    text: 'Foo1',
  }, {
    key: '2',
    text: 'Foo2',
  }, {
    key: '3',
    text: 'Foo3',
  } ]);

  protected changeText() {
    this.todoArr.update((currentArray) => currentArray.map((value, index) => {
        if (!index) {
          return {
            ...value,
            text: '123',
          };
        }
        return value;
      }),
    );
  };

  protected changeItem({ key, text }: { key: string, text: string }) {
    this.todoArr.update((prevState) => prevState.map((item) => {
      if (item.key === key) {
        return {
          ...item,
          text,
        };
      }
      return item;
    }));
  }

  protected changeString() {
    this.userService.userName.set('two');
  }
}
