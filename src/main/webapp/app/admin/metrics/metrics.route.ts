import { Route } from '@angular/router';

<<<<<<< HEAD
import { JhiMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
    path: 'jhi-metrics',
    component: JhiMetricsMonitoringComponent,
    data: {
        pageTitle: 'Application Metrics'
    }
=======
import { UserRouteAccessService } from '../../shared';
import { JhiMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
  path: 'jhi-metrics',
  component: JhiMetricsMonitoringComponent,
  data: {
    pageTitle: 'Application Metrics'
  }
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
};
