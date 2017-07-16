import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { ErrorComponent } from './error.component';

export const errorRoute: Routes = [
<<<<<<< HEAD
    {
        path: 'error',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'Error page!'
        },
    },
    {
        path: 'accessdenied',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'Error page!',
            error403: true
        },
    }
=======
  {
    path: 'error',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'Error page!'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'Error page!'
    },
    canActivate: [UserRouteAccessService]
  }
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
];
