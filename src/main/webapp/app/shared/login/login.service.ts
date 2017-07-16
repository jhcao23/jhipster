import { Injectable } from '@angular/core';

import { Principal } from '../auth/principal.service';
import { AuthServerProvider } from '../auth/auth-jwt.service';
import { JhiTrackerService } from '../tracker/tracker.service';

@Injectable()
export class LoginService {

<<<<<<< HEAD
    constructor(
=======
    constructor (
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        private principal: Principal,
        private trackerService: JhiTrackerService,
        private authServerProvider: AuthServerProvider
    ) {}

<<<<<<< HEAD
    login(credentials, callback?) {
        const cb = callback || function() {};

        return new Promise((resolve, reject) => {
            this.authServerProvider.login(credentials).subscribe((data) => {
                this.principal.identity(true).then((account) => {
=======
    login (credentials, callback?) {
        let cb = callback || function() {};

        return new Promise((resolve, reject) => {
            this.authServerProvider.login(credentials).subscribe(data => {
                this.principal.identity(true).then(account => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                    this.trackerService.sendActivity();
                    resolve(data);
                });
                return cb();
<<<<<<< HEAD
            }, (err) => {
=======
            }, err => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                this.logout();
                reject(err);
                return cb(err);
            });
        });
    }
<<<<<<< HEAD

=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    loginWithToken(jwt, rememberMe) {
        return this.authServerProvider.loginWithToken(jwt, rememberMe);
    }

<<<<<<< HEAD
    logout() {
=======
    logout () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    }
}
