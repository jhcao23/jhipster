import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { JhiEventManager } from 'ng-jhipster';
=======
import { EventManager} from 'ng-jhipster';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

import { Account, LoginModalService, Principal } from '../shared';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
<<<<<<< HEAD
        'home.scss'
=======
        'home.css'
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    ]

})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
<<<<<<< HEAD
        private eventManager: JhiEventManager
    ) {
    }
=======
        private eventManager: EventManager
    ) {
        }
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
}
