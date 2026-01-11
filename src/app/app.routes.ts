import { Routes } from '@angular/router';
import { LoginPage } from './page/login-page/login-page.js';
import { SearchPage } from './page/search-page/search-page.js';
import { ProfilePage } from './page/profile-page/profile-page.js';
import { Layout } from './component/layout/layout.js';
import { accessGuard } from './guard/access-guard.js';
import { SettingsPage } from './page/settings-page/settings-page.js';

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
    canActivate: [ accessGuard ],
    children: [
      {
        path: '',
        redirectTo: '/profile',
        pathMatch: 'full'
      },
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
      {
        title: 'Настройки',
        path: 'settings',
        component: SettingsPage,
      },
    ],
  },

];
