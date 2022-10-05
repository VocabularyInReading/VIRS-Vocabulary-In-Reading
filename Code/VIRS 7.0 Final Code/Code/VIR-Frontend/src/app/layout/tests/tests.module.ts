import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { TestsRoutingModule } from './tests-routing.module';
import { TestsComponent } from './tests.component';

@NgModule({
    imports: [
        CommonModule,
        NgbAlertModule.forRoot(),
        TestsRoutingModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        TestsComponent,
    ]
})
export class TestsModule { }
