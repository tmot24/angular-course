import { Routes } from '@angular/router';
import { Calculator } from './components/calculator/calculator';
import { EmptyRoute } from './components/empty-route/empty-route';
import { objectRoutes } from './components/object-list/components/object-list/object-list.routes';
import { Directive } from './components/directive/directive';
import { lifeCycleRoutes } from './life-cycle/life-cycle.routes';
import { requestRoutes } from './request/request.routes';
import { pipesRoutes } from './pipes/pipes.routes';
import { formsRoutes } from './forms/forms.routes';
import { viewElementRoutes } from './view-children/view-element.routes';
import { userRoutes } from './user/user.routes';
import { isLoggedGuard } from './guard/is-logged-guard';
import { rerenderRoutes } from './rerender/rerender.routes';

export const routes: Routes = [
  {
    title: 'Калькулятор',
    path: 'calculator',
    component: Calculator,
  },
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full',
  },
  {
    title: 'Директивы',
    path: 'directive',
    component: Directive,
  },
  {
    title: 'Лист объектов',
    path: 'object-list',
    // loadChildren: () => import('./components/object-list/components/object-list/object-list.routes').then(m => m.objectRoutes),
    children: objectRoutes,
  },
  {
    title: 'Жизненные циклы',
    path: 'life-cycle',
    children: lifeCycleRoutes,
  },
  {
    title: 'Запросы',
    path: 'request',
    children: requestRoutes,
    canActivate: [ isLoggedGuard ],
  },
  {
    title: 'Пайпы',
    path: 'pipes',
    children: pipesRoutes,
  },
  {
    title: 'Формы',
    path: 'forms',
    children: formsRoutes,
  },
  {
    title: 'view-element',
    path: 'view-element',
    children: viewElementRoutes,
  },
  {
    title: 'Пользователь',
    path: 'user',
    children: userRoutes,
    // canDeactivate: [ isLoggedGuard ],
  },
  {
    title: 'Rerender',
    path: 'rerender',
    children: rerenderRoutes,
  },
  {
    title: '404',
    path: '**',
    component: EmptyRoute,
  },
];
