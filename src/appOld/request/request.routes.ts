import { Routes } from '@angular/router';
import { PostList } from './post-list/post-list';

export const requestRoutes: Routes = [
  {
    path: '',
    component: PostList
  },
  {
    path: ':id',
    // лениво подгружаем страницу элемента
    loadComponent: () => import('./post-item/post-item').then(m => m.PostItem),
  }
];
