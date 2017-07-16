import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { SettingsComponent } from './settings.component';

export const settingsRoute: Route = {
<<<<<<< HEAD
    path: 'settings',
    component: SettingsComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Settings'
    },
    canActivate: [UserRouteAccessService]
=======
  path: 'settings',
  component: SettingsComponent,
  data: {
    authorities: ['ROLE_USER'],
    pageTitle: 'Settings'
  },
  canActivate: [UserRouteAccessService]
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
};
