import { Component, OnInit } from '@angular/core';

import { Principal } from '../../shared';
<<<<<<< HEAD
import { PasswordService } from './password.service';
=======
import { Password } from './password.service';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

@Component({
    selector: 'jhi-password',
    templateUrl: './password.component.html'
})
export class PasswordComponent implements OnInit {
    doNotMatch: string;
    error: string;
    success: string;
    account: any;
    password: string;
    confirmPassword: string;

    constructor(
<<<<<<< HEAD
        private passwordService: PasswordService,
        private principal: Principal
    ) {
    }

    ngOnInit() {
=======
        private passwordService: Password,
        private principal: Principal
    ) {
        }

    ngOnInit () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.principal.identity().then((account) => {
            this.account = account;
        });
    }

<<<<<<< HEAD
    changePassword() {
=======
    changePassword () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        if (this.password !== this.confirmPassword) {
            this.error = null;
            this.success = null;
            this.doNotMatch = 'ERROR';
        } else {
            this.doNotMatch = null;
            this.passwordService.save(this.password).subscribe(() => {
                this.error = null;
                this.success = 'OK';
            }, () => {
                this.success = null;
                this.error = 'ERROR';
            });
        }
    }
}
