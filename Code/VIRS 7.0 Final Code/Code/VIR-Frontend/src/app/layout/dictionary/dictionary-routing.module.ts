import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DictionaryComponent } from './dictionary.component';

const routes: Routes = [
    { path: '', component: DictionaryComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DictionaryRoutingModule { }
