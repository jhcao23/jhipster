import './vendor.ts';

import { NgModule } from '@angular/core';
<<<<<<< HEAD
=======
import { RouterModule } from '@angular/router';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterSharedModule, UserRouteAccessService } from './shared';
import { JhipsterHomeModule } from './home/home.module';
import { JhipsterAdminModule } from './admin/admin.module';
import { JhipsterAccountModule } from './account/account.module';
import { JhipsterEntityModule } from './entities/entity.module';

<<<<<<< HEAD
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
=======
import { LayoutRoutingModule } from './layouts';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

<<<<<<< HEAD
=======

>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSharedModule,
        JhipsterHomeModule,
        JhipsterAdminModule,
        JhipsterAccountModule,
<<<<<<< HEAD
        JhipsterEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
=======
        JhipsterEntityModule
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
<<<<<<< HEAD
=======
        { provide: Window, useValue: window },
        { provide: Document, useValue: document },
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterAppModule {}
