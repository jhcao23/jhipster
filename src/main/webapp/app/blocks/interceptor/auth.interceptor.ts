import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs, Response } from '@angular/http';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
<<<<<<< HEAD
import { JhiHttpInterceptor } from 'ng-jhipster';

export class AuthInterceptor extends JhiHttpInterceptor {
=======
import { HttpInterceptor } from 'ng-jhipster';

export class AuthInterceptor extends HttpInterceptor {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    constructor(
        private localStorage: LocalStorageService,
        private sessionStorage: SessionStorageService
    ) {
        super();
    }

    requestIntercept(options?: RequestOptionsArgs): RequestOptionsArgs {
<<<<<<< HEAD
        const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
=======
        let token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        if (!!token) {
            options.headers.append('Authorization', 'Bearer ' + token);
        }
        return options;
    }

    responseIntercept(observable: Observable<Response>): Observable<Response> {
        return observable; // by pass
    }

}
