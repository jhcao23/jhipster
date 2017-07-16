<<<<<<< HEAD
import { Component, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { JhiEventManager } from 'ng-jhipster';

import { LoginService } from './login.service';
=======
import { Component, OnInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { EventManager } from 'ng-jhipster';

import { LoginService } from '../login/login.service';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import { StateStorageService } from '../auth/state-storage.service';
import { SocialService } from '../social/social.service';

@Component({
    selector: 'jhi-login-modal',
    templateUrl: './login.component.html'
})
<<<<<<< HEAD
export class JhiLoginModalComponent implements AfterViewInit {
=======
export class JhiLoginModalComponent implements OnInit, AfterViewInit {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    authenticationError: boolean;
    password: string;
    rememberMe: boolean;
    username: string;
    credentials: any;

    constructor(
<<<<<<< HEAD
        private eventManager: JhiEventManager,
=======
        private eventManager: EventManager,
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        private loginService: LoginService,
        private stateStorageService: StateStorageService,
        private elementRef: ElementRef,
        private renderer: Renderer,
        private socialService: SocialService,
        private router: Router,
        public activeModal: NgbActiveModal
    ) {
        this.credentials = {};
    }

<<<<<<< HEAD
=======
    ngOnInit() {
    }

>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []);
    }

<<<<<<< HEAD
    cancel() {
=======
    cancel () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.credentials = {
            username: null,
            password: null,
            rememberMe: true
        };
        this.authenticationError = false;
        this.activeModal.dismiss('cancel');
    }

<<<<<<< HEAD
    login() {
=======
    login () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.loginService.login({
            username: this.username,
            password: this.password,
            rememberMe: this.rememberMe
        }).then(() => {
            this.authenticationError = false;
            this.activeModal.dismiss('login success');
<<<<<<< HEAD
            if (this.router.url === '/register' || (/activate/.test(this.router.url)) ||
=======
            if (this.router.url === '/register' || this.router.url === '/activate' ||
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                this.router.url === '/finishReset' || this.router.url === '/requestReset') {
                this.router.navigate(['']);
            }

            this.eventManager.broadcast({
                name: 'authenticationSuccess',
                content: 'Sending Authentication Success'
            });

            // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // // since login is succesful, go to stored previousState and clear previousState
<<<<<<< HEAD
            const redirect = this.stateStorageService.getUrl();
            if (redirect) {
                this.router.navigate([redirect]);
=======
            let previousState = this.stateStorageService.getPreviousState();
            if (previousState) {
                this.stateStorageService.resetPreviousState();
                this.router.navigate([previousState.name], { queryParams:  previousState.params });
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            }
        }).catch(() => {
            this.authenticationError = true;
        });
    }

<<<<<<< HEAD
    register() {
=======
    register () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.activeModal.dismiss('to state register');
        this.router.navigate(['/register']);
    }

<<<<<<< HEAD
    requestResetPassword() {
=======
    requestResetPassword () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.activeModal.dismiss('to state requestReset');
        this.router.navigate(['/reset', 'request']);
    }
}
