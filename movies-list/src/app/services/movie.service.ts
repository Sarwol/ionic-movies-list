import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APIObject } from '../interfaces/APIObject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private key = "apikey=acbef3ee"
  private api = "http://www.omdbapi.com/";
  private type = "type=movie";
  
  constructor(private http: HttpClient) { }

  getResponseFromTitle(title): Observable<APIObject>{
    let path = this.api + '/?s=' + title + '&' + this.key + '&' + this.type;
    return this.http.get<APIObject>(path);
  }
}
