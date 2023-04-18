import { Component} from '@angular/core';
import { SpringConnectionService } from 'src/app/services/spring-connection.service';
import { EditFilmComponent } from '../edit-film/edit-film.component';
import { Film } from '../models/film.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent {
  films: any;
  selectedGenere = 'All';

  constructor(private connection: SpringConnectionService, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.connection.getFilms().subscribe(data => {
      this.films = data;
    });
  }

  onSelect(selectedValue: string) {
    if (selectedValue !== null) {
      this.connection.getFilmsForGenere(selectedValue);
    }
  }

  deleteFilm(filmId: number): void {
    if (confirm('Sei sicuro di voler eliminare questo film dal cinema?')) {
      this.connection.deleteFilm(filmId).subscribe(() => {
        this.films = this.films.filter((film: any) => film.id !== filmId);
        this.connection.getFilms().subscribe((data: any) => {
          this.films = data;
        });
      });
    }
  }

  openEditDialog(film: Film): void {
    const dialogRef = this.dialog.open(EditFilmComponent, {
      width: '450px',
      data: Object.assign({}, film)
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Aggiorna il film
        this.connection.updateFilm(result).subscribe(() => {
          // Ricarica la lista dei film
          this.connection.getFilms().subscribe((data) => {
            this.films = data;
          });
        });
      }
    });
  }

}
