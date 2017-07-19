
import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { PassengerSearchComponent } from './flight-booking/passenger-search/passenger-search.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  /*
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'passenger-search',
    component: PassengerSearchComponent
  },
  */
  {
    path: '**',
    redirectTo: 'home'
  },
];
