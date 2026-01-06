import { Routes } from '@angular/router';
import { ObjectList } from './object-list';

export const objectRoutes: Routes = [
  {
    path: '',
    component: ObjectList
  },
  {
    path: ':id',
    // лениво подгружаем страницу элемента
    loadComponent: () => import('./item/object-item/object-item').then(m => m.ObjectItem)
  }
];
