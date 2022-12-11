import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnhancedTextResultComponent } from './enhanced-text-result.component';

const routes: Routes = [
    { path: '', component: EnhancedTextResultComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnhancedTextResultRoutingModule { }
