import { Component } from '@angular/core';
import { Flight } from '../../entities/flight';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: []
})
export class FlightSearchComponent {

  from: string;
  to: string;
  // flights: Array<Flight> = [];
  selectedFlight: Flight;

  get flights(): Array<Flight> {
    return this.flightService.flights;
  }

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

    if (!this.from || !this.to) return;

    this.flightService.find(this.from, this.to);

  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
