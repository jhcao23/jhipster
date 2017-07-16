import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { HomeComponent } from './';

export const HOME_ROUTE: Route = {
<<<<<<< HEAD
    path: '',
    component: HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'Welcome, Java Hipster!'
    }
=======
  path: '',
  component: HomeComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome, Java Hipster!'
  },
  canActivate: [UserRouteAccessService]
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
};
