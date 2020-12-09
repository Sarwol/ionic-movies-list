import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APIObject } from '../interfaces/APIObject';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private key = "apikey=acbef3ee"
  private url = "http://www.omdbapi.com/";
  private type = "type=movie";
  private path;

  constructor(private http: HttpClient) { }

  getResponseFromTitle(title): Observable<APIObject>{
    this.path = this.url + '/?s=' + title + '&' + this.key + '&' + this.type;
    return this.http.get<APIObject>(this.path);
  }

  getMovieByID(id) : Observable<Movie>{
    this.path = this.url + '/?i=' + id + '&' + this.key;
    return this.http.get<Movie>(this.path);
  }
}
