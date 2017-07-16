import { Component, OnInit } from '@angular/core';

import { Principal, AccountService } from '../../shared';

@Component({
    selector: 'jhi-settings',
    templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
    error: string;
    success: string;
    settingsAccount: any;
    languages: any[];

    constructor(
        private account: AccountService,
        private principal: Principal
    ) {
<<<<<<< HEAD
    }

    ngOnInit() {
=======
        }

    ngOnInit () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.principal.identity().then((account) => {
            this.settingsAccount = this.copyAccount(account);
        });
    }

<<<<<<< HEAD
    save() {
=======
    save () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.account.save(this.settingsAccount).subscribe(() => {
            this.error = null;
            this.success = 'OK';
            this.principal.identity(true).then((account) => {
                this.settingsAccount = this.copyAccount(account);
            });
        }, () => {
            this.success = null;
            this.error = 'ERROR';
        });
    }

<<<<<<< HEAD
    copyAccount(account) {
=======
    copyAccount (account) {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        return {
            activated: account.activated,
            email: account.email,
            firstName: account.firstName,
            langKey: account.langKey,
            lastName: account.lastName,
            login: account.login,
            imageUrl: account.imageUrl
        };
    }
}
