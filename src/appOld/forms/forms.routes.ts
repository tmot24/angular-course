import { Routes } from '@angular/router';
import { Forms } from './component/forms/forms';
import { BuilderForm } from './component/builder-form/builder-form';
import { Driven } from './component/driven/driven';
import { CustomForm } from './component/custom-form/custom-form';

export const formsRoutes: Routes = [
  {
    path: '',
    component: Forms
  },
  {
    path: 'builder-form',
    component: BuilderForm
  },
  {
    path: 'driven',
    component: Driven
  },
  {
    path: 'custom-form',
    component: CustomForm
  }
];
