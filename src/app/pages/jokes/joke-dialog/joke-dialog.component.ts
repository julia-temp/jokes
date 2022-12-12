import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Joke, Jokes } from '../../../interfaces'
import { JokesService } from '../../../services/jokes.service'

@Component({
  selector: 'app-joke-dialog',
  templateUrl: './joke-dialog.component.html',
  styleUrls: ['./joke-dialog.component.scss']
})
export class JokeDialogComponent {
    suggestions!: Jokes

    constructor(
        private jokeService: JokesService,
        @Inject(MAT_DIALOG_DATA) public joke: Joke,
    ) {
        this.suggestions = this.jokeService.getSuggestions(joke)
    }
}
