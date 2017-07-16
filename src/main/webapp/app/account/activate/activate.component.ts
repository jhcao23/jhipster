import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

<<<<<<< HEAD
import { ActivateService } from './activate.service';
=======
import { Activate } from './activate.service';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import { LoginModalService } from '../../shared';

@Component({
    selector: 'jhi-activate',
    templateUrl: './activate.component.html'
})
export class ActivateComponent implements OnInit {
    error: string;
    success: string;
    modalRef: NgbModalRef;

    constructor(
<<<<<<< HEAD
        private activateService: ActivateService,
        private loginModalService: LoginModalService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.activateService.get(params['key']).subscribe(() => {
=======
        private activate: Activate,
        private loginModalService: LoginModalService,
        private route: ActivatedRoute
    ) {
        }

    ngOnInit () {
        this.route.queryParams.subscribe(params => {
            this.activate.get(params['key']).subscribe(() => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                this.error = null;
                this.success = 'OK';
            }, () => {
                this.success = null;
                this.error = 'ERROR';
            });
        });
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
}
