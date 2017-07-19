import { Component } from '@angular/core';
import { Flight } from '../../entities/flight';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { FlightService } from '../flight-search/flight.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-flight-search',
  templateUrl: './reactive-flight-search.component.html',
  styleUrls: ['./reactive-flight-search.component.css'],
  providers: [FlightService]
})
export class ReactiveFlightSearchComponent {

  flights: Array<Flight> = [];
  selectedFlight: Flight;
  formsMetadata = [

  ];

  filter: FormGroup;

  basket: object = {
    "3": true,
    "4": false,
    "5": true
  };

  //private http: Http;
  constructor(
    private fb: FormBuilder,
    private flightService: FlightService) {
    console.debug('Liebsgrüße aus dem Konstruktor!');

    this.filter = fb.group({
      'from': [
        'Hamburg',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      'to': ['Graz']
    });

    let sub = this.filter.valueChanges.subscribe(formValue => {
      console.debug('form changed', formValue);
    });

    this.filter.controls['from'].valueChanges.subscribe(value => {
      console.debug('field changed', value);
    });

    this.filter.controls['from'].setValue('Graz');
    this.filter.controls['to'].setValue('Hamburg');


  }

  search(): void {

    let value = this.filter.value;

    this.flightService
      .find(value.from, value.to)
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
