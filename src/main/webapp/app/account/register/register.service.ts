import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Register {

<<<<<<< HEAD
    constructor(private http: Http) {}
=======
    constructor (private http: Http) {}
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    save(account: any): Observable<any> {
        return this.http.post('api/register', account);
    }
}
