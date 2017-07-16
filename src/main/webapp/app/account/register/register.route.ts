import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { RegisterComponent } from './register.component';

export const registerRoute: Route = {
<<<<<<< HEAD
    path: 'register',
    component: RegisterComponent,
    data: {
        authorities: [],
        pageTitle: 'Registration'
    },
    canActivate: [UserRouteAccessService]
=======
  path: 'register',
  component: RegisterComponent,
  data: {
    authorities: [],
    pageTitle: 'Registration'
  },
  canActivate: [UserRouteAccessService]
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
};
