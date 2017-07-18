import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {
  @Input() selected: boolean;
  @Input() item: Flight;

  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() {
    console.debug('ctor', this.item, this.selected);
  }

  select() {
    this.selected = true;
    this.selectedChange.next(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(this.selected);
  }

  ngOnInit() {
    console.debug('ngOnInit', this.item, this.selected);

    this.selectedChange.next(true);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('ngOnChanges', this.item, this.selected);
    if (changes['selected']) {
      console.debug('\tselected changed!');
    }
    if (changes['item']) {
      console.debug('\titem changed!');
    }
  }

  ngOnDestroy(): void {
    console.debug('ngOnDestroy', this.item, this.selected);
  }


}
