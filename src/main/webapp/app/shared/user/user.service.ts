import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { User } from './user.model';
import { ResponseWrapper } from '../model/response-wrapper.model';
import { createRequestOption } from '../model/request-util';
=======
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { User } from './user.model';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

@Injectable()
export class UserService {
    private resourceUrl = 'api/users';

    constructor(private http: Http) { }

<<<<<<< HEAD
    create(user: User): Observable<ResponseWrapper> {
        return this.http.post(this.resourceUrl, user)
            .map((res: Response) => this.convertResponse(res));
    }

    update(user: User): Observable<ResponseWrapper> {
        return this.http.put(this.resourceUrl, user)
            .map((res: Response) => this.convertResponse(res));
=======
    create(user: User): Observable<Response> {
        return this.http.post(this.resourceUrl, user);
    }

    update(user: User): Observable<Response> {
        return this.http.put(this.resourceUrl, user);
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    }

    find(login: string): Observable<User> {
        return this.http.get(`${this.resourceUrl}/${login}`).map((res: Response) => res.json());
    }

<<<<<<< HEAD
    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
=======
    query(req?: any): Observable<Response> {
        let params: URLSearchParams = new URLSearchParams();
        if (req) {
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
        }

        let options = {
            search: params
        };

        return this.http.get(this.resourceUrl, options);
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    }

    delete(login: string): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${login}`);
    }
<<<<<<< HEAD

    authorities(): Observable<string[]> {
        return this.http.get('api/users/authorities').map((res: Response) => {
            const json = res.json();
            return <string[]> json;
        });
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }
=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
}
