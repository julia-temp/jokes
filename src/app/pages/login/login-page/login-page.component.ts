import { Component } from '@angular/core'
import { AuthService } from '../../../services/auth.service'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
    public form = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    public onSubmit(): void {
        const { username, password } = this.form.controls

        this.authService.login(username.value, password.value).subscribe((isLoginValid: boolean) => {
            if (!isLoginValid) {
                return this.form.setErrors({invalidLogin: true})
            }

            this.form.setErrors(null)
            this.router.navigate(['/'])
        })
    }
}
