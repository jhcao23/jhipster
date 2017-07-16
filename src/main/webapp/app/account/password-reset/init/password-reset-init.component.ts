import { Component, OnInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';

<<<<<<< HEAD
import { PasswordResetInitService } from './password-reset-init.service';
=======
import { PasswordResetInit } from './password-reset-init.service';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

@Component({
    selector: 'jhi-password-reset-init',
    templateUrl: './password-reset-init.component.html'
})
export class PasswordResetInitComponent implements OnInit, AfterViewInit {
    error: string;
    errorEmailNotExists: string;
    resetAccount: any;
    success: string;

    constructor(
<<<<<<< HEAD
        private passwordResetInitService: PasswordResetInitService,
        private elementRef: ElementRef,
        private renderer: Renderer
    ) {
    }
=======
        private passwordResetInit: PasswordResetInit,
        private elementRef: ElementRef,
        private renderer: Renderer
    ) {
        }
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    ngOnInit() {
        this.resetAccount = {};
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#email'), 'focus', []);
    }

<<<<<<< HEAD
    requestReset() {
        this.error = null;
        this.errorEmailNotExists = null;

        this.passwordResetInitService.save(this.resetAccount.email).subscribe(() => {
            this.success = 'OK';
        }, (response) => {
            this.success = null;
            if (response.status === 400 && response.data === 'email address not registered') {
=======
    requestReset () {

        this.error = null;
        this.errorEmailNotExists = null;

        this.passwordResetInit.save(this.resetAccount.email).subscribe(() => {
            this.success = 'OK';
        }, (response) => {
            this.success = null;
            if (response.status === 400 && response.data === 'e-mail address not registered') {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                this.errorEmailNotExists = 'ERROR';
            } else {
                this.error = 'ERROR';
            }
        });
    }
}
