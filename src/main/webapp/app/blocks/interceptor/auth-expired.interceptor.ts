<<<<<<< HEAD
import { JhiHttpInterceptor } from 'ng-jhipster';
import { RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injector } from '@angular/core';
import { LoginService } from '../../shared/login/login.service';

export class AuthExpiredInterceptor extends JhiHttpInterceptor {
=======
import { HttpInterceptor } from 'ng-jhipster';
import { RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injector } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
import { Principal } from '../../shared/auth/principal.service';
import { AuthServerProvider } from '../../shared/auth/auth-jwt.service';

export class AuthExpiredInterceptor extends HttpInterceptor {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    constructor(private injector: Injector) {
        super();
    }

    requestIntercept(options?: RequestOptionsArgs): RequestOptionsArgs {
        return options;
    }

    responseIntercept(observable: Observable<Response>): Observable<Response> {
<<<<<<< HEAD
        return <Observable<Response>> observable.catch((error, source) => {
            if (error.status === 401) {
                const loginService: LoginService = this.injector.get(LoginService);
                loginService.logout();
=======
        let self = this;

        return <Observable<Response>> observable.catch((error, source) => {
            if (error.status === 401) {
                let principal: Principal = self.injector.get(Principal);

                if (principal.isAuthenticated()) {
                    let auth: AuthService = self.injector.get(AuthService);
                    auth.authorize(true);
                }
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            }
            return Observable.throw(error);
        });
    }
}
