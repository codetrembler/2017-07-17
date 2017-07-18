import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { CityValidationDirective } from './validation/city-validation.directive';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
    CityValidationDirective
  ],
  exports: [
    CityPipe,
    CityValidationDirective
  ]
})
export class SharedModule {
}
