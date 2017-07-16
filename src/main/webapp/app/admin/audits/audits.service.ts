import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuditsService  {
    constructor(private http: Http) { }

    query(req: any): Observable<Response> {
<<<<<<< HEAD
        const params: URLSearchParams = new URLSearchParams();
=======
        let params: URLSearchParams = new URLSearchParams();
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        params.set('fromDate', req.fromDate);
        params.set('toDate', req.toDate);
        params.set('page', req.page);
        params.set('size', req.size);
        params.set('sort', req.sort);

<<<<<<< HEAD
        const options = {
=======
        let options = {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            search: params
        };

        return this.http.get('management/audits', options);
    }
}
