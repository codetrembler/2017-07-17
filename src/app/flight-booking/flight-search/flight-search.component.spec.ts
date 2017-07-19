
import { async, TestBed } from '@angular/core/testing';
import { FlightBookingModule } from '../flight-booking.module';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { FlightSearchComponent } from './flight-search.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpModule } from '@angular/http';
import { BASE_URL } from '../../app.tokens';
import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

let flightServiceMock = {
  find(from: string, to: string): Observable<Flight[]> {
    return Observable.of([
      { id: 4711, from: 'A', to: 'B', date: 'jetzt' },
      { id: 4712, from: 'A', to: 'B', date: 'jetzt' },
      { id: 4713, from: 'A', to: 'B', date: 'jetzt' },
      { id: 4713, from: 'A', to: 'B', date: 'jetzt' }
    ]);
  }
}

describe('FlightSearchComponent', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        FlightBookingModule
      ],
      declarations: [
      ],
      providers: [
        {
          provide: BASE_URL,
          useValue: 'http://www.angular.at/api'
        }
      ]
    }).compileComponents();

    TestBed.overrideComponent(FlightSearchComponent, {
      set: {
        providers: [
          {
            provide: FlightService,
            useValue: flightServiceMock
          }
        ]
      }
    }).compileComponents();
  }))

  it('should have no loaded flights initially', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fixture.componentInstance;

    expect(comp.flights.length).toBe(0);
  })

  it('should not load flights w/o from and to', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fixture.componentInstance;

    comp.from = '';
    comp.to = '';
    comp.search();

    expect(comp.flights.length).toBe(0);

  })

  it('should load flights w/ from and to', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fixture.componentInstance;

    comp.from = 'Hamburg';
    comp.to = 'Graz';
    comp.search();

    expect(comp.flights.length).toBe(4);


  })

});
