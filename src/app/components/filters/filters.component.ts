import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';

import { SearchFilterComponent } from '../ui/search-filter/search-filter.component';
import { MoviesService } from 'src/app/services/movies/movies.service';

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
export class FiltersComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  @Input() isOpen = false;
  isCalendarOpened = false;

  filtersForm = new FormGroup({
    searchFilter: new FormControl<string | null>(null),
    yearFilter: new FormControl<Date | null>(null),
  });

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const year = params['year'];
      const query = params['query'];
      const yearFilter = year ? new Date(year) : null;
      const searchFilter = query ? (query as string) : null;

      this.filtersForm.setValue({
        searchFilter,
        yearFilter,
      });

      this.moviesService.setFilters({
        yearFilter: yearFilter?.getFullYear() || null,
        searchFilter,
      });
    });
  }

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

  onSubmit() {
    const yearFilter =
      this.filtersForm.controls.yearFilter.value?.getFullYear() || null;
    const searchFilter =
      this.filtersForm.controls.searchFilter.value?.trim() || null;

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { query: searchFilter, year: yearFilter },
      queryParamsHandling: 'merge',
    });

    this.moviesService.setFilters({ searchFilter, yearFilter });
  }

  onYearPick() {
    this.onSubmit();
  }
}
