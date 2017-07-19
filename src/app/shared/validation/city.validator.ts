
import { AbstractControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FlightService } from '../../flight-booking/flight-search/flight.service';

export function validateCity(c: AbstractControl) {

  if (c.value == 'Graz' || c.value == 'Hamburg' || c.value == 'Gotham') {
    return { };
  }
  return {
    city: true
  }
}


export function validateCityWithParams(allowedCities: string[]) {
  return (c: AbstractControl) => {

    if (allowedCities.indexOf(c.value) > -1) {
      return {};
    }
    return {
      cityWithParams: true
    }
  }
}


export function validateRoundtrips(c: AbstractControl) {
  let formGroup = c as FormGroup;

  let isSame =
    formGroup.controls['from'].value == formGroup.controls['to'].value;

  if (isSame) return {
    roundTrip: true
  }

  return { }
}

export function validateCityAsync(flightService: FlightService){

  return (c: AbstractControl): Observable<object>  => {

    return flightService
      .find(c.value, '')
      .catch(err=> [])
      .map(flights => flights.length)
      .map(l => (l > 0) ? {} : {asyncCity: true} );
  }

}
