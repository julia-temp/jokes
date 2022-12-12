import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'
import { JokesResolver } from './guards/jokes.resolver'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/jokes/jokes.module').then(m => m.JokesModule),
        canActivate: [AuthGuard],
        resolve: {
            jokes: JokesResolver
        }
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
        canActivate: [AuthGuard]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
