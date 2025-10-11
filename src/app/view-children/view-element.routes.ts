import { Routes } from '@angular/router';
import { ViewElement } from './view-element/view-element';

export const viewElementRoutes: Routes = [
  {
    path: '',
    component: ViewElement
  },
  // {
    // path: ':id',
    // лениво подгружаем страницу элемента
    // loadComponent: () => import('./post-item/post-item').then(m => m.PostItem),
  // }
];
