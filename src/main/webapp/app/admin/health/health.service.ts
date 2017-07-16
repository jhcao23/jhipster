import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class JhiHealthService {

    separator: string;

<<<<<<< HEAD
    constructor(private http: Http) {
=======
    constructor (private http: Http) {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.separator = '.';
    }

    checkHealth(): Observable<any> {
        return this.http.get('management/health').map((res: Response) => res.json());
    }

    transformHealthData(data): any {
<<<<<<< HEAD
        const response = [];
=======
        let response = [];
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.flattenHealthData(response, null, data);
        return response;
    }

    getBaseName(name): string {
        if (name) {
<<<<<<< HEAD
            const split = name.split('.');
=======
            let split = name.split('.');
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            return split[0];
        }
    }

    getSubSystemName(name): string {
        if (name) {
<<<<<<< HEAD
            const split = name.split('.');
            split.splice(0, 1);
            const remainder = split.join('.');
=======
            let split = name.split('.');
            split.splice(0, 1);
            let remainder = split.join('.');
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            return remainder ? ' - ' + remainder : '';
        }
    }

    /* private methods */
    private addHealthObject(result, isLeaf, healthObject, name): any {
<<<<<<< HEAD
        const healthData: any = {
            name
        };

        const details = {};
        let hasDetails = false;

        for (const key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                const value = healthObject[key];
=======

        let status: any;
        let error: any;
        let healthData: any = {
            'name': name,
            'error': error,
            'status': status
        };

        let details = {};
        let hasDetails = false;

        for (let key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                let value = healthObject[key];
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                if (key === 'status' || key === 'error') {
                    healthData[key] = value;
                } else {
                    if (!this.isHealthObject(value)) {
                        details[key] = value;
                        hasDetails = true;
                    }
                }
            }
        }

        // Add the details
        if (hasDetails) {
            healthData.details = details;
        }

        // Only add nodes if they provide additional information
        if (isLeaf || hasDetails || healthData.error) {
            result.push(healthData);
        }
        return healthData;
    }

<<<<<<< HEAD
    private flattenHealthData(result, path, data): any {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const value = data[key];
=======
    private flattenHealthData (result, path, data): any {
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                let value = data[key];
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                if (this.isHealthObject(value)) {
                    if (this.hasSubSystem(value)) {
                        this.addHealthObject(result, false, value, this.getModuleName(path, key));
                        this.flattenHealthData(result, this.getModuleName(path, key), value);
                    } else {
                        this.addHealthObject(result, true, value, this.getModuleName(path, key));
                    }
                }
            }
        }
<<<<<<< HEAD
        return result;
    }

    private getModuleName(path, name): string {
=======

        return result;
    }

    private getModuleName (path, name): string {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        let result;
        if (path && name) {
            result = path + this.separator + name;
        }  else if (path) {
            result = path;
        } else if (name) {
            result = name;
        } else {
            result = '';
        }
        return result;
    }

<<<<<<< HEAD
    private hasSubSystem(healthObject): boolean {
        let result = false;

        for (const key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                const value = healthObject[key];
=======
    private hasSubSystem (healthObject): boolean {
        let result = false;

        for (let key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                let value = healthObject[key];
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                if (value && value.status) {
                    result = true;
                }
            }
        }
<<<<<<< HEAD
        return result;
    }

    private isHealthObject(healthObject): boolean {
        let result = false;

        for (const key in healthObject) {
=======

        return result;
    }

    private isHealthObject (healthObject): boolean {
        let result = false;

        for (let key in healthObject) {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            if (healthObject.hasOwnProperty(key)) {
                if (key === 'status') {
                    result = true;
                }
            }
        }
<<<<<<< HEAD
=======

>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        return result;
    }
}
