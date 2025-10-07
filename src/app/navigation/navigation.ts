import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

const navigationRoutes = [
  { path: '/calculator', lable: 'Калькулятор' },
  { path: '/object-list', lable: 'Лист объектов' },
  { path: '/directive', lable: 'Директива' },
  { path: '/life-cycle', lable: 'Жизненные циклы' },
  { path: '/request', lable: 'Запросы' },
  { path: '/pipes', lable: 'Пайпы' },
  { path: '/forms', lable: 'Формы' },
  { path: '/forms/builder-form', lable: 'builder-form' },
  { path: '/forms/driven', lable: 'driven' },
  { path: '/something', lable: 'Что-то ещё' }
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
