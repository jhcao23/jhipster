import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgJhipsterModule } from 'ng-jhipster';
<<<<<<< HEAD
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CookieModule } from 'ngx-cookie';
=======
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

@NgModule({
    imports: [
        NgbModule.forRoot(),
        NgJhipsterModule.forRoot({
<<<<<<< HEAD
            // set below to true to make alerts look like toast
            alertAsToast: false,
        }),
        InfiniteScrollModule,
        CookieModule.forRoot()
=======
        }),
        InfiniteScrollModule
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    ],
    exports: [
        FormsModule,
        HttpModule,
        CommonModule,
        NgbModule,
        NgJhipsterModule,
        InfiniteScrollModule
    ]
})
export class JhipsterSharedLibsModule {}
