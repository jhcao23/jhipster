import { Component, Input, OnInit } from '@angular/core';
import { SocialService } from './social.service';
import { CSRFService } from '../auth/csrf.service';

@Component({
    selector: 'jhi-social',
    templateUrl: './social.component.html'
})
export class JhiSocialComponent implements OnInit {
    @Input() provider: string;
    label: string;
    providerSetting: string;
    providerURL: string;
    csrf: string;

<<<<<<< HEAD
    constructor(
=======
    constructor (
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        private csrfService: CSRFService,
        private socialService: SocialService
    ) {}

    ngOnInit() {
        this.label = this.provider.charAt(0).toUpperCase() + this.provider.slice(1);
        this.providerSetting = this.socialService.getProviderSetting(this.provider);
        this.providerURL = this.socialService.getProviderURL(this.provider);
        this.csrf = this.csrfService.getCSRF();
    }
}
