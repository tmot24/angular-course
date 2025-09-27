import { Routes } from '@angular/router';
import { Calculator } from './components/calculator/calculator';
import { EmptyRoute } from './components/empty-route/empty-route';
import { objectRoutes } from './components/object-list/components/object-list/object-list.routes';

export const routes: Routes = [
  {
    title: 'Калькулятор',
    path: 'calculator',
    component: Calculator
  },
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full'
  },
  {
    path: 'object-list',
    // loadChildren: () => import('./components/object-list/components/object-list/object-list.routes').then(m => m.objectRoutes),
    children: objectRoutes,
  },
  {
    title: '404',
    path: '**',
    component: EmptyRoute
  }
];
