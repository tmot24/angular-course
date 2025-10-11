import { Routes } from '@angular/router';
import { ViewElement } from './view-element/view-element';
import { ViewContainer } from './view-container/view-container';

export const viewElementRoutes: Routes = [
  {
    path: '',
    component: ViewElement
  },
  {
    path: 'container',
    component: ViewContainer
  }
];
