import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginPageComponent } from './login-page/login-page.component'
import { RouterModule, Routes } from '@angular/router'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'


let routes: Routes = [
    { path: '', pathMatch: 'full', component: LoginPageComponent },
]

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatCardModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
    ],
    exports: [ RouterModule ]
})
export class LoginModule {}
