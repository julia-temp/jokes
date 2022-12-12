import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Joke, Jokes } from '../interfaces'
import { map, Observable, of, switchMap, tap } from 'rxjs'
import { Images } from '../interfaces'

@Injectable({
    providedIn: 'root'
})
export class JokesService {
    jokes!: Jokes

    constructor(
        private http: HttpClient
    ) { }

    public getJokes(): Observable<Jokes> {
        if (this.jokes) return of(this.jokes)

        return this.http.get<Jokes>('assets/jokes-json.json').pipe(
            switchMap((jokes: Jokes) => {
                const url = `https://api.pexels.com/v1/search?query=fun&per_page=${jokes.length}&orientation=landscape&size=small`
                const headers = {Authorization: '563492ad6f91700001000001d9ebb866bad6430986ec1e7571506616'}
                return this.http.get<Images>(url, {headers}).pipe(
                    map((images: Images) => {
                        return jokes.map((joke, index) => ({
                            ...joke,
                            imageUrl: images.photos[index].src.small
                        }))
                    })

                )
            }),
            tap((jokes) => {
                this.jokes = jokes
            })
        )
    }

    public getSuggestions(source: Joke, count: number | 'random' = 'random'): Jokes {
        const sameTypeJokes = this.jokes.filter(joke => joke.id !== source.id && joke.type === source.type)
        if (count === 'random') count = Math.floor(Math.random() * sameTypeJokes.length)

        if (sameTypeJokes.length < count) return sameTypeJokes

        return sameTypeJokes
            .sort(() => Math.random() - 0.5)
            .slice(0, count)
    }
}
