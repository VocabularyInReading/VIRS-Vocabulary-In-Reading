import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push({
            imagePath: 'assets/images/VIRS-1.jpg',
            label: 'Vocabulary in Reading Study',
            text: 'Analyzing one word at a time.'
        }, {
                imagePath: 'assets/images/VIRS-2.jpg',
                label: 'Statistics and Words',
                text: 'Detailed information and data representation of the word lists.'
            }, {
                imagePath: 'assets/images/VIRS-3.jpg',
                label: 'Word Lists',
                text: 'Information about the word is only a click away. '
            });
    }

    ngOnInit() {
        window.scrollTo(0, 0);

        //localStorage.removeItem("attempt");// use this to reset the values of the attempts.

        var attempt: number[] = [5, 5, 5, 5, 5, 5]; //FORMAT: [begginer, intermediate, upper_intermediate, advanced, vocab, WAT]

        if (localStorage.getItem("attempt") == null) {
            
            localStorage.setItem("attempt", JSON.stringify(attempt));

            console.log(JSON.parse(localStorage.getItem("attempt")));

        }//This will initialize the cookies to 5 if thwy are not set.

        //console.log(JSON.parse(localStorage.getItem("attempt"))[2]);//USe this to debug the LocalStorage key "attempt"
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
