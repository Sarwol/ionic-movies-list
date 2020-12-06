import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  moviesList: any[] = [];
  search: Object;

  constructor(private movieService : MovieService) { }

  ngOnInit() {
  }

  onSearch(event) {
      this.movieService.getMoviesFromTitle(event.detail.value).subscribe( movies => {
      this.addMoviesToList(Object.values(movies).filter(movies => movies[0]));
    });
  }

  filterResults(search){
    return Object.values(search).filter(search => search[0]);
  }

  addMoviesToList(movie){
      this.moviesList.push(movie);
  }
}