import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { JhiLoginModalComponent } from './login.component';

@Injectable()
export class LoginModalService {
    private isOpen = false;
<<<<<<< HEAD
    constructor(
        private modalService: NgbModal,
    ) {}

    open(): NgbModalRef {
=======
    constructor (
        private modalService: NgbModal,
    ) {}

    open (): NgbModalRef {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
<<<<<<< HEAD
        const modalRef = this.modalService.open(JhiLoginModalComponent, {
            container: 'nav'
        });
        modalRef.result.then((result) => {
=======
        let modalRef = this.modalService.open(JhiLoginModalComponent);
        modalRef.result.then(result => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            this.isOpen = false;
        }, (reason) => {
            this.isOpen = false;
        });
        return modalRef;
    }
}
