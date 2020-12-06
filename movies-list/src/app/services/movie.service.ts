import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Movie } from './../interfaces/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private key = "apikey=acbef3ee"
  private api = "http://www.omdbapi.com/";
  private type = "type=movie";

  constructor(private http: HttpClient) { }

  hola(title){
    console.log(title);
  }

  getMoviesFromTitle(title){
    const path = this.api + '/?s=' + title + '&' + this.key;
    return this.http.get(path);
  }
}
