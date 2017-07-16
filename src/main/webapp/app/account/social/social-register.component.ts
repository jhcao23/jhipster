<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Input, Inject } from '@angular/core';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import { ActivatedRoute } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { LoginModalService } from '../../shared';

@Component({
    selector: 'jhi-register',
    templateUrl: './social-register.component.html'
})
export class SocialRegisterComponent implements OnInit  {
    success: boolean;
    error: boolean;
    provider: string;
    providerLabel: string;
    modalRef: NgbModalRef;

<<<<<<< HEAD
    constructor(
        private route: ActivatedRoute,
        private loginModalService: LoginModalService
    ) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe((queryParams) => {
            this.success = queryParams['success'];
        });
        this.route.params.subscribe((params) => {
=======
    constructor (
        private route: ActivatedRoute,
        private loginModalService: LoginModalService
    ) {
        }

    ngOnInit() {
        this.route.queryParams.subscribe(queryParams => {
            this.success = queryParams['success'];
        });
        this.route.params.subscribe(params => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            this.provider = params['provider?{success:boolean}'];
        });
        this.error = !this.success;
        this.providerLabel = this.provider.charAt(0).toUpperCase() + this.provider.slice(1);
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
}
