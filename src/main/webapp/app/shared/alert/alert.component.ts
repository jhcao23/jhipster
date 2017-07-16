import { Component, OnDestroy, OnInit } from '@angular/core';
<<<<<<< HEAD
import { JhiAlertService } from 'ng-jhipster';
=======
import { AlertService } from 'ng-jhipster';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

@Component({
    selector: 'jhi-alert',
    template: `
        <div class="alerts" role="alert">
            <div *ngFor="let alert of alerts" [ngClass]="{\'alert.position\': true, \'toast\': alert.toast}">
<<<<<<< HEAD
                <ngb-alert *ngIf="alert && alert.type && alert.msg" [type]="alert.type" (close)="alert.close(alerts)">
                    <pre [innerHTML]="alert.msg"></pre>
                </ngb-alert>
=======
                <ngb-alert [type]="alert.type" (close)="alert.close(alerts)"><pre [innerHTML]="alert.msg"></pre></ngb-alert>
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            </div>
        </div>`
})
export class JhiAlertComponent implements OnInit, OnDestroy {
    alerts: any[];

<<<<<<< HEAD
    constructor(private alertService: JhiAlertService) { }
=======
    constructor(private alertService: AlertService) { }
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    ngOnInit() {
        this.alerts = this.alertService.get();
    }

    ngOnDestroy() {
        this.alerts = [];
    }

}
