import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../shared';

import {
    Register,
<<<<<<< HEAD
    ActivateService,
    PasswordService,
    PasswordResetInitService,
    PasswordResetFinishService,
=======
    Activate,
    Password,
    PasswordResetInit,
    PasswordResetFinish,
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    PasswordStrengthBarComponent,
    RegisterComponent,
    ActivateComponent,
    PasswordComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    SettingsComponent,
    SocialRegisterComponent,
    SocialAuthComponent,
    accountState
} from './';

@NgModule({
    imports: [
        JhipsterSharedModule,
        RouterModule.forRoot(accountState, { useHash: true })
    ],
    declarations: [
        SocialRegisterComponent,
        SocialAuthComponent,
        ActivateComponent,
        RegisterComponent,
        PasswordComponent,
        PasswordStrengthBarComponent,
        PasswordResetInitComponent,
        PasswordResetFinishComponent,
        SettingsComponent
    ],
    providers: [
        Register,
<<<<<<< HEAD
        ActivateService,
        PasswordService,
        PasswordResetInitService,
        PasswordResetFinishService
=======
        Activate,
        Password,
        PasswordResetInit,
        PasswordResetFinish
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterAccountModule {}
