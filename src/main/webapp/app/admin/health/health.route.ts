import { Route } from '@angular/router';

<<<<<<< HEAD
import { JhiHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
    path: 'jhi-health',
    component: JhiHealthCheckComponent,
    data: {
        pageTitle: 'Health Checks'
    }
=======
import { UserRouteAccessService } from '../../shared';
import { JhiHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
  path: 'jhi-health',
  component: JhiHealthCheckComponent,
  data: {
    pageTitle: 'Health Checks'
  }
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
};
