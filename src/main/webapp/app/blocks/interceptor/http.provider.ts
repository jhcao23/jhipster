import { Injector } from '@angular/core';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
<<<<<<< HEAD
import { JhiEventManager, JhiInterceptableHttp } from 'ng-jhipster';
=======
import { EventManager, InterceptableHttp } from 'ng-jhipster';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

import { AuthInterceptor } from './auth.interceptor';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { AuthExpiredInterceptor } from './auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './errorhandler.interceptor';
import { NotificationInterceptor } from './notification.interceptor';

export function interceptableFactory(
    backend: XHRBackend,
    defaultOptions: RequestOptions,
    localStorage: LocalStorageService,
    sessionStorage: SessionStorageService,
    injector: Injector,
<<<<<<< HEAD
    eventManager: JhiEventManager
) {
    return new JhiInterceptableHttp(
=======
    eventManager: EventManager
) {
    return new InterceptableHttp(
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        backend,
        defaultOptions,
        [
            new AuthInterceptor(localStorage, sessionStorage),
            new AuthExpiredInterceptor(injector),
            // Other interceptors can be added here
            new ErrorHandlerInterceptor(eventManager),
<<<<<<< HEAD
            new NotificationInterceptor(injector)
=======
            new NotificationInterceptor()
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        ]
    );
};

export function customHttpProvider() {
    return {
        provide: Http,
        useFactory: interceptableFactory,
        deps: [
            XHRBackend,
            RequestOptions,
            LocalStorageService,
            SessionStorageService,
            Injector,
<<<<<<< HEAD
            JhiEventManager
=======
            EventManager
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        ]
    };
};
