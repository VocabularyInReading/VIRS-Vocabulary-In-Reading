import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        window.scrollTo(0, 0);
    }
}
