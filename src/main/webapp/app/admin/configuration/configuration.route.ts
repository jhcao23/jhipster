import { Route } from '@angular/router';

<<<<<<< HEAD
import { JhiConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
    path: 'jhi-configuration',
    component: JhiConfigurationComponent,
    data: {
        pageTitle: 'Configuration'
    }
=======
import { UserRouteAccessService } from '../../shared';
import { JhiConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
  path: 'jhi-configuration',
  component: JhiConfigurationComponent,
  data: {
    pageTitle: 'Configuration'
  }
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
};
