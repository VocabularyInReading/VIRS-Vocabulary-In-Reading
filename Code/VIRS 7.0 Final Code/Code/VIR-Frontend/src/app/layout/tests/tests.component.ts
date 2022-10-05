import { Component, OnInit, NgModule } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tests',
    templateUrl: './tests.component.html',
    styleUrls: ['./tests.component.scss'],
    animations: [routerTransition()]
})


export class TestsComponent implements OnInit {

    public static SMALL_LABEL = 'WAT - Read (2017)';

    displaySmall: boolean;
    smallLabel: string = TestsComponent.SMALL_LABEL;
    closeResult: string;

    login: boolean = false;
    attempts: number[];



    constructor(private _modal: NgbModal) {

    }

    ngOnInit(){

        window.scrollTo(0, 0);
        this.displaySmall = window.innerWidth <= 1330;
        this.updaTeLabels();
        if (localStorage.getItem("currentUser") != null) {
            this.login = true;
        }     
      
    }

    onResize(event) {
        this.displaySmall = window.innerWidth <= 1330;
        this.updaTeLabels();
        event.target.innerWidth;
    }

    private updaTeLabels(): void {
        //this.smallLabel = this.displaySmall ? 'Depth of Vocab. Knowledge' : TestsComponent.SMALL_LABEL;

    }

    open(content) {
        this._modal.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
