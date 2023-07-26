import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { Moment, default as _rollupMoment } from 'moment';

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatDateFormats,
} from '@angular/material/core';
import {
  MatCalendar,
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subject, takeUntil } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'YYYY',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-year-picker',
  templateUrl: 'year-picker.component.html',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class YearPickerComponent {
  date = new FormControl(moment(null));
  header = YearPickerHeader;

  log() {
    console.log(this.date.value);
  }

  openDatepickerOnClick(datepicker: { opened: any; open: () => void }) {
    if (!datepicker.opened) {
      datepicker.open();
    }
  }

  openDatepickerOnFocus<D>(datepicker: MatDatepicker<D>) {
    if (!datepicker.opened) {
      datepicker.open();
    }
  }

  yearSelectedHandler(
    normalizedMonthAndYear: Moment,
    datepicker: MatDatepicker<Moment>
  ) {
    const selectedYear = normalizedMonthAndYear.year();
    const ctrlValue = moment([selectedYear, 1, 1]);

    this.date.setValue(ctrlValue);
    datepicker.close();
  }
}

/** Custom header component for datepicker. */
@Component({
  selector: 'app-year-picker-header',
  styles: [
    `
      .header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        background-color: #cb271b;
      }

      .header-label {
        margin-inline: 1em;
        font-weight: 500;
        text-align: center;
        color: #fff;
      }

      mat-icon {
        color: #fff;
      }
    `,
  ],
  template: `
    <div class="header">
      <button mat-icon-button (click)="previousClicked('year')">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <span class="header-label">{{ periodLabel }}</span>
      <button mat-icon-button (click)="nextClicked('year')">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatIconModule],
})
export class YearPickerHeader<D> implements OnDestroy {
  private _destroyed = new Subject<void>();

  constructor(
    private _calendar: MatCalendar<D>,
    private _dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef
  ) {
    _calendar.stateChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  get periodLabel() {
    return this._dateAdapter
      .format(
        this._calendar.activeDate,
        this._dateFormats.display.monthYearLabel
      )
      .toLocaleUpperCase();
  }

  previousClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
  }

  nextClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
  }
}
