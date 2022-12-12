import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Router } from '@angular/router'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public user$ = new BehaviorSubject(sessionStorage.getItem('user'))

    constructor(
        private router: Router
    ) {
    }

    public isAuthorized(): boolean {
        return this.user$.value !== null
    }

    public login(username?: string | null, password?: string | null): Observable<boolean> {
        return new Observable<boolean>(observer => {
            setTimeout(() => {
                if (username === 'admin@mail.com' && password === 'admin') {
                    sessionStorage.setItem('user', username)
                    this.user$.next(username)
                    observer.next(true)
                } else {
                    observer.next(false)
                }
                observer.complete()
            }, Math.ceil(Math.random() * 1000))
        })
    }

    public logout(): void {
        sessionStorage.removeItem('user')
        this.user$.next(null)
        this.router.navigate(['/login'])
    }
}
