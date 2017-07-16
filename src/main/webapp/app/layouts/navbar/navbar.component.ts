import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

<<<<<<< HEAD
import { ProfileService } from '../profiles/profile.service';
=======
import { ProfileService } from '../profiles/profile.service'; // FIXME barrel doesnt work here
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import { Principal, LoginModalService, LoginService } from '../../shared';

import { VERSION, DEBUG_INFO_ENABLED } from '../../app.constants';

@Component({
    selector: 'jhi-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [
<<<<<<< HEAD
        'navbar.scss'
=======
        'navbar.css'
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    ]
})
export class NavbarComponent implements OnInit {

    inProduction: boolean;
    isNavbarCollapsed: boolean;
    languages: any[];
    swaggerEnabled: boolean;
    modalRef: NgbModalRef;
    version: string;

    constructor(
        private loginService: LoginService,
        private principal: Principal,
        private loginModalService: LoginModalService,
        private profileService: ProfileService,
        private router: Router
    ) {
<<<<<<< HEAD
        this.version = VERSION ? 'v' + VERSION : '';
=======
        this.version = DEBUG_INFO_ENABLED ? 'v' + VERSION : '';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.isNavbarCollapsed = true;
    }

    ngOnInit() {
<<<<<<< HEAD
        this.profileService.getProfileInfo().subscribe((profileInfo) => {
=======

        this.profileService.getProfileInfo().subscribe(profileInfo => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            this.inProduction = profileInfo.inProduction;
            this.swaggerEnabled = profileInfo.swaggerEnabled;
        });
    }

<<<<<<< HEAD
=======

>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    collapseNavbar() {
        this.isNavbarCollapsed = true;
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    logout() {
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    }

    toggleNavbar() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }

    getImageUrl() {
        return this.isAuthenticated() ? this.principal.getImageUrl() : null;
    }
}
