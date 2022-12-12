import { Component, Input } from '@angular/core'
import { Joke } from '../../../interfaces'
import { JokeDialogComponent } from '../joke-dialog/joke-dialog.component'
import { MatDialog } from '@angular/material/dialog'

@Component({
    selector: 'app-joke-card',
    templateUrl: './joke-card.component.html',
    styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent {
    @Input() joke!: Joke
    @Input() slim: boolean = false

    constructor(
        private dialog: MatDialog
    ) {}

    public openJoke(joke: Joke): void {
        if (this.dialog.openDialogs.length) {
            this.dialog.closeAll()
        }

        let dialogRef = this.dialog.open(JokeDialogComponent, {
            autoFocus: false,
            width: '516px',
            data: joke
        })
    }
}
