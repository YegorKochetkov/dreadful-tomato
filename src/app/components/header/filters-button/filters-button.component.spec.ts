import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersButtonComponent } from './filters-button.component';

describe('NavbarFiltersComponent', () => {
  let component: FiltersButtonComponent;
  let fixture: ComponentFixture<FiltersButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FiltersButtonComponent],
    });
    fixture = TestBed.createComponent(FiltersButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
