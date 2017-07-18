import { Component } from '@angular/core';
import { Flight } from '../../entities/flight';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [FlightService]
})
export class FlightSearchComponent {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  basket: object = {
    "3": true,
    "4": false,
    "5": true
  };

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
