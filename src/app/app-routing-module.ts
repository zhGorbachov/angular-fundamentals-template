import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () =>
            import('./shared/components/login-form/login-form.component').then(m => m.LoginFormComponent),
        canActivate: [NotAuthorizedGuard],
    },
    {
        path: 'registration',
        loadChildren: () =>
            import('./shared/components/registration-form/registration-form.component').then(m => m.RegistrationFormComponent),
        canActivate: [NotAuthorizedGuard],
    },
    {
        path: 'courses',
        loadChildren: () =>
            import('./features/courses/courses.module').then(m => m.CoursesModule),
        canLoad: [AuthorizedGuard],
    },
    {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'courses',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
