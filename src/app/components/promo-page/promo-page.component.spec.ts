import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoPageComponent } from './promo-page.component';

describe('PromoPageComponent', () => {
  let component: PromoPageComponent;
  let fixture: ComponentFixture<PromoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PromoPageComponent]
    });
    fixture = TestBed.createComponent(PromoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
