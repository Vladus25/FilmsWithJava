import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpringConnectionService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get(`${this.baseUrl}/AllFilms`);
  }

  getFilmsForGenere(genere: string) {
    return this.http.get(`${this.baseUrl}/${genere}`);
  }

  addFilm(film: any) {
    return this.http.post(`${this.baseUrl}/addFilm`, film);
  }

  deleteFilm(filmId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/cinema/${filmId}`)
  }

  updateFilm(film: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateFilm/${film.id}`, film);
  }

}
