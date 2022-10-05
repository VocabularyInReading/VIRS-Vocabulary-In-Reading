import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocComponent } from './doc.component';

const routes: Routes = [
    { path: '', component: DocComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DocRoutingModule { }
