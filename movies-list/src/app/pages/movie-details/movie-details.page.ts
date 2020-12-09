import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  movieSelected: Movie;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    let imdbID = this.activatedRoute.snapshot.paramMap.get('imdbID');

    this.movieService.getMovieByID(imdbID).subscribe(result => {
      this.movieSelected = result;
      console.log(imdbID);
      console.log(this.movieSelected);
    })
  }
}
