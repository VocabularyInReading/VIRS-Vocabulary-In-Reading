import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterService } from '../../shared/services/register.service'

@NgModule({
    imports: [
        CommonModule,
        NgbAlertModule.forRoot(),
        RegisterRoutingModule,
        NgbModule.forRoot(),
        FormsModule,       

    ],
    declarations: [
        RegisterComponent,
    ],
    providers: [RegisterService]
})
export class RegisterModule { }
