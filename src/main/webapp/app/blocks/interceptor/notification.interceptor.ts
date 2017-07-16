<<<<<<< HEAD
import { JhiAlertService, JhiHttpInterceptor } from 'ng-jhipster';
import { RequestOptionsArgs, Response } from '@angular/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class NotificationInterceptor extends JhiHttpInterceptor {

    private alertService: JhiAlertService;

    constructor(private injector: Injector) {
        super();
        setTimeout(() => this.alertService = injector.get(JhiAlertService));
=======
import { HttpInterceptor } from 'ng-jhipster';
import { RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class NotificationInterceptor extends HttpInterceptor {

    constructor() {
        super();
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    }

    requestIntercept(options?: RequestOptionsArgs): RequestOptionsArgs {
        return options;
    }

    responseIntercept(observable: Observable<Response>): Observable<Response> {
<<<<<<< HEAD
        return observable.map((response: Response) => {
            const headers = [];
            response.headers.forEach((value, name) => {
                if (name.toLowerCase().endsWith('app-alert') || name.toLowerCase().endsWith('app-params')) {
                    headers.push(name);
                }
            });
            if (headers.length > 1) {
                headers.sort();
                const alertKey = response.headers.get(headers[ 0 ]);
                if (typeof alertKey === 'string') {
                    if (this.alertService) {
                        this.alertService.success(alertKey, null, null);
                    }
                }
            }
            return response;
        }).catch((error) => {
            return Observable.throw(error); // here, response is an error
=======
        return <Observable<Response>> observable.catch((error) => {
            let arr = Array.from(error.headers._headers);
            let headers = [];
            let i;
            for (i = 0; i < arr.length; i++) {
                if (arr[i][0].endsWith('app-alert') || arr[i][0].endsWith('app-params')) {
                    headers.push(arr[i][0]);
                }
            }
            headers.sort();
            let alertKey = headers.length >= 1 ? error.headers.get(headers[0]) : null;
            if (typeof alertKey === 'string') {
                // AlertService.success(alertKey, { param: response.headers(headers[1])});
            }
            return Observable.throw(error);
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        });
    }
}
