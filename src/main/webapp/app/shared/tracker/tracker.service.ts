import { Injectable, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs/Rx';

import { CSRFService } from '../auth/csrf.service';
<<<<<<< HEAD
import { WindowRef } from './window.service';
import { AuthServerProvider } from '../auth/auth-jwt.service';

import * as SockJS from 'sockjs-client';
import * as Stomp from 'webstomp-client';
=======
import { AuthServerProvider } from '../auth/auth-jwt.service';

import SockJS = require('sockjs-client');
import Stomp = require('webstomp-client');
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

@Injectable()
export class JhiTrackerService {
    stompClient = null;
    subscriber = null;
    connection: Promise<any>;
    connectedPromise: any;
    listener: Observable<any>;
    listenerObserver: Observer<any>;
    alreadyConnectedOnce = false;
    private subscription: Subscription;

    constructor(
        private router: Router,
        private authServerProvider: AuthServerProvider,
<<<<<<< HEAD
        private $window: WindowRef,
=======
        private $document: Document,
        private $window: Window,
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        private csrfService: CSRFService
    ) {
        this.connection = this.createConnection();
        this.listener = this.createListener();
    }

<<<<<<< HEAD
    connect() {
        if (this.connectedPromise === null) {
          this.connection = this.createConnection();
        }
        // building absolute path so that websocket doesn't fail when deploying with a context path
        const loc = this.$window.nativeWindow.location;
        let url;
        url = '//' + loc.host + loc.pathname + 'websocket/tracker';
=======
    connect () {
        if (this.connectedPromise === null) {
          this.connection = this.createConnection();
        }
        // building absolute path so that websocket doesnt fail when deploying with a context path
        const loc = this.$window.location;
        let url = '//' + loc.host + loc.pathname + 'websocket/tracker';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        const authToken = this.authServerProvider.getToken();
        if (authToken) {
            url += '?access_token=' + authToken;
        }
        const socket = new SockJS(url);
        this.stompClient = Stomp.over(socket);
<<<<<<< HEAD
        const headers = {};
=======
        let headers = {};
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.stompClient.connect(headers, () => {
            this.connectedPromise('success');
            this.connectedPromise = null;
            this.sendActivity();
            if (!this.alreadyConnectedOnce) {
                this.subscription = this.router.events.subscribe((event) => {
                  if (event instanceof NavigationEnd) {
                    this.sendActivity();
                  }
                });
                this.alreadyConnectedOnce = true;
            }
        });
    }

<<<<<<< HEAD
    disconnect() {
=======
    disconnect () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
            this.stompClient = null;
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
        this.alreadyConnectedOnce = false;
    }

<<<<<<< HEAD
    receive() {
=======
    receive () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        return this.listener;
    }

    sendActivity() {
        if (this.stompClient !== null && this.stompClient.connected) {
            this.stompClient.send(
                '/topic/activity', // destination
                JSON.stringify({'page': this.router.routerState.snapshot.url}), // body
                {} // header
            );
        }
    }

<<<<<<< HEAD
    subscribe() {
        this.connection.then(() => {
            this.subscriber = this.stompClient.subscribe('/topic/tracker', (data) => {
=======
    subscribe () {
        this.connection.then(() => {
            this.subscriber = this.stompClient.subscribe('/topic/tracker', data => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                this.listenerObserver.next(JSON.parse(data.body));
            });
        });
    }

<<<<<<< HEAD
    unsubscribe() {
=======
    unsubscribe () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        if (this.subscriber !== null) {
            this.subscriber.unsubscribe();
        }
        this.listener = this.createListener();
    }

    private createListener(): Observable<any> {
<<<<<<< HEAD
        return new Observable((observer) => {
=======
        return new Observable(observer => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            this.listenerObserver = observer;
        });
    }

    private createConnection(): Promise<any> {
        return new Promise((resolve, reject) => this.connectedPromise = resolve);
    }
}
