import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JokesPageComponent } from './jokes-page/jokes-page.component'
import { RouterModule, Routes } from '@angular/router'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { JokeDialogComponent } from './joke-dialog/joke-dialog.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatChipsModule } from '@angular/material/chips'
import { JokeFlagsComponent } from './joke-flags/joke-flags.component';
import { JokeCardComponent } from './joke-card/joke-card.component';
import { JokesListComponent } from './jokes-list/jokes-list.component'

const routes: Routes = [
    {path: '', pathMatch: 'full', component: JokesPageComponent},
]

@NgModule({
    declarations: [
        JokesPageComponent,
        JokeDialogComponent,
        JokeFlagsComponent,
        JokeCardComponent,
        JokesListComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatChipsModule,
    ],
    exports: [ RouterModule ]
})
export class JokesModule {}
