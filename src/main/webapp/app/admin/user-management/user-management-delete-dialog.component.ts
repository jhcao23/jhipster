import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { JhiEventManager } from 'ng-jhipster';
=======
import { EventManager} from 'ng-jhipster';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

import { User, UserService } from '../../shared';
import { UserModalService } from './user-modal.service';

@Component({
    selector: 'jhi-user-mgmt-delete-dialog',
    templateUrl: './user-management-delete-dialog.component.html'
})
export class UserMgmtDeleteDialogComponent {

    user: User;

    constructor(
        private userService: UserService,
        public activeModal: NgbActiveModal,
<<<<<<< HEAD
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(login) {
        this.userService.delete(login).subscribe((response) => {
=======
        private eventManager: EventManager
    ) {
        }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (login) {
        this.userService.delete(login).subscribe(response => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            this.eventManager.broadcast({ name: 'userListModification',
                content: 'Deleted a user'});
            this.activeModal.dismiss(true);
        });
    }
<<<<<<< HEAD
=======

>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
}

@Component({
    selector: 'jhi-user-delete-dialog',
    template: ''
})
export class UserDeleteDialogComponent implements OnInit, OnDestroy {

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
            this.modalRef = this.userModalService.open(UserMgmtDeleteDialogComponent, params['login']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
