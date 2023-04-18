import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreFilter'
})
export class GenreFilterPipe implements PipeTransform {

  transform(films: any[], genere: string): any[] {
    if (genere === 'All') {
      return films;
    }
    return films.filter((movie) => movie.genere.includes(genere));

  }

}
