import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearPickerComponent } from './year-picker.component';

describe('YearPickerComponent', () => {
  let component: YearPickerComponent;
  let fixture: ComponentFixture<YearPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YearPickerComponent],
    });
    fixture = TestBed.createComponent(YearPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// yearSelectedHandler(chosenDate: any, datepicker: MatDatepicker<string>) {
//   const year = new Date(chosenDate).getFullYear().toString();
//   this.label = year;
//   this.dateForm?.controls.yearFilter.setValue(chosenDate);
//   console.log(chosenDate);
//   datepicker.close();
// }
