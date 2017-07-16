import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

<<<<<<< HEAD
import { LoginService } from '../../shared';
import { CookieService } from 'ngx-cookie';

@Component({
    selector: 'jhi-auth',
    template: ''
})
export class SocialAuthComponent implements OnInit {

    constructor(
=======
import { AuthService, LoginService } from '../../shared';
import { CookieService } from 'angular2-cookie/core';

@Component({
    selector: 'jhi-auth',
    templateUrl: '../../shared/login/login.component.html'
})
export class SocialAuthComponent implements OnInit {

    constructor (
        private Auth: AuthService,
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        private loginService: LoginService,
        private cookieService: CookieService,
        private router: Router
    ) {
<<<<<<< HEAD
    }

    ngOnInit() {
        const token = this.cookieService.get('social-authentication');
        if (token.length) {
            this.loginService.loginWithToken(token, false).then(() => {
                    this.cookieService.remove('social-authentication');
                    this.router.navigate(['']);
=======
        }

    ngOnInit() {
        let token = this.cookieService.get('social-authentication');
        if (token.length) {
            this.loginService.loginWithToken(token, false).then(() => {
                    this.cookieService.remove('social-authentication');
                    this.Auth.authorize(true);
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                 }, () => {
                    this.router.navigate(['social-register'], {queryParams: {'success': 'false'}});
            });
        }
    }
}
