import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoveryComponent } from './recovery.component';

const routes: Routes = [
    { path: '', component: RecoveryComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecoveryRoutingModule { 
    
}
