import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { ActivateComponent } from './activate.component';

export const activateRoute: Route = {
<<<<<<< HEAD
    path: 'activate',
    component: ActivateComponent,
    data: {
        authorities: [],
        pageTitle: 'Activation'
    },
    canActivate: [UserRouteAccessService]
=======
  path: 'activate',
  component: ActivateComponent,
  data: {
    authorities: [],
    pageTitle: 'Activation'
  },
  canActivate: [UserRouteAccessService]
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
};
