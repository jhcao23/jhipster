<<<<<<< HEAD
import { Routes } from '@angular/router';
=======
import { Routes, CanActivate } from '@angular/router';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

import {
    auditsRoute,
    configurationRoute,
    docsRoute,
    healthRoute,
    logsRoute,
    metricsRoute,
    trackerRoute,
    userMgmtRoute,
    userDialogRoute
} from './';

import { UserRouteAccessService } from '../shared';

<<<<<<< HEAD
const ADMIN_ROUTES = [
=======
let ADMIN_ROUTES = [
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    auditsRoute,
    configurationRoute,
    docsRoute,
    healthRoute,
    logsRoute,
    trackerRoute,
    ...userMgmtRoute,
    metricsRoute
];

<<<<<<< HEAD
=======

>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
export const adminState: Routes = [{
    path: '',
    data: {
        authorities: ['ROLE_ADMIN']
    },
    canActivate: [UserRouteAccessService],
    children: ADMIN_ROUTES
},
    ...userDialogRoute
];
