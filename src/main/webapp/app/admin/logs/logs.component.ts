import { Component, OnInit } from '@angular/core';

import { Log } from './log.model';
import { LogsService } from './logs.service';

@Component({
    selector: 'jhi-logs',
    templateUrl: './logs.component.html',
})
export class LogsComponent implements OnInit {

    loggers: Log[];
    filter: string;
    orderProp: string;
    reverse: boolean;

<<<<<<< HEAD
    constructor(
=======
    constructor (
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        private logsService: LogsService
    ) {
        this.filter = '';
        this.orderProp = 'name';
        this.reverse = false;
<<<<<<< HEAD
    }

    ngOnInit() {
        this.logsService.findAll().subscribe((loggers) => this.loggers = loggers);
    }

    changeLevel(name: string, level: string) {
        const log = new Log(name, level);
        this.logsService.changeLevel(log).subscribe(() => {
            this.logsService.findAll().subscribe((loggers) => this.loggers = loggers);
=======
        }

    ngOnInit() {
        this.logsService.findAll().subscribe(loggers => this.loggers = loggers);
    }

    changeLevel (name: string, level: string) {
        let log = new Log(name, level);
        this.logsService.changeLevel(log).subscribe(() => {
            this.logsService.findAll().subscribe(loggers => this.loggers = loggers);
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        });
    }
}
