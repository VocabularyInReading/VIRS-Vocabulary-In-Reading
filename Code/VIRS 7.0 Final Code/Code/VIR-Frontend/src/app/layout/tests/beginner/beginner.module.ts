import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SimpleTimer } from 'ng2-simple-timer';

import { BeginnerRoutingModule } from './beginner-routing.module';
import { BeginnerComponent } from './beginner.component';
import { TestBanks } from '../../../shared/services/testBanks/testBanks.service';

@NgModule({
    imports: [
        CommonModule,
        NgbAlertModule.forRoot(),
        BeginnerRoutingModule,
        FormsModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        BeginnerComponent,
    ],
    providers: [
        SimpleTimer,
        TestBanks
    ]

})
export class BeginnerModule { } 
