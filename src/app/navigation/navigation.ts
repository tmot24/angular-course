import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

const navigationRoutes = [
  { path: '/calculator', label: 'Калькулятор' },
  { path: '/object-list', label: 'Лист объектов' },
  { path: '/directive', label: 'Директива' },
  { path: '/life-cycle', label: 'Жизненные циклы' },
  { path: '/request', label: 'Запросы' },
  { path: '/pipes', label: 'Пайпы' },
  { path: '/forms', label: 'Формы' },
  { path: '/forms/builder-form', label: 'builder-form' },
  { path: '/forms/driven', label: 'driven' },
  { path: '/forms/custom-form', label: 'custom-form' },
  { path: '/something', label: 'Что-то ещё' }
];

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navigation.html',
})
export class Navigation {
  protected routes = navigationRoutes;
}
