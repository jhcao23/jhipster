import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { ProfileInfo } from './profile-info.model';

@Component({
    selector: 'jhi-page-ribbon',
    template: `<div class="ribbon" *ngIf="ribbonEnv"><a href="">{{ribbonEnv}}</a></div>`,
    styleUrls: [
<<<<<<< HEAD
        'page-ribbon.scss'
=======
        'page-ribbon.css'
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    ]
})
export class PageRibbonComponent implements OnInit {

    profileInfo: ProfileInfo;
    ribbonEnv: string;

    constructor(private profileService: ProfileService) {}

    ngOnInit() {
<<<<<<< HEAD
        this.profileService.getProfileInfo().subscribe((profileInfo) => {
=======
        this.profileService.getProfileInfo().subscribe(profileInfo => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            this.profileInfo = profileInfo;
            this.ribbonEnv = profileInfo.ribbonEnv;
        });
    }
}
