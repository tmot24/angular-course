import { Routes } from '@angular/router';
import { Parent } from './parent/parent';

export const lifeCycleRoutes: Routes = [
  {
    path: '',
    component: Parent
  },
  {
    path: ':id',
    // лениво подгружаем страницу элемента
    loadComponent: () => import('./child/child').then(m => m.Child),
  }
];
