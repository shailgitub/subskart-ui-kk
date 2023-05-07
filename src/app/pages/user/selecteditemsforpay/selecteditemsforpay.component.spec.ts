import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecteditemsforpayComponent } from './selecteditemsforpay.component';

describe('SelecteditemsforpayComponent', () => {
  let component: SelecteditemsforpayComponent;
  let fixture: ComponentFixture<SelecteditemsforpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecteditemsforpayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecteditemsforpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
