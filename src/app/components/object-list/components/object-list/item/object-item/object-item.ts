import { Component, computed, inject } from '@angular/core';
import { IObject } from '../../object-list.types';
import { ActivatedRoute } from '@angular/router';
import { myObjects } from '../../object-list.constants';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-object-item',
  imports: [],
  templateUrl: './object-item.html',
})
export class ObjectItem {
  private route = inject(ActivatedRoute);

  // превращаем paramMap -> число id в сигнал
  private id = toSignal(
    this.route.paramMap.pipe(map(pm => {
      const id = Number(pm.get('id'));
      return Number.isFinite(id) ? id : NaN;
    })),
    { initialValue: NaN }
  );

  // вычисляем object декларативно — автоматически обновится при смене id
  protected object = computed<IObject | undefined>(() => {
    const id = this.id();
    return Number.isFinite(id) ? myObjects.find(o => o.id === id) : undefined;
  });
}
