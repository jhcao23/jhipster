import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiTrackerComponent } from './tracker.component';
import { JhiTrackerService, Principal } from '../../shared';

export const trackerRoute: Route = {
<<<<<<< HEAD
    path: 'jhi-tracker',
    component: JhiTrackerComponent,
    data: {
        pageTitle: 'Real-time user activities'
    }
=======
  path: 'jhi-tracker',
  component: JhiTrackerComponent,
  data: {
    pageTitle: 'Real-time user activities'
  }
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
};
