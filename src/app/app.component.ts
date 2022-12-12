import { Component } from '@angular/core';
import { AuthService } from './services/auth.service'
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    loading$ = new BehaviorSubject(false)

    constructor(
        public authService: AuthService,
        private router: Router,
    ) {
        this.router.events.subscribe((event) => {
            switch (true) {
                case event instanceof NavigationStart: {
                    this.loading$.next(true)
                    break
                }

                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    this.loading$.next(false)
                    break
                }
            }
        })
    }

    logout() {
        this.authService.logout()
    }
}
