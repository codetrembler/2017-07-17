import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: 'input[city]', // <input ... city="A,B,C" ...>
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidationDirective,
      multi: true
    }
  ]
})
export class CityValidationDirective implements Validator{

  @Input() city: string;

  validate(c: AbstractControl): object {

    let validCities = this.city.split(',');

    let currentCity = c.value;

    if (validCities.indexOf(currentCity) > -1) {
      return {};
    }

    return {
      city: {
        actualValue: currentCity,
        allowedValues: validCities,
        reason: 42,
        tryAgain: 2019
      }
    }

  }


  constructor() { }

}
