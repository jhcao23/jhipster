<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { JhiParseLinks } from 'ng-jhipster';
=======
import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ParseLinks} from 'ng-jhipster';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

import { Audit } from './audit.model';
import { AuditsService } from './audits.service';
import { ITEMS_PER_PAGE } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
  selector: 'jhi-audit',
  templateUrl: './audits.component.html'
})
export class AuditsComponent implements OnInit {
    audits: Audit[];
    fromDate: string;
    itemsPerPage: any;
    links: any;
    page: number;
    orderProp: string;
    reverse: boolean;
    toDate: string;
    totalItems: number;

    constructor(
        private auditsService: AuditsService,
<<<<<<< HEAD
        private parseLinks: JhiParseLinks,
=======
        private parseLinks: ParseLinks,
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        private paginationConfig: PaginationConfig,
        private datePipe: DatePipe
    ) {
        this.itemsPerPage = ITEMS_PER_PAGE;
        this.page = 1;
        this.reverse = false;
        this.orderProp = 'timestamp';
    }

    getAudits() {
        return this.sortAudits(this.audits);
    }

    loadPage(page: number) {
        this.page = page;
        this.onChangeDate();
    }

    ngOnInit() {
        this.today();
        this.previousMonth();
        this.onChangeDate();
    }

    onChangeDate() {
        this.auditsService.query({page: this.page - 1, size: this.itemsPerPage,
<<<<<<< HEAD
            fromDate: this.fromDate, toDate: this.toDate}).subscribe((res) => {
=======
            fromDate: this.fromDate, toDate: this.toDate}).subscribe(res => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

            this.audits = res.json();
            this.links = this.parseLinks.parse(res.headers.get('link'));
            this.totalItems = + res.headers.get('X-Total-Count');
        });
    }

    previousMonth() {
<<<<<<< HEAD
        const dateFormat = 'yyyy-MM-dd';
=======
        let dateFormat = 'yyyy-MM-dd';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        let fromDate: Date = new Date();

        if (fromDate.getMonth() === 0) {
            fromDate = new Date(fromDate.getFullYear() - 1, 11, fromDate.getDate());
        } else {
            fromDate = new Date(fromDate.getFullYear(), fromDate.getMonth() - 1, fromDate.getDate());
        }

        this.fromDate = this.datePipe.transform(fromDate, dateFormat);
    }

    today() {
<<<<<<< HEAD
        const dateFormat = 'yyyy-MM-dd';
        // Today + 1 day - needed if the current day must be included
        const today: Date = new Date();
        today.setDate(today.getDate() + 1);
        const date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
=======
        let dateFormat = 'yyyy-MM-dd';
        // Today + 1 day - needed if the current day must be included
        let today: Date = new Date();

        let date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.toDate = this.datePipe.transform(date, dateFormat);
    }

    private sortAudits(audits: Audit[]) {
        audits = audits.slice(0).sort((a, b) => {
            if (a[this.orderProp] < b[this.orderProp]) {
                return -1;
            } else if ([b[this.orderProp] < a[this.orderProp]]) {
                return 1;
            } else {
                return 0;
            }
        });

        return this.reverse ? audits.reverse() : audits;
    }
}
