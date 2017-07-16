import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { JhiEventManager } from 'ng-jhipster';
=======
import { EventManager} from 'ng-jhipster';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

import { UserModalService } from './user-modal.service';
import {  User, UserService } from '../../shared';

@Component({
    selector: 'jhi-user-mgmt-dialog',
    templateUrl: './user-management-dialog.component.html'
})
export class UserMgmtDialogComponent implements OnInit {

    user: User;
    languages: any[];
    authorities: any[];
    isSaving: Boolean;

<<<<<<< HEAD
    constructor(
        public activeModal: NgbActiveModal,
        private userService: UserService,
        private eventManager: JhiEventManager
=======
    constructor (
        public activeModal: NgbActiveModal,
        private userService: UserService,
        private eventManager: EventManager
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    ) {}

    ngOnInit() {
        this.isSaving = false;
<<<<<<< HEAD
        this.authorities = [];
        this.userService.authorities().subscribe((authorities) => {
            this.authorities = authorities;
        });
=======
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.user.id !== null) {
<<<<<<< HEAD
            this.userService.update(this.user).subscribe((response) => this.onSaveSuccess(response), () => this.onSaveError());
        } else {
            this.user.langKey = 'en';
            this.userService.create(this.user).subscribe((response) => this.onSaveSuccess(response), () => this.onSaveError());
=======
            this.userService.update(this.user).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
        } else {
            this.user.langKey = 'en';
            this.userService.create(this.user).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        }
    }

    private onSaveSuccess(result) {
        this.eventManager.broadcast({ name: 'userListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-user-dialog',
    template: ''
})
export class UserDialogComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

<<<<<<< HEAD
    constructor(
=======
    constructor (
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        private route: ActivatedRoute,
        private userModalService: UserModalService
    ) {}

    ngOnInit() {
<<<<<<< HEAD
        this.routeSub = this.route.params.subscribe((params) => {
=======
        this.routeSub = this.route.params.subscribe(params => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            if ( params['login'] ) {
                this.modalRef = this.userModalService.open(UserMgmtDialogComponent, params['login']);
            } else {
                this.modalRef = this.userModalService.open(UserMgmtDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
