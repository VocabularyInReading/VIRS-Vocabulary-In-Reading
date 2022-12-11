import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextComponent } from './text.component';

const routes: Routes = [
    { path: '', component: TextComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TextRoutingModule { }
