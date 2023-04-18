import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaComponent } from './components/cinema/cinema.component';
import { AddFilmComponent } from './components/add-film/add-film.component';

const routes: Routes = [
  {path: 'TuttiFilms', component: CinemaComponent},
  {path: 'AggiungiFilm', component: AddFilmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
