<<<<<<< HEAD
import { Routes } from '@angular/router';
=======
import { Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../shared';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

import {
    activateRoute,
    passwordRoute,
    passwordResetFinishRoute,
    passwordResetInitRoute,
    registerRoute,
    socialRegisterRoute,
    socialAuthRoute,
    settingsRoute
} from './';

<<<<<<< HEAD
const ACCOUNT_ROUTES = [
    activateRoute,
    passwordRoute,
    passwordResetFinishRoute,
    passwordResetInitRoute,
    registerRoute,
    socialAuthRoute,
    socialRegisterRoute,
    settingsRoute
=======
let ACCOUNT_ROUTES = [
   activateRoute,
   passwordRoute,
   passwordResetFinishRoute,
   passwordResetInitRoute,
   registerRoute,
    socialAuthRoute,
   socialRegisterRoute,
   settingsRoute
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
];

export const accountState: Routes = [{
    path: '',
    children: ACCOUNT_ROUTES
}];
