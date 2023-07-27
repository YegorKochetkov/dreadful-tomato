import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';

import { SearchFilterComponent } from '../search-filter/search-filter.component';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    CommonModule,
    CalendarModule,
    ReactiveFormsModule,
    InputTextModule,
    SearchFilterComponent,
  ],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Input() isShown = false;
  isCalendarOpened = false;

  filtersForm = new FormGroup({
    searchFilter: new FormControl(''),
    yearFilter: new FormControl<Date | null>(null),
  });

  focusOnInput(input: HTMLInputElement) {
    input.focus();
  }

  getClassOf() {
    if (this.isCalendarOpened) {
      return 'calendar-opened';
    }
    return '';
  }

  setIsCalendarOpened(value: boolean) {
    this.isCalendarOpened = value;
  }
  // TODO: add query to url (on submit only?)
  log1() {
    console.log('on form submit', this.filtersForm.value);
  }
  log2() {
    console.log('on form change', this.filtersForm.value);
  }
  log4() {
    console.log('on close', this.filtersForm.controls.yearFilter.value);
  }
  log5() {
    console.log('on clear', this.filtersForm.controls.yearFilter.value);
  }
}
