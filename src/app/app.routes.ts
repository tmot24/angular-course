import { Routes } from '@angular/router';
import { LoginPage } from './page/login-page/login-page.js';
import { SearchPage } from './page/search-page/search-page.js';
import { ProfilePage } from './page/profile-page/profile-page.js';
import { Layout } from './component/layout/layout.js';
import { accessGuard } from './guard/access-guard.js';

export const routes: Routes = [
  {
    title: 'Вход',
    path: 'login',
    component: LoginPage,
  },
  {
    title: 'TIK-TALK',
    path: '',
    component: Layout,
    canActivate: [accessGuard],
    children: [
      {
        title: 'Поиск',
        path: 'search',
        component: SearchPage,
      },
      {
        title: 'Профиль',
        path: 'profile',
        component: ProfilePage,
      },
    ],
  },

];
