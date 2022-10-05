import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../shared';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
            { path: 'text', loadChildren: './text/text.module#TextModule' },
            { path: 'doc', loadChildren: './doc/doc.module#DocModule' },
            { path: 'pdf', loadChildren: './pdf/pdf.module#PdfModule' },
            { path: 'image', loadChildren: './image/image.module#ImageModule' },
            { path: 'enhanced-text-result', loadChildren: './enhanced-text-result/enhanced-text-result.module#EnhancedTextResultModule' },
            { path: 'text-statistics', loadChildren: './text-statistics/text-statistics.module#TextStatisticsModule' },
            { path: 'dictionary', loadChildren: './dictionary/dictionary.module#DictionaryModule' },
            { path: 'stem-academia', loadChildren: './stem-academia/stem-academia.module#StemAcademiaModule' },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
            { path: 'credits', loadChildren: './credits/credits.module#CreditsModule' },
            { path: 'tests', loadChildren: './tests/tests.module#TestsModule' },
            { path: 'tests/:id', loadChildren: './tests/beginner/beginner.module#BeginnerModule' },
            { path: 'itranslate', loadChildren: './itranslate/itranslate.module#ItranslateModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' },
            { path: 'account', loadChildren: './account/account.module#UserAccountModule' },
            { path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordModule' },
            { path: 'essential-words', loadChildren: './essential-words/essential-words.module#EssentialWordsModule' },
            { path: 'restore', loadChildren: './recovery/recovery.module#RecoveryModule' },
           
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
