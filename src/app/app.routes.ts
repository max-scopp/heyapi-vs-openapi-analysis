import { Routes } from '@angular/router';
import { HeyApiBasicComponent } from '../cases/hey-api/basic.component';
import { HeyApiComplexComponent } from '../cases/hey-api/complex.component';
import { OpenApiBasicComponent } from '../cases/openapi/basic.component';
import { OpenApiComplexComponent } from '../cases/openapi/complex.component';
import { OpenApiExtendedComponent } from '../cases/openapi/extended.component';
import { OpenApiFutureComponent } from '../cases/openapi/future.component';

export const routes: Routes = [
  {
    path: 'hey-api',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'basic',
      },
      {
        path: 'basic',
        component: HeyApiBasicComponent,
      },
      {
        path: 'complex',
        component: HeyApiComplexComponent,
      },
    ],
  },
  {
    path: 'openapi',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'basic',
      },
      {
        path: 'basic',
        component: OpenApiBasicComponent,
      },
      {
        path: 'extended',
        component: OpenApiExtendedComponent,
      },
      {
        path: 'complex',
        component: OpenApiComplexComponent,
      },
      {
        path: 'future',
        component: OpenApiFutureComponent,
      },
    ],
  },
];
