import { Route } from '@angular/router';

<<<<<<< HEAD
import { JhiDocsComponent } from './docs.component';

export const docsRoute: Route = {
    path: 'docs',
    component: JhiDocsComponent,
    data: {
        pageTitle: 'API'
    }
=======
import { UserRouteAccessService } from '../../shared';
import { JhiDocsComponent } from './docs.component';

export const docsRoute: Route = {
  path: 'docs',
  component: JhiDocsComponent,
  data: {
    pageTitle: 'API'
  }
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
};
