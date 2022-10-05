import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { RecoveryRoutingModule } from './recovery-routing.module';
import { RecoveryComponent } from './recovery.component';
import { RegisterService } from '../../shared/services/register.service'

@NgModule({
    imports: [
        CommonModule,
        NgbAlertModule.forRoot(),
        RecoveryRoutingModule,
        NgbModule.forRoot(),
        FormsModule,       

    ],
    declarations: [
        RecoveryComponent,
    ],
    providers: [RegisterService]
})
export class RecoveryModule { }
