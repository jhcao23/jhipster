import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class JhiMetricsService {

<<<<<<< HEAD
    constructor(private http: Http) {}
=======
    constructor (private http: Http) {}
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    getMetrics(): Observable<any> {
        return this.http.get('management/metrics').map((res: Response) => res.json());
    }

    threadDump(): Observable<any> {
        return this.http.get('management/dump').map((res: Response) => res.json());
    }
}
