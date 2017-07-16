<<<<<<< HEAD
import { JhiHttpInterceptor, JhiEventManager } from 'ng-jhipster';
import { RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ErrorHandlerInterceptor extends JhiHttpInterceptor {

    constructor(private eventManager: JhiEventManager) {
=======
import { HttpInterceptor, EventManager } from 'ng-jhipster';
import { RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ErrorHandlerInterceptor extends HttpInterceptor {

    constructor(private eventManager: EventManager) {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        super();
    }

    requestIntercept(options?: RequestOptionsArgs): RequestOptionsArgs {
        return options;
    }

    responseIntercept(observable: Observable<Response>): Observable<Response> {
<<<<<<< HEAD
        return <Observable<Response>> observable.catch((error) => {
=======
        return <Observable<Response>> observable.catch(error => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            if (!(error.status === 401 && (error.text() === '' ||
                (error.json().path && error.json().path.indexOf('/api/account') === 0 )))) {
                this.eventManager.broadcast( {name: 'jhipsterApp.httpError', content: error});
            }
            return Observable.throw(error);
        });
    }
}
