import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { CookieService } from 'ngx-cookie';
=======
import { CookieService } from 'angular2-cookie/core';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

@Injectable()
export class CSRFService {

    constructor(private cookieService: CookieService) {}

    getCSRF(name?: string) {
        name = `${name ? name : 'XSRF-TOKEN'}`;
        return this.cookieService.get(name);
    }
}
