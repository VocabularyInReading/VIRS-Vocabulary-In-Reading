import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminService } from '../../shared'
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [AdminComponent],
  providers: [AdminService],
})
export class  AdminModule { }
