import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../../shared';
import { PasswordResetFinishComponent } from './password-reset-finish.component';

export const passwordResetFinishRoute: Route = {
<<<<<<< HEAD
    path: 'reset/finish',
    component: PasswordResetFinishComponent,
    data: {
        authorities: [],
        pageTitle: 'Password'
    },
    canActivate: [UserRouteAccessService]
=======
  path: 'reset/finish',
  component: PasswordResetFinishComponent,
  data: {
    authorities: [],
    pageTitle: 'Password'
  },
  canActivate: [UserRouteAccessService]
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
};
