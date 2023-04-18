import { Component } from '@angular/core';
import { SpringConnectionService } from 'src/app/services/spring-connection.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent {

  film = {
    titolo: '',
    genere: '',
    data: '',
    img: ''
  };

  constructor(private connection: SpringConnectionService) { }

  postFilm() {
    console.log(this.film);
    this.connection.addFilm(this.film).subscribe(data => {

    });
  }
}
