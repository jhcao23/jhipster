import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../../shared';
import { PasswordResetInitComponent } from './password-reset-init.component';

export const passwordResetInitRoute: Route = {
<<<<<<< HEAD
    path: 'reset/request',
    component: PasswordResetInitComponent,
    data: {
        authorities: [],
        pageTitle: 'Password'
    },
    canActivate: [UserRouteAccessService]
=======
  path: 'reset/request',
  component: PasswordResetInitComponent,
  data: {
    authorities: [],
    pageTitle: 'Password'
  },
  canActivate: [UserRouteAccessService]
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
};
