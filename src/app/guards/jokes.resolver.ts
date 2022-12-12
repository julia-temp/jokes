import { Injectable } from '@angular/core'
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router'
import { Observable } from 'rxjs'
import { Jokes } from '../interfaces'
import { JokesService } from '../services/jokes.service'

@Injectable({
    providedIn: 'root'
})
export class JokesResolver implements Resolve<Jokes> {
    constructor(private jokesService: JokesService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Jokes> {
        return this.jokesService.getJokes()
    }
}
