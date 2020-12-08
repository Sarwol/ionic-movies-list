import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  moviesList: Movie[];

  constructor(private movieService : MovieService) { }

  ngOnInit() {
  }

  onSearch(event) {
    this.movieService.getResponseFromTitle(event.detail.value).subscribe( response => {
      this.moviesList = response.Search;
      console.log(this.moviesList);
    });
  }
}