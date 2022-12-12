import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Jokes } from '../../../interfaces'

@Component({
  selector: 'app-jokes-page',
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.scss']
})
export class JokesPageComponent {
    jokes: Jokes = []

    constructor(
        private activatedRoute: ActivatedRoute,
    ) {
        this.jokes = this.activatedRoute.snapshot.data['jokes']
    }
}
