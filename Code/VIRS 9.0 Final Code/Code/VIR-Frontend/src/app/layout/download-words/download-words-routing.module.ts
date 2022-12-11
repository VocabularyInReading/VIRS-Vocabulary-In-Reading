import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DownloadWordsComponent } from "./download-words.component";

const routes: Routes = [{ path: "", component: DownloadWordsComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DownloadWordsRoutingModule {}
