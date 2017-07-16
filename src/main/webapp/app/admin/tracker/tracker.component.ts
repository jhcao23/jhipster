import { Component, OnInit, OnDestroy } from '@angular/core';

import { JhiTrackerService } from '../../shared';

@Component({
    selector: 'jhi-tracker',
    templateUrl: './tracker.component.html'
})
export class JhiTrackerComponent implements OnInit, OnDestroy {

    activities: any[] = [];

    constructor(
        private trackerService: JhiTrackerService
    ) {
<<<<<<< HEAD
    }

    showActivity(activity: any) {
=======
        }

    showActivity (activity: any) {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        let existingActivity = false;
        for (let index = 0; index < this.activities.length; index++) {
            if (this.activities[index].sessionId === activity.sessionId) {
                existingActivity = true;
                if ( activity.page === 'logout' ) {
                    this.activities.splice(index, 1);
                } else {
                    this.activities[index] = activity;
                }
            }
        }
        if (!existingActivity && (activity.page !== 'logout')) {
            this.activities.push(activity);
        }
    }

    ngOnInit() {
        this.trackerService.subscribe();
<<<<<<< HEAD
        this.trackerService.receive().subscribe((activity) => {
=======
        this.trackerService.receive().subscribe(activity => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            this.showActivity(activity);
        });
    }

    ngOnDestroy() {
        this.trackerService.unsubscribe();
    }
<<<<<<< HEAD
=======

>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
}
