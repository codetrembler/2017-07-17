import { Pipe, PipeTransform } from '@angular/core';
import { FlightService } from '../../flight-booking/flight-search/flight.service';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  /*
  constructor(flightService: FlightService) {
  }
  */
  transform(value: any, fmt: string) {
    let short, long;

    switch(value) {
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
        break;
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Düsseldorf':
        short = 'DUS';
        long = 'Airport Düsseldorf International';
        break;
      default:
        short = long = 'ROM';
    }

    if (fmt == 'short') return short;
    return long;
  }


}
