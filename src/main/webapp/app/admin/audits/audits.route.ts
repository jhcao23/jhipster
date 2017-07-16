import { Route } from '@angular/router';

<<<<<<< HEAD
import { AuditsComponent } from './audits.component';

export const auditsRoute: Route = {
    path: 'audits',
    component: AuditsComponent,
    data: {
        pageTitle: 'Audits'
    }
=======
import { UserRouteAccessService } from '../../shared';
import { AuditsComponent } from './audits.component';

export const auditsRoute: Route = {
  path: 'audits',
  component: AuditsComponent,
  data: {
    pageTitle: 'Audits'
  }
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
};
