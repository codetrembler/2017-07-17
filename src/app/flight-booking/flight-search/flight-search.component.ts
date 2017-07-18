import { Component } from '@angular/core';
import { Flight } from '../entities/flight';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  providers: [FlightService]
})
export class FlightSearchComponent {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  //private http: Http;
  constructor(private flightService: FlightService) {
    console.debug('Liebsgrüße aus dem Konstruktor!');
  }

  search(): void {

    this.flightService
      .find(this.from, this.to)
      .subscribe(
        (flights) => {
          this.flights = flights;
        },
        (errResp) => {
          console.error('Fehler beim Laden', errResp);
        }
      );



  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
