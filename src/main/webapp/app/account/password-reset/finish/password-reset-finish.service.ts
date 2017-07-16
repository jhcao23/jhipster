import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
<<<<<<< HEAD
export class PasswordResetFinishService {

    constructor(private http: Http) {}
=======
export class PasswordResetFinish {

    constructor (private http: Http) {}
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    save(keyAndPassword: any): Observable<any> {
        return this.http.post('api/account/reset_password/finish', keyAndPassword);
    }
}
