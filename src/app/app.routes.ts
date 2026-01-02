import { Routes } from '@angular/router';
import { Calculator } from './components/calculator/calculator.js';
import { EmptyRoute } from './components/empty-route/empty-route.js';
import { objectRoutes } from './components/object-list/components/object-list/object-list.routes.js';
import { Directive } from './components/directive/directive.js';
import { lifeCycleRoutes } from './life-cycle/life-cycle.routes.js';
import { requestRoutes } from './request/request.routes.js';
import { pipesRoutes } from './pipes/pipes.routes.js';
import { formsRoutes } from './forms/forms.routes.js';
import { viewElementRoutes } from './view-children/view-element.routes.js';
import { userRoutes } from './user/user.routes.js';
import { isLoggedGuard } from './guard/is-logged-guard.js';
import { rerenderRoutes } from './rerender/rerender.routes.js';
import { animationRoutes } from './animation/animation.routes.js';
import { linkSignalCompRoutes } from './link-signal-comp/link-signal-comp.routes.js';
import { someSignalRoutes } from './some-signal/someSignal.routes.js';

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
    title: 'Анимация',
    path: 'animation',
    children: animationRoutes,
  },
  {
    title: 'linkSignal',
    path: 'link-signal-comp',
    children: linkSignalCompRoutes,
  },
  {
    title: 'Some Signal',
    path: 'some-signal',
    children: someSignalRoutes,
  },
  {
    title: '404',
    path: '**',
    component: EmptyRoute,
  },
];
