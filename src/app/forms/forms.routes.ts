import { Routes } from '@angular/router';
import { Forms } from './component/forms/forms';

export const formsRoutes: Routes = [
  {
    path: '',
    component: Forms
  },
  // {
  //   path: ':id',
  //   // лениво подгружаем страницу элемента
  //   loadComponent: () => import('./post-item/post-item').then(m => m.PostItem),
  // }
];
