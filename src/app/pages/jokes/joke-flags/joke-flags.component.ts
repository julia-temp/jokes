import { Component, Input } from '@angular/core'
import { Joke } from '../../../interfaces'

@Component({
    selector: 'app-joke-flags',
    templateUrl: './joke-flags.component.html',
    styleUrls: ['./joke-flags.component.scss']
})
export class JokeFlagsComponent {
    @Input() joke!: Joke
    @Input() showALl = false
}
