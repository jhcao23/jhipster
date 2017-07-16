import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { Subscription } from 'rxjs/Rx';
=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

import { User, UserService } from '../../shared';

@Component({
    selector: 'jhi-user-mgmt-detail',
    templateUrl: './user-management-detail.component.html'
})
export class UserMgmtDetailComponent implements OnInit, OnDestroy {

    user: User;
<<<<<<< HEAD
    private subscription: Subscription;
=======
    private subscription: any;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    constructor(
        private userService: UserService,
        private route: ActivatedRoute
    ) {
<<<<<<< HEAD
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
=======
        }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            this.load(params['login']);
        });
    }

<<<<<<< HEAD
    load(login) {
        this.userService.find(login).subscribe((user) => {
=======
    load (login) {
        this.userService.find(login).subscribe(user => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            this.user = user;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
