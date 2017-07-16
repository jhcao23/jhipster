import { SpyObject } from './spyobject';
import { JhiTrackerService } from '../../../../main/webapp/app/shared/tracker/tracker.service';

export class MockTrackerService extends SpyObject {

    constructor() {
        super(JhiTrackerService);
    }

<<<<<<< HEAD
    connect() {}
=======
    connect () {}
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
}
