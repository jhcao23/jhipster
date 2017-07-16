import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AccountService } from './account.service';
<<<<<<< HEAD
import { JhiTrackerService } from '../tracker/tracker.service'; // Barrel doesn't work here. No idea why!
=======
import { JhiTrackerService } from '../tracker/tracker.service'; // Barrel doesnt work here. No idea why!
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

@Injectable()
export class Principal {
    private userIdentity: any;
    private authenticated = false;
    private authenticationState = new Subject<any>();

    constructor(
        private account: AccountService,
        private trackerService: JhiTrackerService
    ) {}

<<<<<<< HEAD
    authenticate(identity) {
=======
    authenticate (identity) {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.userIdentity = identity;
        this.authenticated = identity !== null;
        this.authenticationState.next(this.userIdentity);
    }

<<<<<<< HEAD
    hasAnyAuthority(authorities: string[]): Promise<boolean> {
        return Promise.resolve(this.hasAnyAuthorityDirect(authorities));
    }

    hasAnyAuthorityDirect(authorities: string[]): boolean {
        if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
            return false;
=======
    hasAnyAuthority (authorities: string[]): Promise<boolean> {
        if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
            return Promise.resolve(false);
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        }

        for (let i = 0; i < authorities.length; i++) {
            if (this.userIdentity.authorities.indexOf(authorities[i]) !== -1) {
<<<<<<< HEAD
                return true;
            }
        }

        return false;
    }

    hasAuthority(authority: string): Promise<boolean> {
=======
                return Promise.resolve(true);
            }
        }

        return Promise.resolve(false);
    }

    hasAuthority (authority: string): Promise<boolean> {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        if (!this.authenticated) {
           return Promise.resolve(false);
        }

<<<<<<< HEAD
        return this.identity().then((id) => {
=======
        return this.identity().then(id => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            return Promise.resolve(id.authorities && id.authorities.indexOf(authority) !== -1);
        }, () => {
            return Promise.resolve(false);
        });
    }

<<<<<<< HEAD
    identity(force?: boolean): Promise<any> {
=======
    identity (force?: boolean): Promise<any> {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        if (force === true) {
            this.userIdentity = undefined;
        }

        // check and see if we have retrieved the userIdentity data from the server.
        // if we have, reuse it by immediately resolving
        if (this.userIdentity) {
            return Promise.resolve(this.userIdentity);
        }

        // retrieve the userIdentity data from the server, update the identity object, and then resolve.
<<<<<<< HEAD
        return this.account.get().toPromise().then((account) => {
=======
        return this.account.get().toPromise().then(account => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            if (account) {
                this.userIdentity = account;
                this.authenticated = true;
                this.trackerService.connect();
            } else {
                this.userIdentity = null;
                this.authenticated = false;
            }
            this.authenticationState.next(this.userIdentity);
            return this.userIdentity;
<<<<<<< HEAD
        }).catch((err) => {
=======
        }).catch(err => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            if (this.trackerService.stompClient && this.trackerService.stompClient.connected) {
                this.trackerService.disconnect();
            }
            this.userIdentity = null;
            this.authenticated = false;
            this.authenticationState.next(this.userIdentity);
            return null;
        });
    }

<<<<<<< HEAD
    isAuthenticated(): boolean {
        return this.authenticated;
    }

    isIdentityResolved(): boolean {
=======
    isAuthenticated (): boolean {
        return this.authenticated;
    }

    isIdentityResolved (): boolean {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        return this.userIdentity !== undefined;
    }

    getAuthenticationState(): Observable<any> {
        return this.authenticationState.asObservable();
    }

    getImageUrl(): String {
<<<<<<< HEAD
        return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
=======
        return this.isIdentityResolved () ? this.userIdentity.imageUrl : null;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    }
}
