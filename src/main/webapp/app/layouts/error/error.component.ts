import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

@Component({
    selector: 'jhi-error',
    templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {
    errorMessage: string;
    error403: boolean;

    constructor(
<<<<<<< HEAD
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.data.subscribe((routeData) => {
            if (routeData.error403) {
                this.error403 = routeData.error403;
            }
            if (routeData.errorMessage) {
                this.errorMessage = routeData.errorMessage;
            }
        });
=======
        ) {
        }

    ngOnInit() {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    }
}
