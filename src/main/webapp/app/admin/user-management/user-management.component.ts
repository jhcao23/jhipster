import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD
import { JhiEventManager, JhiPaginationUtil, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { ITEMS_PER_PAGE, Principal, User, UserService, ResponseWrapper } from '../../shared';
=======
import { EventManager, PaginationUtil, ParseLinks, AlertService} from 'ng-jhipster';

import { ITEMS_PER_PAGE, Principal, User, UserService } from '../../shared';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-user-mgmt',
    templateUrl: './user-management.component.html'
})
export class UserMgmtComponent implements OnInit, OnDestroy {

    currentAccount: any;
    users: User[];
    error: any;
    success: any;
    routeData: any;
    links: any;
    totalItems: any;
    queryCount: any;
    itemsPerPage: any;
    page: any;
    predicate: any;
    previousPage: any;
    reverse: any;

    constructor(
        private userService: UserService,
<<<<<<< HEAD
        private parseLinks: JhiParseLinks,
        private alertService: JhiAlertService,
        private principal: Principal,
        private eventManager: JhiEventManager,
        private paginationUtil: JhiPaginationUtil,
=======
        private parseLinks: ParseLinks,
        private alertService: AlertService,
        private principal: Principal,
        private eventManager: EventManager,        private paginationUtil: PaginationUtil,
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        private paginationConfig: PaginationConfig,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        this.itemsPerPage = ITEMS_PER_PAGE;
<<<<<<< HEAD
        this.routeData = this.activatedRoute.data.subscribe((data) => {
=======
        this.routeData = this.activatedRoute.data.subscribe(data => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            this.page = data['pagingParams'].page;
            this.previousPage = data['pagingParams'].page;
            this.reverse = data['pagingParams'].ascending;
            this.predicate = data['pagingParams'].predicate;
        });
<<<<<<< HEAD
    }
=======
        }
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.currentAccount = account;
            this.loadAll();
            this.registerChangeInUsers();
        });
    }

    ngOnDestroy() {
        this.routeData.unsubscribe();
    }

    registerChangeInUsers() {
        this.eventManager.subscribe('userListModification', (response) => this.loadAll());
    }

<<<<<<< HEAD
    setActive(user, isActivated) {
        user.activated = isActivated;

        this.userService.update(user).subscribe(
            (response) => {
=======
    setActive (user, isActivated) {
        user.activated = isActivated;

        this.userService.update(user).subscribe(
            response => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                if (response.status === 200) {
                    this.error = null;
                    this.success = 'OK';
                    this.loadAll();
                } else {
                    this.success = null;
                    this.error = 'ERROR';
                }
            });
    }

<<<<<<< HEAD
    loadAll() {
=======
    loadAll () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.userService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()}).subscribe(
<<<<<<< HEAD
            (res: ResponseWrapper) => this.onSuccess(res.json, res.headers),
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    trackIdentity(index, item: User) {
        return item.id;
    }

    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
=======
            (res: Response) => this.onSuccess(res.json(), res.headers),
            (res: Response) => this.onError(res.json())
        );
    }

    trackIdentity (index, item: User) {
        return item.id;
    }

    sort () {
        let result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }

<<<<<<< HEAD
    loadPage(page: number) {
=======
    loadPage (page: number) {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    }

<<<<<<< HEAD
    transition() {
        this.router.navigate(['/user-management'], {
            queryParams: {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
=======
    transition () {
        this.router.navigate(['/user-management'], { queryParams:
                {
                    page: this.page,
                    sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
                }
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        });
        this.loadAll();
    }

    private onSuccess(data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        this.users = data;
    }

    private onError(error) {
        this.alertService.error(error.error, error.message, null);
    }
}
