import { Injectable } from '@angular/core';

@Injectable()
export class SocialService {

<<<<<<< HEAD
    constructor() {}

    getProviderSetting(provider) {
=======
    constructor () {}

    getProviderSetting (provider) {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        switch (provider) {
            case 'google': return 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
            case 'facebook': return 'public_profile,email';
            case 'twitter': return '';
            // jhipster-needle-add-social-button
            default: return 'Provider setting not defined';
        }
    }

<<<<<<< HEAD
    getProviderURL(provider) {
        return 'signin/' + provider;
    }
=======
    getProviderURL (provider) {
        return 'signin/' + provider;
    }

>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
}
