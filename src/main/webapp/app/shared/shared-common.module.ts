<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { WindowRef } from './tracker/window.service';
=======
import { NgModule, Sanitizer } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AlertService } from 'ng-jhipster';

>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import {
    JhipsterSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

<<<<<<< HEAD
=======

export function alertServiceProvider(sanitizer: Sanitizer) {
    // set below to true to make alerts look like toast
    let isToast = false;
    return new AlertService(sanitizer, isToast);
}

>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
@NgModule({
    imports: [
        JhipsterSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
<<<<<<< HEAD
        WindowRef,
=======
        {
            provide: AlertService,
            useFactory: alertServiceProvider,
            deps: [Sanitizer]
        },
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        Title
    ],
    exports: [
        JhipsterSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class JhipsterSharedCommonModule {}
