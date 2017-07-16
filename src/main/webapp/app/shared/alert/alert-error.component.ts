import { Component, OnDestroy } from '@angular/core';
<<<<<<< HEAD
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';
=======
import { EventManager, AlertService } from 'ng-jhipster';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'jhi-alert-error',
    template: `
        <div class="alerts" role="alert">
            <div *ngFor="let alert of alerts"  [ngClass]="{\'alert.position\': true, \'toast\': alert.toast}">
<<<<<<< HEAD
                <ngb-alert *ngIf="alert && alert.type && alert.msg" [type]="alert.type" (close)="alert.close(alerts)">
                    <pre [innerHTML]="alert.msg"></pre>
                </ngb-alert>
=======
                <ngb-alert type="{{alert.type}}" close="alert.close(alerts)"><pre>{{ alert.msg }}</pre></ngb-alert>
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            </div>
        </div>`
})
export class JhiAlertErrorComponent implements OnDestroy {

    alerts: any[];
    cleanHttpErrorListener: Subscription;

<<<<<<< HEAD
    constructor(private alertService: JhiAlertService, private eventManager: JhiEventManager) {
=======
    constructor(private alertService: AlertService, private eventManager: EventManager) {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.alerts = [];

        this.cleanHttpErrorListener = eventManager.subscribe('jhipsterApp.httpError', (response) => {
            let i;
<<<<<<< HEAD
            const httpResponse = response.content;
=======
            let httpResponse = response.content;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            switch (httpResponse.status) {
                // connection refused, server not reachable
                case 0:
                    this.addErrorAlert('Server not reachable', 'error.server.not.reachable');
                    break;

                case 400:
<<<<<<< HEAD
                    const arr = Array.from(httpResponse.headers._headers);
                    const headers = [];
=======
                    let arr = Array.from(httpResponse.headers._headers);
                    let headers = [];
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                    for (i = 0; i < arr.length; i++) {
                        if (arr[i][0].endsWith('app-error') || arr[i][0].endsWith('app-params')) {
                            headers.push(arr[i][0]);
                        }
                    }
                    headers.sort();
<<<<<<< HEAD
                    let errorHeader = null;
                    let entityKey = null;
                    if (headers.length > 1) {
                        errorHeader = httpResponse.headers.get(headers[0]);
                        entityKey = httpResponse.headers.get(headers[1]);
                    }
                    if (errorHeader) {
                        const entityName = entityKey;
                        this.addErrorAlert(errorHeader, errorHeader, { entityName });
                    } else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().fieldErrors) {
                        const fieldErrors = httpResponse.json().fieldErrors;
                        for (i = 0; i < fieldErrors.length; i++) {
                            const fieldError = fieldErrors[i];
                            // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
                            const convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
                            const fieldName = convertedField.charAt(0).toUpperCase() +
                                convertedField.slice(1);
                            this.addErrorAlert(
                                'Error on field "' + fieldName + '"', 'error.' + fieldError.message, { fieldName });
                        }
                    } else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        this.addErrorAlert(httpResponse.json().message, httpResponse.json().message, httpResponse.json().params);
=======
                    let errorHeader = httpResponse.headers.get(headers[0]);
                    let entityKey = httpResponse.headers.get(headers[1]);
                    if (errorHeader) {
                        let entityName = entityKey;
                        this.addErrorAlert(errorHeader, errorHeader, {entityName: entityName});
                    } else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().fieldErrors) {
                        let fieldErrors = httpResponse.json().fieldErrors;
                        for (i = 0; i < fieldErrors.length; i++) {
                            let fieldError = fieldErrors[i];
                            // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
                            let convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
                            let fieldName = convertedField.charAt(0).toUpperCase() +
                                convertedField.slice(1);
                            this.addErrorAlert(
                                'Field ' + fieldName + ' cannot be empty', 'error.' + fieldError.message, {fieldName: fieldName});
                        }
                    } else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        this.addErrorAlert(httpResponse.json().message, httpResponse.json().message, httpResponse.json());
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                    } else {
                        this.addErrorAlert(httpResponse.text());
                    }
                    break;

                case 404:
                    this.addErrorAlert('Not found', 'error.url.not.found');
                    break;

                default:
                    if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        this.addErrorAlert(httpResponse.json().message);
                    } else {
<<<<<<< HEAD
                        this.addErrorAlert(httpResponse.text());
=======
                        this.addErrorAlert(JSON.stringify(httpResponse)); // Fixme find a way to parse httpResponse
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                    }
            }
        });
    }

    ngOnDestroy() {
        if (this.cleanHttpErrorListener !== undefined && this.cleanHttpErrorListener !== null) {
            this.eventManager.destroy(this.cleanHttpErrorListener);
            this.alerts = [];
        }
    }

<<<<<<< HEAD
    addErrorAlert(message, key?, data?) {
=======
    addErrorAlert (message, key?, data?) {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.alerts.push(
            this.alertService.addAlert(
                {
                    type: 'danger',
                    msg: message,
                    timeout: 5000,
                    toast: this.alertService.isToast(),
                    scoped: true
                },
                this.alerts
            )
        );
    }
}
