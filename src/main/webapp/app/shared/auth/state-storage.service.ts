import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ng2-webstorage';

@Injectable()
export class StateStorageService {
    constructor(
        private $sessionStorage: SessionStorageService
    ) {}

    getPreviousState() {
        return this.$sessionStorage.retrieve('previousState');
    }

    resetPreviousState() {
        this.$sessionStorage.clear('previousState');
    }

    storePreviousState(previousStateName, previousStateParams) {
<<<<<<< HEAD
        const previousState = { 'name': previousStateName, 'params': previousStateParams };
=======
        let previousState = { 'name': previousStateName, 'params': previousStateParams };
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.$sessionStorage.store('previousState', previousState);
    }

    getDestinationState() {
        return this.$sessionStorage.retrieve('destinationState');
    }

<<<<<<< HEAD
    storeUrl(url: string) {
        this.$sessionStorage.store('previousUrl', url);
    }

    getUrl() {
        return this.$sessionStorage.retrieve('previousUrl');
    }

    storeDestinationState(destinationState, destinationStateParams, fromState) {
        const destinationInfo = {
=======
    storeDestinationState(destinationState, destinationStateParams, fromState) {
        let destinationInfo = {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            'destination': {
                'name': destinationState.name,
                'data': destinationState.data,
            },
            'params': destinationStateParams,
            'from': {
                'name': fromState.name,
<<<<<<< HEAD
            }
=======
             }
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        };
        this.$sessionStorage.store('destinationState', destinationInfo);
    }
}
