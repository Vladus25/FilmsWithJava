import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CinemaComponent } from '../cinema/cinema.component';
import { Film } from '../models/film.model';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css']
})
export class EditFilmComponent {

  film!: Film;
  constructor(
    public dialogRef: MatDialogRef<EditFilmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Film
  ) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }

}
