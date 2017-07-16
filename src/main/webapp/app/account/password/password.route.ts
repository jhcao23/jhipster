import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PasswordComponent } from './password.component';

export const passwordRoute: Route = {
<<<<<<< HEAD
    path: 'password',
    component: PasswordComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Password'
    },
    canActivate: [UserRouteAccessService]
=======
  path: 'password',
  component: PasswordComponent,
  data: {
    authorities: ['ROLE_USER'],
    pageTitle: 'Password'
  },
  canActivate: [UserRouteAccessService]
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
};
