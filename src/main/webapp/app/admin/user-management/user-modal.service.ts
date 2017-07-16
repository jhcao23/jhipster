import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

<<<<<<< HEAD
=======
import { UserMgmtDialogComponent } from './user-management-dialog.component';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import { User, UserService } from '../../shared';

@Injectable()
export class UserModalService {
    private isOpen = false;
<<<<<<< HEAD
    constructor(
=======
    constructor (
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        private modalService: NgbModal,
        private router: Router,
        private userService: UserService
    ) {}

<<<<<<< HEAD
    open(component: Component, login?: string): NgbModalRef {
=======
    open (component: Component, login?: string): NgbModalRef {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (login) {
<<<<<<< HEAD
            this.userService.find(login).subscribe((user) => this.userModalRef(component, user));
=======
            this.userService.find(login).subscribe(user => this.userModalRef(component, user));
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        } else {
            return this.userModalRef(component, new User());
        }
    }

    userModalRef(component: Component, user: User): NgbModalRef {
<<<<<<< HEAD
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.user = user;
        modalRef.result.then((result) => {
=======
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.user = user;
        modalRef.result.then(result => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        });
        return modalRef;
    }
}
