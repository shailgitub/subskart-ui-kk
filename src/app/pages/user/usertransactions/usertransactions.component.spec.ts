import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertransactionsComponent } from './usertransactions.component';

describe('UsertransactionsComponent', () => {
  let component: UsertransactionsComponent;
  let fixture: ComponentFixture<UsertransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsertransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
