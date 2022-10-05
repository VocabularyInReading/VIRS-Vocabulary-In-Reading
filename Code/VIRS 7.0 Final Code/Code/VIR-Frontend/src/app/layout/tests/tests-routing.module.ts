import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestsComponent } from './tests.component';

const routes: Routes = [
    { path: '', component: TestsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestsRoutingModule { }
