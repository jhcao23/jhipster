import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { JhiMetricsMonitoringModalComponent } from './metrics-modal.component';
import { JhiMetricsService } from './metrics.service';

@Component({
    selector: 'jhi-metrics',
<<<<<<< HEAD
    templateUrl: './metrics.component.html'
=======
    templateUrl: './metrics.component.html',
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
})
export class JhiMetricsMonitoringComponent implements OnInit {
    metrics: any = {};
    cachesStats: any = {};
    servicesStats: any = {};
    updatingMetrics = true;
<<<<<<< HEAD
    JCACHE_KEY: string;
=======
    JCACHE_KEY: string ;
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    constructor(
        private modalService: NgbModal,
        private metricsService: JhiMetricsService
    ) {
        this.JCACHE_KEY = 'jcache.statistics';
<<<<<<< HEAD
    }
=======
        }
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

    ngOnInit() {
        this.refresh();
    }

<<<<<<< HEAD
    refresh() {
=======
    refresh () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.updatingMetrics = true;
        this.metricsService.getMetrics().subscribe((metrics) => {
            this.metrics = metrics;
            this.updatingMetrics = false;
            this.servicesStats = {};
            this.cachesStats = {};
            Object.keys(metrics.timers).forEach((key) => {
<<<<<<< HEAD
                const value = metrics.timers[key];
=======
                let value = metrics.timers[key];
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                if (key.indexOf('web.rest') !== -1 || key.indexOf('service') !== -1) {
                    this.servicesStats[key] = value;
                }
            });
            Object.keys(metrics.gauges).forEach((key) => {
                if (key.indexOf('jcache.statistics') !== -1) {
<<<<<<< HEAD
                    const value = metrics.gauges[key].value;
                    // remove gets or puts
                    const index = key.lastIndexOf('.');
                    const newKey = key.substr(0, index);
=======
                    let value = metrics.gauges[key].value;
                    // remove gets or puts
                    let index = key.lastIndexOf('.');
                    let newKey = key.substr(0, index);
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

                    // Keep the name of the domain
                    this.cachesStats[newKey] = {
                        'name': this.JCACHE_KEY.length,
                        'value': value
                    };
                }
            });
        });
    }

<<<<<<< HEAD
    refreshThreadDumpData() {
=======
    refreshThreadDumpData () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        this.metricsService.threadDump().subscribe((data) => {
            const modalRef  = this.modalService.open(JhiMetricsMonitoringModalComponent, { size: 'lg'});
            modalRef.componentInstance.threadDump = data;
            modalRef.result.then((result) => {
                // Left blank intentionally, nothing to do here
            }, (reason) => {
                // Left blank intentionally, nothing to do here
            });
        });
    }

<<<<<<< HEAD
    filterNaN(input) {
        if (isNaN(input)) {
            return 0;
        }
        return input;
    }

=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
}
