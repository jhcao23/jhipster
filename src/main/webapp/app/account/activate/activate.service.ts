import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
<<<<<<< HEAD
export class ActivateService {

    constructor(private http: Http) {}

    get(key: string): Observable<any> {
        const params: URLSearchParams = new URLSearchParams();
=======
export class Activate {

    constructor (private http: Http) {}

    get(key: string): Observable<any> {
        let params: URLSearchParams = new URLSearchParams();
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        params.set('key', key);

        return this.http.get('api/activate', {
            search: params
<<<<<<< HEAD
        }).map((res: Response) => res);
=======
        }).map((res: Response) => res.json());
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    }
}
