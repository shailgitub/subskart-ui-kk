import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaynowoptionComponent } from './paynowoption.component';

describe('PaynowoptionComponent', () => {
  let component: PaynowoptionComponent;
  let fixture: ComponentFixture<PaynowoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaynowoptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaynowoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
