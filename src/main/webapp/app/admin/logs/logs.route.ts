import { Route } from '@angular/router';

<<<<<<< HEAD
import { LogsComponent } from './logs.component';

export const logsRoute: Route = {
    path: 'logs',
    component: LogsComponent,
    data: {
        pageTitle: 'Logs'
    }
=======
import { UserRouteAccessService } from '../../shared';
import { LogsComponent } from './logs.component';

export const logsRoute: Route = {
  path: 'logs',
  component: LogsComponent,
  data: {
    pageTitle: 'Logs'
  }
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
};
