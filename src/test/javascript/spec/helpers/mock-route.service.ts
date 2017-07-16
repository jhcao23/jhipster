<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
=======
import { ActivatedRoute, Params } from '@angular/router';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import { Observable } from 'rxjs';

export class MockActivatedRoute extends ActivatedRoute {

    constructor(parameters?: any) {
        super();
        this.queryParams = Observable.of(parameters);
        this.params = Observable.of(parameters);
    }
}

export class MockRouter {
    navigate = jasmine.createSpy('navigate');
}
