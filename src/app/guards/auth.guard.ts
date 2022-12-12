import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'
import { AuthService } from '../services/auth.service'

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const isAuthorized = this.authService.isAuthorized()
        const isLoginPage = state.url === '/login'

        if (isAuthorized && isLoginPage) {
            this.router.navigate(['/'])
            return false
        }

        if (!isAuthorized && !isLoginPage) {
            this.router.navigate(['/login'])
            return false
        }

        return true
    }
}
