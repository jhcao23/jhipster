import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

<<<<<<< HEAD
=======
import { CookieService } from 'angular2-cookie/services/cookies.service';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import {
    JhipsterSharedLibsModule,
    JhipsterSharedCommonModule,
    CSRFService,
<<<<<<< HEAD
=======
    AuthService,
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    Principal,
    JhiTrackerService,
    HasAnyAuthorityDirective,
    JhiSocialComponent,
    SocialService,
    JhiLoginModalComponent
} from './';

@NgModule({
    imports: [
        JhipsterSharedLibsModule,
        JhipsterSharedCommonModule
    ],
    declarations: [
        JhiSocialComponent,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective
    ],
    providers: [
<<<<<<< HEAD
=======
        CookieService,
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        JhiTrackerService,
        AuthServerProvider,
        SocialService,
<<<<<<< HEAD
=======
        AuthService,
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        UserService,
        DatePipe
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        JhipsterSharedCommonModule,
        JhiSocialComponent,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class JhipsterSharedModule {}
