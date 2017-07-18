import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { BASE_URL } from '../../app.tokens';

@Injectable()
export class FlightService {

  constructor(
      @Inject(BASE_URL) private baseUrl: string,
      private http: Http) {
    console.debug('Liebsgrüße aus dem Konstruktor!');
  }

  find(from: string, to: string): Observable<Flight[]> {
    let url = this.baseUrl + '/flight';

    let search = new URLSearchParams();
    search.set('from', from);
    search.set('to', to);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
            .http
            .get(url, { search, headers}) // Response?
            .map(resp => resp.json());
  }
}
