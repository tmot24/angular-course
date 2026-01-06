import { Routes } from '@angular/router';
import { Pipes } from './pipes/pipes.js';

export const pipesRoutes: Routes = [
  {
    path: '',
    component: Pipes
  },
  // {
  //   path: ':id',
  //   // лениво подгружаем страницу элемента
  //   loadComponent: () => import('./post-item/post-item').then(m => m.PostItem),
  // }
];
